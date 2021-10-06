/*
    Resolvers for basic CRUD operations
*/

const path = require('path');
const visit = require(path.join(__dirname, '..', 'models', 'index.js')).visit;
const helper = require('../utils/helper');
const checkAuthorization = require('../utils/check-authorization');
const fs = require('fs');
const os = require('os');
const resolvers = require(path.join(__dirname, 'index.js'));
const models = require(path.join(__dirname, '..', 'models', 'index.js'));
const globals = require('../config/globals');
const errorHelper = require('../utils/errors');

const associationArgsDef = {
    'addCalendar': 'calendar',
    'addUser_visit': 'user',
    'addCumulus_visit': 'cumulus',
    'addUnique_node_pristine': 'node',
    'addUnique_node_disturbed': 'node',
    'addDeployments': 'deployment'
}



/**
 * visit.prototype.calendar - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
visit.prototype.calendar = async function({
    search
}, context) {

    if (helper.isNotUndefinedAndNotNull(this.calendar_id)) {
        if (search === undefined || search === null) {
            return resolvers.readOneCalendar({
                [models.calendar.idAttribute()]: this.calendar_id
            }, context)
        } else {

            //build new search filter
            let nsearch = helper.addSearchField({
                "search": search,
                "field": models.calendar.idAttribute(),
                "value": this.calendar_id,
                "operator": "eq"
            });
            let found = (await resolvers.calendarsConnection({
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
 * visit.prototype.user_visit - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
visit.prototype.user_visit = async function({
    search
}, context) {

    if (helper.isNotUndefinedAndNotNull(this.user_id)) {
        if (search === undefined || search === null) {
            return resolvers.readOneUser({
                [models.user.idAttribute()]: this.user_id
            }, context)
        } else {

            //build new search filter
            let nsearch = helper.addSearchField({
                "search": search,
                "field": models.user.idAttribute(),
                "value": this.user_id,
                "operator": "eq"
            });
            let found = (await resolvers.usersConnection({
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
 * visit.prototype.cumulus_visit - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
visit.prototype.cumulus_visit = async function({
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
 * visit.prototype.unique_node_pristine - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
visit.prototype.unique_node_pristine = async function({
    search
}, context) {

    if (helper.isNotUndefinedAndNotNull(this.pristine_id)) {
        if (search === undefined || search === null) {
            return resolvers.readOneNode({
                [models.node.idAttribute()]: this.pristine_id
            }, context)
        } else {

            //build new search filter
            let nsearch = helper.addSearchField({
                "search": search,
                "field": models.node.idAttribute(),
                "value": this.pristine_id,
                "operator": "eq"
            });
            let found = (await resolvers.nodesConnection({
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
 * visit.prototype.unique_node_disturbed - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
visit.prototype.unique_node_disturbed = async function({
    search
}, context) {

    if (helper.isNotUndefinedAndNotNull(this.disturbed_id)) {
        if (search === undefined || search === null) {
            return resolvers.readOneNode({
                [models.node.idAttribute()]: this.disturbed_id
            }, context)
        } else {

            //build new search filter
            let nsearch = helper.addSearchField({
                "search": search,
                "field": models.node.idAttribute(),
                "value": this.disturbed_id,
                "operator": "eq"
            });
            let found = (await resolvers.nodesConnection({
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
 * visit.prototype.deploymentsFilter - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Offset and limit to get the records from and to respectively
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of associated records holding conditions specified by search, order and pagination argument
 */
visit.prototype.deploymentsFilter = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "visit_id",
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
 * visit.prototype.countFilteredDeployments - Count number of associated records that holds the conditions specified in the search argument
 *
 * @param  {object} {search} description
 * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}          Number of associated records that holds the conditions specified in the search argument
 */
visit.prototype.countFilteredDeployments = function({
    search
}, context) {

    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "visit_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.countDeployments({
        search: nsearch
    }, context);
}

/**
 * visit.prototype.deploymentsConnection - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
 */
visit.prototype.deploymentsConnection = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "visit_id",
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
visit.prototype.handleAssociations = async function(input, benignErrorReporter) {

    let promises_add = [];
    if (helper.isNonEmptyArray(input.addDeployments)) {
        promises_add.push(this.add_deployments(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.addCalendar)) {
        promises_add.push(this.add_calendar(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.addUser_visit)) {
        promises_add.push(this.add_user_visit(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.addCumulus_visit)) {
        promises_add.push(this.add_cumulus_visit(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.addUnique_node_pristine)) {
        promises_add.push(this.add_unique_node_pristine(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.addUnique_node_disturbed)) {
        promises_add.push(this.add_unique_node_disturbed(input, benignErrorReporter));
    }

    await Promise.all(promises_add);
    let promises_remove = [];
    if (helper.isNonEmptyArray(input.removeDeployments)) {
        promises_remove.push(this.remove_deployments(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.removeCalendar)) {
        promises_remove.push(this.remove_calendar(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.removeUser_visit)) {
        promises_remove.push(this.remove_user_visit(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.removeCumulus_visit)) {
        promises_remove.push(this.remove_cumulus_visit(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.removeUnique_node_pristine)) {
        promises_remove.push(this.remove_unique_node_pristine(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.removeUnique_node_disturbed)) {
        promises_remove.push(this.remove_unique_node_disturbed(input, benignErrorReporter));
    }

    await Promise.all(promises_remove);

}
/**
 * add_deployments - field Mutation for to_many associations to add
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
visit.prototype.add_deployments = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.addDeployments.map(associatedRecordId => {
        return {
            visit_id: this.getIdValue(),
            [models.deployment.idAttribute()]: associatedRecordId
        }
    });
    await models.deployment.bulkAssociateDeploymentWithVisit_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * add_calendar - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
visit.prototype.add_calendar = async function(input, benignErrorReporter) {
    await visit.add_calendar_id(this.getIdValue(), input.addCalendar, benignErrorReporter);
    this.calendar_id = input.addCalendar;
}

/**
 * add_user_visit - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
visit.prototype.add_user_visit = async function(input, benignErrorReporter) {
    await visit.add_user_id(this.getIdValue(), input.addUser_visit, benignErrorReporter);
    this.user_id = input.addUser_visit;
}

/**
 * add_cumulus_visit - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
visit.prototype.add_cumulus_visit = async function(input, benignErrorReporter) {
    await visit.add_cumulus_id(this.getIdValue(), input.addCumulus_visit, benignErrorReporter);
    this.cumulus_id = input.addCumulus_visit;
}

/**
 * add_unique_node_pristine - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
visit.prototype.add_unique_node_pristine = async function(input, benignErrorReporter) {
    await visit.add_pristine_id(this.getIdValue(), input.addUnique_node_pristine, benignErrorReporter);
    this.pristine_id = input.addUnique_node_pristine;
}

/**
 * add_unique_node_disturbed - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
visit.prototype.add_unique_node_disturbed = async function(input, benignErrorReporter) {
    await visit.add_disturbed_id(this.getIdValue(), input.addUnique_node_disturbed, benignErrorReporter);
    this.disturbed_id = input.addUnique_node_disturbed;
}

/**
 * remove_deployments - field Mutation for to_many associations to remove
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
visit.prototype.remove_deployments = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.removeDeployments.map(associatedRecordId => {
        return {
            visit_id: this.getIdValue(),
            [models.deployment.idAttribute()]: associatedRecordId
        }
    });
    await models.deployment.bulkDisAssociateDeploymentWithVisit_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * remove_calendar - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
visit.prototype.remove_calendar = async function(input, benignErrorReporter) {
    if (input.removeCalendar == this.calendar_id) {
        await visit.remove_calendar_id(this.getIdValue(), input.removeCalendar, benignErrorReporter);
        this.calendar_id = null;
    }
}

/**
 * remove_user_visit - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
visit.prototype.remove_user_visit = async function(input, benignErrorReporter) {
    if (input.removeUser_visit == this.user_id) {
        await visit.remove_user_id(this.getIdValue(), input.removeUser_visit, benignErrorReporter);
        this.user_id = null;
    }
}

/**
 * remove_cumulus_visit - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
visit.prototype.remove_cumulus_visit = async function(input, benignErrorReporter) {
    if (input.removeCumulus_visit == this.cumulus_id) {
        await visit.remove_cumulus_id(this.getIdValue(), input.removeCumulus_visit, benignErrorReporter);
        this.cumulus_id = null;
    }
}

/**
 * remove_unique_node_pristine - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
visit.prototype.remove_unique_node_pristine = async function(input, benignErrorReporter) {
    if (input.removeUnique_node_pristine == this.pristine_id) {
        await visit.remove_pristine_id(this.getIdValue(), input.removeUnique_node_pristine, benignErrorReporter);
        this.pristine_id = null;
    }
}

/**
 * remove_unique_node_disturbed - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
visit.prototype.remove_unique_node_disturbed = async function(input, benignErrorReporter) {
    if (input.removeUnique_node_disturbed == this.disturbed_id) {
        await visit.remove_disturbed_id(this.getIdValue(), input.removeUnique_node_disturbed, benignErrorReporter);
        this.disturbed_id = null;
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

    let visit = await resolvers.readOneVisit({
        id: id
    }, context);
    //check that record actually exists
    if (visit === null) throw new Error(`Record with ID = ${id} does not exist`);
    let promises_to_many = [];
    let promises_to_one = [];

    promises_to_many.push(visit.countFilteredDeployments({}, context));
    promises_to_one.push(visit.calendar({}, context));
    promises_to_one.push(visit.user_visit({}, context));
    promises_to_one.push(visit.cumulus_visit({}, context));
    promises_to_one.push(visit.unique_node_pristine({}, context));
    promises_to_one.push(visit.unique_node_disturbed({}, context));

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
        throw new Error(`visit with id ${id} has associated records and is NOT valid for deletion. Please clean up before you delete.`);
    }
    return true;
}

module.exports = {
    /**
     * visits - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Offset and limit to get the records from and to respectively
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records holding conditions specified by search, order and pagination argument
     */
    visits: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'visit', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(pagination.limit, context, "visits");
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await visit.readAll(search, order, pagination, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * visitsConnection - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
     */
    visitsConnection: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'visit', 'read') === true) {
            helper.checkCursorBasedPaginationArgument(pagination);
            let limit = helper.isNotUndefinedAndNotNull(pagination.first) ? pagination.first : pagination.last;
            helper.checkCountAndReduceRecordsLimit(limit, context, "visitsConnection");
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await visit.readAllCursor(search, order, pagination, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * readOneVisit - Check user authorization and return one record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to retrieve
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Record with id requested
     */
    readOneVisit: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'visit', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(1, context, "readOneVisit");
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await visit.readById(id, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * countVisits - Counts number of records that holds the conditions specified in the search argument
     *
     * @param  {object} {search} Search argument for filtering records
     * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {number}          Number of records that holds the conditions specified in the search argument
     */
    countVisits: async function({
        search
    }, context) {
        if (await checkAuthorization(context, 'visit', 'read') === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await visit.countRecords(search, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * vueTableVisit - Return table of records as needed for displaying a vuejs table
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Records with format as needed for displaying a vuejs table
     */
    vueTableVisit: async function(_, context) {
        if (await checkAuthorization(context, 'visit', 'read') === true) {
            return helper.vueTable(context.request, visit, ["id", "comments"]);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * addVisit - Check user authorization and creates a new record with data specified in the input argument.
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         New record created
     */
    addVisit: async function(input, context) {
        let authorization = await checkAuthorization(context, 'visit', 'create');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            let createdVisit = await visit.addOne(inputSanitized, benignErrorReporter);
            await createdVisit.handleAssociations(inputSanitized, benignErrorReporter);
            return createdVisit;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * bulkAddVisitCsv - Load csv file of records
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     */
    bulkAddVisitCsv: async function(_, context) {
        if (await checkAuthorization(context, 'visit', 'create') === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return visit.bulkAddCsv(context, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * deleteVisit - Check user authorization and delete a record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to delete
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string}         Message indicating if deletion was successfull.
     */
    deleteVisit: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'visit', 'delete') === true) {
            if (await validForDeletion(id, context)) {
                let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
                return visit.deleteOne(id, benignErrorReporter);
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * updateVisit - Check user authorization and update the record specified in the input argument
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   record to update and new info to update
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Updated record
     */
    updateVisit: async function(input, context) {
        let authorization = await checkAuthorization(context, 'visit', 'update');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            let updatedVisit = await visit.updateOne(inputSanitized, benignErrorReporter);
            await updatedVisit.handleAssociations(inputSanitized, benignErrorReporter);
            return updatedVisit;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * bulkAssociateVisitWithCalendar_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociateVisitWithCalendar_id: async function(bulkAssociationInput, context) {
        let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                calendar_id
            }) => calendar_id)), models.calendar);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), visit);
        }
        return await visit.bulkAssociateVisitWithCalendar_id(bulkAssociationInput.bulkAssociationInput, benignErrorReporter);
    },
    /**
     * bulkAssociateVisitWithUser_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociateVisitWithUser_id: async function(bulkAssociationInput, context) {
        let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                user_id
            }) => user_id)), models.user);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), visit);
        }
        return await visit.bulkAssociateVisitWithUser_id(bulkAssociationInput.bulkAssociationInput, benignErrorReporter);
    },
    /**
     * bulkAssociateVisitWithCumulus_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociateVisitWithCumulus_id: async function(bulkAssociationInput, context) {
        let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                cumulus_id
            }) => cumulus_id)), models.cumulus);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), visit);
        }
        return await visit.bulkAssociateVisitWithCumulus_id(bulkAssociationInput.bulkAssociationInput, benignErrorReporter);
    },
    /**
     * bulkAssociateVisitWithPristine_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociateVisitWithPristine_id: async function(bulkAssociationInput, context) {
        let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                pristine_id
            }) => pristine_id)), models.node);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), visit);
        }
        return await visit.bulkAssociateVisitWithPristine_id(bulkAssociationInput.bulkAssociationInput, benignErrorReporter);
    },
    /**
     * bulkAssociateVisitWithDisturbed_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociateVisitWithDisturbed_id: async function(bulkAssociationInput, context) {
        let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                disturbed_id
            }) => disturbed_id)), models.node);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), visit);
        }
        return await visit.bulkAssociateVisitWithDisturbed_id(bulkAssociationInput.bulkAssociationInput, benignErrorReporter);
    },
    /**
     * bulkDisAssociateVisitWithCalendar_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociateVisitWithCalendar_id: async function(bulkAssociationInput, context) {
        let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                calendar_id
            }) => calendar_id)), models.calendar);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), visit);
        }
        return await visit.bulkDisAssociateVisitWithCalendar_id(bulkAssociationInput.bulkAssociationInput, benignErrorReporter);
    },
    /**
     * bulkDisAssociateVisitWithUser_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociateVisitWithUser_id: async function(bulkAssociationInput, context) {
        let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                user_id
            }) => user_id)), models.user);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), visit);
        }
        return await visit.bulkDisAssociateVisitWithUser_id(bulkAssociationInput.bulkAssociationInput, benignErrorReporter);
    },
    /**
     * bulkDisAssociateVisitWithCumulus_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociateVisitWithCumulus_id: async function(bulkAssociationInput, context) {
        let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                cumulus_id
            }) => cumulus_id)), models.cumulus);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), visit);
        }
        return await visit.bulkDisAssociateVisitWithCumulus_id(bulkAssociationInput.bulkAssociationInput, benignErrorReporter);
    },
    /**
     * bulkDisAssociateVisitWithPristine_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociateVisitWithPristine_id: async function(bulkAssociationInput, context) {
        let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                pristine_id
            }) => pristine_id)), models.node);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), visit);
        }
        return await visit.bulkDisAssociateVisitWithPristine_id(bulkAssociationInput.bulkAssociationInput, benignErrorReporter);
    },
    /**
     * bulkDisAssociateVisitWithDisturbed_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociateVisitWithDisturbed_id: async function(bulkAssociationInput, context) {
        let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                disturbed_id
            }) => disturbed_id)), models.node);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), visit);
        }
        return await visit.bulkDisAssociateVisitWithDisturbed_id(bulkAssociationInput.bulkAssociationInput, benignErrorReporter);
    },

    /**
     * csvTableTemplateVisit - Returns table's template
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {Array}         Strings, one for header and one columns types
     */
    csvTableTemplateVisit: async function(_, context) {
        if (await checkAuthorization(context, 'visit', 'read') === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return visit.csvTableTemplate(benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    }

}