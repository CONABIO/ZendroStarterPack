/*
    Resolvers for basic CRUD operations
*/

const path = require('path');
const user = require(path.join(__dirname, '..', 'models', 'index.js')).user;
const helper = require('../utils/helper');
const checkAuthorization = require('../utils/check-authorization');
const fs = require('fs');
const os = require('os');
const resolvers = require(path.join(__dirname, 'index.js'));
const models = require(path.join(__dirname, '..', 'models', 'index.js'));
const globals = require('../config/globals');
const errorHelper = require('../utils/errors');

const associationArgsDef = {
    'addInstitutions': 'institution',
    'addVisits': 'visit',
    'addRoles': 'role'
}


/**
 * user.prototype.rolesFilter - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Offset and limit to get the records from and to respectively
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of associated records holding conditions specified by search, order and pagination argument
 */
user.prototype.rolesFilter = async function({
    search,
    order,
    pagination
}, context) {
    if (await checkAuthorization(context, 'role', 'read') === true) {
        helper.checkCountAndReduceRecordsLimit(pagination.limit, context, "rolesFilter");
        return this.rolesFilterImpl({
            search,
            order,
            pagination
        });
    } else {
        throw new Error("You don't have authorization to perform this action");
    }
}

/**
 * user.prototype.rolesConnection - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
 */
user.prototype.rolesConnection = async function({
    search,
    order,
    pagination
}, context) {
    if (await checkAuthorization(context, 'role', 'read') === true) {
        helper.checkCursorBasedPaginationArgument(pagination);
        let limit = helper.isNotUndefinedAndNotNull(pagination.first) ? pagination.first : pagination.last;
        helper.checkCountAndReduceRecordsLimit(limit, context, "rolesConnection");
        return this.rolesConnectionImpl({
            search,
            order,
            pagination
        });
    } else {
        throw new Error("You don't have authorization to perform this action");
    }
}

/**
 * user.prototype.countFilteredRoles - Count number of associated records that holds the conditions specified in the search argument
 *
 * @param  {object} {search} description
 * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}          Number of associated records that holds the conditions specified in the search argument
 */
user.prototype.countFilteredRoles = async function({
    search
}, context) {
    if (await checkAuthorization(context, 'role', 'read') === true) {
        return this.countFilteredRolesImpl({
            search
        });
    } else {
        throw new Error("You don't have authorization to perform this action");
    }
}

/**
 * user.prototype.institutions - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
user.prototype.institutions = async function({
    search
}, context) {

    if (helper.isNotUndefinedAndNotNull(this.institution_id)) {
        if (search === undefined || search === null) {
            return resolvers.readOneInstitution({
                [models.institution.idAttribute()]: this.institution_id
            }, context)
        } else {

            //build new search filter
            let nsearch = helper.addSearchField({
                "search": search,
                "field": models.institution.idAttribute(),
                "value": this.institution_id,
                "operator": "eq"
            });
            let found = (await resolvers.institutionsConnection({
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
 * user.prototype.visitsFilter - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Offset and limit to get the records from and to respectively
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of associated records holding conditions specified by search, order and pagination argument
 */
user.prototype.visitsFilter = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "user_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });

    return resolvers.visits({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}

/**
 * user.prototype.countFilteredVisits - Count number of associated records that holds the conditions specified in the search argument
 *
 * @param  {object} {search} description
 * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}          Number of associated records that holds the conditions specified in the search argument
 */
user.prototype.countFilteredVisits = function({
    search
}, context) {

    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "user_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.countVisits({
        search: nsearch
    }, context);
}

/**
 * user.prototype.visitsConnection - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
 */
user.prototype.visitsConnection = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "user_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.visitsConnection({
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
user.prototype.handleAssociations = async function(input, benignErrorReporter) {

    let promises_add = [];
    if (helper.isNonEmptyArray(input.addVisits)) {
        promises_add.push(this.add_visits(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.addRoles)) {
        promises_add.push(this.add_roles(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.addInstitutions)) {
        promises_add.push(this.add_institutions(input, benignErrorReporter));
    }

    await Promise.all(promises_add);
    let promises_remove = [];
    if (helper.isNonEmptyArray(input.removeVisits)) {
        promises_remove.push(this.remove_visits(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.removeRoles)) {
        promises_remove.push(this.remove_roles(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.removeInstitutions)) {
        promises_remove.push(this.remove_institutions(input, benignErrorReporter));
    }

    await Promise.all(promises_remove);

}
/**
 * add_roles - field Mutation for to_many associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 */
user.prototype.add_roles = async function(input) {
    await models.user.add_role_id(this, input.addRoles);
}

/**
 * add_visits - field Mutation for to_many associations to add
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
user.prototype.add_visits = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.addVisits.map(associatedRecordId => {
        return {
            user_id: this.getIdValue(),
            [models.visit.idAttribute()]: associatedRecordId
        }
    });
    await models.visit.bulkAssociateVisitWithUser_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * add_institutions - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
user.prototype.add_institutions = async function(input, benignErrorReporter) {
    await user.add_institution_id(this.getIdValue(), input.addInstitutions, benignErrorReporter);
    this.institution_id = input.addInstitutions;
}

/**
 * remove_roles - field Mutation for to_many associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 */
user.prototype.remove_roles = async function(input) {
    await models.user.remove_role_id(this, input.removeRoles);
}

/**
 * remove_visits - field Mutation for to_many associations to remove
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
user.prototype.remove_visits = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.removeVisits.map(associatedRecordId => {
        return {
            user_id: this.getIdValue(),
            [models.visit.idAttribute()]: associatedRecordId
        }
    });
    await models.visit.bulkDisAssociateVisitWithUser_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * remove_institutions - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
user.prototype.remove_institutions = async function(input, benignErrorReporter) {
    if (input.removeInstitutions == this.institution_id) {
        await user.remove_institution_id(this.getIdValue(), input.removeInstitutions, benignErrorReporter);
        this.institution_id = null;
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

    let user = await resolvers.readOneUser({
        id: id
    }, context);
    //check that record actually exists
    if (user === null) throw new Error(`Record with ID = ${id} does not exist`);
    let promises_to_many = [];
    let promises_to_one = [];

    promises_to_many.push(user.countFilteredVisits({}, context));
    promises_to_one.push(user.institutions({}, context));

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
        throw new Error(`user with id ${id} has associated records and is NOT valid for deletion. Please clean up before you delete.`);
    }
    return true;
}

module.exports = {
    /**
     * users - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Offset and limit to get the records from and to respectively
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records holding conditions specified by search, order and pagination argument
     */
    users: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'user', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(pagination.limit, context, "users");
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await user.readAll(search, order, pagination, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * usersConnection - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
     */
    usersConnection: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'user', 'read') === true) {
            helper.checkCursorBasedPaginationArgument(pagination);
            let limit = helper.isNotUndefinedAndNotNull(pagination.first) ? pagination.first : pagination.last;
            helper.checkCountAndReduceRecordsLimit(limit, context, "usersConnection");
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await user.readAllCursor(search, order, pagination, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * readOneUser - Check user authorization and return one record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to retrieve
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Record with id requested
     */
    readOneUser: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'user', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(1, context, "readOneUser");
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await user.readById(id, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * countUsers - Counts number of records that holds the conditions specified in the search argument
     *
     * @param  {object} {search} Search argument for filtering records
     * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {number}          Number of records that holds the conditions specified in the search argument
     */
    countUsers: async function({
        search
    }, context) {
        if (await checkAuthorization(context, 'user', 'read') === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return await user.countRecords(search, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * vueTableUser - Return table of records as needed for displaying a vuejs table
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Records with format as needed for displaying a vuejs table
     */
    vueTableUser: async function(_, context) {
        if (await checkAuthorization(context, 'user', 'read') === true) {
            return helper.vueTable(context.request, user, ["id", "username", "password", "first_name", "last_name", "grade", "email", "address", "comments"]);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * addUser - Check user authorization and creates a new record with data specified in the input argument.
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         New record created
     */
    addUser: async function(input, context) {
        let authorization = await checkAuthorization(context, 'user', 'create');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            let createdUser = await user.addOne(inputSanitized, benignErrorReporter);
            await createdUser.handleAssociations(inputSanitized, benignErrorReporter);
            return createdUser;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * bulkAddUserCsv - Load csv file of records
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     */
    bulkAddUserCsv: async function(_, context) {
        if (await checkAuthorization(context, 'user', 'create') === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return user.bulkAddCsv(context, benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * deleteUser - Check user authorization and delete a record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to delete
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string}         Message indicating if deletion was successfull.
     */
    deleteUser: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'user', 'delete') === true) {
            if (await validForDeletion(id, context)) {
                let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
                return user.deleteOne(id, benignErrorReporter);
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * updateUser - Check user authorization and update the record specified in the input argument
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   record to update and new info to update
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Updated record
     */
    updateUser: async function(input, context) {
        let authorization = await checkAuthorization(context, 'user', 'update');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            let updatedUser = await user.updateOne(inputSanitized, benignErrorReporter);
            await updatedUser.handleAssociations(inputSanitized, benignErrorReporter);
            return updatedUser;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * bulkAssociateUserWithInstitution_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociateUserWithInstitution_id: async function(bulkAssociationInput, context) {
        let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                institution_id
            }) => institution_id)), models.institution);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), user);
        }
        return await user.bulkAssociateUserWithInstitution_id(bulkAssociationInput.bulkAssociationInput, benignErrorReporter);
    },
    /**
     * bulkDisAssociateUserWithInstitution_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociateUserWithInstitution_id: async function(bulkAssociationInput, context) {
        let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                institution_id
            }) => institution_id)), models.institution);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), user);
        }
        return await user.bulkDisAssociateUserWithInstitution_id(bulkAssociationInput.bulkAssociationInput, benignErrorReporter);
    },

    /**
     * csvTableTemplateUser - Returns table's template
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {Array}         Strings, one for header and one columns types
     */
    csvTableTemplateUser: async function(_, context) {
        if (await checkAuthorization(context, 'user', 'read') === true) {
            let benignErrorReporter = new errorHelper.BenignErrorReporter(context);
            return user.csvTableTemplate(benignErrorReporter);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    }

}