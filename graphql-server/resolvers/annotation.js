/*
    Resolvers for basic CRUD operations
*/

const path = require('path');
const annotation = require(path.join(__dirname, '..', 'models', 'index.js')).annotation;
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
    'addFileTo': 'file'
}



/**
 * annotation.prototype.fileTo - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
annotation.prototype.fileTo = async function({
    search
}, context) {

    if (helper.isNotUndefinedAndNotNull(this.file_id)) {
        if (search === undefined || search === null) {
            return resolvers.readOneFile({
                [models.file.idAttribute()]: this.file_id
            }, context)
        } else {

            //build new search filter
            let nsearch = helper.addSearchField({
                "search": search,
                "field": models.file.idAttribute(),
                "value": this.file_id,
                "operator": "eq"
            });
            let found = (await resolvers.filesConnection({
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
annotation.prototype.handleAssociations = async function(input, benignErrorReporter) {

    let promises_add = [];

    if (helper.isNotUndefinedAndNotNull(input.addFileTo)) {
        promises_add.push(this.add_fileTo(input, benignErrorReporter));
    }

    await Promise.all(promises_add);
    let promises_remove = [];

    if (helper.isNotUndefinedAndNotNull(input.removeFileTo)) {
        promises_remove.push(this.remove_fileTo(input, benignErrorReporter));
    }

    await Promise.all(promises_remove);

}
/**
 * add_fileTo - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
annotation.prototype.add_fileTo = async function(input, benignErrorReporter) {
    await annotation.add_file_id(this.getIdValue(), input.addFileTo, benignErrorReporter);
    this.file_id = input.addFileTo;
}

/**
 * remove_fileTo - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
annotation.prototype.remove_fileTo = async function(input, benignErrorReporter) {
    if (input.removeFileTo == this.file_id) {
        await annotation.remove_file_id(this.getIdValue(), input.removeFileTo, benignErrorReporter);
        this.file_id = null;
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

    let annotation = await resolvers.readOneAnnotation({
        id: id
    }, context);
    //check that record actually exists
    if (annotation === null) throw new Error(`Record with ID = ${id} does not exist`);
    let promises_to_many = [];
    let promises_to_one = [];
    let get_to_many_associated_fk = 0;
    promises_to_one.push(annotation.fileTo({}, context));


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
        throw new Error(`annotation with id ${id} has associated records with 'reject' reaction and is NOT valid for deletion. Please clean up before you delete.`);
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
    const annotation_record = await resolvers.readOneAnnotation({
            id: id
        },
        context
    );
    const pagi_first = globals.LIMIT_RECORDS;



}
module.exports = {
    /**
     * annotations - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Offset and limit to get the records from and to respectively
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records holding conditions specified by search, order and pagination argument
     */
    annotations: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'annotation', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(pagination.limit, context, "annotations");
            return await annotation.readAll(search, order, pagination, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * annotationsConnection - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
     */
    annotationsConnection: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'annotation', 'read') === true) {
            helper.checkCursorBasedPaginationArgument(pagination);
            let limit = helper.isNotUndefinedAndNotNull(pagination.first) ? pagination.first : pagination.last;
            helper.checkCountAndReduceRecordsLimit(limit, context, "annotationsConnection");
            return await annotation.readAllCursor(search, order, pagination, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * readOneAnnotation - Check user authorization and return one record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to retrieve
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Record with id requested
     */
    readOneAnnotation: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'annotation', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(1, context, "readOneAnnotation");
            return await annotation.readById(id, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * countAnnotations - Counts number of records that holds the conditions specified in the search argument
     *
     * @param  {object} {search} Search argument for filtering records
     * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {number}          Number of records that holds the conditions specified in the search argument
     */
    countAnnotations: async function({
        search
    }, context) {
        if (await checkAuthorization(context, 'annotation', 'read') === true) {
            return await annotation.countRecords(search, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * validateAnnotationForCreation - Check user authorization and validate input argument for creation.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateAnnotationForCreation: async (input, context) => {
        let authorization = await checkAuthorization(context, 'annotation', 'read');
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
                    annotation,
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
     * validateAnnotationForUpdating - Check user authorization and validate input argument for updating.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateAnnotationForUpdating: async (input, context) => {
        let authorization = await checkAuthorization(context, 'annotation', 'read');
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
                    annotation,
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
     * validateAnnotationForDeletion - Check user authorization and validate record by ID for deletion.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateAnnotationForDeletion: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'annotation', 'read')) === true) {
            try {
                await validForDeletion(id, context);
                await validatorUtil.validateData(
                    "validateForDelete",
                    annotation,
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
     * validateAnnotationAfterReading - Check user authorization and validate record by ID after reading.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateAnnotationAfterReading: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'annotation', 'read')) === true) {
            try {
                await validatorUtil.validateData(
                    "validateAfterRead",
                    annotation,
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
     * addAnnotation - Check user authorization and creates a new record with data specified in the input argument.
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         New record created
     */
    addAnnotation: async function(input, context) {
        let authorization = await checkAuthorization(context, 'annotation', 'create');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let createdAnnotation = await annotation.addOne(inputSanitized, context.benignErrors);
            await createdAnnotation.handleAssociations(inputSanitized, context.benignErrors);
            return createdAnnotation;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * deleteAnnotation - Check user authorization and delete a record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to delete
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string}         Message indicating if deletion was successfull.
     */
    deleteAnnotation: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'annotation', 'delete') === true) {
            if (await validForDeletion(id, context)) {
                await updateAssociations(id, context);
                return annotation.deleteOne(id, context.benignErrors);
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * updateAnnotation - Check user authorization and update the record specified in the input argument
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   record to update and new info to update
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Updated record
     */
    updateAnnotation: async function(input, context) {
        let authorization = await checkAuthorization(context, 'annotation', 'update');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let updatedAnnotation = await annotation.updateOne(inputSanitized, context.benignErrors);
            await updatedAnnotation.handleAssociations(inputSanitized, context.benignErrors);
            return updatedAnnotation;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * bulkAssociateAnnotationWithFile_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociateAnnotationWithFile_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                file_id
            }) => file_id)), models.file);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), annotation);
        }
        return await annotation.bulkAssociateAnnotationWithFile_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },
    /**
     * bulkDisAssociateAnnotationWithFile_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociateAnnotationWithFile_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                file_id
            }) => file_id)), models.file);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), annotation);
        }
        return await annotation.bulkDisAssociateAnnotationWithFile_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },

    /**
     * csvTableTemplateAnnotation - Returns table's template
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {Array}         Strings, one for header and one columns types
     */
    csvTableTemplateAnnotation: async function(_, context) {
        if (await checkAuthorization(context, 'annotation', 'read') === true) {
            return annotation.csvTableTemplate(context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * annotationsZendroDefinition - Return data model definition
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {GraphQLJSONObject}        Data model definition
     */
    annotationsZendroDefinition: async function(_, context) {
        if ((await checkAuthorization(context, "annotation", "read")) === true) {
            return annotation.definition;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

}