/*
    Resolvers for basic CRUD operations
*/

const path = require('path');
const node = require(path.join(__dirname, '..', 'models', 'index.js')).node;
const helper = require('../utils/helper');
const checkAuthorization = require('../utils/check-authorization');
const fs = require('fs');
const os = require('os');
const resolvers = require(path.join(__dirname, 'index.js'));
const models = require(path.join(__dirname, '..', 'models', 'index.js'));
const globals = require('../config/globals');
const errorHelper = require('../utils/errors');
const { updateOrCreateConvexHull } = require('./cumulus');
const validatorUtil = require("../utils/validatorUtil");
const associationArgsDef = {
    'addCumulus_node': 'cumulus',
    'addUnique_visit_pristine': 'visit',
    'addUnique_visit_disturbed': 'visit',
    'addEcosystems': 'ecosystem',
    'addDeployments': 'deployment'
}



/**
 * node.prototype.cumulus_node - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
node.prototype.cumulus_node = async function({
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
 * node.prototype.unique_visit_pristine - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
node.prototype.unique_visit_pristine = async function({
    search
}, context) {
    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "pristine_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });

    let found = (await resolvers.visitsConnection({
        search: nsearch,
        pagination: {
            first: 2
        }
    }, context)).edges;
    if (found.length > 0) {
        if (found.length > 1) {
            context.benignErrors.push(new Error(
                `Not unique "to_one" association Error: Found > 1 visits matching node with id ${this.getIdValue()}. Consider making this a "to_many" association, or using unique constraints, or moving the foreign key into the node model. Returning first visit.`
            ));
        }
        return found[0].node;
    }
    return null;
}
/**
 * node.prototype.unique_visit_disturbed - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
node.prototype.unique_visit_disturbed = async function({
    search
}, context) {
    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "disturbed_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });

    let found = (await resolvers.visitsConnection({
        search: nsearch,
        pagination: {
            first: 2
        }
    }, context)).edges;
    if (found.length > 0) {
        if (found.length > 1) {
            context.benignErrors.push(new Error(
                `Not unique "to_one" association Error: Found > 1 visits matching node with id ${this.getIdValue()}. Consider making this a "to_many" association, or using unique constraints, or moving the foreign key into the node model. Returning first visit.`
            ));
        }
        return found[0].node;
    }
    return null;
}
/**
 * node.prototype.ecosystems - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
node.prototype.ecosystems = async function({
    search
}, context) {

    if (helper.isNotUndefinedAndNotNull(this.ecosystem_id)) {
        if (search === undefined || search === null) {
            return resolvers.readOneEcosystem({
                [models.ecosystem.idAttribute()]: this.ecosystem_id
            }, context)
        } else {

            //build new search filter
            let nsearch = helper.addSearchField({
                "search": search,
                "field": models.ecosystem.idAttribute(),
                "value": this.ecosystem_id,
                "operator": "eq"
            });
            let found = (await resolvers.ecosystemsConnection({
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
 * node.prototype.deploymentsFilter - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Offset and limit to get the records from and to respectively
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of associated records holding conditions specified by search, order and pagination argument
 */
node.prototype.deploymentsFilter = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "node_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });

    return resolvers.deployments({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}

/**
 * node.prototype.countFilteredDeployments - Count number of associated records that holds the conditions specified in the search argument
 *
 * @param  {object} {search} description
 * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}          Number of associated records that holds the conditions specified in the search argument
 */
node.prototype.countFilteredDeployments = function({
    search
}, context) {

    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "node_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.countDeployments({
        search: nsearch
    }, context);
}

/**
 * node.prototype.deploymentsConnection - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
 */
node.prototype.deploymentsConnection = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "node_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.deploymentsConnection({
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
node.prototype.handleAssociations = async function(input, benignErrorReporter) {

    let promises_add = [];
    if (helper.isNonEmptyArray(input.addDeployments)) {
        promises_add.push(this.add_deployments(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.addCumulus_node)) {
        promises_add.push(this.add_cumulus_node(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.addUnique_visit_pristine)) {
        promises_add.push(this.add_unique_visit_pristine(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.addUnique_visit_disturbed)) {
        promises_add.push(this.add_unique_visit_disturbed(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.addEcosystems)) {
        promises_add.push(this.add_ecosystems(input, benignErrorReporter));
    }

    await Promise.all(promises_add);
    let promises_remove = [];
    if (helper.isNonEmptyArray(input.removeDeployments)) {
        promises_remove.push(this.remove_deployments(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.removeCumulus_node)) {
        promises_remove.push(this.remove_cumulus_node(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.removeUnique_visit_pristine)) {
        promises_remove.push(this.remove_unique_visit_pristine(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.removeUnique_visit_disturbed)) {
        promises_remove.push(this.remove_unique_visit_disturbed(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.removeEcosystems)) {
        promises_remove.push(this.remove_ecosystems(input, benignErrorReporter));
    }

    await Promise.all(promises_remove);

}
/**
 * add_deployments - field Mutation for to_many associations to add
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
node.prototype.add_deployments = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.addDeployments.map(associatedRecordId => {
        return {
            node_id: this.getIdValue(),
            [models.deployment.idAttribute()]: associatedRecordId
        }
    });
    await models.deployment.bulkAssociateDeploymentWithNode_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * add_cumulus_node - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
node.prototype.add_cumulus_node = async function(input, benignErrorReporter) {
    await updateOrCreateConvexHull(input,this.cumulus_id,true);
    await node.add_cumulus_id(this.getIdValue(), input.addCumulus_node, benignErrorReporter);
    this.cumulus_id = input.addCumulus_node;
}

/**
 * add_unique_visit_pristine - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
node.prototype.add_unique_visit_pristine = async function(input, benignErrorReporter) {
    await models.visit.add_pristine_id(input.addUnique_visit_pristine, this.getIdValue(), benignErrorReporter);
}

/**
 * add_unique_visit_disturbed - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
node.prototype.add_unique_visit_disturbed = async function(input, benignErrorReporter) {
    await models.visit.add_disturbed_id(input.addUnique_visit_disturbed, this.getIdValue(), benignErrorReporter);
}

/**
 * add_ecosystems - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
node.prototype.add_ecosystems = async function(input, benignErrorReporter) {
    await node.add_ecosystem_id(this.getIdValue(), input.addEcosystems, benignErrorReporter);
    this.ecosystem_id = input.addEcosystems;
}

/**
 * remove_deployments - field Mutation for to_many associations to remove
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
node.prototype.remove_deployments = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.removeDeployments.map(associatedRecordId => {
        return {
            node_id: this.getIdValue(),
            [models.deployment.idAttribute()]: associatedRecordId
        }
    });
    await models.deployment.bulkDisAssociateDeploymentWithNode_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * remove_cumulus_node - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
node.prototype.remove_cumulus_node = async function(input, benignErrorReporter) {
    if (input.removeCumulus_node == this.cumulus_id) {
        await updateOrCreateConvexHull(input,this.cumulus_id,false);
        await node.remove_cumulus_id(this.getIdValue(), input.removeCumulus_node, benignErrorReporter);
        this.cumulus_id = null;
    }
}

/**
 * remove_unique_visit_pristine - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
node.prototype.remove_unique_visit_pristine = async function(input, benignErrorReporter) {
    await models.visit.remove_pristine_id(input.removeUnique_visit_pristine, this.getIdValue(), benignErrorReporter);
}

/**
 * remove_unique_visit_disturbed - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
node.prototype.remove_unique_visit_disturbed = async function(input, benignErrorReporter) {
    await models.visit.remove_disturbed_id(input.removeUnique_visit_disturbed, this.getIdValue(), benignErrorReporter);
}

/**
 * remove_ecosystems - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
node.prototype.remove_ecosystems = async function(input, benignErrorReporter) {
    if (input.removeEcosystems == this.ecosystem_id) {
        await node.remove_ecosystem_id(this.getIdValue(), input.removeEcosystems, benignErrorReporter);
        this.ecosystem_id = null;
    }
}



/**
 * countAllAssociatedRecords - Count records associated with another given record
 *
 * @param  {ID} id      Id of the record which the associations will be counted
 * @param  {objec} context Default context by resolver
 * @return {Int}         Number of associated records
 */
async function countAllAssociatedRecords(id, context) {

    let node = await resolvers.readOneNode({
        id: id
    }, context);
    //check that record actually exists
    if (node === null) throw new Error(`Record with ID = ${id} does not exist`);
    let promises_to_many = [];
    let promises_to_one = [];

    promises_to_many.push(node.countFilteredDeployments({}, context));
    promises_to_one.push(node.cumulus_node({}, context));
    promises_to_one.push(node.unique_visit_pristine({}, context));
    promises_to_one.push(node.unique_visit_disturbed({}, context));
    promises_to_one.push(node.ecosystems({}, context));

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
        throw new Error(`node with id ${id} has associated records and is NOT valid for deletion. Please clean up before you delete.`);
    }
    return true;
}

module.exports = {
    /**
     * nodes - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Offset and limit to get the records from and to respectively
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records holding conditions specified by search, order and pagination argument
     */
    nodes: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'node', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(pagination.limit, context, "nodes");
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await node.readAll(search, order, pagination, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * nodesConnection - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
     */
    nodesConnection: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'node', 'read') === true) {
            helper.checkCursorBasedPaginationArgument(pagination);
            let limit = helper.isNotUndefinedAndNotNull(pagination.first) ? pagination.first : pagination.last;
            helper.checkCountAndReduceRecordsLimit(limit, context, "nodesConnection");
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await node.readAllCursor(search, order, pagination, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * readOneNode - Check user authorization and return one record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to retrieve
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Record with id requested
     */
    readOneNode: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'node', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(1, context, "readOneNode");
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await node.readById(id, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * countNodes - Counts number of records that holds the conditions specified in the search argument
     *
     * @param  {object} {search} Search argument for filtering records
     * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {number}          Number of records that holds the conditions specified in the search argument
     */
    countNodes: async function({
        search
    }, context) {
        if (await checkAuthorization(context, 'node', 'read') === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await node.countRecords(search, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * vueTableNode - Return table of records as needed for displaying a vuejs table
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Records with format as needed for displaying a vuejs table
     */
    vueTableNode: async function(_, context) {
        if (await checkAuthorization(context, 'node', 'read') === true) {
            return helper.vueTable(context.request, node, ["id", "nomenclatura", "cat_integr"]);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * validateNodeForCreation - Check user authorization and validate input argument for creation.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateNodeForCreation: async (input, context) => {
        let authorization = await checkAuthorization(context, 'node', 'read');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [
                Object.keys(associationArgsDef),
            ]);

            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
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
                    node,
                    inputSanitized
                );
                return true;
            } catch (error) {
                benignErrorReporter.reportError(error);
                return false;
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * validateNodeForUpdating - Check user authorization and validate input argument for updating.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateNodeForUpdating: async (input, context) => {
        let authorization = await checkAuthorization(context, 'node', 'read');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [
                Object.keys(associationArgsDef),
            ]);

            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
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
                    node,
                    inputSanitized
                );
                return true;
            } catch (error) {
                benignErrorReporter.reportError(error);
                return false;
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * validateNodeForDeletion - Check user authorization and validate record by ID for deletion.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateNodeForDeletion: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'node', 'read')) === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);

            try {
                await validForDeletion(id, context);
                await validatorUtil.validateData(
                    "validateForDelete",
                    node,
                    id);
                return true;
            } catch (error) {
                benignErrorReporter.reportError(error);
                return false;
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * validateNodeAfterReading - Check user authorization and validate record by ID after reading.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateNodeAfterReading: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'node', 'read')) === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);

            try {
                await validatorUtil.validateData(
                    "validateAfterRead",
                    node,
                    id);
                return true;
            } catch (error) {
                benignErrorReporter.reportError(error);
                return false;
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },
    /**
     * addNode - Check user authorization and creates a new record with data specified in the input argument.
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         New record created
     */
    addNode: async function(input, context) {
        let authorization = await checkAuthorization(context, 'node', 'create');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            let createdNode = await node.addOne(inputSanitized, benignErrorReporter);
            await createdNode.handleAssociations(inputSanitized, benignErrorReporter);
            return createdNode;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * bulkAddNodeCsv - Load csv file of records
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     */
    bulkAddNodeCsv: async function(_, context) {
        if (await checkAuthorization(context, 'node', 'create') === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return node.bulkAddCsv(context, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * deleteNode - Check user authorization and delete a record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to delete
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string}         Message indicating if deletion was successfull.
     */
    deleteNode: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'node', 'delete') === true) {
            if (await validForDeletion(id, context)) {
                let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
                return node.deleteOne(id, benignErrorReporter);
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * updateNode - Check user authorization and update the record specified in the input argument
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   record to update and new info to update
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Updated record
     */
    updateNode: async function(input, context) {
        let authorization = await checkAuthorization(context, 'node', 'update');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            let updatedNode = await node.updateOne(inputSanitized, benignErrorReporter);
            await updatedNode.handleAssociations(inputSanitized, benignErrorReporter);
            return updatedNode;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * bulkAssociateNodeWithCumulus_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociateNodeWithCumulus_id: async function(bulkAssociationInput, context) {
        let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                cumulus_id
            }) => cumulus_id)), models.cumulus);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), node);
        }
        return await node.bulkAssociateNodeWithCumulus_id(bulkAssociationInput.bulkAssociationInput, benignErrorReporter);
    },
    /**
     * bulkAssociateNodeWithEcosystem_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociateNodeWithEcosystem_id: async function(bulkAssociationInput, context) {
        let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                ecosystem_id
            }) => ecosystem_id)), models.ecosystem);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), node);
        }
        return await node.bulkAssociateNodeWithEcosystem_id(bulkAssociationInput.bulkAssociationInput, benignErrorReporter);
    },
    /**
     * bulkDisAssociateNodeWithCumulus_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociateNodeWithCumulus_id: async function(bulkAssociationInput, context) {
        let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                cumulus_id
            }) => cumulus_id)), models.cumulus);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), node);
        }
        return await node.bulkDisAssociateNodeWithCumulus_id(bulkAssociationInput.bulkAssociationInput, benignErrorReporter);
    },
    /**
     * bulkDisAssociateNodeWithEcosystem_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociateNodeWithEcosystem_id: async function(bulkAssociationInput, context) {
        let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                ecosystem_id
            }) => ecosystem_id)), models.ecosystem);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), node);
        }
        return await node.bulkDisAssociateNodeWithEcosystem_id(bulkAssociationInput.bulkAssociationInput, benignErrorReporter);
    },

    /**
     * csvTableTemplateNode - Returns table's template
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {Array}         Strings, one for header and one columns types
     */
    csvTableTemplateNode: async function(_, context) {
        if (await checkAuthorization(context, 'node', 'read') === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return node.csvTableTemplate(benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    }

}