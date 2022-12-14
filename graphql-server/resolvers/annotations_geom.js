/*
    Resolvers for basic CRUD operations
*/

const path = require('path');
const annotations_geom = require(path.join(__dirname, '..', 'models', 'index.js')).annotations_geom;
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
    'addFileToGeom': 'file',
    'addUserToGeom': 'user',
    'addAnnotationMethodGeom': 'annotations_method',
    'addPipeline_annotation_geom': 'pipeline_info'
}



/**
 * annotations_geom.prototype.fileToGeom - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
annotations_geom.prototype.fileToGeom = async function({
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
 * annotations_geom.prototype.userToGeom - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
annotations_geom.prototype.userToGeom = async function({
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
 * annotations_geom.prototype.annotationMethodGeom - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
annotations_geom.prototype.annotationMethodGeom = async function({
    search
}, context) {
    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "annotation_method_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });

    let found = (await resolvers.annotations_methodsConnection({
        search: nsearch,
        pagination: {
            first: 2
        }
    }, context)).edges;
    if (found.length > 0) {
        if (found.length > 1) {
            context.benignErrors.push(new Error(
                `Not unique "to_one" association Error: Found > 1 annotations_methods matching annotations_geom with id ${this.getIdValue()}. Consider making this a "to_many" association, or using unique constraints, or moving the foreign key into the annotations_geom model. Returning first annotations_method.`
            ));
        }
        return found[0].node;
    }
    return null;
}
/**
 * annotations_geom.prototype.pipeline_annotation_geom - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
annotations_geom.prototype.pipeline_annotation_geom = async function({
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
annotations_geom.prototype.handleAssociations = async function(input, benignErrorReporter) {

    let promises_add = [];

    if (helper.isNotUndefinedAndNotNull(input.addFileToGeom)) {
        promises_add.push(this.add_fileToGeom(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.addUserToGeom)) {
        promises_add.push(this.add_userToGeom(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.addAnnotationMethodGeom)) {
        promises_add.push(this.add_annotationMethodGeom(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.addPipeline_annotation_geom)) {
        promises_add.push(this.add_pipeline_annotation_geom(input, benignErrorReporter));
    }

    await Promise.all(promises_add);
    let promises_remove = [];

    if (helper.isNotUndefinedAndNotNull(input.removeFileToGeom)) {
        promises_remove.push(this.remove_fileToGeom(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.removeUserToGeom)) {
        promises_remove.push(this.remove_userToGeom(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.removeAnnotationMethodGeom)) {
        promises_remove.push(this.remove_annotationMethodGeom(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.removePipeline_annotation_geom)) {
        promises_remove.push(this.remove_pipeline_annotation_geom(input, benignErrorReporter));
    }

    await Promise.all(promises_remove);

}
/**
 * add_fileToGeom - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
annotations_geom.prototype.add_fileToGeom = async function(input, benignErrorReporter) {
    await annotations_geom.add_file_id(this.getIdValue(), input.addFileToGeom, benignErrorReporter);
    this.file_id = input.addFileToGeom;
}

/**
 * add_userToGeom - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
annotations_geom.prototype.add_userToGeom = async function(input, benignErrorReporter) {
    await annotations_geom.add_user_id(this.getIdValue(), input.addUserToGeom, benignErrorReporter);
    this.user_id = input.addUserToGeom;
}

/**
 * add_annotationMethodGeom - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
annotations_geom.prototype.add_annotationMethodGeom = async function(input, benignErrorReporter) {
    await models.annotations_method.add_annotation_method_id(input.addAnnotationMethodGeom, this.getIdValue(), benignErrorReporter);
}

/**
 * add_pipeline_annotation_geom - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
annotations_geom.prototype.add_pipeline_annotation_geom = async function(input, benignErrorReporter) {
    await annotations_geom.add_pipeline_id(this.getIdValue(), input.addPipeline_annotation_geom, benignErrorReporter);
    this.pipeline_id = input.addPipeline_annotation_geom;
}

/**
 * remove_fileToGeom - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
annotations_geom.prototype.remove_fileToGeom = async function(input, benignErrorReporter) {
    if (input.removeFileToGeom == this.file_id) {
        await annotations_geom.remove_file_id(this.getIdValue(), input.removeFileToGeom, benignErrorReporter);
        this.file_id = null;
    }
}

/**
 * remove_userToGeom - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
annotations_geom.prototype.remove_userToGeom = async function(input, benignErrorReporter) {
    if (input.removeUserToGeom == this.user_id) {
        await annotations_geom.remove_user_id(this.getIdValue(), input.removeUserToGeom, benignErrorReporter);
        this.user_id = null;
    }
}

/**
 * remove_annotationMethodGeom - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
annotations_geom.prototype.remove_annotationMethodGeom = async function(input, benignErrorReporter) {
    await models.annotations_method.remove_annotation_method_id(input.removeAnnotationMethodGeom, this.getIdValue(), benignErrorReporter);
}

/**
 * remove_pipeline_annotation_geom - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
annotations_geom.prototype.remove_pipeline_annotation_geom = async function(input, benignErrorReporter) {
    if (input.removePipeline_annotation_geom == this.pipeline_id) {
        await annotations_geom.remove_pipeline_id(this.getIdValue(), input.removePipeline_annotation_geom, benignErrorReporter);
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

    let annotations_geom = await resolvers.readOneAnnotations_geom({
        id: id
    }, context);
    //check that record actually exists
    if (annotations_geom === null) throw new Error(`Record with ID = ${id} does not exist`);
    let promises_to_many = [];
    let promises_to_one = [];
    let get_to_many_associated_fk = 0;
    promises_to_one.push(annotations_geom.fileToGeom({}, context));
    promises_to_one.push(annotations_geom.userToGeom({}, context));
    promises_to_one.push(annotations_geom.annotationMethodGeom({}, context));
    promises_to_one.push(annotations_geom.pipeline_annotation_geom({}, context));


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
        throw new Error(`annotations_geom with id ${id} has associated records with 'reject' reaction and is NOT valid for deletion. Please clean up before you delete.`);
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
    const annotations_geom_record = await resolvers.readOneAnnotations_geom({
            id: id
        },
        context
    );
    const pagi_first = globals.LIMIT_RECORDS;



}
module.exports = {
    /**
     * annotations_geoms - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Offset and limit to get the records from and to respectively
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records holding conditions specified by search, order and pagination argument
     */
    annotations_geoms: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'annotations_geom', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(pagination.limit, context, "annotations_geoms");
            return await annotations_geom.readAll(search, order, pagination, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * annotations_geomsConnection - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
     */
    annotations_geomsConnection: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'annotations_geom', 'read') === true) {
            helper.checkCursorBasedPaginationArgument(pagination);
            let limit = helper.isNotUndefinedAndNotNull(pagination.first) ? pagination.first : pagination.last;
            helper.checkCountAndReduceRecordsLimit(limit, context, "annotations_geomsConnection");
            return await annotations_geom.readAllCursor(search, order, pagination, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * readOneAnnotations_geom - Check user authorization and return one record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to retrieve
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Record with id requested
     */
    readOneAnnotations_geom: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'annotations_geom', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(1, context, "readOneAnnotations_geom");
            return await annotations_geom.readById(id, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * countAnnotations_geoms - Counts number of records that holds the conditions specified in the search argument
     *
     * @param  {object} {search} Search argument for filtering records
     * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {number}          Number of records that holds the conditions specified in the search argument
     */
    countAnnotations_geoms: async function({
        search
    }, context) {
        if (await checkAuthorization(context, 'annotations_geom', 'read') === true) {
            return await annotations_geom.countRecords(search, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * validateAnnotations_geomForCreation - Check user authorization and validate input argument for creation.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateAnnotations_geomForCreation: async (input, context) => {
        let authorization = await checkAuthorization(context, 'annotations_geom', 'read');
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
                    annotations_geom,
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
     * validateAnnotations_geomForUpdating - Check user authorization and validate input argument for updating.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateAnnotations_geomForUpdating: async (input, context) => {
        let authorization = await checkAuthorization(context, 'annotations_geom', 'read');
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
                    annotations_geom,
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
     * validateAnnotations_geomForDeletion - Check user authorization and validate record by ID for deletion.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateAnnotations_geomForDeletion: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'annotations_geom', 'read')) === true) {
            try {
                await validForDeletion(id, context);
                await validatorUtil.validateData(
                    "validateForDelete",
                    annotations_geom,
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
     * validateAnnotations_geomAfterReading - Check user authorization and validate record by ID after reading.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateAnnotations_geomAfterReading: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'annotations_geom', 'read')) === true) {
            try {
                await validatorUtil.validateData(
                    "validateAfterRead",
                    annotations_geom,
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
     * addAnnotations_geom - Check user authorization and creates a new record with data specified in the input argument.
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         New record created
     */
    addAnnotations_geom: async function(input, context) {
        let authorization = await checkAuthorization(context, 'annotations_geom', 'create');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let createdAnnotations_geom = await annotations_geom.addOne(inputSanitized, context.benignErrors);
            await createdAnnotations_geom.handleAssociations(inputSanitized, context.benignErrors);
            return createdAnnotations_geom;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * deleteAnnotations_geom - Check user authorization and delete a record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to delete
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string}         Message indicating if deletion was successfull.
     */
    deleteAnnotations_geom: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'annotations_geom', 'delete') === true) {
            if (await validForDeletion(id, context)) {
                await updateAssociations(id, context);
                return annotations_geom.deleteOne(id, context.benignErrors);
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * updateAnnotations_geom - Check user authorization and update the record specified in the input argument
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   record to update and new info to update
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Updated record
     */
    updateAnnotations_geom: async function(input, context) {
        let authorization = await checkAuthorization(context, 'annotations_geom', 'update');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let updatedAnnotations_geom = await annotations_geom.updateOne(inputSanitized, context.benignErrors);
            await updatedAnnotations_geom.handleAssociations(inputSanitized, context.benignErrors);
            return updatedAnnotations_geom;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * bulkAssociateAnnotations_geomWithFile_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociateAnnotations_geomWithFile_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                file_id
            }) => file_id)), models.file);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), annotations_geom);
        }
        return await annotations_geom.bulkAssociateAnnotations_geomWithFile_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },
    /**
     * bulkAssociateAnnotations_geomWithUser_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociateAnnotations_geomWithUser_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                user_id
            }) => user_id)), models.user);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), annotations_geom);
        }
        return await annotations_geom.bulkAssociateAnnotations_geomWithUser_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },
    /**
     * bulkAssociateAnnotations_geomWithPipeline_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociateAnnotations_geomWithPipeline_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                pipeline_id
            }) => pipeline_id)), models.pipeline_info);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), annotations_geom);
        }
        return await annotations_geom.bulkAssociateAnnotations_geomWithPipeline_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },
    /**
     * bulkDisAssociateAnnotations_geomWithFile_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociateAnnotations_geomWithFile_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                file_id
            }) => file_id)), models.file);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), annotations_geom);
        }
        return await annotations_geom.bulkDisAssociateAnnotations_geomWithFile_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },
    /**
     * bulkDisAssociateAnnotations_geomWithUser_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociateAnnotations_geomWithUser_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                user_id
            }) => user_id)), models.user);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), annotations_geom);
        }
        return await annotations_geom.bulkDisAssociateAnnotations_geomWithUser_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },
    /**
     * bulkDisAssociateAnnotations_geomWithPipeline_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociateAnnotations_geomWithPipeline_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                pipeline_id
            }) => pipeline_id)), models.pipeline_info);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), annotations_geom);
        }
        return await annotations_geom.bulkDisAssociateAnnotations_geomWithPipeline_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },

    /**
     * csvTableTemplateAnnotations_geom - Returns table's template
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {Array}         Strings, one for header and one columns types
     */
    csvTableTemplateAnnotations_geom: async function(_, context) {
        if (await checkAuthorization(context, 'annotations_geom', 'read') === true) {
            return annotations_geom.csvTableTemplate(context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * annotations_geomsZendroDefinition - Return data model definition
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {GraphQLJSONObject}        Data model definition
     */
    annotations_geomsZendroDefinition: async function(_, context) {
        if ((await checkAuthorization(context, "annotations_geom", "read")) === true) {
            return annotations_geom.definition;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

}