'use strict';

const _ = require('lodash');
const Sequelize = require('sequelize');
const dict = require('../../utils/graphql-sequelize-types');
const searchArg = require('../../utils/search-argument');
const globals = require('../../config/globals');
const validatorUtil = require('../../utils/validatorUtil');
const helpersAcl = require('../../utils/helpers-acl');
const email = require('../../utils/email');
const fs = require('fs');
const path = require('path');
const os = require('os');
const uuidv4 = require('uuidv4').uuid;
const helper = require('../../utils/helper');
const models = require(path.join(__dirname, '..', 'index.js'));
const moment = require('moment');
const errorHelper = require('../../utils/errors');
// An exact copy of the the model definition that comes from the .json file
const definition = {
    model: 'annotations_geom',
    storageType: 'sql',
    attributes: {
        file_id: 'Int',
        user_id: 'Int',
        annotation_method_id: 'Int',
        observation_type: 'String',
        confidence: 'Float',
        pipeline_id: 'Int',
        geometry: 'Polygon',
        video_frame_num: 'Int',
        is_setup_or_pickup: 'Boolean',
        taxon_id: 'String',
        count: 'Int',
        life_stage: 'String',
        sex: 'String',
        behaviour: 'String',
        individual_id: 'String',
        comments: 'String',
        updatedAt: 'DateTime',
        createdAt: 'DateTime'
    },
    associations: {
        fileToGeom: {
            type: 'many_to_one',
            implementation: 'foreignkeys',
            reverseAssociation: 'file_annotations_geom',
            target: 'file',
            targetKey: 'file_id',
            keysIn: 'annotations_geom',
            targetStorageType: 'sql'
        },
        userToGeom: {
            type: 'many_to_one',
            implementation: 'foreignkeys',
            reverseAssociation: 'user_annotations_geom',
            target: 'user',
            targetKey: 'user_id',
            keysIn: 'annotations_geom',
            targetStorageType: 'sql'
        },
        annotationMethodGeom: {
            type: 'many_to_one',
            implementation: 'foreignkeys',
            reverseAssociation: 'geomAnn',
            target: 'annotations_method',
            targetKey: 'annotation_method_id',
            keysIn: 'annotations_geom',
            targetStorageType: 'sql'
        },
        pipeline_annotation_geom: {
            type: 'many_to_one',
            implementation: 'foreignkeys',
            reverseAssociation: 'annotationsGeom',
            target: 'pipeline_info',
            targetKey: 'pipeline_id',
            keysIn: 'annotations_geom',
            targetStorageType: 'sql'
        }
    },
    id: {
        name: 'id',
        type: 'Int'
    }
};
const DataLoader = require("dataloader");

/**
 * module - Creates a sequelize model
 */

module.exports = class annotations_geom extends Sequelize.Model {
    /**
     * Initialize sequelize model.
     * @param  {object} sequelize Sequelize instance.
     * @param  {object} DataTypes Allowed sequelize data types.
     * @return {object}           Sequelize model with associations defined
     */
    static init(sequelize, DataTypes) {
        return super.init({

            file_id: {
                type: Sequelize[dict['Int']]
            },
            user_id: {
                type: Sequelize[dict['Int']]
            },
            annotation_method_id: {
                type: Sequelize[dict['Int']]
            },
            observation_type: {
                type: Sequelize[dict['String']]
            },
            confidence: {
                type: Sequelize[dict['Float']]
            },
            pipeline_id: {
                type: Sequelize[dict['Int']]
            },
            geometry: {
                type: Sequelize[dict['Polygon']]
            },
            video_frame_num: {
                type: Sequelize[dict['Int']]
            },
            is_setup_or_pickup: {
                type: Sequelize[dict['Boolean']]
            },
            taxon_id: {
                type: Sequelize[dict['String']]
            },
            count: {
                type: Sequelize[dict['Int']]
            },
            life_stage: {
                type: Sequelize[dict['String']]
            },
            sex: {
                type: Sequelize[dict['String']]
            },
            behaviour: {
                type: Sequelize[dict['String']]
            },
            individual_id: {
                type: Sequelize[dict['String']]
            },
            comments: {
                type: Sequelize[dict['String']]
            },
            updatedAt: {
                type: Sequelize[dict['DateTime']]
            },
            createdAt: {
                type: Sequelize[dict['DateTime']]
            }


        }, {
            modelName: "annotations_geom",
            tableName: "annotations_geoms",
            sequelize
        });
    }

    /**
     * Get the storage handler, which is a static property of the data model class.
     * @returns sequelize.
     */
    get storageHandler() {
        return this.sequelize;
    }

    /**
     * Cast array to JSON string for the storage.
     * @param  {object} record  Original data record.
     * @return {object}         Record with JSON string if necessary.
     */
    static preWriteCast(record) {
        for (let attr in definition.attributes) {
            let type = definition.attributes[attr].replace(/\s+/g, '');
            if (type[0] === '[' && record[attr] !== undefined && record[attr] !== null) {
                record[attr] = JSON.stringify(record[attr]);
            }
        }
        return record;
    }

    /**
     * Cast JSON string to array for the validation.
     * @param  {object} record  Record with JSON string if necessary.
     * @return {object}         Parsed data record.
     */
    static postReadCast(record) {
        for (let attr in definition.attributes) {
            let type = definition.attributes[attr].replace(/\s+/g, '');
            if (type[0] === '[' && record[attr] !== undefined && record[attr] !== null) {
                record[attr] = JSON.parse(record[attr]);
            }
        }
        return record;
    }

    /**
     * Associate models.
     * @param  {object} models  Indexed models.
     */
    static associate(models) {
        annotations_geom.belongsTo(models.file, {
            as: 'fileToGeom',
            foreignKey: 'file_id'
        });
        annotations_geom.belongsTo(models.user, {
            as: 'userToGeom',
            foreignKey: 'user_id'
        });
        annotations_geom.belongsTo(models.annotations_method, {
            as: 'annotationMethodGeom',
            foreignKey: 'annotation_method_id'
        });
        annotations_geom.belongsTo(models.pipeline_info, {
            as: 'pipeline_annotation_geom',
            foreignKey: 'pipeline_id'
        });
    }

    /**
     * Batch function for readById method.
     * @param  {array} keys  keys from readById method
     * @return {array}       searched results
     */
    static async batchReadById(keys) {
        let queryArg = {
            operator: "in",
            field: annotations_geom.idAttribute(),
            value: keys.join(),
            valueType: "Array",
        };
        let cursorRes = await annotations_geom.readAllCursor(queryArg);
        cursorRes = cursorRes.annotations_geoms.reduce(
            (map, obj) => ((map[obj[annotations_geom.idAttribute()]] = obj), map), {}
        );
        return keys.map(
            (key) =>
            cursorRes[key] || new Error(`Record with ID = "${key}" does not exist`)
        );
    }

    static readByIdLoader = new DataLoader(annotations_geom.batchReadById, {
        cache: false,
    });

    /**
     * readById - The model implementation for reading a single record given by its ID
     *
     * Read a single record by a given ID
     * @param {string} id - The ID of the requested record
     * @return {object} The requested record as an object with the type annotations_geom, or an error object if the validation after reading fails
     * @throws {Error} If the requested record does not exist
     */
    static async readById(id) {
        return await annotations_geom.readByIdLoader.load(id);
    }
    /**
     * countRecords - The model implementation for counting the number of records, possibly restricted by a search term
     *
     * This method is the implementation for counting the number of records that fulfill a given condition, or for all records in the table.
     * @param {object} search - The search term that restricts the set of records to be counted - if undefined, all records in the table
     * @param {BenignErrorReporter} benignErrorReporter can be used to generate the standard
     * @return {number} The number of records that fulfill the condition, or of all records in the table
     */
    static async countRecords(search) {
        let options = {}
        options['where'] = helper.searchConditionsToSequelize(search, annotations_geom.definition.attributes);
        return super.count(options);
    }

    /**
     * readAll - The model implementation for searching for records in MongoDB. This method uses limit-offset-based pagination.
     *
     * @param  {object} search - Search argument for filtering records
     * @param  {array} order - Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination - Offset and limit to get the records from and to respectively
     * @param  {BenignErrorReporter} - benignErrorReporter can be used to generate the standard
     * @return {array}  Array of records holding conditions specified by search, order and pagination argument
     */
    static async readAll(search, order, pagination, benignErrorReporter) {
        // build the sequelize options object for limit-offset-based pagination
        let options = helper.buildLimitOffsetSequelizeOptions(search, order, pagination, this.idAttribute(), annotations_geom.definition.attributes);
        let records = await super.findAll(options);
        records = records.map(x => annotations_geom.postReadCast(x))
        // validationCheck after read
        return validatorUtil.bulkValidateData('validateAfterRead', this, records, benignErrorReporter);
    }

    /**
     * readAllCursor - The model implementation for searching for records. This method uses cursor based pagination.
     *
     * @param {object} search - The search condition for which records shall be fetched
     * @param  {array} order - Type of sorting (ASC, DESC) for each field
     * @param {object} pagination - The parameters for pagination, which can be used to get a subset of the requested record set.
     * @param {BenignErrorReporter} benignErrorReporter can be used to generate the standard
     * @return {object} The set of records, possibly constrained by pagination, with full cursor information for all records
     */
    static async readAllCursor(search, order, pagination, benignErrorReporter) {
        // build the sequelize options object for cursor-based pagination
        let options = helper.buildCursorBasedSequelizeOptions(search, order, pagination, this.idAttribute(), annotations_geom.definition.attributes);
        let records = await super.findAll(options);

        records = records.map(x => annotations_geom.postReadCast(x))

        // validationCheck after read
        records = await validatorUtil.bulkValidateData('validateAfterRead', this, records, benignErrorReporter);
        // get the first record (if exists) in the opposite direction to determine pageInfo.
        // if no cursor was given there is no need for an extra query as the results will start at the first (or last) page.
        let oppRecords = [];
        if (pagination && (pagination.after || pagination.before)) {
            let oppOptions = helper.buildOppositeSearchSequelize(search, order, {
                ...pagination,
                includeCursor: false
            }, this.idAttribute(), annotations_geom.definition.attributes);
            oppRecords = await super.findAll(oppOptions);
        }
        // build the graphql Connection Object
        let edges = helper.buildEdgeObject(records);
        let pageInfo = helper.buildPageInfo(edges, oppRecords, pagination);
        return {
            edges,
            pageInfo,
            annotations_geoms: edges.map((edge) => edge.node)
        };
    }

    /**
     * addOne - The model implementation method for adding a record.
     *
     * @param {object} input - The input object.
     * @return {object} The created record 
     * @throw {Error} If the process fails, an error is thrown
     */
    static async addOne(input) {
        //validate input
        await validatorUtil.validateData('validateForCreate', this, input);
        input = annotations_geom.preWriteCast(input)
        try {
            const result = await this.sequelize.transaction(async (t) => {
                let item = await super.create(input, {
                    transaction: t
                });
                return item;
            });
            annotations_geom.postReadCast(result.dataValues)
            annotations_geom.postReadCast(result._previousDataValues)
            return result;
        } catch (error) {
            throw error;
        }

    }

    /**
     * deleteOne - The model implementation for deleting a single record, given by its ID.
     *
     * @param {string} id - The ID of the record to be deleted
     * @returns {string} A success message is returned
     * @throw {Error} If the record could not be deleted - this means a record with the ID is still present
     */
    static async deleteOne(id) {
        //validate id
        await validatorUtil.validateData('validateForDelete', this, id);
        let destroyed = await super.destroy({
            where: {
                [this.idAttribute()]: id
            }
        });
        if (destroyed !== 0) {
            return 'Item successfully deleted';
        } else {
            throw new Error(`Record with ID = ${id} does not exist or could not been deleted`);
        }
    }

    /**
     * updateOne - The model implementation for updating a single record.
     *
     * @param {object} input - The input object.
     * @returns {object} The updated record
     * @throw {Error} If this method fails, an error is thrown
     */
    static async updateOne(input) {
        //validate input
        await validatorUtil.validateData('validateForUpdate', this, input);
        input = annotations_geom.preWriteCast(input)
        try {
            let result = await this.sequelize.transaction(async (t) => {
                let to_update = await super.findByPk(input[this.idAttribute()]);
                if (to_update === null) {
                    throw new Error(`Record with ID = ${input[this.idAttribute()]} does not exist`);
                }

                let updated = await to_update.update(input, {
                    transaction: t
                });
                return updated;
            });
            annotations_geom.postReadCast(result.dataValues)
            annotations_geom.postReadCast(result._previousDataValues)
            return result;
        } catch (error) {
            throw error;
        }
    }

    /**
     * csvTableTemplate - Allows the user to download a template in CSV format with the
     * properties and types of this model.
     *
     * @param {BenignErrorReporter} benignErrorReporter can be used to generate the standard
     * GraphQL output {error: ..., data: ...}. If the function reportError of the benignErrorReporter
     * is invoked, the server will include any so reported errors in the final response, i.e. the
     * GraphQL response will have a non empty errors property.
     */
    static async csvTableTemplate(benignErrorReporter) {
        return helper.csvTableTemplate(definition);
    }



    /**
     * add_file_id - field Mutation (model-layer) for to_one associationsArguments to add
     *
     * @param {Id}   id   IdAttribute of the root model to be updated
     * @param {Id}   file_id Foreign Key (stored in "Me") of the Association to be updated.
     * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors
     */
    static async add_file_id(id, file_id, benignErrorReporter) {
        try {
            let updated = await annotations_geom.update({
                file_id: file_id
            }, {
                where: {
                    id: id
                }
            });
            return updated[0];
        } catch (error) {
            benignErrorReporter.push({
                message: error
            });
        }
    }
    /**
     * add_user_id - field Mutation (model-layer) for to_one associationsArguments to add
     *
     * @param {Id}   id   IdAttribute of the root model to be updated
     * @param {Id}   user_id Foreign Key (stored in "Me") of the Association to be updated.
     * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors
     */
    static async add_user_id(id, user_id, benignErrorReporter) {
        try {
            let updated = await annotations_geom.update({
                user_id: user_id
            }, {
                where: {
                    id: id
                }
            });
            return updated[0];
        } catch (error) {
            benignErrorReporter.push({
                message: error
            });
        }
    }
    /**
     * add_annotation_method_id - field Mutation (model-layer) for to_one associationsArguments to add
     *
     * @param {Id}   id   IdAttribute of the root model to be updated
     * @param {Id}   annotation_method_id Foreign Key (stored in "Me") of the Association to be updated.
     * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors
     */
    static async add_annotation_method_id(id, annotation_method_id, benignErrorReporter) {
        try {
            let updated = await annotations_geom.update({
                annotation_method_id: annotation_method_id
            }, {
                where: {
                    id: id
                }
            });
            return updated[0];
        } catch (error) {
            benignErrorReporter.push({
                message: error
            });
        }
    }
    /**
     * add_pipeline_id - field Mutation (model-layer) for to_one associationsArguments to add
     *
     * @param {Id}   id   IdAttribute of the root model to be updated
     * @param {Id}   pipeline_id Foreign Key (stored in "Me") of the Association to be updated.
     * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors
     */
    static async add_pipeline_id(id, pipeline_id, benignErrorReporter) {
        try {
            let updated = await annotations_geom.update({
                pipeline_id: pipeline_id
            }, {
                where: {
                    id: id
                }
            });
            return updated[0];
        } catch (error) {
            benignErrorReporter.push({
                message: error
            });
        }
    }

    /**
     * remove_file_id - field Mutation (model-layer) for to_one associationsArguments to remove
     *
     * @param {Id}   id   IdAttribute of the root model to be updated
     * @param {Id}   file_id Foreign Key (stored in "Me") of the Association to be updated.
     * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors
     */
    static async remove_file_id(id, file_id, benignErrorReporter) {
        try {
            let updated = await annotations_geom.update({
                file_id: null
            }, {
                where: {
                    id: id,
                    file_id: file_id
                }
            });
            return updated[0];
        } catch (error) {
            benignErrorReporter.push({
                message: error
            });
        }
    }
    /**
     * remove_user_id - field Mutation (model-layer) for to_one associationsArguments to remove
     *
     * @param {Id}   id   IdAttribute of the root model to be updated
     * @param {Id}   user_id Foreign Key (stored in "Me") of the Association to be updated.
     * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors
     */
    static async remove_user_id(id, user_id, benignErrorReporter) {
        try {
            let updated = await annotations_geom.update({
                user_id: null
            }, {
                where: {
                    id: id,
                    user_id: user_id
                }
            });
            return updated[0];
        } catch (error) {
            benignErrorReporter.push({
                message: error
            });
        }
    }
    /**
     * remove_annotation_method_id - field Mutation (model-layer) for to_one associationsArguments to remove
     *
     * @param {Id}   id   IdAttribute of the root model to be updated
     * @param {Id}   annotation_method_id Foreign Key (stored in "Me") of the Association to be updated.
     * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors
     */
    static async remove_annotation_method_id(id, annotation_method_id, benignErrorReporter) {
        try {
            let updated = await annotations_geom.update({
                annotation_method_id: null
            }, {
                where: {
                    id: id,
                    annotation_method_id: annotation_method_id
                }
            });
            return updated[0];
        } catch (error) {
            benignErrorReporter.push({
                message: error
            });
        }
    }
    /**
     * remove_pipeline_id - field Mutation (model-layer) for to_one associationsArguments to remove
     *
     * @param {Id}   id   IdAttribute of the root model to be updated
     * @param {Id}   pipeline_id Foreign Key (stored in "Me") of the Association to be updated.
     * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors
     */
    static async remove_pipeline_id(id, pipeline_id, benignErrorReporter) {
        try {
            let updated = await annotations_geom.update({
                pipeline_id: null
            }, {
                where: {
                    id: id,
                    pipeline_id: pipeline_id
                }
            });
            return updated[0];
        } catch (error) {
            benignErrorReporter.push({
                message: error
            });
        }
    }





    /**
     * bulkAssociateAnnotations_geomWithFile_id - bulkAssociaton of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add
     * @param  {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
     * @return {string} returns message on success
     */
    static async bulkAssociateAnnotations_geomWithFile_id(bulkAssociationInput) {
        let mappedForeignKeys = helper.mapForeignKeysToPrimaryKeyArray(bulkAssociationInput, "id", "file_id");
        var promises = [];
        mappedForeignKeys.forEach(({
            file_id,
            id
        }) => {
            promises.push(super.update({
                file_id: file_id
            }, {
                where: {
                    id: id
                }
            }));
        })
        await Promise.all(promises);
        return "Records successfully updated!"
    }

    /**
     * bulkAssociateAnnotations_geomWithUser_id - bulkAssociaton of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add
     * @param  {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
     * @return {string} returns message on success
     */
    static async bulkAssociateAnnotations_geomWithUser_id(bulkAssociationInput) {
        let mappedForeignKeys = helper.mapForeignKeysToPrimaryKeyArray(bulkAssociationInput, "id", "user_id");
        var promises = [];
        mappedForeignKeys.forEach(({
            user_id,
            id
        }) => {
            promises.push(super.update({
                user_id: user_id
            }, {
                where: {
                    id: id
                }
            }));
        })
        await Promise.all(promises);
        return "Records successfully updated!"
    }

    /**
     * bulkAssociateAnnotations_geomWithAnnotation_method_id - bulkAssociaton of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add
     * @param  {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
     * @return {string} returns message on success
     */
    static async bulkAssociateAnnotations_geomWithAnnotation_method_id(bulkAssociationInput) {
        let mappedForeignKeys = helper.mapForeignKeysToPrimaryKeyArray(bulkAssociationInput, "id", "annotation_method_id");
        var promises = [];
        mappedForeignKeys.forEach(({
            annotation_method_id,
            id
        }) => {
            promises.push(super.update({
                annotation_method_id: annotation_method_id
            }, {
                where: {
                    id: id
                }
            }));
        })
        await Promise.all(promises);
        return "Records successfully updated!"
    }

    /**
     * bulkAssociateAnnotations_geomWithPipeline_id - bulkAssociaton of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add
     * @param  {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
     * @return {string} returns message on success
     */
    static async bulkAssociateAnnotations_geomWithPipeline_id(bulkAssociationInput) {
        let mappedForeignKeys = helper.mapForeignKeysToPrimaryKeyArray(bulkAssociationInput, "id", "pipeline_id");
        var promises = [];
        mappedForeignKeys.forEach(({
            pipeline_id,
            id
        }) => {
            promises.push(super.update({
                pipeline_id: pipeline_id
            }, {
                where: {
                    id: id
                }
            }));
        })
        await Promise.all(promises);
        return "Records successfully updated!"
    }


    /**
     * bulkDisAssociateAnnotations_geomWithFile_id - bulkDisAssociaton of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove
     * @param  {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
     * @return {string} returns message on success
     */
    static async bulkDisAssociateAnnotations_geomWithFile_id(bulkAssociationInput) {
        let mappedForeignKeys = helper.mapForeignKeysToPrimaryKeyArray(bulkAssociationInput, "id", "file_id");
        var promises = [];
        mappedForeignKeys.forEach(({
            file_id,
            id
        }) => {
            promises.push(super.update({
                file_id: null
            }, {
                where: {
                    id: id,
                    file_id: file_id
                }
            }));
        })
        await Promise.all(promises);
        return "Records successfully updated!"
    }

    /**
     * bulkDisAssociateAnnotations_geomWithUser_id - bulkDisAssociaton of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove
     * @param  {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
     * @return {string} returns message on success
     */
    static async bulkDisAssociateAnnotations_geomWithUser_id(bulkAssociationInput) {
        let mappedForeignKeys = helper.mapForeignKeysToPrimaryKeyArray(bulkAssociationInput, "id", "user_id");
        var promises = [];
        mappedForeignKeys.forEach(({
            user_id,
            id
        }) => {
            promises.push(super.update({
                user_id: null
            }, {
                where: {
                    id: id,
                    user_id: user_id
                }
            }));
        })
        await Promise.all(promises);
        return "Records successfully updated!"
    }

    /**
     * bulkDisAssociateAnnotations_geomWithAnnotation_method_id - bulkDisAssociaton of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove
     * @param  {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
     * @return {string} returns message on success
     */
    static async bulkDisAssociateAnnotations_geomWithAnnotation_method_id(bulkAssociationInput) {
        let mappedForeignKeys = helper.mapForeignKeysToPrimaryKeyArray(bulkAssociationInput, "id", "annotation_method_id");
        var promises = [];
        mappedForeignKeys.forEach(({
            annotation_method_id,
            id
        }) => {
            promises.push(super.update({
                annotation_method_id: null
            }, {
                where: {
                    id: id,
                    annotation_method_id: annotation_method_id
                }
            }));
        })
        await Promise.all(promises);
        return "Records successfully updated!"
    }

    /**
     * bulkDisAssociateAnnotations_geomWithPipeline_id - bulkDisAssociaton of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove
     * @param  {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
     * @return {string} returns message on success
     */
    static async bulkDisAssociateAnnotations_geomWithPipeline_id(bulkAssociationInput) {
        let mappedForeignKeys = helper.mapForeignKeysToPrimaryKeyArray(bulkAssociationInput, "id", "pipeline_id");
        var promises = [];
        mappedForeignKeys.forEach(({
            pipeline_id,
            id
        }) => {
            promises.push(super.update({
                pipeline_id: null
            }, {
                where: {
                    id: id,
                    pipeline_id: pipeline_id
                }
            }));
        })
        await Promise.all(promises);
        return "Records successfully updated!"
    }



    /**
     * idAttribute - Check whether an attribute "internalId" is given in the JSON model. If not the standard "id" is used instead.
     *
     * @return {type} Name of the attribute that functions as an internalId
     */
    static idAttribute() {
        return annotations_geom.definition.id.name;
    }

    /**
     * idAttributeType - Return the Type of the internalId.
     *
     * @return {type} Type given in the JSON model
     */
    static idAttributeType() {
        return annotations_geom.definition.id.type;
    }

    /**
     * getIdValue - Get the value of the idAttribute ("id", or "internalId") for an instance of annotations_geom.
     *
     * @return {type} id value
     */
    getIdValue() {
        return this[annotations_geom.idAttribute()];
    }

    /**
     * definition - Getter for the attribute 'definition'
     * @return {string} the definition string
     */
    static get definition() {
        return definition;
    }

    /**
     * base64Decode - Decode a base 64 String to UTF-8.
     * @param {string} cursor - The cursor to be decoded into the record, given in base 64
     * @return {string} The stringified object in UTF-8 format
     */
    static base64Decode(cursor) {
        return Buffer.from(cursor, "base64").toString("utf-8");
    }

    /**
     * base64Encode - Encode  annotations_geom to a base 64 String
     *
     * @return {string} The annotations_geom object, encoded in a base 64 String
     */
    base64Encode() {
        return Buffer.from(JSON.stringify(this.stripAssociations())).toString(
            "base64"
        );
    }

    /**
     * asCursor - alias method for base64Encode
     *
     * @return {string} The annotations_geom object, encoded in a base 64 String
     */
    asCursor() {
        return this.base64Encode()
    }

    /**
     * stripAssociations - Instance method for getting all attributes of annotations_geom.
     *
     * @return {object} The attributes of annotations_geom in object form
     */
    stripAssociations() {
        let attributes = Object.keys(annotations_geom.definition.attributes);
        attributes.push('id');
        let data_values = _.pick(this, attributes);
        return data_values;
    }

    /**
     * externalIdsArray - Get all attributes of annotations_geom that are marked as external IDs.
     *
     * @return {Array<String>} An array of all attributes of annotations_geom that are marked as external IDs
     */
    static externalIdsArray() {
        let externalIds = [];
        if (definition.externalIds) {
            externalIds = definition.externalIds;
        }

        return externalIds;
    }

    /**
     * externalIdsObject - Get all external IDs of annotations_geom.
     *
     * @return {object} An object that has the names of the external IDs as keys and their types as values
     */
    static externalIdsObject() {
        return {};
    }

}