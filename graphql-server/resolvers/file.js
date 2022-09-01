/*
    Resolvers for basic CRUD operations
*/

const path = require('path');
const file = require(path.join(__dirname, '..', 'models', 'index.js')).file;
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
    'addAssociated_deployment': 'deployment',
    'addFile_annotations': 'annotations_geom_obs_type',
    'addFile_products': 'product'
}



/**
 * file.prototype.associated_deployment - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
file.prototype.associated_deployment = async function({
    search
}, context) {

    if (helper.isNotUndefinedAndNotNull(this.deployment_id)) {
        if (search === undefined || search === null) {
            return resolvers.readOneDeployment({
                [models.deployment.idAttribute()]: this.deployment_id
            }, context)
        } else {

            //build new search filter
            let nsearch = helper.addSearchField({
                "search": search,
                "field": models.deployment.idAttribute(),
                "value": this.deployment_id,
                "operator": "eq"
            });
            let found = (await resolvers.deploymentsConnection({
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
 * file.prototype.file_annotationsFilter - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Offset and limit to get the records from and to respectively
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of associated records holding conditions specified by search, order and pagination argument
 */
file.prototype.file_annotationsFilter = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "file_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });

    return resolvers.annotations_geom_obs_types({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}

/**
 * file.prototype.countFilteredFile_annotations - Count number of associated records that holds the conditions specified in the search argument
 *
 * @param  {object} {search} description
 * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}          Number of associated records that holds the conditions specified in the search argument
 */
file.prototype.countFilteredFile_annotations = function({
    search
}, context) {

    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "file_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.countAnnotations_geom_obs_types({
        search: nsearch
    }, context);
}

/**
 * file.prototype.file_annotationsConnection - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
 */
file.prototype.file_annotationsConnection = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "file_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.annotations_geom_obs_typesConnection({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}
/**
 * file.prototype.file_productsFilter - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Offset and limit to get the records from and to respectively
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of associated records holding conditions specified by search, order and pagination argument
 */
file.prototype.file_productsFilter = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "file_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });

    return resolvers.products({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}

/**
 * file.prototype.countFilteredFile_products - Count number of associated records that holds the conditions specified in the search argument
 *
 * @param  {object} {search} description
 * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}          Number of associated records that holds the conditions specified in the search argument
 */
file.prototype.countFilteredFile_products = function({
    search
}, context) {

    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "file_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.countProducts({
        search: nsearch
    }, context);
}

/**
 * file.prototype.file_productsConnection - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
 */
file.prototype.file_productsConnection = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "file_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.productsConnection({
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
file.prototype.handleAssociations = async function(input, benignErrorReporter) {

    let promises_add = [];
    if (helper.isNonEmptyArray(input.addFile_annotations)) {
        promises_add.push(this.add_file_annotations(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.addFile_products)) {
        promises_add.push(this.add_file_products(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.addAssociated_deployment)) {
        promises_add.push(this.add_associated_deployment(input, benignErrorReporter));
    }

    await Promise.all(promises_add);
    let promises_remove = [];
    if (helper.isNonEmptyArray(input.removeFile_annotations)) {
        promises_remove.push(this.remove_file_annotations(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.removeFile_products)) {
        promises_remove.push(this.remove_file_products(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.removeAssociated_deployment)) {
        promises_remove.push(this.remove_associated_deployment(input, benignErrorReporter));
    }

    await Promise.all(promises_remove);

}
/**
 * add_file_annotations - field Mutation for to_many associations to add
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
file.prototype.add_file_annotations = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.addFile_annotations.map(associatedRecordId => {
        return {
            file_id: this.getIdValue(),
            [models.annotations_geom_obs_type.idAttribute()]: associatedRecordId
        }
    });
    await models.annotations_geom_obs_type.bulkAssociateAnnotations_geom_obs_typeWithFile_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * add_file_products - field Mutation for to_many associations to add
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
file.prototype.add_file_products = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.addFile_products.map(associatedRecordId => {
        return {
            file_id: this.getIdValue(),
            [models.product.idAttribute()]: associatedRecordId
        }
    });
    await models.product.bulkAssociateProductWithFile_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * add_associated_deployment - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
file.prototype.add_associated_deployment = async function(input, benignErrorReporter) {
    await file.add_deployment_id(this.getIdValue(), input.addAssociated_deployment, benignErrorReporter);
    this.deployment_id = input.addAssociated_deployment;
}

/**
 * remove_file_annotations - field Mutation for to_many associations to remove
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
file.prototype.remove_file_annotations = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.removeFile_annotations.map(associatedRecordId => {
        return {
            file_id: this.getIdValue(),
            [models.annotations_geom_obs_type.idAttribute()]: associatedRecordId
        }
    });
    await models.annotations_geom_obs_type.bulkDisAssociateAnnotations_geom_obs_typeWithFile_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * remove_file_products - field Mutation for to_many associations to remove
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
file.prototype.remove_file_products = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.removeFile_products.map(associatedRecordId => {
        return {
            file_id: this.getIdValue(),
            [models.product.idAttribute()]: associatedRecordId
        }
    });
    await models.product.bulkDisAssociateProductWithFile_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * remove_associated_deployment - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
file.prototype.remove_associated_deployment = async function(input, benignErrorReporter) {
    if (input.removeAssociated_deployment == this.deployment_id) {
        await file.remove_deployment_id(this.getIdValue(), input.removeAssociated_deployment, benignErrorReporter);
        this.deployment_id = null;
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

    let file = await resolvers.readOneFile({
        id: id
    }, context);
    //check that record actually exists
    if (file === null) throw new Error(`Record with ID = ${id} does not exist`);
    let promises_to_many = [];
    let promises_to_one = [];
    let get_to_many_associated_fk = 0;
    promises_to_many.push(file.countFilteredFile_annotations({}, context));
    promises_to_many.push(file.countFilteredFile_products({}, context));
    promises_to_one.push(file.associated_deployment({}, context));


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
        throw new Error(`file with id ${id} has associated records with 'reject' reaction and is NOT valid for deletion. Please clean up before you delete.`);
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
    const file_record = await resolvers.readOneFile({
            id: id
        },
        context
    );
    const pagi_first = globals.LIMIT_RECORDS;



}
module.exports = {
    /**
     * files - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Offset and limit to get the records from and to respectively
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records holding conditions specified by search, order and pagination argument
     */
    files: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'file', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(pagination.limit, context, "files");
            return await file.readAll(search, order, pagination, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * filesConnection - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
     */
    filesConnection: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'file', 'read') === true) {
            helper.checkCursorBasedPaginationArgument(pagination);
            let limit = helper.isNotUndefinedAndNotNull(pagination.first) ? pagination.first : pagination.last;
            helper.checkCountAndReduceRecordsLimit(limit, context, "filesConnection");
            return await file.readAllCursor(search, order, pagination, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * readOneFile - Check user authorization and return one record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to retrieve
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Record with id requested
     */
    readOneFile: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'file', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(1, context, "readOneFile");
            return await file.readById(id, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * countFiles - Counts number of records that holds the conditions specified in the search argument
     *
     * @param  {object} {search} Search argument for filtering records
     * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {number}          Number of records that holds the conditions specified in the search argument
     */
    countFiles: async function({
        search
    }, context) {
        if (await checkAuthorization(context, 'file', 'read') === true) {
            return await file.countRecords(search, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * validateFileForCreation - Check user authorization and validate input argument for creation.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateFileForCreation: async (input, context) => {
        let authorization = await checkAuthorization(context, 'file', 'read');
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
                    file,
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
     * validateFileForUpdating - Check user authorization and validate input argument for updating.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateFileForUpdating: async (input, context) => {
        let authorization = await checkAuthorization(context, 'file', 'read');
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
                    file,
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
     * validateFileForDeletion - Check user authorization and validate record by ID for deletion.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateFileForDeletion: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'file', 'read')) === true) {
            try {
                await validForDeletion(id, context);
                await validatorUtil.validateData(
                    "validateForDelete",
                    file,
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
     * validateFileAfterReading - Check user authorization and validate record by ID after reading.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateFileAfterReading: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'file', 'read')) === true) {
            try {
                await validatorUtil.validateData(
                    "validateAfterRead",
                    file,
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
     * addFile - Check user authorization and creates a new record with data specified in the input argument.
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         New record created
     */
    addFile: async function(input, context) {
        let authorization = await checkAuthorization(context, 'file', 'create');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let createdFile = await file.addOne(inputSanitized, context.benignErrors);
            await createdFile.handleAssociations(inputSanitized, context.benignErrors);
            return createdFile;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * deleteFile - Check user authorization and delete a record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to delete
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string}         Message indicating if deletion was successfull.
     */
    deleteFile: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'file', 'delete') === true) {
            if (await validForDeletion(id, context)) {
                await updateAssociations(id, context);
                return file.deleteOne(id, context.benignErrors);
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * updateFile - Check user authorization and update the record specified in the input argument
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   record to update and new info to update
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Updated record
     */
    updateFile: async function(input, context) {
        let authorization = await checkAuthorization(context, 'file', 'update');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let updatedFile = await file.updateOne(inputSanitized, context.benignErrors);
            await updatedFile.handleAssociations(inputSanitized, context.benignErrors);
            return updatedFile;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * bulkAssociateFileWithDeployment_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociateFileWithDeployment_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                deployment_id
            }) => deployment_id)), models.deployment);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), file);
        }
        return await file.bulkAssociateFileWithDeployment_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },
    /**
     * bulkDisAssociateFileWithDeployment_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociateFileWithDeployment_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                deployment_id
            }) => deployment_id)), models.deployment);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), file);
        }
        return await file.bulkDisAssociateFileWithDeployment_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },

    /**
     * csvTableTemplateFile - Returns table's template
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {Array}         Strings, one for header and one columns types
     */
    csvTableTemplateFile: async function(_, context) {
        if (await checkAuthorization(context, 'file', 'read') === true) {
            return file.csvTableTemplate(context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * filesZendroDefinition - Return data model definition
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {GraphQLJSONObject}        Data model definition
     */
    filesZendroDefinition: async function(_, context) {
        if ((await checkAuthorization(context, "file", "read")) === true) {
            return file.definition;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

}