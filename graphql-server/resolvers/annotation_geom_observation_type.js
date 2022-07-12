/*
    Resolvers for basic CRUD operations
*/

const path = require('path');
const annotation_geom_observation_type = require(path.join(__dirname, '..', 'models', 'index.js')).annotation_geom_observation_type;
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
    'addFileTo': 'file',
    'addModel': 'model_info'
}



/**
 * annotation_geom_observation_type.prototype.fileTo - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
annotation_geom_observation_type.prototype.fileTo = async function({
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
 * annotation_geom_observation_type.prototype.model - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
annotation_geom_observation_type.prototype.model = async function({
    search
}, context) {

    if (helper.isNotUndefinedAndNotNull(this.model_id)) {
        if (search === undefined || search === null) {
            return resolvers.readOneModel_info({
                [models.model_info.idAttribute()]: this.model_id
            }, context)
        } else {

            //build new search filter
            let nsearch = helper.addSearchField({
                "search": search,
                "field": models.model_info.idAttribute(),
                "value": this.model_id,
                "operator": "eq"
            });
            let found = (await resolvers.model_infosConnection({
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
annotation_geom_observation_type.prototype.handleAssociations = async function(input, benignErrorReporter) {

    let promises_add = [];

    if (helper.isNotUndefinedAndNotNull(input.addFileTo)) {
        promises_add.push(this.add_fileTo(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.addModel)) {
        promises_add.push(this.add_model(input, benignErrorReporter));
    }

    await Promise.all(promises_add);
    let promises_remove = [];

    if (helper.isNotUndefinedAndNotNull(input.removeFileTo)) {
        promises_remove.push(this.remove_fileTo(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.removeModel)) {
        promises_remove.push(this.remove_model(input, benignErrorReporter));
    }

    await Promise.all(promises_remove);

}
/**
 * add_fileTo - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
annotation_geom_observation_type.prototype.add_fileTo = async function(input, benignErrorReporter) {
    await annotation_geom_observation_type.add_file_id(this.getIdValue(), input.addFileTo, benignErrorReporter);
    this.file_id = input.addFileTo;
}

/**
 * add_model - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
annotation_geom_observation_type.prototype.add_model = async function(input, benignErrorReporter) {
    await annotation_geom_observation_type.add_model_id(this.getIdValue(), input.addModel, benignErrorReporter);
    this.model_id = input.addModel;
}

/**
 * remove_fileTo - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
annotation_geom_observation_type.prototype.remove_fileTo = async function(input, benignErrorReporter) {
    if (input.removeFileTo == this.file_id) {
        await annotation_geom_observation_type.remove_file_id(this.getIdValue(), input.removeFileTo, benignErrorReporter);
        this.file_id = null;
    }
}

/**
 * remove_model - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
annotation_geom_observation_type.prototype.remove_model = async function(input, benignErrorReporter) {
    if (input.removeModel == this.model_id) {
        await annotation_geom_observation_type.remove_model_id(this.getIdValue(), input.removeModel, benignErrorReporter);
        this.model_id = null;
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

    let annotation_geom_observation_type = await resolvers.readOneAnnotation_geom_observation_type({
        id: id
    }, context);
    //check that record actually exists
    if (annotation_geom_observation_type === null) throw new Error(`Record with ID = ${id} does not exist`);
    let promises_to_many = [];
    let promises_to_one = [];
    let get_to_many_associated_fk = 0;
    promises_to_one.push(annotation_geom_observation_type.fileTo({}, context));
    promises_to_one.push(annotation_geom_observation_type.model({}, context));


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
        throw new Error(`annotation_geom_observation_type with id ${id} has associated records with 'reject' reaction and is NOT valid for deletion. Please clean up before you delete.`);
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
    const annotation_geom_observation_type_record = await resolvers.readOneAnnotation_geom_observation_type({
            id: id
        },
        context
    );
    const pagi_first = globals.LIMIT_RECORDS;



}
module.exports = {
    /**
     * annotation_geom_observation_types - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Offset and limit to get the records from and to respectively
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records holding conditions specified by search, order and pagination argument
     */
    annotation_geom_observation_types: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'annotation_geom_observation_type', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(pagination.limit, context, "annotation_geom_observation_types");
            return await annotation_geom_observation_type.readAll(search, order, pagination, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * annotation_geom_observation_typesConnection - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
     */
    annotation_geom_observation_typesConnection: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'annotation_geom_observation_type', 'read') === true) {
            helper.checkCursorBasedPaginationArgument(pagination);
            let limit = helper.isNotUndefinedAndNotNull(pagination.first) ? pagination.first : pagination.last;
            helper.checkCountAndReduceRecordsLimit(limit, context, "annotation_geom_observation_typesConnection");
            return await annotation_geom_observation_type.readAllCursor(search, order, pagination, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * readOneAnnotation_geom_observation_type - Check user authorization and return one record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to retrieve
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Record with id requested
     */
    readOneAnnotation_geom_observation_type: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'annotation_geom_observation_type', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(1, context, "readOneAnnotation_geom_observation_type");
            return await annotation_geom_observation_type.readById(id, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * countAnnotation_geom_observation_types - Counts number of records that holds the conditions specified in the search argument
     *
     * @param  {object} {search} Search argument for filtering records
     * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {number}          Number of records that holds the conditions specified in the search argument
     */
    countAnnotation_geom_observation_types: async function({
        search
    }, context) {
        if (await checkAuthorization(context, 'annotation_geom_observation_type', 'read') === true) {
            return await annotation_geom_observation_type.countRecords(search, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * validateAnnotation_geom_observation_typeForCreation - Check user authorization and validate input argument for creation.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateAnnotation_geom_observation_typeForCreation: async (input, context) => {
        let authorization = await checkAuthorization(context, 'annotation_geom_observation_type', 'read');
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
                    annotation_geom_observation_type,
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
     * validateAnnotation_geom_observation_typeForUpdating - Check user authorization and validate input argument for updating.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateAnnotation_geom_observation_typeForUpdating: async (input, context) => {
        let authorization = await checkAuthorization(context, 'annotation_geom_observation_type', 'read');
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
                    annotation_geom_observation_type,
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
     * validateAnnotation_geom_observation_typeForDeletion - Check user authorization and validate record by ID for deletion.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateAnnotation_geom_observation_typeForDeletion: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'annotation_geom_observation_type', 'read')) === true) {
            try {
                await validForDeletion(id, context);
                await validatorUtil.validateData(
                    "validateForDelete",
                    annotation_geom_observation_type,
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
     * validateAnnotation_geom_observation_typeAfterReading - Check user authorization and validate record by ID after reading.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateAnnotation_geom_observation_typeAfterReading: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'annotation_geom_observation_type', 'read')) === true) {
            try {
                await validatorUtil.validateData(
                    "validateAfterRead",
                    annotation_geom_observation_type,
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
     * addAnnotation_geom_observation_type - Check user authorization and creates a new record with data specified in the input argument.
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         New record created
     */
    addAnnotation_geom_observation_type: async function(input, context) {
        let authorization = await checkAuthorization(context, 'annotation_geom_observation_type', 'create');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let createdAnnotation_geom_observation_type = await annotation_geom_observation_type.addOne(inputSanitized, context.benignErrors);
            await createdAnnotation_geom_observation_type.handleAssociations(inputSanitized, context.benignErrors);
            return createdAnnotation_geom_observation_type;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * deleteAnnotation_geom_observation_type - Check user authorization and delete a record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to delete
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string}         Message indicating if deletion was successfull.
     */
    deleteAnnotation_geom_observation_type: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'annotation_geom_observation_type', 'delete') === true) {
            if (await validForDeletion(id, context)) {
                await updateAssociations(id, context);
                return annotation_geom_observation_type.deleteOne(id, context.benignErrors);
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * updateAnnotation_geom_observation_type - Check user authorization and update the record specified in the input argument
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   record to update and new info to update
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Updated record
     */
    updateAnnotation_geom_observation_type: async function(input, context) {
        let authorization = await checkAuthorization(context, 'annotation_geom_observation_type', 'update');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let updatedAnnotation_geom_observation_type = await annotation_geom_observation_type.updateOne(inputSanitized, context.benignErrors);
            await updatedAnnotation_geom_observation_type.handleAssociations(inputSanitized, context.benignErrors);
            return updatedAnnotation_geom_observation_type;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * bulkAssociateAnnotation_geom_observation_typeWithFile_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociateAnnotation_geom_observation_typeWithFile_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                file_id
            }) => file_id)), models.file);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), annotation_geom_observation_type);
        }
        return await annotation_geom_observation_type.bulkAssociateAnnotation_geom_observation_typeWithFile_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },
    /**
     * bulkAssociateAnnotation_geom_observation_typeWithModel_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociateAnnotation_geom_observation_typeWithModel_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                model_id
            }) => model_id)), models.model_info);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), annotation_geom_observation_type);
        }
        return await annotation_geom_observation_type.bulkAssociateAnnotation_geom_observation_typeWithModel_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },
    /**
     * bulkDisAssociateAnnotation_geom_observation_typeWithFile_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociateAnnotation_geom_observation_typeWithFile_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                file_id
            }) => file_id)), models.file);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), annotation_geom_observation_type);
        }
        return await annotation_geom_observation_type.bulkDisAssociateAnnotation_geom_observation_typeWithFile_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },
    /**
     * bulkDisAssociateAnnotation_geom_observation_typeWithModel_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociateAnnotation_geom_observation_typeWithModel_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                model_id
            }) => model_id)), models.model_info);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), annotation_geom_observation_type);
        }
        return await annotation_geom_observation_type.bulkDisAssociateAnnotation_geom_observation_typeWithModel_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },

    /**
     * csvTableTemplateAnnotation_geom_observation_type - Returns table's template
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {Array}         Strings, one for header and one columns types
     */
    csvTableTemplateAnnotation_geom_observation_type: async function(_, context) {
        if (await checkAuthorization(context, 'annotation_geom_observation_type', 'read') === true) {
            return annotation_geom_observation_type.csvTableTemplate(context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * annotation_geom_observation_typesZendroDefinition - Return data model definition
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {GraphQLJSONObject}        Data model definition
     */
    annotation_geom_observation_typesZendroDefinition: async function(_, context) {
        if ((await checkAuthorization(context, "annotation_geom_observation_type", "read")) === true) {
            return annotation_geom_observation_type.definition;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

}