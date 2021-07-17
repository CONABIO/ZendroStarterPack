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
    model: 'cumulus',
    storageType: 'sql',
    attributes: {
        name: 'String',
        geometry: 'Polygon',
        criteria_id: 'Int',
        user_ids: '[Int]',
        created_at: 'DateTime'
    },
    associations: {
        cumulus_criteria: {
            type: 'many_to_one',
            implementation: 'foreignkeys',
            reverseAssociation: 'cumulus',
            target: 'cumulus_criteria',
            targetKey: 'criteria_id',
            keysIn: 'cumulus',
            targetStorageType: 'sql'
        },
        devices: {
            type: 'one_to_many',
            implementation: 'foreignkeys',
            reverseAssociation: 'cumulus_device',
            target: 'physical_device',
            targetKey: 'cumulus_id',
            keysIn: 'physical_device',
            targetStorageType: 'sql'
        },
        associated_partners: {
            type: 'many_to_many',
            implementation: 'foreignkeys',
            reverseAssociation: 'associated_cumulus',
            target: 'user',
            targetKey: 'cumulus_ids',
            sourceKey: 'user_ids',
            keysIn: 'cumulus',
            targetStorageType: 'sql'
        },
        visits: {
            type: 'one_to_many',
            implementation: 'foreignkeys',
            reverseAssociation: 'cumulus_visit',
            target: 'visit',
            targetKey: 'cumulus_id',
            keysIn: 'visit',
            targetStorageType: 'sql'
        },
        monitors: {
            type: 'one_to_many',
            implementation: 'foreignkeys',
            reverseAssociation: 'cumulus_monitor',
            target: 'monitor',
            targetKey: 'cumulus_id',
            keysIn: 'monitor',
            targetStorageType: 'sql'
        },
        nodes: {
            type: 'one_to_many',
            implementation: 'foreignkeys',
            reverseAssociation: 'cumulus_node',
            target: 'node',
            targetKey: 'cumulus_id',
            keysIn: 'node',
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
 *
 * @param  {object} sequelize Sequelize instance.
 * @param  {object} DataTypes Allowed sequelize data types.
 * @return {object}           Sequelize model with associations defined
 */

module.exports = class cumulus extends Sequelize.Model {

    static init(sequelize, DataTypes) {
        return super.init({

            name: {
                type: Sequelize[dict['String']]
            },
            geometry: {
                type: Sequelize[dict['Polygon']]
            },
            criteria_id: {
                type: Sequelize[dict['Int']]
            },
            user_ids: {
                type: Sequelize[dict['[Int]']],
                defaultValue: '[]'
            },
            created_at: {
                type: Sequelize[dict['DateTime']]
            }


        }, {
            modelName: "cumulus",
            tableName: "cumulus",
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

    static associate(models) {
        cumulus.belongsTo(models.cumulus_criteria, {
            as: 'cumulus_criteria',
            foreignKey: 'criteria_id'
        });
        cumulus.hasMany(models.physical_device, {
            as: 'devices',
            foreignKey: 'cumulus_id'
        });
        cumulus.hasMany(models.visit, {
            as: 'visits',
            foreignKey: 'cumulus_id'
        });
        cumulus.hasMany(models.monitor, {
            as: 'monitors',
            foreignKey: 'cumulus_id'
        });
        cumulus.hasMany(models.node, {
            as: 'nodes',
            foreignKey: 'cumulus_id'
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
            field: cumulus.idAttribute(),
            value: keys.join(),
            valueType: "Array",
        };
        let cursorRes = await cumulus.readAllCursor(queryArg);
        cursorRes = cursorRes.cumulus.reduce(
            (map, obj) => ((map[obj[cumulus.idAttribute()]] = obj), map), {}
        );
        return keys.map(
            (key) =>
            cursorRes[key] || new Error(`Record with ID = "${key}" does not exist`)
        );
    }

    static readByIdLoader = new DataLoader(cumulus.batchReadById, {
        cache: false,
    });

    static async readById(id) {
        return await cumulus.readByIdLoader.load(id);
    }
    static async countRecords(search) {
        let options = {}
        options['where'] = helper.searchConditionsToSequelize(search, cumulus.definition.attributes);
        return super.count(options);
    }

    static async readAll(search, order, pagination, benignErrorReporter) {
        //use default BenignErrorReporter if no BenignErrorReporter defined
        benignErrorReporter = errorHelper.getDefaultBenignErrorReporterIfUndef(benignErrorReporter);
        // build the sequelize options object for limit-offset-based pagination
        let options = helper.buildLimitOffsetSequelizeOptions(search, order, pagination, this.idAttribute(), cumulus.definition.attributes);
        let records = await super.findAll(options);
        records = records.map(x => cumulus.postReadCast(x))
        // validationCheck after read
        return validatorUtil.bulkValidateData('validateAfterRead', this, records, benignErrorReporter);
    }

    static async readAllCursor(search, order, pagination, benignErrorReporter) {
        //use default BenignErrorReporter if no BenignErrorReporter defined
        benignErrorReporter = errorHelper.getDefaultBenignErrorReporterIfUndef(benignErrorReporter);

        // build the sequelize options object for cursor-based pagination
        let options = helper.buildCursorBasedSequelizeOptions(search, order, pagination, this.idAttribute(), cumulus.definition.attributes);
        let records = await super.findAll(options);

        records = records.map(x => cumulus.postReadCast(x))

        // validationCheck after read
        records = await validatorUtil.bulkValidateData('validateAfterRead', this, records, benignErrorReporter);
        // get the first record (if exists) in the opposite direction to determine pageInfo.
        // if no cursor was given there is no need for an extra query as the results will start at the first (or last) page.
        let oppRecords = [];
        if (pagination && (pagination.after || pagination.before)) {
            let oppOptions = helper.buildOppositeSearchSequelize(search, order, {
                ...pagination,
                includeCursor: false
            }, this.idAttribute(), cumulus.definition.attributes);
            oppRecords = await super.findAll(oppOptions);
        }
        // build the graphql Connection Object
        let edges = helper.buildEdgeObject(records);
        let pageInfo = helper.buildPageInfo(edges, oppRecords, pagination);
        return {
            edges,
            pageInfo,
            cumulus: edges.map((edge) => edge.node)
        };
    }

    static async addOne(input) {
        //validate input
        await validatorUtil.validateData('validateForCreate', this, input);
        input = cumulus.preWriteCast(input)
        try {
            const result = await this.sequelize.transaction(async (t) => {
                let item = await super.create(input, {
                    transaction: t
                });
                return item;
            });
            cumulus.postReadCast(result.dataValues)
            cumulus.postReadCast(result._previousDataValues)
            return result;
        } catch (error) {
            throw error;
        }

    }

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

    static async updateOne(input) {
        //validate input
        await validatorUtil.validateData('validateForUpdate', this, input);
        input = cumulus.preWriteCast(input)
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
            cumulus.postReadCast(result.dataValues)
            cumulus.postReadCast(result._previousDataValues)
            return result;
        } catch (error) {
            throw error;
        }
    }

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

        return `Bulk import of cumulus records started. You will be send an email to ${helpersAcl.getTokenFromContext(context).email} informing you about success or errors`;
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
     * add_criteria_id - field Mutation (model-layer) for to_one associationsArguments to add
     *
     * @param {Id}   id   IdAttribute of the root model to be updated
     * @param {Id}   criteria_id Foreign Key (stored in "Me") of the Association to be updated.
     */
    static async add_criteria_id(id, criteria_id) {
        let updated = await cumulus.update({
            criteria_id: criteria_id
        }, {
            where: {
                id: id
            }
        });
        return updated;
    }
    /**
     * add_user_ids - field Mutation (model-layer) for to_many associationsArguments to add
     *
     * @param {Id}   id   IdAttribute of the root model to be updated
     * @param {Array}   user_ids Array foreign Key (stored in "Me") of the Association to be updated.
     */
    static async add_user_ids(id, user_ids, benignErrorReporter, handle_inverse = true) {
        //handle inverse association
        if (handle_inverse) {
            let promises = [];
            user_ids.forEach(idx => {
                promises.push(models.user.add_cumulus_ids(idx, [`${id}`], benignErrorReporter, false));
            });
            await Promise.all(promises);
        }

        let record = await super.findByPk(id);
        if (record !== null) {
            let updated_ids = helper.unionIds(JSON.parse(record.user_ids), user_ids);
            updated_ids = JSON.stringify(updated_ids);
            await record.update({
                user_ids: updated_ids
            });
        }
    }

    /**
     * remove_criteria_id - field Mutation (model-layer) for to_one associationsArguments to remove
     *
     * @param {Id}   id   IdAttribute of the root model to be updated
     * @param {Id}   criteria_id Foreign Key (stored in "Me") of the Association to be updated.
     */
    static async remove_criteria_id(id, criteria_id) {
        let updated = await cumulus.update({
            criteria_id: null
        }, {
            where: {
                id: id,
                criteria_id: criteria_id
            }
        });
        return updated;
    }
    /**
     * remove_user_ids - field Mutation (model-layer) for to_many associationsArguments to remove
     *
     * @param {Id}   id   IdAttribute of the root model to be updated
     * @param {Array}   user_ids Array foreign Key (stored in "Me") of the Association to be updated.
     */
    static async remove_user_ids(id, user_ids, benignErrorReporter, handle_inverse = true) {
        //handle inverse association
        if (handle_inverse) {
            let promises = [];
            user_ids.forEach(idx => {
                promises.push(models.user.remove_cumulus_ids(idx, [`${id}`], benignErrorReporter, false));
            });
            await Promise.all(promises);
        }

        let record = await super.findByPk(id);
        if (record !== null) {
            let updated_ids = helper.differenceIds(JSON.parse(record.user_ids), user_ids);
            updated_ids = JSON.stringify(updated_ids);
            await record.update({
                user_ids: updated_ids
            });
        }
    }





    /**
     * bulkAssociateCumulusWithCriteria_id - bulkAssociaton of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add
     * @param  {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
     * @return {string} returns message on success
     */
    static async bulkAssociateCumulusWithCriteria_id(bulkAssociationInput) {
        let mappedForeignKeys = helper.mapForeignKeysToPrimaryKeyArray(bulkAssociationInput, "id", "criteria_id");
        var promises = [];
        mappedForeignKeys.forEach(({
            criteria_id,
            id
        }) => {
            promises.push(super.update({
                criteria_id: criteria_id
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
     * bulkDisAssociateCumulusWithCriteria_id - bulkDisAssociaton of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove
     * @param  {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
     * @return {string} returns message on success
     */
    static async bulkDisAssociateCumulusWithCriteria_id(bulkAssociationInput) {
        let mappedForeignKeys = helper.mapForeignKeysToPrimaryKeyArray(bulkAssociationInput, "id", "criteria_id");
        var promises = [];
        mappedForeignKeys.forEach(({
            criteria_id,
            id
        }) => {
            promises.push(super.update({
                criteria_id: null
            }, {
                where: {
                    id: id,
                    criteria_id: criteria_id
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
        return cumulus.definition.id.name;
    }

    /**
     * idAttributeType - Return the Type of the internalId.
     *
     * @return {type} Type given in the JSON model
     */
    static idAttributeType() {
        return cumulus.definition.id.type;
    }

    /**
     * getIdValue - Get the value of the idAttribute ("id", or "internalId") for an instance of cumulus.
     *
     * @return {type} id value
     */
    getIdValue() {
        return this[cumulus.idAttribute()]
    }

    static get definition() {
        return definition;
    }

    static base64Decode(cursor) {
        return Buffer.from(cursor, 'base64').toString('utf-8');
    }

    base64Enconde() {
        return Buffer.from(JSON.stringify(this.stripAssociations())).toString('base64');
    }

    stripAssociations() {
        let attributes = Object.keys(cumulus.definition.attributes);
        attributes.push('id');
        let data_values = _.pick(this, attributes);
        return data_values;
    }

    static externalIdsArray() {
        let externalIds = [];
        if (definition.externalIds) {
            externalIds = definition.externalIds;
        }

        return externalIds;
    }

    static externalIdsObject() {
        return {};
    }

}