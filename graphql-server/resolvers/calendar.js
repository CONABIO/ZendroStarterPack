/*
    Resolvers for basic CRUD operations
*/

const path = require('path');
const calendar = require(path.join(__dirname, '..', 'models', 'index.js')).calendar;
const helper = require('../utils/helper');
const checkAuthorization = require('../utils/check-authorization');
const fs = require('fs');
const os = require('os');
const resolvers = require(path.join(__dirname, 'index.js'));
const models = require(path.join(__dirname, '..', 'models', 'index.js'));
const globals = require('../config/globals');
const errorHelper = require('../utils/errors');

const associationArgsDef = {
    'addUnique_node': 'node',
    'addVisits': 'visit'
}



/**
 * calendar.prototype.unique_node - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
calendar.prototype.unique_node = async function({
    search
}, context) {

    if (helper.isNotUndefinedAndNotNull(this.node_id)) {
        if (search === undefined || search === null) {
            return resolvers.readOneNode({
                [models.node.idAttribute()]: this.node_id
            }, context)
        } else {

            //build new search filter
            let nsearch = helper.addSearchField({
                "search": search,
                "field": models.node.idAttribute(),
                "value": this.node_id,
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
 * calendar.prototype.visitsFilter - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Offset and limit to get the records from and to respectively
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of associated records holding conditions specified by search, order and pagination argument
 */
calendar.prototype.visitsFilter = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "calendar_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });

    return resolvers.visits({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}

/**
 * calendar.prototype.countFilteredVisits - Count number of associated records that holds the conditions specified in the search argument
 *
 * @param  {object} {search} description
 * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}          Number of associated records that holds the conditions specified in the search argument
 */
calendar.prototype.countFilteredVisits = function({
    search
}, context) {

    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "calendar_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.countVisits({
        search: nsearch
    }, context);
}

/**
 * calendar.prototype.visitsConnection - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
 */
calendar.prototype.visitsConnection = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "calendar_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.visitsConnection({
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
calendar.prototype.handleAssociations = async function(input, benignErrorReporter) {

    let promises_add = [];
    if (helper.isNonEmptyArray(input.addVisits)) {
        promises_add.push(this.add_visits(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.addUnique_node)) {
        promises_add.push(this.add_unique_node(input, benignErrorReporter));
    }

    await Promise.all(promises_add);
    let promises_remove = [];
    if (helper.isNonEmptyArray(input.removeVisits)) {
        promises_remove.push(this.remove_visits(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.removeUnique_node)) {
        promises_remove.push(this.remove_unique_node(input, benignErrorReporter));
    }

    await Promise.all(promises_remove);

}
/**
 * add_visits - field Mutation for to_many associations to add
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
calendar.prototype.add_visits = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.addVisits.map(associatedRecordId => {
        return {
            calendar_id: this.getIdValue(),
            [models.visit.idAttribute()]: associatedRecordId
        }
    });
    await models.visit.bulkAssociateVisitWithCalendar_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * add_unique_node - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
calendar.prototype.add_unique_node = async function(input, benignErrorReporter) {
    await calendar.add_node_id(this.getIdValue(), input.addUnique_node, benignErrorReporter);
    this.node_id = input.addUnique_node;
}

/**
 * remove_visits - field Mutation for to_many associations to remove
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
calendar.prototype.remove_visits = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.removeVisits.map(associatedRecordId => {
        return {
            calendar_id: this.getIdValue(),
            [models.visit.idAttribute()]: associatedRecordId
        }
    });
    await models.visit.bulkDisAssociateVisitWithCalendar_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * remove_unique_node - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
calendar.prototype.remove_unique_node = async function(input, benignErrorReporter) {
    if (input.removeUnique_node == this.node_id) {
        await calendar.remove_node_id(this.getIdValue(), input.removeUnique_node, benignErrorReporter);
        this.node_id = null;
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

    let calendar = await resolvers.readOneCalendar({
        id: id
    }, context);
    //check that record actually exists
    if (calendar === null) throw new Error(`Record with ID = ${id} does not exist`);
    let promises_to_many = [];
    let promises_to_one = [];

    promises_to_many.push(calendar.countFilteredVisits({}, context));
    promises_to_one.push(calendar.unique_node({}, context));

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
        throw new Error(`calendar with id ${id} has associated records and is NOT valid for deletion. Please clean up before you delete.`);
    }
    return true;
}

module.exports = {
    /**
     * calendars - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Offset and limit to get the records from and to respectively
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records holding conditions specified by search, order and pagination argument
     */
    calendars: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'calendar', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(pagination.limit, context, "calendars");
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await calendar.readAll(search, order, pagination, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * calendarsConnection - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
     */
    calendarsConnection: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'calendar', 'read') === true) {
            helper.checkCursorBasedPaginationArgument(pagination);
            let limit = helper.isNotUndefinedAndNotNull(pagination.first) ? pagination.first : pagination.last;
            helper.checkCountAndReduceRecordsLimit(limit, context, "calendarsConnection");
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await calendar.readAllCursor(search, order, pagination, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * readOneCalendar - Check user authorization and return one record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to retrieve
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Record with id requested
     */
    readOneCalendar: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'calendar', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(1, context, "readOneCalendar");
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await calendar.readById(id, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * countCalendars - Counts number of records that holds the conditions specified in the search argument
     *
     * @param  {object} {search} Search argument for filtering records
     * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {number}          Number of records that holds the conditions specified in the search argument
     */
    countCalendars: async function({
        search
    }, context) {
        if (await checkAuthorization(context, 'calendar', 'read') === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await calendar.countRecords(search, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * vueTableCalendar - Return table of records as needed for displaying a vuejs table
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Records with format as needed for displaying a vuejs table
     */
    vueTableCalendar: async function(_, context) {
        if (await checkAuthorization(context, 'calendar', 'read') === true) {
            return helper.vueTable(context.request, calendar, ["id"]);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * addCalendar - Check user authorization and creates a new record with data specified in the input argument.
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         New record created
     */
    addCalendar: async function(input, context) {
        let authorization = await checkAuthorization(context, 'calendar', 'create');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            let createdCalendar = await calendar.addOne(inputSanitized, benignErrorReporter);
            await createdCalendar.handleAssociations(inputSanitized, benignErrorReporter);
            return createdCalendar;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * bulkAddCalendarCsv - Load csv file of records
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     */
    bulkAddCalendarCsv: async function(_, context) {
        if (await checkAuthorization(context, 'calendar', 'create') === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return calendar.bulkAddCsv(context, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * deleteCalendar - Check user authorization and delete a record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to delete
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string}         Message indicating if deletion was successfull.
     */
    deleteCalendar: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'calendar', 'delete') === true) {
            if (await validForDeletion(id, context)) {
                let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
                return calendar.deleteOne(id, benignErrorReporter);
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * updateCalendar - Check user authorization and update the record specified in the input argument
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   record to update and new info to update
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Updated record
     */
    updateCalendar: async function(input, context) {
        let authorization = await checkAuthorization(context, 'calendar', 'update');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            let updatedCalendar = await calendar.updateOne(inputSanitized, benignErrorReporter);
            await updatedCalendar.handleAssociations(inputSanitized, benignErrorReporter);
            return updatedCalendar;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * bulkAssociateCalendarWithNode_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociateCalendarWithNode_id: async function(bulkAssociationInput, context) {
        let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                node_id
            }) => node_id)), models.node);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), calendar);
        }
        return await calendar.bulkAssociateCalendarWithNode_id(bulkAssociationInput.bulkAssociationInput, benignErrorReporter);
    },
    /**
     * bulkDisAssociateCalendarWithNode_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociateCalendarWithNode_id: async function(bulkAssociationInput, context) {
        let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                node_id
            }) => node_id)), models.node);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), calendar);
        }
        return await calendar.bulkDisAssociateCalendarWithNode_id(bulkAssociationInput.bulkAssociationInput, benignErrorReporter);
    },

    /**
     * csvTableTemplateCalendar - Returns table's template
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {Array}         Strings, one for header and one columns types
     */
    csvTableTemplateCalendar: async function(_, context) {
        if (await checkAuthorization(context, 'calendar', 'read') === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return calendar.csvTableTemplate(benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    }

}