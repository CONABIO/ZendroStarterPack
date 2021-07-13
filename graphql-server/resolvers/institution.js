/*
    Resolvers for basic CRUD operations
*/

const path = require('path');
const institution = require(path.join(__dirname, '..', 'models', 'index.js')).institution;
const helper = require('../utils/helper');
const checkAuthorization = require('../utils/check-authorization');
const fs = require('fs');
const os = require('os');
const resolvers = require(path.join(__dirname, 'index.js'));
const models = require(path.join(__dirname, '..', 'models', 'index.js'));
const globals = require('../config/globals');
const errorHelper = require('../utils/errors');

const associationArgsDef = {
    'addAssociated_cumulus': 'cumulus'
}




/**
 * institution.prototype.associated_cumulusFilter - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Offset and limit to get the records from and to respectively
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of associated records holding conditions specified by search, order and pagination argument
 */
institution.prototype.associated_cumulusFilter = function({
    search,
    order,
    pagination
}, context) {


    //return an empty response if the foreignKey Array is empty, no need to query the database
    if (!Array.isArray(this.cumulus_ids) || this.cumulus_ids.length === 0) {
        return [];
    }
    let nsearch = helper.addSearchField({
        "search": search,
        "field": models.cumulus.idAttribute(),
        "value": this.cumulus_ids.join(','),
        "valueType": "Array",
        "operator": "in"
    });
    return resolvers.cumulus({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}

/**
 * institution.prototype.countFilteredAssociated_cumulus - Count number of associated records that holds the conditions specified in the search argument
 *
 * @param  {object} {search} description
 * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}          Number of associated records that holds the conditions specified in the search argument
 */
institution.prototype.countFilteredAssociated_cumulus = function({
    search
}, context) {


    //return 0 if the foreignKey Array is empty, no need to query the database
    if (!Array.isArray(this.cumulus_ids) || this.cumulus_ids.length === 0) {
        return 0;
    }

    let nsearch = helper.addSearchField({
        "search": search,
        "field": models.cumulus.idAttribute(),
        "value": this.cumulus_ids.join(','),
        "valueType": "Array",
        "operator": "in"
    });

    return resolvers.countCumulus({
        search: nsearch
    }, context);
}

/**
 * institution.prototype.associated_cumulusConnection - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
 */
institution.prototype.associated_cumulusConnection = function({
    search,
    order,
    pagination
}, context) {


    //return an empty response if the foreignKey Array is empty, no need to query the database
    if (!Array.isArray(this.cumulus_ids) || this.cumulus_ids.length === 0) {
        return {
            edges: [],
            cumulus: [],
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
        "field": models.cumulus.idAttribute(),
        "value": this.cumulus_ids.join(','),
        "valueType": "Array",
        "operator": "in"
    });
    return resolvers.cumulusConnection({
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
institution.prototype.handleAssociations = async function(input, benignErrorReporter) {

    let promises_add = [];
    if (helper.isNonEmptyArray(input.addAssociated_cumulus)) {
        promises_add.push(this.add_associated_cumulus(input, benignErrorReporter));
    }

    await Promise.all(promises_add);
    let promises_remove = [];
    if (helper.isNonEmptyArray(input.removeAssociated_cumulus)) {
        promises_remove.push(this.remove_associated_cumulus(input, benignErrorReporter));
    }

    await Promise.all(promises_remove);

}
/**
 * add_associated_cumulus - field Mutation for to_many associations to add
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
institution.prototype.add_associated_cumulus = async function(input, benignErrorReporter) {

    await institution.add_cumulus_ids(this.getIdValue(), input.addAssociated_cumulus, benignErrorReporter);
    this.cumulus_ids = helper.unionIds(this.cumulus_ids, input.addAssociated_cumulus);
}

/**
 * remove_associated_cumulus - field Mutation for to_many associations to remove
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
institution.prototype.remove_associated_cumulus = async function(input, benignErrorReporter) {

    await institution.remove_cumulus_ids(this.getIdValue(), input.removeAssociated_cumulus, benignErrorReporter);
    this.cumulus_ids = helper.differenceIds(this.cumulus_ids, input.removeAssociated_cumulus);
}



/**
 * countAllAssociatedRecords - Count records associated with another given record
 *
 * @param  {ID} id      Id of the record which the associations will be counted
 * @param  {objec} context Default context by resolver
 * @return {Int}         Number of associated records
 */
async function countAllAssociatedRecords(id, context) {

    let institution = await resolvers.readOneInstitution({
        id: id
    }, context);
    //check that record actually exists
    if (institution === null) throw new Error(`Record with ID = ${id} does not exist`);
    let promises_to_many = [];
    let promises_to_one = [];

    promises_to_many.push(institution.countFilteredAssociated_cumulus({}, context));

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
        throw new Error(`institution with id ${id} has associated records and is NOT valid for deletion. Please clean up before you delete.`);
    }
    return true;
}

module.exports = {
    /**
     * institutions - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Offset and limit to get the records from and to respectively
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records holding conditions specified by search, order and pagination argument
     */
    institutions: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'institution', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(pagination.limit, context, "institutions");
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await institution.readAll(search, order, pagination, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * institutionsConnection - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
     */
    institutionsConnection: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'institution', 'read') === true) {
            helper.checkCursorBasedPaginationArgument(pagination);
            let limit = helper.isNotUndefinedAndNotNull(pagination.first) ? pagination.first : pagination.last;
            helper.checkCountAndReduceRecordsLimit(limit, context, "institutionsConnection");
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await institution.readAllCursor(search, order, pagination, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * readOneInstitution - Check user authorization and return one record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to retrieve
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Record with id requested
     */
    readOneInstitution: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'institution', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(1, context, "readOneInstitution");
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await institution.readById(id, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * countInstitutions - Counts number of records that holds the conditions specified in the search argument
     *
     * @param  {object} {search} Search argument for filtering records
     * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {number}          Number of records that holds the conditions specified in the search argument
     */
    countInstitutions: async function({
        search
    }, context) {
        if (await checkAuthorization(context, 'institution', 'read') === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await institution.countRecords(search, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * vueTableInstitution - Return table of records as needed for displaying a vuejs table
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Records with format as needed for displaying a vuejs table
     */
    vueTableInstitution: async function(_, context) {
        if (await checkAuthorization(context, 'institution', 'read') === true) {
            return helper.vueTable(context.request, institution, ["id", "name", "address"]);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * addInstitution - Check user authorization and creates a new record with data specified in the input argument.
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         New record created
     */
    addInstitution: async function(input, context) {
        let authorization = await checkAuthorization(context, 'institution', 'create');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            let createdInstitution = await institution.addOne(inputSanitized, benignErrorReporter);
            await createdInstitution.handleAssociations(inputSanitized, benignErrorReporter);
            return createdInstitution;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * bulkAddInstitutionCsv - Load csv file of records
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     */
    bulkAddInstitutionCsv: async function(_, context) {
        if (await checkAuthorization(context, 'institution', 'create') === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return institution.bulkAddCsv(context, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * deleteInstitution - Check user authorization and delete a record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to delete
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string}         Message indicating if deletion was successfull.
     */
    deleteInstitution: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'institution', 'delete') === true) {
            if (await validForDeletion(id, context)) {
                let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
                return institution.deleteOne(id, benignErrorReporter);
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * updateInstitution - Check user authorization and update the record specified in the input argument
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   record to update and new info to update
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Updated record
     */
    updateInstitution: async function(input, context) {
        let authorization = await checkAuthorization(context, 'institution', 'update');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            let updatedInstitution = await institution.updateOne(inputSanitized, benignErrorReporter);
            await updatedInstitution.handleAssociations(inputSanitized, benignErrorReporter);
            return updatedInstitution;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },


    /**
     * csvTableTemplateInstitution - Returns table's template
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {Array}         Strings, one for header and one columns types
     */
    csvTableTemplateInstitution: async function(_, context) {
        if (await checkAuthorization(context, 'institution', 'read') === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return institution.csvTableTemplate(benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    }

}