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
const validatorUtil = require("../utils/validatorUtil");
const associationArgsDef = {
    'addVisits': 'visit'
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

    await Promise.all(promises_add);
    let promises_remove = [];
    if (helper.isNonEmptyArray(input.removeVisits)) {
        promises_remove.push(this.remove_visits(input, benignErrorReporter));
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
            return helper.vueTable(context.request, calendar, ["id", "sipecam_year"]);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * validateCalendarForCreation - Check user authorization and validate input argument for creation.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateCalendarForCreation: async (input, context) => {
        let authorization = await checkAuthorization(context, 'calendar', 'read');
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
                    calendar,
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
     * validateCalendarForUpdating - Check user authorization and validate input argument for updating.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateCalendarForUpdating: async (input, context) => {
        let authorization = await checkAuthorization(context, 'calendar', 'read');
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
                    calendar,
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
     * validateCalendarForDeletion - Check user authorization and validate record by ID for deletion.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateCalendarForDeletion: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'calendar', 'read')) === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);

            try {
                await validForDeletion(id, context);
                await validatorUtil.validateData(
                    "validateForDelete",
                    calendar,
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
     * validateCalendarAfterReading - Check user authorization and validate record by ID after reading.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateCalendarAfterReading: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'calendar', 'read')) === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);

            try {
                await validatorUtil.validateData(
                    "validateAfterRead",
                    calendar,
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