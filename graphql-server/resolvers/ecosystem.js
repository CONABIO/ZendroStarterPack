/*
    Resolvers for basic CRUD operations
*/

const path = require('path');
const ecosystem = require(path.join(__dirname, '..', 'models', 'index.js')).ecosystem;
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
    'addUnique_node': 'node',
    'addCumulus_ecosystem': 'cumulus'
}




/**
 * ecosystem.prototype.unique_nodeFilter - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Offset and limit to get the records from and to respectively
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of associated records holding conditions specified by search, order and pagination argument
 */
ecosystem.prototype.unique_nodeFilter = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "ecosystem_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });

    return resolvers.nodes({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}

/**
 * ecosystem.prototype.countFilteredUnique_node - Count number of associated records that holds the conditions specified in the search argument
 *
 * @param  {object} {search} description
 * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}          Number of associated records that holds the conditions specified in the search argument
 */
ecosystem.prototype.countFilteredUnique_node = function({
    search
}, context) {

    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "ecosystem_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.countNodes({
        search: nsearch
    }, context);
}

/**
 * ecosystem.prototype.unique_nodeConnection - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
 */
ecosystem.prototype.unique_nodeConnection = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "ecosystem_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.nodesConnection({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}
/**
 * ecosystem.prototype.cumulus_ecosystemFilter - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Offset and limit to get the records from and to respectively
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of associated records holding conditions specified by search, order and pagination argument
 */
ecosystem.prototype.cumulus_ecosystemFilter = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "ecosystem_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });

    return resolvers.cumulus({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}

/**
 * ecosystem.prototype.countFilteredCumulus_ecosystem - Count number of associated records that holds the conditions specified in the search argument
 *
 * @param  {object} {search} description
 * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}          Number of associated records that holds the conditions specified in the search argument
 */
ecosystem.prototype.countFilteredCumulus_ecosystem = function({
    search
}, context) {

    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "ecosystem_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.countCumulus({
        search: nsearch
    }, context);
}

/**
 * ecosystem.prototype.cumulus_ecosystemConnection - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
 */
ecosystem.prototype.cumulus_ecosystemConnection = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "ecosystem_id",
        "value": this.getIdValue(),
        "operator": "eq"
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
ecosystem.prototype.handleAssociations = async function(input, benignErrorReporter) {

    let promises_add = [];
    if (helper.isNonEmptyArray(input.addUnique_node)) {
        promises_add.push(this.add_unique_node(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.addCumulus_ecosystem)) {
        promises_add.push(this.add_cumulus_ecosystem(input, benignErrorReporter));
    }

    await Promise.all(promises_add);
    let promises_remove = [];
    if (helper.isNonEmptyArray(input.removeUnique_node)) {
        promises_remove.push(this.remove_unique_node(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.removeCumulus_ecosystem)) {
        promises_remove.push(this.remove_cumulus_ecosystem(input, benignErrorReporter));
    }

    await Promise.all(promises_remove);

}
/**
 * add_unique_node - field Mutation for to_many associations to add
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
ecosystem.prototype.add_unique_node = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.addUnique_node.map(associatedRecordId => {
        return {
            ecosystem_id: this.getIdValue(),
            [models.node.idAttribute()]: associatedRecordId
        }
    });
    await models.node.bulkAssociateNodeWithEcosystem_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * add_cumulus_ecosystem - field Mutation for to_many associations to add
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
ecosystem.prototype.add_cumulus_ecosystem = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.addCumulus_ecosystem.map(associatedRecordId => {
        return {
            ecosystem_id: this.getIdValue(),
            [models.cumulus.idAttribute()]: associatedRecordId
        }
    });
    await models.cumulus.bulkAssociateCumulusWithEcosystem_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * remove_unique_node - field Mutation for to_many associations to remove
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
ecosystem.prototype.remove_unique_node = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.removeUnique_node.map(associatedRecordId => {
        return {
            ecosystem_id: this.getIdValue(),
            [models.node.idAttribute()]: associatedRecordId
        }
    });
    await models.node.bulkDisAssociateNodeWithEcosystem_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * remove_cumulus_ecosystem - field Mutation for to_many associations to remove
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
ecosystem.prototype.remove_cumulus_ecosystem = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.removeCumulus_ecosystem.map(associatedRecordId => {
        return {
            ecosystem_id: this.getIdValue(),
            [models.cumulus.idAttribute()]: associatedRecordId
        }
    });
    await models.cumulus.bulkDisAssociateCumulusWithEcosystem_id(bulkAssociationInput, benignErrorReporter);
}



/**
 * countAssociatedRecordsWithRejectReaction - Count associated records with reject deletion action
 *
 * @param  {ID} id      Id of the record which the associations will be counted
 * @param  {objec} context Default context by resolver
 * @return {Int}         Number of associated records
 */
async function countAssociatedRecordsWithRejectReaction(id, context) {

    let ecosystem = await resolvers.readOneEcosystem({
        id: id
    }, context);
    //check that record actually exists
    if (ecosystem === null) throw new Error(`Record with ID = ${id} does not exist`);
    let promises_to_many = [];
    let promises_to_one = [];
    let get_to_many_associated_fk = 0;
    promises_to_many.push(ecosystem.countFilteredUnique_node({}, context));
    promises_to_many.push(ecosystem.countFilteredCumulus_ecosystem({}, context));


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
        throw new Error(`ecosystem with id ${id} has associated records with 'reject' reaction and is NOT valid for deletion. Please clean up before you delete.`);
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
    const ecosystem_record = await resolvers.readOneEcosystem({
            id: id
        },
        context
    );
    const pagi_first = globals.LIMIT_RECORDS;



}
module.exports = {
    /**
     * ecosystems - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Offset and limit to get the records from and to respectively
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records holding conditions specified by search, order and pagination argument
     */
    ecosystems: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'ecosystem', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(pagination.limit, context, "ecosystems");
            return await ecosystem.readAll(search, order, pagination, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * ecosystemsConnection - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
     */
    ecosystemsConnection: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'ecosystem', 'read') === true) {
            helper.checkCursorBasedPaginationArgument(pagination);
            let limit = helper.isNotUndefinedAndNotNull(pagination.first) ? pagination.first : pagination.last;
            helper.checkCountAndReduceRecordsLimit(limit, context, "ecosystemsConnection");
            return await ecosystem.readAllCursor(search, order, pagination, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * readOneEcosystem - Check user authorization and return one record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to retrieve
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Record with id requested
     */
    readOneEcosystem: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'ecosystem', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(1, context, "readOneEcosystem");
            return await ecosystem.readById(id, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * countEcosystems - Counts number of records that holds the conditions specified in the search argument
     *
     * @param  {object} {search} Search argument for filtering records
     * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {number}          Number of records that holds the conditions specified in the search argument
     */
    countEcosystems: async function({
        search
    }, context) {
        if (await checkAuthorization(context, 'ecosystem', 'read') === true) {
            return await ecosystem.countRecords(search, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * validateEcosystemForCreation - Check user authorization and validate input argument for creation.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateEcosystemForCreation: async (input, context) => {
        let authorization = await checkAuthorization(context, 'ecosystem', 'read');
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
                    ecosystem,
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
     * validateEcosystemForUpdating - Check user authorization and validate input argument for updating.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateEcosystemForUpdating: async (input, context) => {
        let authorization = await checkAuthorization(context, 'ecosystem', 'read');
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
                    ecosystem,
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
     * validateEcosystemForDeletion - Check user authorization and validate record by ID for deletion.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateEcosystemForDeletion: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'ecosystem', 'read')) === true) {
            try {
                await validForDeletion(id, context);
                await validatorUtil.validateData(
                    "validateForDelete",
                    ecosystem,
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
     * validateEcosystemAfterReading - Check user authorization and validate record by ID after reading.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateEcosystemAfterReading: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'ecosystem', 'read')) === true) {
            try {
                await validatorUtil.validateData(
                    "validateAfterRead",
                    ecosystem,
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
     * addEcosystem - Check user authorization and creates a new record with data specified in the input argument.
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         New record created
     */
    addEcosystem: async function(input, context) {
        let authorization = await checkAuthorization(context, 'ecosystem', 'create');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let createdEcosystem = await ecosystem.addOne(inputSanitized, context.benignErrors);
            await createdEcosystem.handleAssociations(inputSanitized, context.benignErrors);
            return createdEcosystem;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * deleteEcosystem - Check user authorization and delete a record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to delete
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string}         Message indicating if deletion was successfull.
     */
    deleteEcosystem: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'ecosystem', 'delete') === true) {
            if (await validForDeletion(id, context)) {
                await updateAssociations(id, context);
                return ecosystem.deleteOne(id, context.benignErrors);
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * updateEcosystem - Check user authorization and update the record specified in the input argument
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   record to update and new info to update
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Updated record
     */
    updateEcosystem: async function(input, context) {
        let authorization = await checkAuthorization(context, 'ecosystem', 'update');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let updatedEcosystem = await ecosystem.updateOne(inputSanitized, context.benignErrors);
            await updatedEcosystem.handleAssociations(inputSanitized, context.benignErrors);
            return updatedEcosystem;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },


    /**
     * csvTableTemplateEcosystem - Returns table's template
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {Array}         Strings, one for header and one columns types
     */
    csvTableTemplateEcosystem: async function(_, context) {
        if (await checkAuthorization(context, 'ecosystem', 'read') === true) {
            return ecosystem.csvTableTemplate(context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * ecosystemsZendroDefinition - Return data model definition
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {GraphQLJSONObject}        Data model definition
     */
    ecosystemsZendroDefinition: async function(_, context) {
        if ((await checkAuthorization(context, "ecosystem", "read")) === true) {
            return ecosystem.definition;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

}