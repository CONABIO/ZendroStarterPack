/*
    Resolvers for basic CRUD operations
*/

const path = require('path');
const pipeline_info = require(path.join(__dirname, '..', 'models', 'index.js')).pipeline_info;
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
    'addAnnotationsGeom': 'annotations_geom',
    'addAnnotationsMedia': 'annotations_media',
    'addProcessedFiles': 'file'
}


/**
 * pipeline_info.prototype.processedFilesFilter - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Offset and limit to get the records from and to respectively
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of associated records holding conditions specified by search, order and pagination argument
 */
pipeline_info.prototype.processedFilesFilter = async function({
    search,
    order,
    pagination
}, context) {
    if (await checkAuthorization(context, 'file', 'read') === true) {
        helper.checkCountAndReduceRecordsLimit(pagination.limit, context, "processedFilesFilter");
        return this.processedFilesFilterImpl({
            search,
            order,
            pagination
        });
    } else {
        throw new Error("You don't have authorization to perform this action");
    }
}

/**
 * pipeline_info.prototype.processedFilesConnection - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
 */
pipeline_info.prototype.processedFilesConnection = async function({
    search,
    order,
    pagination
}, context) {
    if (await checkAuthorization(context, 'file', 'read') === true) {
        helper.checkCursorBasedPaginationArgument(pagination);
        let limit = helper.isNotUndefinedAndNotNull(pagination.first) ? pagination.first : pagination.last;
        helper.checkCountAndReduceRecordsLimit(limit, context, "processedFilesConnection");
        return this.processedFilesConnectionImpl({
            search,
            order,
            pagination
        });
    } else {
        throw new Error("You don't have authorization to perform this action");
    }
}

/**
 * pipeline_info.prototype.countFilteredProcessedFiles - Count number of associated records that holds the conditions specified in the search argument
 *
 * @param  {object} {search} description
 * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}          Number of associated records that holds the conditions specified in the search argument
 */
pipeline_info.prototype.countFilteredProcessedFiles = async function({
    search
}, context) {
    if (await checkAuthorization(context, 'file', 'read') === true) {
        return this.countFilteredProcessedFilesImpl({
            search
        });
    } else {
        throw new Error("You don't have authorization to perform this action");
    }
}


/**
 * pipeline_info.prototype.annotationsGeomFilter - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Offset and limit to get the records from and to respectively
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of associated records holding conditions specified by search, order and pagination argument
 */
pipeline_info.prototype.annotationsGeomFilter = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "pipeline_id",
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
 * pipeline_info.prototype.countFilteredAnnotationsGeom - Count number of associated records that holds the conditions specified in the search argument
 *
 * @param  {object} {search} description
 * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}          Number of associated records that holds the conditions specified in the search argument
 */
pipeline_info.prototype.countFilteredAnnotationsGeom = function({
    search
}, context) {

    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "pipeline_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.countAnnotations_geoms({
        search: nsearch
    }, context);
}

/**
 * pipeline_info.prototype.annotationsGeomConnection - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
 */
pipeline_info.prototype.annotationsGeomConnection = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "pipeline_id",
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
 * pipeline_info.prototype.annotationsMediaFilter - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Offset and limit to get the records from and to respectively
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of associated records holding conditions specified by search, order and pagination argument
 */
pipeline_info.prototype.annotationsMediaFilter = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "pipeline_id",
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
 * pipeline_info.prototype.countFilteredAnnotationsMedia - Count number of associated records that holds the conditions specified in the search argument
 *
 * @param  {object} {search} description
 * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}          Number of associated records that holds the conditions specified in the search argument
 */
pipeline_info.prototype.countFilteredAnnotationsMedia = function({
    search
}, context) {

    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "pipeline_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.countAnnotations_media({
        search: nsearch
    }, context);
}

/**
 * pipeline_info.prototype.annotationsMediaConnection - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
 */
pipeline_info.prototype.annotationsMediaConnection = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "pipeline_id",
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
pipeline_info.prototype.handleAssociations = async function(input, benignErrorReporter) {

    let promises_add = [];
    if (helper.isNonEmptyArray(input.addAnnotationsGeom)) {
        promises_add.push(this.add_annotationsGeom(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.addAnnotationsMedia)) {
        promises_add.push(this.add_annotationsMedia(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.addProcessedFiles)) {
        promises_add.push(this.add_processedFiles(input, benignErrorReporter));
    }

    await Promise.all(promises_add);
    let promises_remove = [];
    if (helper.isNonEmptyArray(input.removeAnnotationsGeom)) {
        promises_remove.push(this.remove_annotationsGeom(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.removeAnnotationsMedia)) {
        promises_remove.push(this.remove_annotationsMedia(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.removeProcessedFiles)) {
        promises_remove.push(this.remove_processedFiles(input, benignErrorReporter));
    }

    await Promise.all(promises_remove);

}
/**
 * add_processedFiles - field Mutation for to_many associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 */
pipeline_info.prototype.add_processedFiles = async function(input) {
    await models.pipeline_info.add_file_id(this, input.addProcessedFiles);
}

/**
 * add_annotationsGeom - field Mutation for to_many associations to add
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
pipeline_info.prototype.add_annotationsGeom = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.addAnnotationsGeom.map(associatedRecordId => {
        return {
            pipeline_id: this.getIdValue(),
            [models.annotations_geom.idAttribute()]: associatedRecordId
        }
    });
    await models.annotations_geom.bulkAssociateAnnotations_geomWithPipeline_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * add_annotationsMedia - field Mutation for to_many associations to add
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
pipeline_info.prototype.add_annotationsMedia = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.addAnnotationsMedia.map(associatedRecordId => {
        return {
            pipeline_id: this.getIdValue(),
            [models.annotations_media.idAttribute()]: associatedRecordId
        }
    });
    await models.annotations_media.bulkAssociateAnnotations_mediaWithPipeline_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * remove_processedFiles - field Mutation for to_many associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 */
pipeline_info.prototype.remove_processedFiles = async function(input) {
    await models.pipeline_info.remove_file_id(this, input.removeProcessedFiles);
}

/**
 * remove_annotationsGeom - field Mutation for to_many associations to remove
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
pipeline_info.prototype.remove_annotationsGeom = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.removeAnnotationsGeom.map(associatedRecordId => {
        return {
            pipeline_id: this.getIdValue(),
            [models.annotations_geom.idAttribute()]: associatedRecordId
        }
    });
    await models.annotations_geom.bulkDisAssociateAnnotations_geomWithPipeline_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * remove_annotationsMedia - field Mutation for to_many associations to remove
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
pipeline_info.prototype.remove_annotationsMedia = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.removeAnnotationsMedia.map(associatedRecordId => {
        return {
            pipeline_id: this.getIdValue(),
            [models.annotations_media.idAttribute()]: associatedRecordId
        }
    });
    await models.annotations_media.bulkDisAssociateAnnotations_mediaWithPipeline_id(bulkAssociationInput, benignErrorReporter);
}



/**
 * countAssociatedRecordsWithRejectReaction - Count associated records with reject deletion action
 *
 * @param  {ID} id      Id of the record which the associations will be counted
 * @param  {objec} context Default context by resolver
 * @return {Int}         Number of associated records
 */
async function countAssociatedRecordsWithRejectReaction(id, context) {

    let pipeline_info = await resolvers.readOnePipeline_info({
        id: id
    }, context);
    //check that record actually exists
    if (pipeline_info === null) throw new Error(`Record with ID = ${id} does not exist`);
    let promises_to_many = [];
    let promises_to_one = [];
    let get_to_many_associated_fk = 0;

    let promises_cross_to_many = [];
    promises_to_many.push(pipeline_info.countFilteredAnnotationsGeom({}, context));
    promises_to_many.push(pipeline_info.countFilteredAnnotationsMedia({}, context));

    promises_cross_to_many.push(pipeline_info.countFilteredProcessedFiles({}, context));

    let result_to_many = await Promise.all(promises_to_many);
    let result_to_one = await Promise.all(promises_to_one);
    let result_cross_to_many = await Promise.all(promises_cross_to_many);

    let get_to_many_associated = result_to_many.reduce((accumulator, current_val) => accumulator + current_val, 0);
    let get_to_one_associated = result_to_one.filter((r, index) => helper.isNotUndefinedAndNotNull(r)).length;
    let get_cross_to_many_associated = result_cross_to_many.reduce((accumulator, current_val) => accumulator + current_val, 0);

    return get_to_one_associated + get_to_many_associated_fk + get_to_many_associated + get_cross_to_many_associated;
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
        throw new Error(`pipeline_info with id ${id} has associated records with 'reject' reaction and is NOT valid for deletion. Please clean up before you delete.`);
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
    const pipeline_info_record = await resolvers.readOnePipeline_info({
            id: id
        },
        context
    );
    const pagi_first = globals.LIMIT_RECORDS;



}
module.exports = {
    /**
     * pipeline_infos - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Offset and limit to get the records from and to respectively
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records holding conditions specified by search, order and pagination argument
     */
    pipeline_infos: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'pipeline_info', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(pagination.limit, context, "pipeline_infos");
            return await pipeline_info.readAll(search, order, pagination, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * pipeline_infosConnection - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
     */
    pipeline_infosConnection: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'pipeline_info', 'read') === true) {
            helper.checkCursorBasedPaginationArgument(pagination);
            let limit = helper.isNotUndefinedAndNotNull(pagination.first) ? pagination.first : pagination.last;
            helper.checkCountAndReduceRecordsLimit(limit, context, "pipeline_infosConnection");
            return await pipeline_info.readAllCursor(search, order, pagination, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * readOnePipeline_info - Check user authorization and return one record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to retrieve
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Record with id requested
     */
    readOnePipeline_info: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'pipeline_info', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(1, context, "readOnePipeline_info");
            return await pipeline_info.readById(id, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * countPipeline_infos - Counts number of records that holds the conditions specified in the search argument
     *
     * @param  {object} {search} Search argument for filtering records
     * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {number}          Number of records that holds the conditions specified in the search argument
     */
    countPipeline_infos: async function({
        search
    }, context) {
        if (await checkAuthorization(context, 'pipeline_info', 'read') === true) {
            return await pipeline_info.countRecords(search, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * validatePipeline_infoForCreation - Check user authorization and validate input argument for creation.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validatePipeline_infoForCreation: async (input, context) => {
        let authorization = await checkAuthorization(context, 'pipeline_info', 'read');
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
                    pipeline_info,
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
     * validatePipeline_infoForUpdating - Check user authorization and validate input argument for updating.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validatePipeline_infoForUpdating: async (input, context) => {
        let authorization = await checkAuthorization(context, 'pipeline_info', 'read');
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
                    pipeline_info,
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
     * validatePipeline_infoForDeletion - Check user authorization and validate record by ID for deletion.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validatePipeline_infoForDeletion: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'pipeline_info', 'read')) === true) {
            try {
                await validForDeletion(id, context);
                await validatorUtil.validateData(
                    "validateForDelete",
                    pipeline_info,
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
     * validatePipeline_infoAfterReading - Check user authorization and validate record by ID after reading.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validatePipeline_infoAfterReading: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'pipeline_info', 'read')) === true) {
            try {
                await validatorUtil.validateData(
                    "validateAfterRead",
                    pipeline_info,
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
     * addPipeline_info - Check user authorization and creates a new record with data specified in the input argument.
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         New record created
     */
    addPipeline_info: async function(input, context) {
        let authorization = await checkAuthorization(context, 'pipeline_info', 'create');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let createdPipeline_info = await pipeline_info.addOne(inputSanitized, context.benignErrors);
            await createdPipeline_info.handleAssociations(inputSanitized, context.benignErrors);
            return createdPipeline_info;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * deletePipeline_info - Check user authorization and delete a record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to delete
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string}         Message indicating if deletion was successfull.
     */
    deletePipeline_info: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'pipeline_info', 'delete') === true) {
            if (await validForDeletion(id, context)) {
                await updateAssociations(id, context);
                return pipeline_info.deleteOne(id, context.benignErrors);
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * updatePipeline_info - Check user authorization and update the record specified in the input argument
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   record to update and new info to update
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Updated record
     */
    updatePipeline_info: async function(input, context) {
        let authorization = await checkAuthorization(context, 'pipeline_info', 'update');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let updatedPipeline_info = await pipeline_info.updateOne(inputSanitized, context.benignErrors);
            await updatedPipeline_info.handleAssociations(inputSanitized, context.benignErrors);
            return updatedPipeline_info;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },


    /**
     * csvTableTemplatePipeline_info - Returns table's template
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {Array}         Strings, one for header and one columns types
     */
    csvTableTemplatePipeline_info: async function(_, context) {
        if (await checkAuthorization(context, 'pipeline_info', 'read') === true) {
            return pipeline_info.csvTableTemplate(context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * pipeline_infosZendroDefinition - Return data model definition
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {GraphQLJSONObject}        Data model definition
     */
    pipeline_infosZendroDefinition: async function(_, context) {
        if ((await checkAuthorization(context, "pipeline_info", "read")) === true) {
            return pipeline_info.definition;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

}