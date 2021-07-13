/*
    Resolvers for basic CRUD operations
*/

const path = require('path');
const cumulus_criteria = require(path.join(__dirname, '..', 'models', 'index.js')).cumulus_criteria;
const helper = require('../utils/helper');
const checkAuthorization = require('../utils/check-authorization');
const fs = require('fs');
const os = require('os');
const resolvers = require(path.join(__dirname, 'index.js'));
const models = require(path.join(__dirname, '..', 'models', 'index.js'));
const globals = require('../config/globals');
const errorHelper = require('../utils/errors');

const associationArgsDef = {
    'addUnique_cumulus': 'cumulus'
}



/**
 * cumulus_criteria.prototype.unique_cumulus - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
cumulus_criteria.prototype.unique_cumulus = async function({
    search
}, context) {
    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "criteria_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });

    let found = (await resolvers.cumulusConnection({
        search: nsearch,
        pagination: {
            first: 2
        }
    }, context)).edges;
    if (found.length > 0) {
        if (found.length > 1) {
            context.benignErrors.push(new Error(
                `Not unique "to_one" association Error: Found > 1 cumulus matching cumulus_criteria with id ${this.getIdValue()}. Consider making this a "to_many" association, or using unique constraints, or moving the foreign key into the cumulus_criteria model. Returning first cumulus.`
            ));
        }
        return found[0].node;
    }
    return null;
}





/**
 * handleAssociations - handles the given associations in the create and update case.
 *
 * @param {object} input   Info of each field to create the new record
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
cumulus_criteria.prototype.handleAssociations = async function(input, benignErrorReporter) {

    let promises_add = [];

    if (helper.isNotUndefinedAndNotNull(input.addUnique_cumulus)) {
        promises_add.push(this.add_unique_cumulus(input, benignErrorReporter));
    }

    await Promise.all(promises_add);
    let promises_remove = [];

    if (helper.isNotUndefinedAndNotNull(input.removeUnique_cumulus)) {
        promises_remove.push(this.remove_unique_cumulus(input, benignErrorReporter));
    }

    await Promise.all(promises_remove);

}
/**
 * add_unique_cumulus - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
cumulus_criteria.prototype.add_unique_cumulus = async function(input, benignErrorReporter) {
    await models.cumulus.add_criteria_id(input.addUnique_cumulus, this.getIdValue(), benignErrorReporter);
}

/**
 * remove_unique_cumulus - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
cumulus_criteria.prototype.remove_unique_cumulus = async function(input, benignErrorReporter) {
    await models.cumulus.remove_criteria_id(input.removeUnique_cumulus, this.getIdValue(), benignErrorReporter);
}



/**
 * countAllAssociatedRecords - Count records associated with another given record
 *
 * @param  {ID} id      Id of the record which the associations will be counted
 * @param  {objec} context Default context by resolver
 * @return {Int}         Number of associated records
 */
async function countAllAssociatedRecords(id, context) {

    let cumulus_criteria = await resolvers.readOneCumulus_criteria({
        id: id
    }, context);
    //check that record actually exists
    if (cumulus_criteria === null) throw new Error(`Record with ID = ${id} does not exist`);
    let promises_to_many = [];
    let promises_to_one = [];

    promises_to_one.push(cumulus_criteria.unique_cumulus({}, context));

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
        throw new Error(`cumulus_criteria with id ${id} has associated records and is NOT valid for deletion. Please clean up before you delete.`);
    }
    return true;
}

module.exports = {
    /**
     * cumulus_criteria - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Offset and limit to get the records from and to respectively
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records holding conditions specified by search, order and pagination argument
     */
    cumulus_criteria: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'cumulus_criteria', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(pagination.limit, context, "cumulus_criteria");
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await cumulus_criteria.readAll(search, order, pagination, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * cumulus_criteriaConnection - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
     */
    cumulus_criteriaConnection: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'cumulus_criteria', 'read') === true) {
            helper.checkCursorBasedPaginationArgument(pagination);
            let limit = helper.isNotUndefinedAndNotNull(pagination.first) ? pagination.first : pagination.last;
            helper.checkCountAndReduceRecordsLimit(limit, context, "cumulus_criteriaConnection");
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await cumulus_criteria.readAllCursor(search, order, pagination, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * readOneCumulus_criteria - Check user authorization and return one record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to retrieve
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Record with id requested
     */
    readOneCumulus_criteria: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'cumulus_criteria', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(1, context, "readOneCumulus_criteria");
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await cumulus_criteria.readById(id, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * countCumulus_criteria - Counts number of records that holds the conditions specified in the search argument
     *
     * @param  {object} {search} Search argument for filtering records
     * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {number}          Number of records that holds the conditions specified in the search argument
     */
    countCumulus_criteria: async function({
        search
    }, context) {
        if (await checkAuthorization(context, 'cumulus_criteria', 'read') === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await cumulus_criteria.countRecords(search, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * vueTableCumulus_criteria - Return table of records as needed for displaying a vuejs table
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Records with format as needed for displaying a vuejs table
     */
    vueTableCumulus_criteria: async function(_, context) {
        if (await checkAuthorization(context, 'cumulus_criteria', 'read') === true) {
            return helper.vueTable(context.request, cumulus_criteria, ["id", "name"]);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * addCumulus_criteria - Check user authorization and creates a new record with data specified in the input argument.
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         New record created
     */
    addCumulus_criteria: async function(input, context) {
        let authorization = await checkAuthorization(context, 'cumulus_criteria', 'create');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            let createdCumulus_criteria = await cumulus_criteria.addOne(inputSanitized, benignErrorReporter);
            await createdCumulus_criteria.handleAssociations(inputSanitized, benignErrorReporter);
            return createdCumulus_criteria;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * bulkAddCumulus_criteriaCsv - Load csv file of records
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     */
    bulkAddCumulus_criteriaCsv: async function(_, context) {
        if (await checkAuthorization(context, 'cumulus_criteria', 'create') === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return cumulus_criteria.bulkAddCsv(context, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * deleteCumulus_criteria - Check user authorization and delete a record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to delete
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string}         Message indicating if deletion was successfull.
     */
    deleteCumulus_criteria: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'cumulus_criteria', 'delete') === true) {
            if (await validForDeletion(id, context)) {
                let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
                return cumulus_criteria.deleteOne(id, benignErrorReporter);
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * updateCumulus_criteria - Check user authorization and update the record specified in the input argument
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   record to update and new info to update
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Updated record
     */
    updateCumulus_criteria: async function(input, context) {
        let authorization = await checkAuthorization(context, 'cumulus_criteria', 'update');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            let updatedCumulus_criteria = await cumulus_criteria.updateOne(inputSanitized, benignErrorReporter);
            await updatedCumulus_criteria.handleAssociations(inputSanitized, benignErrorReporter);
            return updatedCumulus_criteria;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },


    /**
     * csvTableTemplateCumulus_criteria - Returns table's template
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {Array}         Strings, one for header and one columns types
     */
    csvTableTemplateCumulus_criteria: async function(_, context) {
        if (await checkAuthorization(context, 'cumulus_criteria', 'read') === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return cumulus_criteria.csvTableTemplate(benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    }

}