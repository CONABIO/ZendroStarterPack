/*
    Resolvers for basic CRUD operations
*/

const path = require('path');
const deployment = require(path.join(__dirname, '..', 'models', 'index.js')).deployment;
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
    'addDevice': 'physical_device',
    'addVisit_deployment': 'visit',
    'addMonitors': 'monitor',
    'addFiles': 'file'
}



/**
 * deployment.prototype.device - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
deployment.prototype.device = async function({
    search
}, context) {

    if (helper.isNotUndefinedAndNotNull(this.device_id)) {
        if (search === undefined || search === null) {
            return resolvers.readOnePhysical_device({
                [models.physical_device.idAttribute()]: this.device_id
            }, context)
        } else {

            //build new search filter
            let nsearch = helper.addSearchField({
                "search": search,
                "field": models.physical_device.idAttribute(),
                "value": this.device_id,
                "operator": "eq"
            });
            let found = (await resolvers.physical_devicesConnection({
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
 * deployment.prototype.visit_deployment - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
deployment.prototype.visit_deployment = async function({
    search
}, context) {

    if (helper.isNotUndefinedAndNotNull(this.visit_id)) {
        if (search === undefined || search === null) {
            return resolvers.readOneVisit({
                [models.visit.idAttribute()]: this.visit_id
            }, context)
        } else {

            //build new search filter
            let nsearch = helper.addSearchField({
                "search": search,
                "field": models.visit.idAttribute(),
                "value": this.visit_id,
                "operator": "eq"
            });
            let found = (await resolvers.visitsConnection({
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
 * deployment.prototype.monitorsFilter - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Offset and limit to get the records from and to respectively
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of associated records holding conditions specified by search, order and pagination argument
 */
deployment.prototype.monitorsFilter = function({
    search,
    order,
    pagination
}, context) {


    //return an empty response if the foreignKey Array is empty, no need to query the database
    if (!Array.isArray(this.monitor_ids) || this.monitor_ids.length === 0) {
        return [];
    }
    let nsearch = helper.addSearchField({
        "search": search,
        "field": models.monitor.idAttribute(),
        "value": this.monitor_ids.join(','),
        "valueType": "Array",
        "operator": "in"
    });
    return resolvers.monitors({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}

/**
 * deployment.prototype.countFilteredMonitors - Count number of associated records that holds the conditions specified in the search argument
 *
 * @param  {object} {search} description
 * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}          Number of associated records that holds the conditions specified in the search argument
 */
deployment.prototype.countFilteredMonitors = function({
    search
}, context) {


    //return 0 if the foreignKey Array is empty, no need to query the database
    if (!Array.isArray(this.monitor_ids) || this.monitor_ids.length === 0) {
        return 0;
    }

    let nsearch = helper.addSearchField({
        "search": search,
        "field": models.monitor.idAttribute(),
        "value": this.monitor_ids.join(','),
        "valueType": "Array",
        "operator": "in"
    });

    return resolvers.countMonitors({
        search: nsearch
    }, context);
}

/**
 * deployment.prototype.monitorsConnection - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
 */
deployment.prototype.monitorsConnection = function({
    search,
    order,
    pagination
}, context) {


    //return an empty response if the foreignKey Array is empty, no need to query the database
    if (!Array.isArray(this.monitor_ids) || this.monitor_ids.length === 0) {
        return {
            edges: [],
            monitors: [],
            pageInfo: {
                startCursor: null,
                endCursor: null,
                hasPreviousPage: false,
                hasNextPage: false
            }
        };
    }

    let nsearch = helper.addSearchField({
        "search": search,
        "field": models.monitor.idAttribute(),
        "value": this.monitor_ids.join(','),
        "valueType": "Array",
        "operator": "in"
    });
    return resolvers.monitorsConnection({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}
/**
 * deployment.prototype.filesFilter - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Offset and limit to get the records from and to respectively
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of associated records holding conditions specified by search, order and pagination argument
 */
deployment.prototype.filesFilter = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "deployment_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });

    return resolvers.files({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}

/**
 * deployment.prototype.countFilteredFiles - Count number of associated records that holds the conditions specified in the search argument
 *
 * @param  {object} {search} description
 * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}          Number of associated records that holds the conditions specified in the search argument
 */
deployment.prototype.countFilteredFiles = function({
    search
}, context) {

    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "deployment_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.countFiles({
        search: nsearch
    }, context);
}

/**
 * deployment.prototype.filesConnection - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
 */
deployment.prototype.filesConnection = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "deployment_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.filesConnection({
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
deployment.prototype.handleAssociations = async function(input, benignErrorReporter) {

    let promises_add = [];
    if (helper.isNonEmptyArray(input.addMonitors)) {
        promises_add.push(this.add_monitors(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.addFiles)) {
        promises_add.push(this.add_files(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.addDevice)) {
        promises_add.push(this.add_device(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.addVisit_deployment)) {
        promises_add.push(this.add_visit_deployment(input, benignErrorReporter));
    }

    await Promise.all(promises_add);
    let promises_remove = [];
    if (helper.isNonEmptyArray(input.removeMonitors)) {
        promises_remove.push(this.remove_monitors(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.removeFiles)) {
        promises_remove.push(this.remove_files(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.removeDevice)) {
        promises_remove.push(this.remove_device(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.removeVisit_deployment)) {
        promises_remove.push(this.remove_visit_deployment(input, benignErrorReporter));
    }

    await Promise.all(promises_remove);

}
/**
 * add_monitors - field Mutation for to_many associations to add
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
deployment.prototype.add_monitors = async function(input, benignErrorReporter) {

    await deployment.add_monitor_ids(this.getIdValue(), input.addMonitors, benignErrorReporter);
    this.monitor_ids = helper.unionIds(this.monitor_ids, input.addMonitors);
}

/**
 * add_files - field Mutation for to_many associations to add
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
deployment.prototype.add_files = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.addFiles.map(associatedRecordId => {
        return {
            deployment_id: this.getIdValue(),
            [models.file.idAttribute()]: associatedRecordId
        }
    });
    await models.file.bulkAssociateFileWithDeployment_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * add_device - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
deployment.prototype.add_device = async function(input, benignErrorReporter) {
    await deployment.add_device_id(this.getIdValue(), input.addDevice, benignErrorReporter);
    this.device_id = input.addDevice;
}

/**
 * add_visit_deployment - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
deployment.prototype.add_visit_deployment = async function(input, benignErrorReporter) {
    await deployment.add_visit_id(this.getIdValue(), input.addVisit_deployment, benignErrorReporter);
    this.visit_id = input.addVisit_deployment;
}

/**
 * remove_monitors - field Mutation for to_many associations to remove
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
deployment.prototype.remove_monitors = async function(input, benignErrorReporter) {

    await deployment.remove_monitor_ids(this.getIdValue(), input.removeMonitors, benignErrorReporter);
    this.monitor_ids = helper.differenceIds(this.monitor_ids, input.removeMonitors);
}

/**
 * remove_files - field Mutation for to_many associations to remove
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
deployment.prototype.remove_files = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.removeFiles.map(associatedRecordId => {
        return {
            deployment_id: this.getIdValue(),
            [models.file.idAttribute()]: associatedRecordId
        }
    });
    await models.file.bulkDisAssociateFileWithDeployment_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * remove_device - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
deployment.prototype.remove_device = async function(input, benignErrorReporter) {
    if (input.removeDevice == this.device_id) {
        await deployment.remove_device_id(this.getIdValue(), input.removeDevice, benignErrorReporter);
        this.device_id = null;
    }
}

/**
 * remove_visit_deployment - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
deployment.prototype.remove_visit_deployment = async function(input, benignErrorReporter) {
    if (input.removeVisit_deployment == this.visit_id) {
        await deployment.remove_visit_id(this.getIdValue(), input.removeVisit_deployment, benignErrorReporter);
        this.visit_id = null;
    }
}



/**
 * countAllAssociatedRecords - Count records associated with another given record
 *
 * @param  {ID} id      Id of the record which the associations will be counted
 * @param  {objec} context Default context by resolver
 * @return {Int}         Number of associated records
 */
async function countAllAssociatedRecords(id, context) {

    let deployment = await resolvers.readOneDeployment({
        id: id
    }, context);
    //check that record actually exists
    if (deployment === null) throw new Error(`Record with ID = ${id} does not exist`);
    let promises_to_many = [];
    let promises_to_one = [];

    promises_to_many.push(deployment.countFilteredMonitors({}, context));
    promises_to_many.push(deployment.countFilteredFiles({}, context));
    promises_to_one.push(deployment.device({}, context));
    promises_to_one.push(deployment.visit_deployment({}, context));

    let result_to_many = await Promise.all(promises_to_many);
    let result_to_one = await Promise.all(promises_to_one);

    let get_to_many_associated = result_to_many.reduce((accumulator, current_val) => accumulator + current_val, 0);
    let get_to_one_associated = result_to_one.filter((r, index) => helper.isNotUndefinedAndNotNull(r)).length;

    return get_to_one_associated + get_to_many_associated;
}

/**
 * validForDeletion - Checks wether a record is allowed to be deleted
 *
 * @param  {ID} id      Id of record to check if it can be deleted
 * @param  {object} context Default context by resolver
 * @return {boolean}         True if it is allowed to be deleted and false otherwise
 */
async function validForDeletion(id, context) {
    if (await countAllAssociatedRecords(id, context) > 0) {
        throw new Error(`deployment with id ${id} has associated records and is NOT valid for deletion. Please clean up before you delete.`);
    }
    return true;
}

module.exports = {
    /**
     * deployments - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Offset and limit to get the records from and to respectively
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records holding conditions specified by search, order and pagination argument
     */
    deployments: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'deployment', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(pagination.limit, context, "deployments");
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await deployment.readAll(search, order, pagination, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * deploymentsConnection - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
     */
    deploymentsConnection: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'deployment', 'read') === true) {
            helper.checkCursorBasedPaginationArgument(pagination);
            let limit = helper.isNotUndefinedAndNotNull(pagination.first) ? pagination.first : pagination.last;
            helper.checkCountAndReduceRecordsLimit(limit, context, "deploymentsConnection");
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await deployment.readAllCursor(search, order, pagination, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * readOneDeployment - Check user authorization and return one record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to retrieve
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Record with id requested
     */
    readOneDeployment: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'deployment', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(1, context, "readOneDeployment");
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await deployment.readById(id, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * countDeployments - Counts number of records that holds the conditions specified in the search argument
     *
     * @param  {object} {search} Search argument for filtering records
     * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {number}          Number of records that holds the conditions specified in the search argument
     */
    countDeployments: async function({
        search
    }, context) {
        if (await checkAuthorization(context, 'deployment', 'read') === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await deployment.countRecords(search, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * vueTableDeployment - Return table of records as needed for displaying a vuejs table
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Records with format as needed for displaying a vuejs table
     */
    vueTableDeployment: async function(_, context) {
        if (await checkAuthorization(context, 'deployment', 'read') === true) {
            return helper.vueTable(context.request, deployment, ["id", "comments"]);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * validateDeploymentForCreation - Check user authorization and validate input argument for creation.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateDeploymentForCreation: async (input, context) => {
        let authorization = await checkAuthorization(context, 'deployment', 'read');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [
                Object.keys(associationArgsDef),
            ]);

            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
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
                    deployment,
                    inputSanitized
                );
                return true;
            } catch (error) {
                benignErrorReporter.reportError(error);
                return false;
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * validateDeploymentForUpdating - Check user authorization and validate input argument for updating.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateDeploymentForUpdating: async (input, context) => {
        let authorization = await checkAuthorization(context, 'deployment', 'read');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [
                Object.keys(associationArgsDef),
            ]);

            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
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
                    deployment,
                    inputSanitized
                );
                return true;
            } catch (error) {
                benignErrorReporter.reportError(error);
                return false;
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * validateDeploymentForDeletion - Check user authorization and validate record by ID for deletion.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateDeploymentForDeletion: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'deployment', 'read')) === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);

            try {
                await validForDeletion(id, context);
                await validatorUtil.validateData(
                    "validateForDelete",
                    deployment,
                    id);
                return true;
            } catch (error) {
                benignErrorReporter.reportError(error);
                return false;
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * validateDeploymentAfterReading - Check user authorization and validate record by ID after reading.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateDeploymentAfterReading: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'deployment', 'read')) === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);

            try {
                await validatorUtil.validateData(
                    "validateAfterRead",
                    deployment,
                    id);
                return true;
            } catch (error) {
                benignErrorReporter.reportError(error);
                return false;
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },
    /**
     * addDeployment - Check user authorization and creates a new record with data specified in the input argument.
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         New record created
     */
    addDeployment: async function(input, context) {
        let authorization = await checkAuthorization(context, 'deployment', 'create');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            let createdDeployment = await deployment.addOne(inputSanitized, benignErrorReporter);
            await createdDeployment.handleAssociations(inputSanitized, benignErrorReporter);
            return createdDeployment;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * bulkAddDeploymentCsv - Load csv file of records
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     */
    bulkAddDeploymentCsv: async function(_, context) {
        if (await checkAuthorization(context, 'deployment', 'create') === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return deployment.bulkAddCsv(context, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * deleteDeployment - Check user authorization and delete a record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to delete
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string}         Message indicating if deletion was successfull.
     */
    deleteDeployment: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'deployment', 'delete') === true) {
            if (await validForDeletion(id, context)) {
                let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
                return deployment.deleteOne(id, benignErrorReporter);
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * updateDeployment - Check user authorization and update the record specified in the input argument
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   record to update and new info to update
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Updated record
     */
    updateDeployment: async function(input, context) {
        let authorization = await checkAuthorization(context, 'deployment', 'update');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            let updatedDeployment = await deployment.updateOne(inputSanitized, benignErrorReporter);
            await updatedDeployment.handleAssociations(inputSanitized, benignErrorReporter);
            return updatedDeployment;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * bulkAssociateDeploymentWithDevice_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociateDeploymentWithDevice_id: async function(bulkAssociationInput, context) {
        let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                device_id
            }) => device_id)), models.physical_device);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), deployment);
        }
        return await deployment.bulkAssociateDeploymentWithDevice_id(bulkAssociationInput.bulkAssociationInput, benignErrorReporter);
    },
    /**
     * bulkAssociateDeploymentWithVisit_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociateDeploymentWithVisit_id: async function(bulkAssociationInput, context) {
        let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                visit_id
            }) => visit_id)), models.visit);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), deployment);
        }
        return await deployment.bulkAssociateDeploymentWithVisit_id(bulkAssociationInput.bulkAssociationInput, benignErrorReporter);
    },
    /**
     * bulkDisAssociateDeploymentWithDevice_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociateDeploymentWithDevice_id: async function(bulkAssociationInput, context) {
        let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                device_id
            }) => device_id)), models.physical_device);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), deployment);
        }
        return await deployment.bulkDisAssociateDeploymentWithDevice_id(bulkAssociationInput.bulkAssociationInput, benignErrorReporter);
    },
    /**
     * bulkDisAssociateDeploymentWithVisit_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociateDeploymentWithVisit_id: async function(bulkAssociationInput, context) {
        let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                visit_id
            }) => visit_id)), models.visit);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), deployment);
        }
        return await deployment.bulkDisAssociateDeploymentWithVisit_id(bulkAssociationInput.bulkAssociationInput, benignErrorReporter);
    },

    /**
     * csvTableTemplateDeployment - Returns table's template
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {Array}         Strings, one for header and one columns types
     */
    csvTableTemplateDeployment: async function(_, context) {
        if (await checkAuthorization(context, 'deployment', 'read') === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return deployment.csvTableTemplate(benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    }

}