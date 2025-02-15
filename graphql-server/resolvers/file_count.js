/*
    Resolvers for basic CRUD operations
*/

const path = require('path');
const file_count = require(path.join(__dirname, '..', 'models', 'index.js')).file_count;
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
    'addCumulus_files': 'cumulus'
}



/**
 * file_count.prototype.cumulus_files - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
file_count.prototype.cumulus_files = async function({
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
 * handleAssociations - handles the given associations in the create and update case.
 *
 * @param {object} input   Info of each field to create the new record
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
file_count.prototype.handleAssociations = async function(input, benignErrorReporter) {

    let promises_add = [];

    if (helper.isNotUndefinedAndNotNull(input.addCumulus_files)) {
        promises_add.push(this.add_cumulus_files(input, benignErrorReporter));
    }

    await Promise.all(promises_add);
    let promises_remove = [];

    if (helper.isNotUndefinedAndNotNull(input.removeCumulus_files)) {
        promises_remove.push(this.remove_cumulus_files(input, benignErrorReporter));
    }

    await Promise.all(promises_remove);

}
/**
 * add_cumulus_files - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
file_count.prototype.add_cumulus_files = async function(input, benignErrorReporter) {
    await file_count.add_cumulus_id(this.getIdValue(), input.addCumulus_files, benignErrorReporter);
    this.cumulus_id = input.addCumulus_files;
}

/**
 * remove_cumulus_files - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
file_count.prototype.remove_cumulus_files = async function(input, benignErrorReporter) {
    if (input.removeCumulus_files == this.cumulus_id) {
        await file_count.remove_cumulus_id(this.getIdValue(), input.removeCumulus_files, benignErrorReporter);
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

    let file_count = await resolvers.readOneFile_count({
        id: id
    }, context);
    //check that record actually exists
    if (file_count === null) throw new Error(`Record with ID = ${id} does not exist`);
    let promises_to_many = [];
    let promises_to_one = [];
    let get_to_many_associated_fk = 0;
    promises_to_one.push(file_count.cumulus_files({}, context));


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
        throw new Error(`file_count with id ${id} has associated records with 'reject' reaction and is NOT valid for deletion. Please clean up before you delete.`);
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
    const file_count_record = await resolvers.readOneFile_count({
            id: id
        },
        context
    );
    const pagi_first = globals.LIMIT_RECORDS;



}
module.exports = {
    /**
     * file_counts - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Offset and limit to get the records from and to respectively
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records holding conditions specified by search, order and pagination argument
     */
    file_counts: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'file_count', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(pagination.limit, context, "file_counts");
            return await file_count.readAll(search, order, pagination, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * file_countsConnection - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
     */
    file_countsConnection: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'file_count', 'read') === true) {
            helper.checkCursorBasedPaginationArgument(pagination);
            let limit = helper.isNotUndefinedAndNotNull(pagination.first) ? pagination.first : pagination.last;
            helper.checkCountAndReduceRecordsLimit(limit, context, "file_countsConnection");
            return await file_count.readAllCursor(search, order, pagination, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * readOneFile_count - Check user authorization and return one record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to retrieve
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Record with id requested
     */
    readOneFile_count: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'file_count', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(1, context, "readOneFile_count");
            return await file_count.readById(id, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * countFile_counts - Counts number of records that holds the conditions specified in the search argument
     *
     * @param  {object} {search} Search argument for filtering records
     * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {number}          Number of records that holds the conditions specified in the search argument
     */
    countFile_counts: async function({
        search
    }, context) {
        if (await checkAuthorization(context, 'file_count', 'read') === true) {
            return await file_count.countRecords(search, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * validateFile_countForCreation - Check user authorization and validate input argument for creation.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateFile_countForCreation: async (input, context) => {
        let authorization = await checkAuthorization(context, 'file_count', 'read');
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
                    file_count,
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
     * validateFile_countForUpdating - Check user authorization and validate input argument for updating.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateFile_countForUpdating: async (input, context) => {
        let authorization = await checkAuthorization(context, 'file_count', 'read');
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
                    file_count,
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
     * validateFile_countForDeletion - Check user authorization and validate record by ID for deletion.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateFile_countForDeletion: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'file_count', 'read')) === true) {
            try {
                await validForDeletion(id, context);
                await validatorUtil.validateData(
                    "validateForDelete",
                    file_count,
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
     * validateFile_countAfterReading - Check user authorization and validate record by ID after reading.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateFile_countAfterReading: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'file_count', 'read')) === true) {
            try {
                await validatorUtil.validateData(
                    "validateAfterRead",
                    file_count,
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
     * addFile_count - Check user authorization and creates a new record with data specified in the input argument.
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         New record created
     */
    addFile_count: async function(input, context) {
        let authorization = await checkAuthorization(context, 'file_count', 'create');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let createdFile_count = await file_count.addOne(inputSanitized, context.benignErrors);
            await createdFile_count.handleAssociations(inputSanitized, context.benignErrors);
            return createdFile_count;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * deleteFile_count - Check user authorization and delete a record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to delete
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string}         Message indicating if deletion was successfull.
     */
    deleteFile_count: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'file_count', 'delete') === true) {
            if (await validForDeletion(id, context)) {
                await updateAssociations(id, context);
                return file_count.deleteOne(id, context.benignErrors);
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * updateFile_count - Check user authorization and update the record specified in the input argument
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   record to update and new info to update
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Updated record
     */
    updateFile_count: async function(input, context) {
        let authorization = await checkAuthorization(context, 'file_count', 'update');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let updatedFile_count = await file_count.updateOne(inputSanitized, context.benignErrors);
            await updatedFile_count.handleAssociations(inputSanitized, context.benignErrors);
            return updatedFile_count;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * bulkAssociateFile_countWithCumulus_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociateFile_countWithCumulus_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                cumulus_id
            }) => cumulus_id)), models.cumulus);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), file_count);
        }
        return await file_count.bulkAssociateFile_countWithCumulus_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },
    /**
     * bulkDisAssociateFile_countWithCumulus_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociateFile_countWithCumulus_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                cumulus_id
            }) => cumulus_id)), models.cumulus);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), file_count);
        }
        return await file_count.bulkDisAssociateFile_countWithCumulus_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },

    /**
     * csvTableTemplateFile_count - Returns table's template
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {Array}         Strings, one for header and one columns types
     */
    csvTableTemplateFile_count: async function(_, context) {
        if (await checkAuthorization(context, 'file_count', 'read') === true) {
            return file_count.csvTableTemplate(context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * file_countsZendroDefinition - Return data model definition
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {GraphQLJSONObject}        Data model definition
     */
    file_countsZendroDefinition: async function(_, context) {
        if ((await checkAuthorization(context, "file_count", "read")) === true) {
            return file_count.definition;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

}