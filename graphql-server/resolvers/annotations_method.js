/*
    Resolvers for basic CRUD operations
*/

const path = require('path');
const annotations_method = require(path.join(__dirname, '..', 'models', 'index.js')).annotations_method;
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
    'addGeomAnn': 'annotations_geom',
    'addMediaAnn': 'annotations_media'
}




/**
 * annotations_method.prototype.geomAnnFilter - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Offset and limit to get the records from and to respectively
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of associated records holding conditions specified by search, order and pagination argument
 */
annotations_method.prototype.geomAnnFilter = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "annotation_method_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });

    return resolvers.annotations_geoms({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}

/**
 * annotations_method.prototype.countFilteredGeomAnn - Count number of associated records that holds the conditions specified in the search argument
 *
 * @param  {object} {search} description
 * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}          Number of associated records that holds the conditions specified in the search argument
 */
annotations_method.prototype.countFilteredGeomAnn = function({
    search
}, context) {

    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "annotation_method_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.countAnnotations_geoms({
        search: nsearch
    }, context);
}

/**
 * annotations_method.prototype.geomAnnConnection - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
 */
annotations_method.prototype.geomAnnConnection = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "annotation_method_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.annotations_geomsConnection({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}
/**
 * annotations_method.prototype.mediaAnnFilter - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Offset and limit to get the records from and to respectively
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of associated records holding conditions specified by search, order and pagination argument
 */
annotations_method.prototype.mediaAnnFilter = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "annotation_method_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });

    return resolvers.annotations_media({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}

/**
 * annotations_method.prototype.countFilteredMediaAnn - Count number of associated records that holds the conditions specified in the search argument
 *
 * @param  {object} {search} description
 * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}          Number of associated records that holds the conditions specified in the search argument
 */
annotations_method.prototype.countFilteredMediaAnn = function({
    search
}, context) {

    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "annotation_method_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.countAnnotations_media({
        search: nsearch
    }, context);
}

/**
 * annotations_method.prototype.mediaAnnConnection - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
 */
annotations_method.prototype.mediaAnnConnection = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "annotation_method_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.annotations_mediaConnection({
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
annotations_method.prototype.handleAssociations = async function(input, benignErrorReporter) {

    let promises_add = [];
    if (helper.isNonEmptyArray(input.addGeomAnn)) {
        promises_add.push(this.add_geomAnn(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.addMediaAnn)) {
        promises_add.push(this.add_mediaAnn(input, benignErrorReporter));
    }

    await Promise.all(promises_add);
    let promises_remove = [];
    if (helper.isNonEmptyArray(input.removeGeomAnn)) {
        promises_remove.push(this.remove_geomAnn(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.removeMediaAnn)) {
        promises_remove.push(this.remove_mediaAnn(input, benignErrorReporter));
    }

    await Promise.all(promises_remove);

}
/**
 * add_geomAnn - field Mutation for to_many associations to add
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
annotations_method.prototype.add_geomAnn = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.addGeomAnn.map(associatedRecordId => {
        return {
            annotation_method_id: this.getIdValue(),
            [models.annotations_geom.idAttribute()]: associatedRecordId
        }
    });
    await models.annotations_geom.bulkAssociateAnnotations_geomWithAnnotation_method_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * add_mediaAnn - field Mutation for to_many associations to add
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
annotations_method.prototype.add_mediaAnn = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.addMediaAnn.map(associatedRecordId => {
        return {
            annotation_method_id: this.getIdValue(),
            [models.annotations_media.idAttribute()]: associatedRecordId
        }
    });
    await models.annotations_media.bulkAssociateAnnotations_mediaWithAnnotation_method_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * remove_geomAnn - field Mutation for to_many associations to remove
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
annotations_method.prototype.remove_geomAnn = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.removeGeomAnn.map(associatedRecordId => {
        return {
            annotation_method_id: this.getIdValue(),
            [models.annotations_geom.idAttribute()]: associatedRecordId
        }
    });
    await models.annotations_geom.bulkDisAssociateAnnotations_geomWithAnnotation_method_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * remove_mediaAnn - field Mutation for to_many associations to remove
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
annotations_method.prototype.remove_mediaAnn = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.removeMediaAnn.map(associatedRecordId => {
        return {
            annotation_method_id: this.getIdValue(),
            [models.annotations_media.idAttribute()]: associatedRecordId
        }
    });
    await models.annotations_media.bulkDisAssociateAnnotations_mediaWithAnnotation_method_id(bulkAssociationInput, benignErrorReporter);
}



/**
 * countAssociatedRecordsWithRejectReaction - Count associated records with reject deletion action
 *
 * @param  {ID} id      Id of the record which the associations will be counted
 * @param  {objec} context Default context by resolver
 * @return {Int}         Number of associated records
 */
async function countAssociatedRecordsWithRejectReaction(id, context) {

    let annotations_method = await resolvers.readOneAnnotations_method({
        id: id
    }, context);
    //check that record actually exists
    if (annotations_method === null) throw new Error(`Record with ID = ${id} does not exist`);
    let promises_to_many = [];
    let promises_to_one = [];
    let get_to_many_associated_fk = 0;
    promises_to_many.push(annotations_method.countFilteredGeomAnn({}, context));
    promises_to_many.push(annotations_method.countFilteredMediaAnn({}, context));


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
        throw new Error(`annotations_method with id ${id} has associated records with 'reject' reaction and is NOT valid for deletion. Please clean up before you delete.`);
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
    const annotations_method_record = await resolvers.readOneAnnotations_method({
            id: id
        },
        context
    );
    const pagi_first = globals.LIMIT_RECORDS;



}
module.exports = {
    /**
     * annotations_methods - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Offset and limit to get the records from and to respectively
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records holding conditions specified by search, order and pagination argument
     */
    annotations_methods: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'annotations_method', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(pagination.limit, context, "annotations_methods");
            return await annotations_method.readAll(search, order, pagination, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * annotations_methodsConnection - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
     */
    annotations_methodsConnection: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'annotations_method', 'read') === true) {
            helper.checkCursorBasedPaginationArgument(pagination);
            let limit = helper.isNotUndefinedAndNotNull(pagination.first) ? pagination.first : pagination.last;
            helper.checkCountAndReduceRecordsLimit(limit, context, "annotations_methodsConnection");
            return await annotations_method.readAllCursor(search, order, pagination, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * readOneAnnotations_method - Check user authorization and return one record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to retrieve
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Record with id requested
     */
    readOneAnnotations_method: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'annotations_method', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(1, context, "readOneAnnotations_method");
            return await annotations_method.readById(id, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * countAnnotations_methods - Counts number of records that holds the conditions specified in the search argument
     *
     * @param  {object} {search} Search argument for filtering records
     * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {number}          Number of records that holds the conditions specified in the search argument
     */
    countAnnotations_methods: async function({
        search
    }, context) {
        if (await checkAuthorization(context, 'annotations_method', 'read') === true) {
            return await annotations_method.countRecords(search, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * validateAnnotations_methodForCreation - Check user authorization and validate input argument for creation.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateAnnotations_methodForCreation: async (input, context) => {
        let authorization = await checkAuthorization(context, 'annotations_method', 'read');
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
                    annotations_method,
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
     * validateAnnotations_methodForUpdating - Check user authorization and validate input argument for updating.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateAnnotations_methodForUpdating: async (input, context) => {
        let authorization = await checkAuthorization(context, 'annotations_method', 'read');
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
                    annotations_method,
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
     * validateAnnotations_methodForDeletion - Check user authorization and validate record by ID for deletion.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateAnnotations_methodForDeletion: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'annotations_method', 'read')) === true) {
            try {
                await validForDeletion(id, context);
                await validatorUtil.validateData(
                    "validateForDelete",
                    annotations_method,
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
     * validateAnnotations_methodAfterReading - Check user authorization and validate record by ID after reading.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateAnnotations_methodAfterReading: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'annotations_method', 'read')) === true) {
            try {
                await validatorUtil.validateData(
                    "validateAfterRead",
                    annotations_method,
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
     * addAnnotations_method - Check user authorization and creates a new record with data specified in the input argument.
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         New record created
     */
    addAnnotations_method: async function(input, context) {
        let authorization = await checkAuthorization(context, 'annotations_method', 'create');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let createdAnnotations_method = await annotations_method.addOne(inputSanitized, context.benignErrors);
            await createdAnnotations_method.handleAssociations(inputSanitized, context.benignErrors);
            return createdAnnotations_method;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * deleteAnnotations_method - Check user authorization and delete a record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to delete
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string}         Message indicating if deletion was successfull.
     */
    deleteAnnotations_method: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'annotations_method', 'delete') === true) {
            if (await validForDeletion(id, context)) {
                await updateAssociations(id, context);
                return annotations_method.deleteOne(id, context.benignErrors);
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * updateAnnotations_method - Check user authorization and update the record specified in the input argument
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   record to update and new info to update
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Updated record
     */
    updateAnnotations_method: async function(input, context) {
        let authorization = await checkAuthorization(context, 'annotations_method', 'update');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let updatedAnnotations_method = await annotations_method.updateOne(inputSanitized, context.benignErrors);
            await updatedAnnotations_method.handleAssociations(inputSanitized, context.benignErrors);
            return updatedAnnotations_method;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },


    /**
     * csvTableTemplateAnnotations_method - Returns table's template
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {Array}         Strings, one for header and one columns types
     */
    csvTableTemplateAnnotations_method: async function(_, context) {
        if (await checkAuthorization(context, 'annotations_method', 'read') === true) {
            return annotations_method.csvTableTemplate(context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * annotations_methodsZendroDefinition - Return data model definition
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {GraphQLJSONObject}        Data model definition
     */
    annotations_methodsZendroDefinition: async function(_, context) {
        if ((await checkAuthorization(context, "annotations_method", "read")) === true) {
            return annotations_method.definition;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

}