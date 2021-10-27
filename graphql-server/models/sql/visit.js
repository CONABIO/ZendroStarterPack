'use strict';

const _ = require('lodash');
const Sequelize = require('sequelize');
const dict = require('../../utils/graphql-sequelize-types');
const searchArg = require('../../utils/search-argument');
const globals = require('../../config/globals');
const validatorUtil = require('../../utils/validatorUtil');
const fileTools = require('../../utils/file-tools');
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
    model: 'visit',
    storageType: 'sql',
    attributes: {
        user_id: 'Int',
        calendar_id: 'Int',
        comments: 'String',
        date_started_pristine: 'Date',
        date_finished_pristine: 'Date',
        date_started_disturbed: 'Date',
        date_finished_disturbed: 'Date',
        cumulus_id: 'Int',
        pristine_id: 'Int',
        disturbed_id: 'Int'
    },
    associations: {
        calendar: {
            type: 'many_to_one',
            implementation: 'foreignkeys',
            reverseAssociation: 'visits',
            target: 'calendar',
            targetKey: 'calendar_id',
            keysIn: 'visit',
            targetStorageType: 'sql'
        },
        deployments: {
            type: 'one_to_many',
            implementation: 'foreignkeys',
            reverseAssociation: 'visit_deployment',
            target: 'deployment',
            targetKey: 'visit_id',
            keysIn: 'deployment',
            targetStorageType: 'sql'
        },
        user_visit: {
            type: 'many_to_one',
            implementation: 'foreignkeys',
            reverseAssociation: 'visits',
            target: 'user',
            targetKey: 'user_id',
            keysIn: 'visit',
            targetStorageType: 'sql'
        },
        cumulus_visit: {
            type: 'many_to_one',
            implementation: 'foreignkeys',
            reverseAssociation: 'visits',
            target: 'cumulus',
            targetKey: 'cumulus_id',
            keysIn: 'visit',
            targetStorageType: 'sql'
        },
        unique_node_pristine: {
            type: 'one_to_one',
            implementation: 'foreignkeys',
            reverseAssociation: 'unique_visit_pristine',
            target: 'node',
            targetKey: 'pristine_id',
            keysIn: 'visit',
            targetStorageType: 'sql'
        },
        unique_node_disturbed: {
            type: 'one_to_one',
            implementation: 'foreignkeys',
            reverseAssociation: 'unique_visit_disturbed',
            target: 'node',
            targetKey: 'disturbed_id',
            keysIn: 'visit',
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

module.exports = class visit extends Sequelize.Model {
    /**
     * Initialize sequelize model.
     * @param  {object} sequelize Sequelize instance.
     * @param  {object} DataTypes Allowed sequelize data types.
     * @return {object}           Sequelize model with associations defined
     */
    static init(sequelize, DataTypes) {
        return super.init({

            user_id: {
                type: Sequelize[dict['Int']]
            },
            calendar_id: {
                type: Sequelize[dict['Int']]
            },
            comments: {
                type: Sequelize[dict['String']]
            },
            date_started_pristine: {
                type: Sequelize[dict['Date']]
            },
            date_finished_pristine: {
                type: Sequelize[dict['Date']]
            },
            date_started_disturbed: {
                type: Sequelize[dict['Date']]
            },
            date_finished_disturbed: {
                type: Sequelize[dict['Date']]
            },
            cumulus_id: {
                type: Sequelize[dict['Int']]
            },
            pristine_id: {
                type: Sequelize[dict['Int']]
            },
            disturbed_id: {
                type: Sequelize[dict['Int']]
            }


        }, {
            modelName: "visit",
            tableName: "visits",
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
        visit.belongsTo(models.calendar, {
            as: 'calendar',
            foreignKey: 'calendar_id'
        });
        visit.belongsTo(models.user, {
            as: 'user_visit',
            foreignKey: 'user_id'
        });
        visit.belongsTo(models.cumulus, {
            as: 'cumulus_visit',
            foreignKey: 'cumulus_id'
        });
        visit.belongsTo(models.node, {
            as: 'unique_node_pristine',
            foreignKey: 'pristine_id'
        });
        visit.belongsTo(models.node, {
            as: 'unique_node_disturbed',
            foreignKey: 'disturbed_id'
        });
        visit.hasMany(models.deployment, {
            as: 'deployments',
            foreignKey: 'visit_id'
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
            field: visit.idAttribute(),
            value: keys.join(),
            valueType: "Array",
        };
        let cursorRes = await visit.readAllCursor(queryArg);
        cursorRes = cursorRes.visits.reduce(
            (map, obj) => ((map[obj[visit.idAttribute()]] = obj), map), {}
        );
        return keys.map(
            (key) =>
            cursorRes[key] || new Error(`Record with ID = "${key}" does not exist`)
        );
    }

    static readByIdLoader = new DataLoader(visit.batchReadById, {
        cache: false,
    });

    /**
     * readById - The model implementation for reading a single record given by its ID
     *
     * Read a single record by a given ID
     * @param {string} id - The ID of the requested record
     * @return {object} The requested record as an object with the type visit, or an error object if the validation after reading fails
     * @throws {Error} If the requested record does not exist
     */
    static async readById(id) {
        return await visit.readByIdLoader.load(id);
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
        options['where'] = helper.searchConditionsToSequelize(search, visit.definition.attributes);
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
        //use default BenignErrorReporter if no BenignErrorReporter defined
        benignErrorReporter = errorHelper.getDefaultBenignErrorReporterIfUndef(benignErrorReporter);
        // build the sequelize options object for limit-offset-based pagination
        let options = helper.buildLimitOffsetSequelizeOptions(search, order, pagination, this.idAttribute(), visit.definition.attributes);
        let records = await super.findAll(options);
        records = records.map(x => visit.postReadCast(x))
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
        //use default BenignErrorReporter if no BenignErrorReporter defined
        benignErrorReporter = errorHelper.getDefaultBenignErrorReporterIfUndef(benignErrorReporter);

        // build the sequelize options object for cursor-based pagination
        let options = helper.buildCursorBasedSequelizeOptions(search, order, pagination, this.idAttribute(), visit.definition.attributes);
        let records = await super.findAll(options);

        records = records.map(x => visit.postReadCast(x))

        // validationCheck after read
        records = await validatorUtil.bulkValidateData('validateAfterRead', this, records, benignErrorReporter);
        // get the first record (if exists) in the opposite direction to determine pageInfo.
        // if no cursor was given there is no need for an extra query as the results will start at the first (or last) page.
        let oppRecords = [];
        if (pagination && (pagination.after || pagination.before)) {
            let oppOptions = helper.buildOppositeSearchSequelize(search, order, {
                ...pagination,
                includeCursor: false
            }, this.idAttribute(), visit.definition.attributes);
            oppRecords = await super.findAll(oppOptions);
        }
        // build the graphql Connection Object
        let edges = helper.buildEdgeObject(records);
        let pageInfo = helper.buildPageInfo(edges, oppRecords, pagination);
        return {
            edges,
            pageInfo,
            visits: edges.map((edge) => edge.node)
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
        input = visit.preWriteCast(input)
        try {
            const result = await this.sequelize.transaction(async (t) => {
                let item = await super.create(input, {
                    transaction: t
                });
                return item;
            });
            visit.postReadCast(result.dataValues)
            visit.postReadCast(result._previousDataValues)
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
        input = visit.preWriteCast(input)
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
            visit.postReadCast(result.dataValues)
            visit.postReadCast(result._previousDataValues)
            return result;
        } catch (error) {
            throw error;
        }
    }

    /**
     * bulkAddCsv - Add records from csv file
     *
     * @param  {object} context - contextual information, e.g. csv file, record delimiter and column names.
     */
    static bulkAddCsv(context) {

        let delim = context.request.body.delim;
        let cols = context.request.body.cols;
        let tmpFile = path.join(os.tmpdir(), uuidv4() + '.csv');

        context.request.files.csv_file.mv(tmpFile).then(() => {

            fileTools.parseCsvStream(tmpFile, this, delim, cols).then((addedZipFilePath) => {
                try {
                    console.log(`Sending ${addedZipFilePath} to the user.`);

                    let attach = [];
                    attach.push({
                        filename: path.basename("added_data.zip"),
                        path: addedZipFilePath
                    });

                    email.sendEmail(helpersAcl.getTokenFromContext(context).email,
                        'ScienceDB batch add',
                        'Your data has been successfully added to the database.',
                        attach).then(function(info) {
                        fileTools.deleteIfExists(addedZipFilePath);
                        console.log(info);
                    }).catch(function(err) {
                        fileTools.deleteIfExists(addedZipFilePath);
                        console.error(err);
                    });

                } catch (error) {
                    console.error(error.message);
                }

                fs.unlinkSync(tmpFile);
            }).catch((error) => {
                email.sendEmail(helpersAcl.getTokenFromContext(context).email,
                    'ScienceDB batch add', `${error.message}`).then(function(info) {
                    console.error(info);
                }).catch(function(err) {
                    console.error(err);
                });

                fs.unlinkSync(tmpFile);
            });



        }).catch((error) => {
            throw new Error(error);
        });

        return `Bulk import of visit records started. You will be send an email to ${helpersAcl.getTokenFromContext(context).email} informing you about success or errors`;
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
     * add_calendar_id - field Mutation (model-layer) for to_one associationsArguments to add
     *
     * @param {Id}   id   IdAttribute of the root model to be updated
     * @param {Id}   calendar_id Foreign Key (stored in "Me") of the Association to be updated.
     */
    static async add_calendar_id(id, calendar_id) {
        let updated = await visit.update({
            calendar_id: calendar_id
        }, {
            where: {
                id: id
            }
        });
        return updated;
    }
    /**
     * add_user_id - field Mutation (model-layer) for to_one associationsArguments to add
     *
     * @param {Id}   id   IdAttribute of the root model to be updated
     * @param {Id}   user_id Foreign Key (stored in "Me") of the Association to be updated.
     */
    static async add_user_id(id, user_id) {
        let updated = await visit.update({
            user_id: user_id
        }, {
            where: {
                id: id
            }
        });
        return updated;
    }
    /**
     * add_cumulus_id - field Mutation (model-layer) for to_one associationsArguments to add
     *
     * @param {Id}   id   IdAttribute of the root model to be updated
     * @param {Id}   cumulus_id Foreign Key (stored in "Me") of the Association to be updated.
     */
    static async add_cumulus_id(id, cumulus_id) {
        let updated = await visit.update({
            cumulus_id: cumulus_id
        }, {
            where: {
                id: id
            }
        });
        return updated;
    }
    /**
     * add_pristine_id - field Mutation (model-layer) for to_one associationsArguments to add
     *
     * @param {Id}   id   IdAttribute of the root model to be updated
     * @param {Id}   pristine_id Foreign Key (stored in "Me") of the Association to be updated.
     */
    static async add_pristine_id(id, pristine_id) {
        let updated = await visit.update({
            pristine_id: pristine_id
        }, {
            where: {
                id: id
            }
        });
        return updated;
    }
    /**
     * add_disturbed_id - field Mutation (model-layer) for to_one associationsArguments to add
     *
     * @param {Id}   id   IdAttribute of the root model to be updated
     * @param {Id}   disturbed_id Foreign Key (stored in "Me") of the Association to be updated.
     */
    static async add_disturbed_id(id, disturbed_id) {
        let updated = await visit.update({
            disturbed_id: disturbed_id
        }, {
            where: {
                id: id
            }
        });
        return updated;
    }

    /**
     * remove_calendar_id - field Mutation (model-layer) for to_one associationsArguments to remove
     *
     * @param {Id}   id   IdAttribute of the root model to be updated
     * @param {Id}   calendar_id Foreign Key (stored in "Me") of the Association to be updated.
     */
    static async remove_calendar_id(id, calendar_id) {
        let updated = await visit.update({
            calendar_id: null
        }, {
            where: {
                id: id,
                calendar_id: calendar_id
            }
        });
        return updated;
    }
    /**
     * remove_user_id - field Mutation (model-layer) for to_one associationsArguments to remove
     *
     * @param {Id}   id   IdAttribute of the root model to be updated
     * @param {Id}   user_id Foreign Key (stored in "Me") of the Association to be updated.
     */
    static async remove_user_id(id, user_id) {
        let updated = await visit.update({
            user_id: null
        }, {
            where: {
                id: id,
                user_id: user_id
            }
        });
        return updated;
    }
    /**
     * remove_cumulus_id - field Mutation (model-layer) for to_one associationsArguments to remove
     *
     * @param {Id}   id   IdAttribute of the root model to be updated
     * @param {Id}   cumulus_id Foreign Key (stored in "Me") of the Association to be updated.
     */
    static async remove_cumulus_id(id, cumulus_id) {
        let updated = await visit.update({
            cumulus_id: null
        }, {
            where: {
                id: id,
                cumulus_id: cumulus_id
            }
        });
        return updated;
    }
    /**
     * remove_pristine_id - field Mutation (model-layer) for to_one associationsArguments to remove
     *
     * @param {Id}   id   IdAttribute of the root model to be updated
     * @param {Id}   pristine_id Foreign Key (stored in "Me") of the Association to be updated.
     */
    static async remove_pristine_id(id, pristine_id) {
        let updated = await visit.update({
            pristine_id: null
        }, {
            where: {
                id: id,
                pristine_id: pristine_id
            }
        });
        return updated;
    }
    /**
     * remove_disturbed_id - field Mutation (model-layer) for to_one associationsArguments to remove
     *
     * @param {Id}   id   IdAttribute of the root model to be updated
     * @param {Id}   disturbed_id Foreign Key (stored in "Me") of the Association to be updated.
     */
    static async remove_disturbed_id(id, disturbed_id) {
        let updated = await visit.update({
            disturbed_id: null
        }, {
            where: {
                id: id,
                disturbed_id: disturbed_id
            }
        });
        return updated;
    }





    /**
     * bulkAssociateVisitWithCalendar_id - bulkAssociaton of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add
     * @param  {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
     * @return {string} returns message on success
     */
    static async bulkAssociateVisitWithCalendar_id(bulkAssociationInput) {
        let mappedForeignKeys = helper.mapForeignKeysToPrimaryKeyArray(bulkAssociationInput, "id", "calendar_id");
        var promises = [];
        mappedForeignKeys.forEach(({
            calendar_id,
            id
        }) => {
            promises.push(super.update({
                calendar_id: calendar_id
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
     * bulkAssociateVisitWithUser_id - bulkAssociaton of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add
     * @param  {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
     * @return {string} returns message on success
     */
    static async bulkAssociateVisitWithUser_id(bulkAssociationInput) {
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
     * bulkAssociateVisitWithCumulus_id - bulkAssociaton of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add
     * @param  {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
     * @return {string} returns message on success
     */
    static async bulkAssociateVisitWithCumulus_id(bulkAssociationInput) {
        let mappedForeignKeys = helper.mapForeignKeysToPrimaryKeyArray(bulkAssociationInput, "id", "cumulus_id");
        var promises = [];
        mappedForeignKeys.forEach(({
            cumulus_id,
            id
        }) => {
            promises.push(super.update({
                cumulus_id: cumulus_id
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
     * bulkAssociateVisitWithPristine_id - bulkAssociaton of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add
     * @param  {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
     * @return {string} returns message on success
     */
    static async bulkAssociateVisitWithPristine_id(bulkAssociationInput) {
        let mappedForeignKeys = helper.mapForeignKeysToPrimaryKeyArray(bulkAssociationInput, "id", "pristine_id");
        var promises = [];
        mappedForeignKeys.forEach(({
            pristine_id,
            id
        }) => {
            promises.push(super.update({
                pristine_id: pristine_id
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
     * bulkAssociateVisitWithDisturbed_id - bulkAssociaton of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add
     * @param  {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
     * @return {string} returns message on success
     */
    static async bulkAssociateVisitWithDisturbed_id(bulkAssociationInput) {
        let mappedForeignKeys = helper.mapForeignKeysToPrimaryKeyArray(bulkAssociationInput, "id", "disturbed_id");
        var promises = [];
        mappedForeignKeys.forEach(({
            disturbed_id,
            id
        }) => {
            promises.push(super.update({
                disturbed_id: disturbed_id
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
     * bulkDisAssociateVisitWithCalendar_id - bulkDisAssociaton of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove
     * @param  {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
     * @return {string} returns message on success
     */
    static async bulkDisAssociateVisitWithCalendar_id(bulkAssociationInput) {
        let mappedForeignKeys = helper.mapForeignKeysToPrimaryKeyArray(bulkAssociationInput, "id", "calendar_id");
        var promises = [];
        mappedForeignKeys.forEach(({
            calendar_id,
            id
        }) => {
            promises.push(super.update({
                calendar_id: null
            }, {
                where: {
                    id: id,
                    calendar_id: calendar_id
                }
            }));
        })
        await Promise.all(promises);
        return "Records successfully updated!"
    }

    /**
     * bulkDisAssociateVisitWithUser_id - bulkDisAssociaton of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove
     * @param  {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
     * @return {string} returns message on success
     */
    static async bulkDisAssociateVisitWithUser_id(bulkAssociationInput) {
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
     * bulkDisAssociateVisitWithCumulus_id - bulkDisAssociaton of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove
     * @param  {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
     * @return {string} returns message on success
     */
    static async bulkDisAssociateVisitWithCumulus_id(bulkAssociationInput) {
        let mappedForeignKeys = helper.mapForeignKeysToPrimaryKeyArray(bulkAssociationInput, "id", "cumulus_id");
        var promises = [];
        mappedForeignKeys.forEach(({
            cumulus_id,
            id
        }) => {
            promises.push(super.update({
                cumulus_id: null
            }, {
                where: {
                    id: id,
                    cumulus_id: cumulus_id
                }
            }));
        })
        await Promise.all(promises);
        return "Records successfully updated!"
    }

    /**
     * bulkDisAssociateVisitWithPristine_id - bulkDisAssociaton of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove
     * @param  {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
     * @return {string} returns message on success
     */
    static async bulkDisAssociateVisitWithPristine_id(bulkAssociationInput) {
        let mappedForeignKeys = helper.mapForeignKeysToPrimaryKeyArray(bulkAssociationInput, "id", "pristine_id");
        var promises = [];
        mappedForeignKeys.forEach(({
            pristine_id,
            id
        }) => {
            promises.push(super.update({
                pristine_id: null
            }, {
                where: {
                    id: id,
                    pristine_id: pristine_id
                }
            }));
        })
        await Promise.all(promises);
        return "Records successfully updated!"
    }

    /**
     * bulkDisAssociateVisitWithDisturbed_id - bulkDisAssociaton of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove
     * @param  {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
     * @return {string} returns message on success
     */
    static async bulkDisAssociateVisitWithDisturbed_id(bulkAssociationInput) {
        let mappedForeignKeys = helper.mapForeignKeysToPrimaryKeyArray(bulkAssociationInput, "id", "disturbed_id");
        var promises = [];
        mappedForeignKeys.forEach(({
            disturbed_id,
            id
        }) => {
            promises.push(super.update({
                disturbed_id: null
            }, {
                where: {
                    id: id,
                    disturbed_id: disturbed_id
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
        return visit.definition.id.name;
    }

    /**
     * idAttributeType - Return the Type of the internalId.
     *
     * @return {type} Type given in the JSON model
     */
    static idAttributeType() {
        return visit.definition.id.type;
    }

    /**
     * getIdValue - Get the value of the idAttribute ("id", or "internalId") for an instance of visit.
     *
     * @return {type} id value
     */
    getIdValue() {
        return this[visit.idAttribute()];
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
     * base64Encode - Encode  visit to a base 64 String
     *
     * @return {string} The visit object, encoded in a base 64 String
     */
    base64Encode() {
        return Buffer.from(JSON.stringify(this.stripAssociations())).toString(
            "base64"
        );
    }

    /**
     * asCursor - alias method for base64Encode
     *
     * @return {string} The visit object, encoded in a base 64 String
     */
    asCursor() {
        return this.base64Encode()
    }

    /**
     * stripAssociations - Instance method for getting all attributes of visit.
     *
     * @return {object} The attributes of visit in object form
     */
    stripAssociations() {
        let attributes = Object.keys(visit.definition.attributes);
        attributes.push('id');
        let data_values = _.pick(this, attributes);
        return data_values;
    }

    /**
     * externalIdsArray - Get all attributes of visit that are marked as external IDs.
     *
     * @return {Array<String>} An array of all attributes of visit that are marked as external IDs
     */
    static externalIdsArray() {
        let externalIds = [];
        if (definition.externalIds) {
            externalIds = definition.externalIds;
        }

        return externalIds;
    }

    /**
     * externalIdsObject - Get all external IDs of visit.
     *
     * @return {object} An object that has the names of the external IDs as keys and their types as values
     */
    static externalIdsObject() {
        return {};
    }

}