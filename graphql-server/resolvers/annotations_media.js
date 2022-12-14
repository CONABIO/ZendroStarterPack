/*
    Resolvers for basic CRUD operations
*/

const path = require('path');
const annotations_media = require(path.join(__dirname, '..', 'models', 'index.js')).annotations_media;
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
    'addFileToMedia': 'file',
    'addUserToMedia': 'user',
    'addAnnotationMethodMedia': 'annotations_method',
    'addPipeline_annotation_media': 'pipeline_info'
}



/**
 * annotations_media.prototype.fileToMedia - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
annotations_media.prototype.fileToMedia = async function({
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
 * annotations_media.prototype.userToMedia - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
annotations_media.prototype.userToMedia = async function({
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
 * annotations_media.prototype.annotationMethodMedia - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
annotations_media.prototype.annotationMethodMedia = async function({
    search
}, context) {

    if (helper.isNotUndefinedAndNotNull(this.annotation_method_id)) {
        if (search === undefined || search === null) {
            return resolvers.readOneAnnotations_method({
                [models.annotations_method.idAttribute()]: this.annotation_method_id
            }, context)
        } else {

            //build new search filter
            let nsearch = helper.addSearchField({
                "search": search,
                "field": models.annotations_method.idAttribute(),
                "value": this.annotation_method_id,
                "operator": "eq"
            });
            let found = (await resolvers.annotations_methodsConnection({
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
 * annotations_media.prototype.pipeline_annotation_media - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
annotations_media.prototype.pipeline_annotation_media = async function({
    search
}, context) {

    if (helper.isNotUndefinedAndNotNull(this.pipeline_id)) {
        if (search === undefined || search === null) {
            return resolvers.readOnePipeline_info({
                [models.pipeline_info.idAttribute()]: this.pipeline_id
            }, context)
        } else {

            //build new search filter
            let nsearch = helper.addSearchField({
                "search": search,
                "field": models.pipeline_info.idAttribute(),
                "value": this.pipeline_id,
                "operator": "eq"
            });
            let found = (await resolvers.pipeline_infosConnection({
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
annotations_media.prototype.handleAssociations = async function(input, benignErrorReporter) {

    let promises_add = [];

    if (helper.isNotUndefinedAndNotNull(input.addFileToMedia)) {
        promises_add.push(this.add_fileToMedia(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.addUserToMedia)) {
        promises_add.push(this.add_userToMedia(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.addAnnotationMethodMedia)) {
        promises_add.push(this.add_annotationMethodMedia(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.addPipeline_annotation_media)) {
        promises_add.push(this.add_pipeline_annotation_media(input, benignErrorReporter));
    }

    await Promise.all(promises_add);
    let promises_remove = [];

    if (helper.isNotUndefinedAndNotNull(input.removeFileToMedia)) {
        promises_remove.push(this.remove_fileToMedia(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.removeUserToMedia)) {
        promises_remove.push(this.remove_userToMedia(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.removeAnnotationMethodMedia)) {
        promises_remove.push(this.remove_annotationMethodMedia(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.removePipeline_annotation_media)) {
        promises_remove.push(this.remove_pipeline_annotation_media(input, benignErrorReporter));
    }

    await Promise.all(promises_remove);

}
/**
 * add_fileToMedia - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
annotations_media.prototype.add_fileToMedia = async function(input, benignErrorReporter) {
    await annotations_media.add_file_id(this.getIdValue(), input.addFileToMedia, benignErrorReporter);
    this.file_id = input.addFileToMedia;
}

/**
 * add_userToMedia - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
annotations_media.prototype.add_userToMedia = async function(input, benignErrorReporter) {
    await annotations_media.add_user_id(this.getIdValue(), input.addUserToMedia, benignErrorReporter);
    this.user_id = input.addUserToMedia;
}

/**
 * add_annotationMethodMedia - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
annotations_media.prototype.add_annotationMethodMedia = async function(input, benignErrorReporter) {
    await annotations_media.add_annotation_method_id(this.getIdValue(), input.addAnnotationMethodMedia, benignErrorReporter);
    this.annotation_method_id = input.addAnnotationMethodMedia;
}

/**
 * add_pipeline_annotation_media - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
annotations_media.prototype.add_pipeline_annotation_media = async function(input, benignErrorReporter) {
    await annotations_media.add_pipeline_id(this.getIdValue(), input.addPipeline_annotation_media, benignErrorReporter);
    this.pipeline_id = input.addPipeline_annotation_media;
}

/**
 * remove_fileToMedia - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
annotations_media.prototype.remove_fileToMedia = async function(input, benignErrorReporter) {
    if (input.removeFileToMedia == this.file_id) {
        await annotations_media.remove_file_id(this.getIdValue(), input.removeFileToMedia, benignErrorReporter);
        this.file_id = null;
    }
}

/**
 * remove_userToMedia - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
annotations_media.prototype.remove_userToMedia = async function(input, benignErrorReporter) {
    if (input.removeUserToMedia == this.user_id) {
        await annotations_media.remove_user_id(this.getIdValue(), input.removeUserToMedia, benignErrorReporter);
        this.user_id = null;
    }
}

/**
 * remove_annotationMethodMedia - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
annotations_media.prototype.remove_annotationMethodMedia = async function(input, benignErrorReporter) {
    if (input.removeAnnotationMethodMedia == this.annotation_method_id) {
        await annotations_media.remove_annotation_method_id(this.getIdValue(), input.removeAnnotationMethodMedia, benignErrorReporter);
        this.annotation_method_id = null;
    }
}

/**
 * remove_pipeline_annotation_media - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
annotations_media.prototype.remove_pipeline_annotation_media = async function(input, benignErrorReporter) {
    if (input.removePipeline_annotation_media == this.pipeline_id) {
        await annotations_media.remove_pipeline_id(this.getIdValue(), input.removePipeline_annotation_media, benignErrorReporter);
        this.pipeline_id = null;
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

    let annotations_media = await resolvers.readOneAnnotations_media({
        id: id
    }, context);
    //check that record actually exists
    if (annotations_media === null) throw new Error(`Record with ID = ${id} does not exist`);
    let promises_to_many = [];
    let promises_to_one = [];
    let get_to_many_associated_fk = 0;
    promises_to_one.push(annotations_media.fileToMedia({}, context));
    promises_to_one.push(annotations_media.userToMedia({}, context));
    promises_to_one.push(annotations_media.annotationMethodMedia({}, context));
    promises_to_one.push(annotations_media.pipeline_annotation_media({}, context));


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
        throw new Error(`annotations_media with id ${id} has associated records with 'reject' reaction and is NOT valid for deletion. Please clean up before you delete.`);
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
    const annotations_media_record = await resolvers.readOneAnnotations_media({
            id: id
        },
        context
    );
    const pagi_first = globals.LIMIT_RECORDS;



}
module.exports = {
    /**
     * annotations_media - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Offset and limit to get the records from and to respectively
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records holding conditions specified by search, order and pagination argument
     */
    annotations_media: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'annotations_media', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(pagination.limit, context, "annotations_media");
            return await annotations_media.readAll(search, order, pagination, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * annotations_mediaConnection - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
     */
    annotations_mediaConnection: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'annotations_media', 'read') === true) {
            helper.checkCursorBasedPaginationArgument(pagination);
            let limit = helper.isNotUndefinedAndNotNull(pagination.first) ? pagination.first : pagination.last;
            helper.checkCountAndReduceRecordsLimit(limit, context, "annotations_mediaConnection");
            return await annotations_media.readAllCursor(search, order, pagination, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * readOneAnnotations_media - Check user authorization and return one record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to retrieve
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Record with id requested
     */
    readOneAnnotations_media: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'annotations_media', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(1, context, "readOneAnnotations_media");
            return await annotations_media.readById(id, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * countAnnotations_media - Counts number of records that holds the conditions specified in the search argument
     *
     * @param  {object} {search} Search argument for filtering records
     * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {number}          Number of records that holds the conditions specified in the search argument
     */
    countAnnotations_media: async function({
        search
    }, context) {
        if (await checkAuthorization(context, 'annotations_media', 'read') === true) {
            return await annotations_media.countRecords(search, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * validateAnnotations_mediaForCreation - Check user authorization and validate input argument for creation.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateAnnotations_mediaForCreation: async (input, context) => {
        let authorization = await checkAuthorization(context, 'annotations_media', 'read');
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
                    annotations_media,
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
     * validateAnnotations_mediaForUpdating - Check user authorization and validate input argument for updating.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateAnnotations_mediaForUpdating: async (input, context) => {
        let authorization = await checkAuthorization(context, 'annotations_media', 'read');
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
                    annotations_media,
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
     * validateAnnotations_mediaForDeletion - Check user authorization and validate record by ID for deletion.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateAnnotations_mediaForDeletion: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'annotations_media', 'read')) === true) {
            try {
                await validForDeletion(id, context);
                await validatorUtil.validateData(
                    "validateForDelete",
                    annotations_media,
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
     * validateAnnotations_mediaAfterReading - Check user authorization and validate record by ID after reading.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateAnnotations_mediaAfterReading: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'annotations_media', 'read')) === true) {
            try {
                await validatorUtil.validateData(
                    "validateAfterRead",
                    annotations_media,
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
     * addAnnotations_media - Check user authorization and creates a new record with data specified in the input argument.
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         New record created
     */
    addAnnotations_media: async function(input, context) {
        let authorization = await checkAuthorization(context, 'annotations_media', 'create');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let createdAnnotations_media = await annotations_media.addOne(inputSanitized, context.benignErrors);
            await createdAnnotations_media.handleAssociations(inputSanitized, context.benignErrors);
            return createdAnnotations_media;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * deleteAnnotations_media - Check user authorization and delete a record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to delete
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string}         Message indicating if deletion was successfull.
     */
    deleteAnnotations_media: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'annotations_media', 'delete') === true) {
            if (await validForDeletion(id, context)) {
                await updateAssociations(id, context);
                return annotations_media.deleteOne(id, context.benignErrors);
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * updateAnnotations_media - Check user authorization and update the record specified in the input argument
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   record to update and new info to update
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Updated record
     */
    updateAnnotations_media: async function(input, context) {
        let authorization = await checkAuthorization(context, 'annotations_media', 'update');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let updatedAnnotations_media = await annotations_media.updateOne(inputSanitized, context.benignErrors);
            await updatedAnnotations_media.handleAssociations(inputSanitized, context.benignErrors);
            return updatedAnnotations_media;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * bulkAssociateAnnotations_mediaWithFile_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociateAnnotations_mediaWithFile_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                file_id
            }) => file_id)), models.file);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), annotations_media);
        }
        return await annotations_media.bulkAssociateAnnotations_mediaWithFile_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },
    /**
     * bulkAssociateAnnotations_mediaWithUser_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociateAnnotations_mediaWithUser_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                user_id
            }) => user_id)), models.user);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), annotations_media);
        }
        return await annotations_media.bulkAssociateAnnotations_mediaWithUser_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },
    /**
     * bulkAssociateAnnotations_mediaWithAnnotation_method_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociateAnnotations_mediaWithAnnotation_method_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                annotation_method_id
            }) => annotation_method_id)), models.annotations_method);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), annotations_media);
        }
        return await annotations_media.bulkAssociateAnnotations_mediaWithAnnotation_method_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },
    /**
     * bulkAssociateAnnotations_mediaWithPipeline_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociateAnnotations_mediaWithPipeline_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                pipeline_id
            }) => pipeline_id)), models.pipeline_info);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), annotations_media);
        }
        return await annotations_media.bulkAssociateAnnotations_mediaWithPipeline_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },
    /**
     * bulkDisAssociateAnnotations_mediaWithFile_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociateAnnotations_mediaWithFile_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                file_id
            }) => file_id)), models.file);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), annotations_media);
        }
        return await annotations_media.bulkDisAssociateAnnotations_mediaWithFile_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },
    /**
     * bulkDisAssociateAnnotations_mediaWithUser_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociateAnnotations_mediaWithUser_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                user_id
            }) => user_id)), models.user);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), annotations_media);
        }
        return await annotations_media.bulkDisAssociateAnnotations_mediaWithUser_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },
    /**
     * bulkDisAssociateAnnotations_mediaWithAnnotation_method_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociateAnnotations_mediaWithAnnotation_method_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                annotation_method_id
            }) => annotation_method_id)), models.annotations_method);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), annotations_media);
        }
        return await annotations_media.bulkDisAssociateAnnotations_mediaWithAnnotation_method_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },
    /**
     * bulkDisAssociateAnnotations_mediaWithPipeline_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociateAnnotations_mediaWithPipeline_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                pipeline_id
            }) => pipeline_id)), models.pipeline_info);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), annotations_media);
        }
        return await annotations_media.bulkDisAssociateAnnotations_mediaWithPipeline_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },

    /**
     * csvTableTemplateAnnotations_media - Returns table's template
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {Array}         Strings, one for header and one columns types
     */
    csvTableTemplateAnnotations_media: async function(_, context) {
        if (await checkAuthorization(context, 'annotations_media', 'read') === true) {
            return annotations_media.csvTableTemplate(context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * annotations_mediaZendroDefinition - Return data model definition
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {GraphQLJSONObject}        Data model definition
     */
    annotations_mediaZendroDefinition: async function(_, context) {
        if ((await checkAuthorization(context, "annotations_media", "read")) === true) {
            return annotations_media.definition;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

}