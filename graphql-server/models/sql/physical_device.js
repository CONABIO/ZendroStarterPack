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
    model: 'physical_device',
    storageType: 'sql',
    attributes: {
        serial: 'String',
        device_id: 'Int',
        node_id: 'Int',
        created_at: 'DateTime'
    },
    associations: {
        node: {
            type: 'many_to_one',
            implementation: 'foreignkeys',
            reverseAssociation: 'physical_devices',
            target: 'node',
            targetKey: 'node_id',
            keysIn: 'physical_device',
            targetStorageType: 'sql'
        },
        device: {
            type: 'many_to_one',
            implementation: 'foreignkeys',
            reverseAssociation: 'physical_devices',
            target: 'device_catalog',
            targetKey: 'device_id',
            keysIn: 'physical_device',
            targetStorageType: 'sql'
        },
        device_deployments: {
            type: 'one_to_many',
            implementation: 'foreignkeys',
            reverseAssociation: 'device',
            target: 'deployment',
            targetKey: 'device_id',
            keysIn: 'deployment',
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

module.exports = class physical_device extends Sequelize.Model {

    static init(sequelize, DataTypes) {
        return super.init({

            serial: {
                type: Sequelize[dict['String']]
            },
            device_id: {
                type: Sequelize[dict['Int']]
            },
            node_id: {
                type: Sequelize[dict['Int']]
            },
            created_at: {
                type: Sequelize[dict['DateTime']]
            }


        }, {
            modelName: "physical_device",
            tableName: "physical_devices",
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
        physical_device.belongsTo(models.node, {
            as: 'node',
            foreignKey: 'node_id'
        });
        physical_device.belongsTo(models.device_catalog, {
            as: 'device',
            foreignKey: 'device_id'
        });
        physical_device.hasMany(models.deployment, {
            as: 'device_deployments',
            foreignKey: 'device_id'
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
            field: physical_device.idAttribute(),
            value: keys.join(),
            valueType: "Array",
        };
        let cursorRes = await physical_device.readAllCursor(queryArg);
        cursorRes = cursorRes.physical_devices.reduce(
            (map, obj) => ((map[obj[physical_device.idAttribute()]] = obj), map), {}
        );
        return keys.map(
            (key) =>
            cursorRes[key] || new Error(`Record with ID = "${key}" does not exist`)
        );
    }

    static readByIdLoader = new DataLoader(physical_device.batchReadById, {
        cache: false,
    });

    static async readById(id) {
        return await physical_device.readByIdLoader.load(id);
    }
    static async countRecords(search) {
        let options = {}
        options['where'] = helper.searchConditionsToSequelize(search, physical_device.definition.attributes);
        return super.count(options);
    }

    static async readAll(search, order, pagination, benignErrorReporter) {
        //use default BenignErrorReporter if no BenignErrorReporter defined
        benignErrorReporter = errorHelper.getDefaultBenignErrorReporterIfUndef(benignErrorReporter);
        // build the sequelize options object for limit-offset-based pagination
        let options = helper.buildLimitOffsetSequelizeOptions(search, order, pagination, this.idAttribute(), physical_device.definition.attributes);
        let records = await super.findAll(options);
        records = records.map(x => physical_device.postReadCast(x))
        // validationCheck after read
        return validatorUtil.bulkValidateData('validateAfterRead', this, records, benignErrorReporter);
    }

    static async readAllCursor(search, order, pagination, benignErrorReporter) {
        //use default BenignErrorReporter if no BenignErrorReporter defined
        benignErrorReporter = errorHelper.getDefaultBenignErrorReporterIfUndef(benignErrorReporter);

        // build the sequelize options object for cursor-based pagination
        let options = helper.buildCursorBasedSequelizeOptions(search, order, pagination, this.idAttribute(), physical_device.definition.attributes);
        let records = await super.findAll(options);

        records = records.map(x => physical_device.postReadCast(x))

        // validationCheck after read
        records = await validatorUtil.bulkValidateData('validateAfterRead', this, records, benignErrorReporter);
        // get the first record (if exists) in the opposite direction to determine pageInfo.
        // if no cursor was given there is no need for an extra query as the results will start at the first (or last) page.
        let oppRecords = [];
        if (pagination && (pagination.after || pagination.before)) {
            let oppOptions = helper.buildOppositeSearchSequelize(search, order, {
                ...pagination,
                includeCursor: false
            }, this.idAttribute(), physical_device.definition.attributes);
            oppRecords = await super.findAll(oppOptions);
        }
        // build the graphql Connection Object
        let edges = helper.buildEdgeObject(records);
        let pageInfo = helper.buildPageInfo(edges, oppRecords, pagination);
        return {
            edges,
            pageInfo,
            physical_devices: edges.map((edge) => edge.node)
        };
    }

    static async addOne(input) {
        //validate input
        await validatorUtil.validateData('validateForCreate', this, input);
        input = physical_device.preWriteCast(input)
        try {
            const result = await this.sequelize.transaction(async (t) => {
                let item = await super.create(input, {
                    transaction: t
                });
                return item;
            });
            physical_device.postReadCast(result.dataValues)
            physical_device.postReadCast(result._previousDataValues)
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
        input = physical_device.preWriteCast(input)
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
            physical_device.postReadCast(result.dataValues)
            physical_device.postReadCast(result._previousDataValues)
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

        return `Bulk import of physical_device records started. You will be send an email to ${helpersAcl.getTokenFromContext(context).email} informing you about success or errors`;
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
     * add_node_id - field Mutation (model-layer) for to_one associationsArguments to add
     *
     * @param {Id}   id   IdAttribute of the root model to be updated
     * @param {Id}   node_id Foreign Key (stored in "Me") of the Association to be updated.
     */
    static async add_node_id(id, node_id) {
        let updated = await physical_device.update({
            node_id: node_id
        }, {
            where: {
                id: id
            }
        });
        return updated;
    }
    /**
     * add_device_id - field Mutation (model-layer) for to_one associationsArguments to add
     *
     * @param {Id}   id   IdAttribute of the root model to be updated
     * @param {Id}   device_id Foreign Key (stored in "Me") of the Association to be updated.
     */
    static async add_device_id(id, device_id) {
        let updated = await physical_device.update({
            device_id: device_id
        }, {
            where: {
                id: id
            }
        });
        return updated;
    }

    /**
     * remove_node_id - field Mutation (model-layer) for to_one associationsArguments to remove
     *
     * @param {Id}   id   IdAttribute of the root model to be updated
     * @param {Id}   node_id Foreign Key (stored in "Me") of the Association to be updated.
     */
    static async remove_node_id(id, node_id) {
        let updated = await physical_device.update({
            node_id: null
        }, {
            where: {
                id: id,
                node_id: node_id
            }
        });
        return updated;
    }
    /**
     * remove_device_id - field Mutation (model-layer) for to_one associationsArguments to remove
     *
     * @param {Id}   id   IdAttribute of the root model to be updated
     * @param {Id}   device_id Foreign Key (stored in "Me") of the Association to be updated.
     */
    static async remove_device_id(id, device_id) {
        let updated = await physical_device.update({
            device_id: null
        }, {
            where: {
                id: id,
                device_id: device_id
            }
        });
        return updated;
    }





    /**
     * bulkAssociatePhysical_deviceWithNode_id - bulkAssociaton of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add
     * @param  {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
     * @return {string} returns message on success
     */
    static async bulkAssociatePhysical_deviceWithNode_id(bulkAssociationInput) {
        let mappedForeignKeys = helper.mapForeignKeysToPrimaryKeyArray(bulkAssociationInput, "id", "node_id");
        var promises = [];
        mappedForeignKeys.forEach(({
            node_id,
            id
        }) => {
            promises.push(super.update({
                node_id: node_id
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
     * bulkAssociatePhysical_deviceWithDevice_id - bulkAssociaton of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add
     * @param  {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
     * @return {string} returns message on success
     */
    static async bulkAssociatePhysical_deviceWithDevice_id(bulkAssociationInput) {
        let mappedForeignKeys = helper.mapForeignKeysToPrimaryKeyArray(bulkAssociationInput, "id", "device_id");
        var promises = [];
        mappedForeignKeys.forEach(({
            device_id,
            id
        }) => {
            promises.push(super.update({
                device_id: device_id
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
     * bulkDisAssociatePhysical_deviceWithNode_id - bulkDisAssociaton of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove
     * @param  {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
     * @return {string} returns message on success
     */
    static async bulkDisAssociatePhysical_deviceWithNode_id(bulkAssociationInput) {
        let mappedForeignKeys = helper.mapForeignKeysToPrimaryKeyArray(bulkAssociationInput, "id", "node_id");
        var promises = [];
        mappedForeignKeys.forEach(({
            node_id,
            id
        }) => {
            promises.push(super.update({
                node_id: null
            }, {
                where: {
                    id: id,
                    node_id: node_id
                }
            }));
        })
        await Promise.all(promises);
        return "Records successfully updated!"
    }

    /**
     * bulkDisAssociatePhysical_deviceWithDevice_id - bulkDisAssociaton of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove
     * @param  {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
     * @return {string} returns message on success
     */
    static async bulkDisAssociatePhysical_deviceWithDevice_id(bulkAssociationInput) {
        let mappedForeignKeys = helper.mapForeignKeysToPrimaryKeyArray(bulkAssociationInput, "id", "device_id");
        var promises = [];
        mappedForeignKeys.forEach(({
            device_id,
            id
        }) => {
            promises.push(super.update({
                device_id: null
            }, {
                where: {
                    id: id,
                    device_id: device_id
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
        return physical_device.definition.id.name;
    }

    /**
     * idAttributeType - Return the Type of the internalId.
     *
     * @return {type} Type given in the JSON model
     */
    static idAttributeType() {
        return physical_device.definition.id.type;
    }

    /**
     * getIdValue - Get the value of the idAttribute ("id", or "internalId") for an instance of physical_device.
     *
     * @return {type} id value
     */
    getIdValue() {
        return this[physical_device.idAttribute()]
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
        let attributes = Object.keys(physical_device.definition.attributes);
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