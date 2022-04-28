/*
    Resolvers for basic CRUD operations
*/

const path = require('path');
const physical_device = require(path.join(__dirname, '..', 'models', 'index.js')).physical_device;
const helper = require('../utils/helper');
const checkAuthorization = require('../utils/check-authorization');
const fs = require('fs');
const os = require('os');
const resolvers = require(path.join(__dirname, 'index.js'));
const models = require(path.join(__dirname, '..', 'models', 'index.js'));
const globals = require('../config/globals');
const errorHelper = require('../utils/errors');
const validatorUtil = require("../utils/validatorUtil");
const associationArgsDef = {
    'addDevice': 'device_catalog',
    'addCumulus_device': 'cumulus',
    'addDevice_deployments': 'deployment'
}



/**
 * physical_device.prototype.device - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
physical_device.prototype.device = async function({
    search
}, context) {

    if (helper.isNotUndefinedAndNotNull(this.device_id)) {
        if (search === undefined || search === null) {
            return resolvers.readOneDevice_catalog({
                [models.device_catalog.idAttribute()]: this.device_id
            }, context)
        } else {

            //build new search filter
            let nsearch = helper.addSearchField({
                "search": search,
                "field": models.device_catalog.idAttribute(),
                "value": this.device_id,
                "operator": "eq"
            });
            let found = (await resolvers.device_catalogsConnection({
                search: nsearch,
                pagination: {
                    first: 1
                }
            }, context)).edges;
            if (found.length > 0) {
                return found[0].node
            }
            return found;
        }
    }
}
/**
 * physical_device.prototype.cumulus_device - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
physical_device.prototype.cumulus_device = async function({
    search
}, context) {

    if (helper.isNotUndefinedAndNotNull(this.cumulus_id)) {
        if (search === undefined || search === null) {
            return resolvers.readOneCumulus({
                [models.cumulus.idAttribute()]: this.cumulus_id
            }, context)
        } else {

            //build new search filter
            let nsearch = helper.addSearchField({
                "search": search,
                "field": models.cumulus.idAttribute(),
                "value": this.cumulus_id,
                "operator": "eq"
            });
            let found = (await resolvers.cumulusConnection({
                search: nsearch,
                pagination: {
                    first: 1
                }
            }, context)).edges;
            if (found.length > 0) {
                return found[0].node
            }
            return found;
        }
    }
}

/**
 * physical_device.prototype.device_deploymentsFilter - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Offset and limit to get the records from and to respectively
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of associated records holding conditions specified by search, order and pagination argument
 */
physical_device.prototype.device_deploymentsFilter = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "device_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });

    return resolvers.deployments({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}

/**
 * physical_device.prototype.countFilteredDevice_deployments - Count number of associated records that holds the conditions specified in the search argument
 *
 * @param  {object} {search} description
 * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}          Number of associated records that holds the conditions specified in the search argument
 */
physical_device.prototype.countFilteredDevice_deployments = function({
    search
}, context) {

    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "device_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.countDeployments({
        search: nsearch
    }, context);
}

/**
 * physical_device.prototype.device_deploymentsConnection - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
 */
physical_device.prototype.device_deploymentsConnection = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "device_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.deploymentsConnection({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}




/**
 * handleAssociations - handles the given associations in the create and update case.
 *
 * @param {object} input   Info of each field to create the new record
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
physical_device.prototype.handleAssociations = async function(input, benignErrorReporter) {

    let promises_add = [];
    if (helper.isNonEmptyArray(input.addDevice_deployments)) {
        promises_add.push(this.add_device_deployments(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.addDevice)) {
        promises_add.push(this.add_device(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.addCumulus_device)) {
        promises_add.push(this.add_cumulus_device(input, benignErrorReporter));
    }

    await Promise.all(promises_add);
    let promises_remove = [];
    if (helper.isNonEmptyArray(input.removeDevice_deployments)) {
        promises_remove.push(this.remove_device_deployments(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.removeDevice)) {
        promises_remove.push(this.remove_device(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.removeCumulus_device)) {
        promises_remove.push(this.remove_cumulus_device(input, benignErrorReporter));
    }

    await Promise.all(promises_remove);

}
/**
 * add_device_deployments - field Mutation for to_many associations to add
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
physical_device.prototype.add_device_deployments = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.addDevice_deployments.map(associatedRecordId => {
        return {
            device_id: this.getIdValue(),
            [models.deployment.idAttribute()]: associatedRecordId
        }
    });
    await models.deployment.bulkAssociateDeploymentWithDevice_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * add_device - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
physical_device.prototype.add_device = async function(input, benignErrorReporter) {
    await physical_device.add_device_id(this.getIdValue(), input.addDevice, benignErrorReporter);
    this.device_id = input.addDevice;
}

/**
 * add_cumulus_device - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
physical_device.prototype.add_cumulus_device = async function(input, benignErrorReporter) {
    await physical_device.add_cumulus_id(this.getIdValue(), input.addCumulus_device, benignErrorReporter);
    this.cumulus_id = input.addCumulus_device;
}

/**
 * remove_device_deployments - field Mutation for to_many associations to remove
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
physical_device.prototype.remove_device_deployments = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.removeDevice_deployments.map(associatedRecordId => {
        return {
            device_id: this.getIdValue(),
            [models.deployment.idAttribute()]: associatedRecordId
        }
    });
    await models.deployment.bulkDisAssociateDeploymentWithDevice_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * remove_device - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
physical_device.prototype.remove_device = async function(input, benignErrorReporter) {
    if (input.removeDevice == this.device_id) {
        await physical_device.remove_device_id(this.getIdValue(), input.removeDevice, benignErrorReporter);
        this.device_id = null;
    }
}

/**
 * remove_cumulus_device - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
physical_device.prototype.remove_cumulus_device = async function(input, benignErrorReporter) {
    if (input.removeCumulus_device == this.cumulus_id) {
        await physical_device.remove_cumulus_id(this.getIdValue(), input.removeCumulus_device, benignErrorReporter);
        this.cumulus_id = null;
    }
}



/**
 * countAssociatedRecordsWithRejectReaction - Count associated records with reject deletion action
 *
 * @param  {ID} id      Id of the record which the associations will be counted
 * @param  {objec} context Default context by resolver
 * @return {Int}         Number of associated records
 */
async function countAssociatedRecordsWithRejectReaction(id, context) {

    let physical_device = await resolvers.readOnePhysical_device({
        id: id
    }, context);
    //check that record actually exists
    if (physical_device === null) throw new Error(`Record with ID = ${id} does not exist`);
    let promises_to_many = [];
    let promises_to_one = [];
    let get_to_many_associated_fk = 0;
    promises_to_many.push(physical_device.countFilteredDevice_deployments({}, context));
    promises_to_one.push(physical_device.device({}, context));
    promises_to_one.push(physical_device.cumulus_device({}, context));


    let result_to_many = await Promise.all(promises_to_many);
    let result_to_one = await Promise.all(promises_to_one);

    let get_to_many_associated = result_to_many.reduce((accumulator, current_val) => accumulator + current_val, 0);
    let get_to_one_associated = result_to_one.filter((r, index) => helper.isNotUndefinedAndNotNull(r)).length;

    return get_to_one_associated + get_to_many_associated_fk + get_to_many_associated;
}

/**
 * validForDeletion - Checks wether a record is allowed to be deleted
 *
 * @param  {ID} id      Id of record to check if it can be deleted
 * @param  {object} context Default context by resolver
 * @return {boolean}         True if it is allowed to be deleted and false otherwise
 */
async function validForDeletion(id, context) {
    if (await countAssociatedRecordsWithRejectReaction(id, context) > 0) {
        throw new Error(`physical_device with id ${id} has associated records with 'reject' reaction and is NOT valid for deletion. Please clean up before you delete.`);
    }
    return true;
}

/**
 * updateAssociations - update associations for a given record
 *
 * @param  {ID} id      Id of record
 * @param  {object} context Default context by resolver
 */
const updateAssociations = async (id, context) => {
    const physical_device_record = await resolvers.readOnePhysical_device({
            id: id
        },
        context
    );
    const pagi_first = globals.LIMIT_RECORDS;



}
module.exports = {
    /**
     * physical_devices - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Offset and limit to get the records from and to respectively
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records holding conditions specified by search, order and pagination argument
     */
    physical_devices: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'physical_device', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(pagination.limit, context, "physical_devices");
            return await physical_device.readAll(search, order, pagination, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * physical_devicesConnection - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
     */
    physical_devicesConnection: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'physical_device', 'read') === true) {
            helper.checkCursorBasedPaginationArgument(pagination);
            let limit = helper.isNotUndefinedAndNotNull(pagination.first) ? pagination.first : pagination.last;
            helper.checkCountAndReduceRecordsLimit(limit, context, "physical_devicesConnection");
            return await physical_device.readAllCursor(search, order, pagination, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * readOnePhysical_device - Check user authorization and return one record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to retrieve
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Record with id requested
     */
    readOnePhysical_device: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'physical_device', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(1, context, "readOnePhysical_device");
            return await physical_device.readById(id, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * countPhysical_devices - Counts number of records that holds the conditions specified in the search argument
     *
     * @param  {object} {search} Search argument for filtering records
     * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {number}          Number of records that holds the conditions specified in the search argument
     */
    countPhysical_devices: async function({
        search
    }, context) {
        if (await checkAuthorization(context, 'physical_device', 'read') === true) {
            return await physical_device.countRecords(search, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * validatePhysical_deviceForCreation - Check user authorization and validate input argument for creation.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validatePhysical_deviceForCreation: async (input, context) => {
        let authorization = await checkAuthorization(context, 'physical_device', 'read');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [
                Object.keys(associationArgsDef),
            ]);
            try {
                if (!input.skipAssociationsExistenceChecks) {
                    await helper.validateAssociationArgsExistence(
                        inputSanitized,
                        context,
                        associationArgsDef
                    );
                }
                await validatorUtil.validateData(
                    "validateForCreate",
                    physical_device,
                    inputSanitized
                );
                return true;
            } catch (error) {
                context.benignErrors.push(error);
                return false;
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * validatePhysical_deviceForUpdating - Check user authorization and validate input argument for updating.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validatePhysical_deviceForUpdating: async (input, context) => {
        let authorization = await checkAuthorization(context, 'physical_device', 'read');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [
                Object.keys(associationArgsDef),
            ]);
            try {
                if (!input.skipAssociationsExistenceChecks) {
                    await helper.validateAssociationArgsExistence(
                        inputSanitized,
                        context,
                        associationArgsDef
                    );
                }
                await validatorUtil.validateData(
                    "validateForUpdate",
                    physical_device,
                    inputSanitized
                );
                return true;
            } catch (error) {
                context.benignErrors.push(error);
                return false;
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * validatePhysical_deviceForDeletion - Check user authorization and validate record by ID for deletion.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validatePhysical_deviceForDeletion: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'physical_device', 'read')) === true) {
            try {
                await validForDeletion(id, context);
                await validatorUtil.validateData(
                    "validateForDelete",
                    physical_device,
                    id);
                return true;
            } catch (error) {
                context.benignErrors.push(error);
                return false;
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * validatePhysical_deviceAfterReading - Check user authorization and validate record by ID after reading.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validatePhysical_deviceAfterReading: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'physical_device', 'read')) === true) {
            try {
                await validatorUtil.validateData(
                    "validateAfterRead",
                    physical_device,
                    id);
                return true;
            } catch (error) {
                context.benignErrors.push(error);
                return false;
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },
    /**
     * addPhysical_device - Check user authorization and creates a new record with data specified in the input argument.
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         New record created
     */
    addPhysical_device: async function(input, context) {
        let authorization = await checkAuthorization(context, 'physical_device', 'create');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let createdPhysical_device = await physical_device.addOne(inputSanitized, context.benignErrors);
            await createdPhysical_device.handleAssociations(inputSanitized, context.benignErrors);
            return createdPhysical_device;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * deletePhysical_device - Check user authorization and delete a record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to delete
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string}         Message indicating if deletion was successfull.
     */
    deletePhysical_device: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'physical_device', 'delete') === true) {
            if (await validForDeletion(id, context)) {
                await updateAssociations(id, context);
                return physical_device.deleteOne(id, context.benignErrors);
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * updatePhysical_device - Check user authorization and update the record specified in the input argument
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   record to update and new info to update
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Updated record
     */
    updatePhysical_device: async function(input, context) {
        let authorization = await checkAuthorization(context, 'physical_device', 'update');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let updatedPhysical_device = await physical_device.updateOne(inputSanitized, context.benignErrors);
            await updatedPhysical_device.handleAssociations(inputSanitized, context.benignErrors);
            return updatedPhysical_device;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * bulkAssociatePhysical_deviceWithDevice_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociatePhysical_deviceWithDevice_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                device_id
            }) => device_id)), models.device_catalog);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), physical_device);
        }
        return await physical_device.bulkAssociatePhysical_deviceWithDevice_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },
    /**
     * bulkAssociatePhysical_deviceWithCumulus_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociatePhysical_deviceWithCumulus_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                cumulus_id
            }) => cumulus_id)), models.cumulus);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), physical_device);
        }
        return await physical_device.bulkAssociatePhysical_deviceWithCumulus_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },
    /**
     * bulkDisAssociatePhysical_deviceWithDevice_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociatePhysical_deviceWithDevice_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                device_id
            }) => device_id)), models.device_catalog);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), physical_device);
        }
        return await physical_device.bulkDisAssociatePhysical_deviceWithDevice_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },
    /**
     * bulkDisAssociatePhysical_deviceWithCumulus_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociatePhysical_deviceWithCumulus_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                cumulus_id
            }) => cumulus_id)), models.cumulus);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), physical_device);
        }
        return await physical_device.bulkDisAssociatePhysical_deviceWithCumulus_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },

    /**
     * csvTableTemplatePhysical_device - Returns table's template
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {Array}         Strings, one for header and one columns types
     */
    csvTableTemplatePhysical_device: async function(_, context) {
        if (await checkAuthorization(context, 'physical_device', 'read') === true) {
            return physical_device.csvTableTemplate(context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * physical_devicesZendroDefinition - Return data model definition
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {GraphQLJSONObject}        Data model definition
     */
    physical_devicesZendroDefinition: async function(_, context) {
        if ((await checkAuthorization(context, "physical_device", "read")) === true) {
            return physical_device.definition;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

}