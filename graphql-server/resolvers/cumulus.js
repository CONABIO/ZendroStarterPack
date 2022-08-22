/*
    Resolvers for basic CRUD operations
*/

const path = require('path');
const cumulus = require(path.join(__dirname, '..', 'models', 'index.js')).cumulus;
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
    'addCumulus_criteria': 'cumulus_criteria',
    'addUnique_ecosystem': 'ecosystem',
    'addDevices': 'physical_device',
    'addAssociated_partners': 'user',
    'addVisits': 'visit',
    'addMonitors': 'monitor',
    'addNodes': 'node',
    'addDeployments': 'deployment',
    'addIndividuals': 'individual',
    'addFile_counts': 'file_count'
}



/**
 * cumulus.prototype.cumulus_criteria - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
cumulus.prototype.cumulus_criteria = async function({
    search
}, context) {

    if (helper.isNotUndefinedAndNotNull(this.criteria_id)) {
        if (search === undefined || search === null) {
            return resolvers.readOneCumulus_criteria({
                [models.cumulus_criteria.idAttribute()]: this.criteria_id
            }, context)
        } else {

            //build new search filter
            let nsearch = helper.addSearchField({
                "search": search,
                "field": models.cumulus_criteria.idAttribute(),
                "value": this.criteria_id,
                "operator": "eq"
            });
            let found = (await resolvers.cumulus_criteriaConnection({
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
 * cumulus.prototype.unique_ecosystem - Return associated record
 *
 * @param  {object} search       Search argument to match the associated record
 * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}         Associated record
 */
cumulus.prototype.unique_ecosystem = async function({
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
 * cumulus.prototype.devicesFilter - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Offset and limit to get the records from and to respectively
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of associated records holding conditions specified by search, order and pagination argument
 */
cumulus.prototype.devicesFilter = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "cumulus_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });

    return resolvers.physical_devices({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}

/**
 * cumulus.prototype.countFilteredDevices - Count number of associated records that holds the conditions specified in the search argument
 *
 * @param  {object} {search} description
 * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}          Number of associated records that holds the conditions specified in the search argument
 */
cumulus.prototype.countFilteredDevices = function({
    search
}, context) {

    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "cumulus_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.countPhysical_devices({
        search: nsearch
    }, context);
}

/**
 * cumulus.prototype.devicesConnection - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
 */
cumulus.prototype.devicesConnection = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "cumulus_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.physical_devicesConnection({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}
/**
 * cumulus.prototype.associated_partnersFilter - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Offset and limit to get the records from and to respectively
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of associated records holding conditions specified by search, order and pagination argument
 */
cumulus.prototype.associated_partnersFilter = function({
    search,
    order,
    pagination
}, context) {


    //return an empty response if the foreignKey Array is empty, no need to query the database
    if (!Array.isArray(this.user_ids) || this.user_ids.length === 0) {
        return [];
    }
    let nsearch = helper.addSearchField({
        "search": search,
        "field": models.user.idAttribute(),
        "value": this.user_ids.join(','),
        "valueType": "Array",
        "operator": "in"
    });
    return resolvers.users({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}

/**
 * cumulus.prototype.countFilteredAssociated_partners - Count number of associated records that holds the conditions specified in the search argument
 *
 * @param  {object} {search} description
 * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}          Number of associated records that holds the conditions specified in the search argument
 */
cumulus.prototype.countFilteredAssociated_partners = function({
    search
}, context) {


    //return 0 if the foreignKey Array is empty, no need to query the database
    if (!Array.isArray(this.user_ids) || this.user_ids.length === 0) {
        return 0;
    }

    let nsearch = helper.addSearchField({
        "search": search,
        "field": models.user.idAttribute(),
        "value": this.user_ids.join(','),
        "valueType": "Array",
        "operator": "in"
    });

    return resolvers.countUsers({
        search: nsearch
    }, context);
}

/**
 * cumulus.prototype.associated_partnersConnection - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
 */
cumulus.prototype.associated_partnersConnection = function({
    search,
    order,
    pagination
}, context) {


    //return an empty response if the foreignKey Array is empty, no need to query the database
    if (!Array.isArray(this.user_ids) || this.user_ids.length === 0) {
        return {
            edges: [],
            users: [],
            pageInfo: {
                startCursor: null,
                endCursor: null,
                hasPreviousPage: false,
                hasNextPage: false
            }
        };
    }

    let nsearch = helper.addSearchField({
        "search": search,
        "field": models.user.idAttribute(),
        "value": this.user_ids.join(','),
        "valueType": "Array",
        "operator": "in"
    });
    return resolvers.usersConnection({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}
/**
 * cumulus.prototype.visitsFilter - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Offset and limit to get the records from and to respectively
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of associated records holding conditions specified by search, order and pagination argument
 */
cumulus.prototype.visitsFilter = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "cumulus_id",
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
 * cumulus.prototype.countFilteredVisits - Count number of associated records that holds the conditions specified in the search argument
 *
 * @param  {object} {search} description
 * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}          Number of associated records that holds the conditions specified in the search argument
 */
cumulus.prototype.countFilteredVisits = function({
    search
}, context) {

    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "cumulus_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.countVisits({
        search: nsearch
    }, context);
}

/**
 * cumulus.prototype.visitsConnection - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
 */
cumulus.prototype.visitsConnection = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "cumulus_id",
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
 * cumulus.prototype.monitorsFilter - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Offset and limit to get the records from and to respectively
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of associated records holding conditions specified by search, order and pagination argument
 */
cumulus.prototype.monitorsFilter = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "cumulus_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });

    return resolvers.monitors({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}

/**
 * cumulus.prototype.countFilteredMonitors - Count number of associated records that holds the conditions specified in the search argument
 *
 * @param  {object} {search} description
 * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}          Number of associated records that holds the conditions specified in the search argument
 */
cumulus.prototype.countFilteredMonitors = function({
    search
}, context) {

    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "cumulus_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.countMonitors({
        search: nsearch
    }, context);
}

/**
 * cumulus.prototype.monitorsConnection - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
 */
cumulus.prototype.monitorsConnection = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "cumulus_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.monitorsConnection({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}
/**
 * cumulus.prototype.nodesFilter - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Offset and limit to get the records from and to respectively
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of associated records holding conditions specified by search, order and pagination argument
 */
cumulus.prototype.nodesFilter = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "cumulus_id",
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
 * cumulus.prototype.countFilteredNodes - Count number of associated records that holds the conditions specified in the search argument
 *
 * @param  {object} {search} description
 * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}          Number of associated records that holds the conditions specified in the search argument
 */
cumulus.prototype.countFilteredNodes = function({
    search
}, context) {

    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "cumulus_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.countNodes({
        search: nsearch
    }, context);
}

/**
 * cumulus.prototype.nodesConnection - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
 */
cumulus.prototype.nodesConnection = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "cumulus_id",
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
 * cumulus.prototype.deploymentsFilter - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Offset and limit to get the records from and to respectively
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of associated records holding conditions specified by search, order and pagination argument
 */
cumulus.prototype.deploymentsFilter = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "cumulus_id",
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
 * cumulus.prototype.countFilteredDeployments - Count number of associated records that holds the conditions specified in the search argument
 *
 * @param  {object} {search} description
 * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}          Number of associated records that holds the conditions specified in the search argument
 */
cumulus.prototype.countFilteredDeployments = function({
    search
}, context) {

    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "cumulus_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.countDeployments({
        search: nsearch
    }, context);
}

/**
 * cumulus.prototype.deploymentsConnection - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
 */
cumulus.prototype.deploymentsConnection = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "cumulus_id",
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
 * cumulus.prototype.individualsFilter - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Offset and limit to get the records from and to respectively
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of associated records holding conditions specified by search, order and pagination argument
 */
cumulus.prototype.individualsFilter = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "cumulus_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });

    return resolvers.individuals({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}

/**
 * cumulus.prototype.countFilteredIndividuals - Count number of associated records that holds the conditions specified in the search argument
 *
 * @param  {object} {search} description
 * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}          Number of associated records that holds the conditions specified in the search argument
 */
cumulus.prototype.countFilteredIndividuals = function({
    search
}, context) {

    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "cumulus_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.countIndividuals({
        search: nsearch
    }, context);
}

/**
 * cumulus.prototype.individualsConnection - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
 */
cumulus.prototype.individualsConnection = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "cumulus_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.individualsConnection({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}
/**
 * cumulus.prototype.file_countsFilter - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Offset and limit to get the records from and to respectively
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of associated records holding conditions specified by search, order and pagination argument
 */
cumulus.prototype.file_countsFilter = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "cumulus_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });

    return resolvers.file_counts({
        search: nsearch,
        order: order,
        pagination: pagination
    }, context);
}

/**
 * cumulus.prototype.countFilteredFile_counts - Count number of associated records that holds the conditions specified in the search argument
 *
 * @param  {object} {search} description
 * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {type}          Number of associated records that holds the conditions specified in the search argument
 */
cumulus.prototype.countFilteredFile_counts = function({
    search
}, context) {

    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "cumulus_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.countFile_counts({
        search: nsearch
    }, context);
}

/**
 * cumulus.prototype.file_countsConnection - Check user authorization and return certain number, specified in pagination argument, of records
 * associated with the current instance, this records should also
 * holds the condition of search argument, all of them sorted as specified by the order argument.
 *
 * @param  {object} search     Search argument for filtering associated records
 * @param  {array} order       Type of sorting (ASC, DESC) for each field
 * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
 * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
 * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
 */
cumulus.prototype.file_countsConnection = function({
    search,
    order,
    pagination
}, context) {


    //build new search filter
    let nsearch = helper.addSearchField({
        "search": search,
        "field": "cumulus_id",
        "value": this.getIdValue(),
        "operator": "eq"
    });
    return resolvers.file_countsConnection({
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
cumulus.prototype.handleAssociations = async function(input, benignErrorReporter) {

    let promises_add = [];
    if (helper.isNonEmptyArray(input.addDevices)) {
        promises_add.push(this.add_devices(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.addAssociated_partners)) {
        promises_add.push(this.add_associated_partners(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.addVisits)) {
        promises_add.push(this.add_visits(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.addMonitors)) {
        promises_add.push(this.add_monitors(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.addNodes)) {
        promises_add.push(this.add_nodes(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.addDeployments)) {
        promises_add.push(this.add_deployments(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.addIndividuals)) {
        promises_add.push(this.add_individuals(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.addFile_counts)) {
        promises_add.push(this.add_file_counts(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.addCumulus_criteria)) {
        promises_add.push(this.add_cumulus_criteria(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.addUnique_ecosystem)) {
        promises_add.push(this.add_unique_ecosystem(input, benignErrorReporter));
    }

    await Promise.all(promises_add);
    let promises_remove = [];
    if (helper.isNonEmptyArray(input.removeDevices)) {
        promises_remove.push(this.remove_devices(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.removeAssociated_partners)) {
        promises_remove.push(this.remove_associated_partners(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.removeVisits)) {
        promises_remove.push(this.remove_visits(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.removeMonitors)) {
        promises_remove.push(this.remove_monitors(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.removeNodes)) {
        promises_remove.push(this.remove_nodes(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.removeDeployments)) {
        promises_remove.push(this.remove_deployments(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.removeIndividuals)) {
        promises_remove.push(this.remove_individuals(input, benignErrorReporter));
    }
    if (helper.isNonEmptyArray(input.removeFile_counts)) {
        promises_remove.push(this.remove_file_counts(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.removeCumulus_criteria)) {
        promises_remove.push(this.remove_cumulus_criteria(input, benignErrorReporter));
    }
    if (helper.isNotUndefinedAndNotNull(input.removeUnique_ecosystem)) {
        promises_remove.push(this.remove_unique_ecosystem(input, benignErrorReporter));
    }

    await Promise.all(promises_remove);

}
/**
 * add_devices - field Mutation for to_many associations to add
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
cumulus.prototype.add_devices = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.addDevices.map(associatedRecordId => {
        return {
            cumulus_id: this.getIdValue(),
            [models.physical_device.idAttribute()]: associatedRecordId
        }
    });
    await models.physical_device.bulkAssociatePhysical_deviceWithCumulus_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * add_associated_partners - field Mutation for to_many associations to add
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
cumulus.prototype.add_associated_partners = async function(input, benignErrorReporter) {

    await cumulus.add_user_ids(this.getIdValue(), input.addAssociated_partners, benignErrorReporter);
    this.user_ids = helper.unionIds(this.user_ids, input.addAssociated_partners);
}

/**
 * add_visits - field Mutation for to_many associations to add
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
cumulus.prototype.add_visits = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.addVisits.map(associatedRecordId => {
        return {
            cumulus_id: this.getIdValue(),
            [models.visit.idAttribute()]: associatedRecordId
        }
    });
    await models.visit.bulkAssociateVisitWithCumulus_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * add_monitors - field Mutation for to_many associations to add
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
cumulus.prototype.add_monitors = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.addMonitors.map(associatedRecordId => {
        return {
            cumulus_id: this.getIdValue(),
            [models.monitor.idAttribute()]: associatedRecordId
        }
    });
    await models.monitor.bulkAssociateMonitorWithCumulus_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * add_nodes - field Mutation for to_many associations to add
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
cumulus.prototype.add_nodes = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.addNodes.map(associatedRecordId => {
        return {
            cumulus_id: this.getIdValue(),
            [models.node.idAttribute()]: associatedRecordId
        }
    });
    await models.node.bulkAssociateNodeWithCumulus_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * add_deployments - field Mutation for to_many associations to add
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
cumulus.prototype.add_deployments = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.addDeployments.map(associatedRecordId => {
        return {
            cumulus_id: this.getIdValue(),
            [models.deployment.idAttribute()]: associatedRecordId
        }
    });
    await models.deployment.bulkAssociateDeploymentWithCumulus_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * add_individuals - field Mutation for to_many associations to add
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
cumulus.prototype.add_individuals = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.addIndividuals.map(associatedRecordId => {
        return {
            cumulus_id: this.getIdValue(),
            [models.individual.idAttribute()]: associatedRecordId
        }
    });
    await models.individual.bulkAssociateIndividualWithCumulus_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * add_file_counts - field Mutation for to_many associations to add
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
cumulus.prototype.add_file_counts = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.addFile_counts.map(associatedRecordId => {
        return {
            cumulus_id: this.getIdValue(),
            [models.file_count.idAttribute()]: associatedRecordId
        }
    });
    await models.file_count.bulkAssociateFile_countWithCumulus_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * add_cumulus_criteria - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
cumulus.prototype.add_cumulus_criteria = async function(input, benignErrorReporter) {
    await cumulus.add_criteria_id(this.getIdValue(), input.addCumulus_criteria, benignErrorReporter);
    this.criteria_id = input.addCumulus_criteria;
}

/**
 * add_unique_ecosystem - field Mutation for to_one associations to add
 *
 * @param {object} input   Info of input Ids to add  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
cumulus.prototype.add_unique_ecosystem = async function(input, benignErrorReporter) {
    await cumulus.add_ecosystem_id(this.getIdValue(), input.addUnique_ecosystem, benignErrorReporter);
    this.ecosystem_id = input.addUnique_ecosystem;
}

/**
 * remove_devices - field Mutation for to_many associations to remove
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
cumulus.prototype.remove_devices = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.removeDevices.map(associatedRecordId => {
        return {
            cumulus_id: this.getIdValue(),
            [models.physical_device.idAttribute()]: associatedRecordId
        }
    });
    await models.physical_device.bulkDisAssociatePhysical_deviceWithCumulus_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * remove_associated_partners - field Mutation for to_many associations to remove
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
cumulus.prototype.remove_associated_partners = async function(input, benignErrorReporter) {

    await cumulus.remove_user_ids(this.getIdValue(), input.removeAssociated_partners, benignErrorReporter);
    this.user_ids = helper.differenceIds(this.user_ids, input.removeAssociated_partners);
}

/**
 * remove_visits - field Mutation for to_many associations to remove
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
cumulus.prototype.remove_visits = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.removeVisits.map(associatedRecordId => {
        return {
            cumulus_id: this.getIdValue(),
            [models.visit.idAttribute()]: associatedRecordId
        }
    });
    await models.visit.bulkDisAssociateVisitWithCumulus_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * remove_monitors - field Mutation for to_many associations to remove
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
cumulus.prototype.remove_monitors = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.removeMonitors.map(associatedRecordId => {
        return {
            cumulus_id: this.getIdValue(),
            [models.monitor.idAttribute()]: associatedRecordId
        }
    });
    await models.monitor.bulkDisAssociateMonitorWithCumulus_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * remove_nodes - field Mutation for to_many associations to remove
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
cumulus.prototype.remove_nodes = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.removeNodes.map(associatedRecordId => {
        return {
            cumulus_id: this.getIdValue(),
            [models.node.idAttribute()]: associatedRecordId
        }
    });
    await models.node.bulkDisAssociateNodeWithCumulus_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * remove_deployments - field Mutation for to_many associations to remove
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
cumulus.prototype.remove_deployments = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.removeDeployments.map(associatedRecordId => {
        return {
            cumulus_id: this.getIdValue(),
            [models.deployment.idAttribute()]: associatedRecordId
        }
    });
    await models.deployment.bulkDisAssociateDeploymentWithCumulus_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * remove_individuals - field Mutation for to_many associations to remove
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
cumulus.prototype.remove_individuals = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.removeIndividuals.map(associatedRecordId => {
        return {
            cumulus_id: this.getIdValue(),
            [models.individual.idAttribute()]: associatedRecordId
        }
    });
    await models.individual.bulkDisAssociateIndividualWithCumulus_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * remove_file_counts - field Mutation for to_many associations to remove
 * uses bulkAssociate to efficiently update associations
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
cumulus.prototype.remove_file_counts = async function(input, benignErrorReporter) {

    let bulkAssociationInput = input.removeFile_counts.map(associatedRecordId => {
        return {
            cumulus_id: this.getIdValue(),
            [models.file_count.idAttribute()]: associatedRecordId
        }
    });
    await models.file_count.bulkDisAssociateFile_countWithCumulus_id(bulkAssociationInput, benignErrorReporter);
}

/**
 * remove_cumulus_criteria - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
cumulus.prototype.remove_cumulus_criteria = async function(input, benignErrorReporter) {
    if (input.removeCumulus_criteria == this.criteria_id) {
        await cumulus.remove_criteria_id(this.getIdValue(), input.removeCumulus_criteria, benignErrorReporter);
        this.criteria_id = null;
    }
}

/**
 * remove_unique_ecosystem - field Mutation for to_one associations to remove
 *
 * @param {object} input   Info of input Ids to remove  the association
 * @param {BenignErrorReporter} benignErrorReporter Error Reporter used for reporting Errors from remote zendro services
 */
cumulus.prototype.remove_unique_ecosystem = async function(input, benignErrorReporter) {
    if (input.removeUnique_ecosystem == this.ecosystem_id) {
        await cumulus.remove_ecosystem_id(this.getIdValue(), input.removeUnique_ecosystem, benignErrorReporter);
        this.ecosystem_id = null;
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

    let cumulus = await resolvers.readOneCumulus({
        id: id
    }, context);
    //check that record actually exists
    if (cumulus === null) throw new Error(`Record with ID = ${id} does not exist`);
    let promises_to_many = [];
    let promises_to_one = [];
    let get_to_many_associated_fk = 0;
    promises_to_many.push(cumulus.countFilteredDevices({}, context));

    get_to_many_associated_fk += Array.isArray(cumulus.user_ids) ? cumulus.user_ids.length : 0;
    promises_to_many.push(cumulus.countFilteredVisits({}, context));
    promises_to_many.push(cumulus.countFilteredMonitors({}, context));
    promises_to_many.push(cumulus.countFilteredNodes({}, context));
    promises_to_many.push(cumulus.countFilteredDeployments({}, context));
    promises_to_many.push(cumulus.countFilteredIndividuals({}, context));
    promises_to_many.push(cumulus.countFilteredFile_counts({}, context));
    promises_to_one.push(cumulus.cumulus_criteria({}, context));
    promises_to_one.push(cumulus.unique_ecosystem({}, context));


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
        throw new Error(`cumulus with id ${id} has associated records with 'reject' reaction and is NOT valid for deletion. Please clean up before you delete.`);
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
    const cumulus_record = await resolvers.readOneCumulus({
            id: id
        },
        context
    );
    const pagi_first = globals.LIMIT_RECORDS;



}
module.exports = {
    /**
     * cumulus - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Offset and limit to get the records from and to respectively
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records holding conditions specified by search, order and pagination argument
     */
    cumulus: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'cumulus', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(pagination.limit, context, "cumulus");
            return await cumulus.readAll(search, order, pagination, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * cumulusConnection - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Cursor and first(indicatig the number of records to retrieve) arguments to apply cursor-based pagination.
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records as grapqhql connections holding conditions specified by search, order and pagination argument
     */
    cumulusConnection: async function({
        search,
        order,
        pagination
    }, context) {
        if (await checkAuthorization(context, 'cumulus', 'read') === true) {
            helper.checkCursorBasedPaginationArgument(pagination);
            let limit = helper.isNotUndefinedAndNotNull(pagination.first) ? pagination.first : pagination.last;
            helper.checkCountAndReduceRecordsLimit(limit, context, "cumulusConnection");
            return await cumulus.readAllCursor(search, order, pagination, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * readOneCumulus - Check user authorization and return one record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to retrieve
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Record with id requested
     */
    readOneCumulus: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'cumulus', 'read') === true) {
            helper.checkCountAndReduceRecordsLimit(1, context, "readOneCumulus");
            return await cumulus.readById(id, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * countCumulus - Counts number of records that holds the conditions specified in the search argument
     *
     * @param  {object} {search} Search argument for filtering records
     * @param  {object} context  Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {number}          Number of records that holds the conditions specified in the search argument
     */
    countCumulus: async function({
        search
    }, context) {
        if (await checkAuthorization(context, 'cumulus', 'read') === true) {
            return await cumulus.countRecords(search, context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * validateCumulusForCreation - Check user authorization and validate input argument for creation.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateCumulusForCreation: async (input, context) => {
        let authorization = await checkAuthorization(context, 'cumulus', 'read');
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
                    cumulus,
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
     * validateCumulusForUpdating - Check user authorization and validate input argument for updating.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateCumulusForUpdating: async (input, context) => {
        let authorization = await checkAuthorization(context, 'cumulus', 'read');
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
                    cumulus,
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
     * validateCumulusForDeletion - Check user authorization and validate record by ID for deletion.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateCumulusForDeletion: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'cumulus', 'read')) === true) {
            try {
                await validForDeletion(id, context);
                await validatorUtil.validateData(
                    "validateForDelete",
                    cumulus,
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
     * validateCumulusAfterReading - Check user authorization and validate record by ID after reading.
     *
     * @param  {string} {id} id of the record to be validated
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info
     * @return {boolean}        Validation result
     */
    validateCumulusAfterReading: async ({
        id
    }, context) => {
        if ((await checkAuthorization(context, 'cumulus', 'read')) === true) {
            try {
                await validatorUtil.validateData(
                    "validateAfterRead",
                    cumulus,
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
     * addCumulus - Check user authorization and creates a new record with data specified in the input argument.
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   Info of each field to create the new record
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         New record created
     */
    addCumulus: async function(input, context) {
        let authorization = await checkAuthorization(context, 'cumulus', 'create');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let createdCumulus = await cumulus.addOne(inputSanitized, context.benignErrors);
            await createdCumulus.handleAssociations(inputSanitized, context.benignErrors);
            return createdCumulus;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * deleteCumulus - Check user authorization and delete a record with the specified id in the id argument.
     *
     * @param  {number} {id}    id of the record to delete
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string}         Message indicating if deletion was successfull.
     */
    deleteCumulus: async function({
        id
    }, context) {
        if (await checkAuthorization(context, 'cumulus', 'delete') === true) {
            if (await validForDeletion(id, context)) {
                await updateAssociations(id, context);
                return cumulus.deleteOne(id, context.benignErrors);
            }
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * updateCumulus - Check user authorization and update the record specified in the input argument
     * This function only handles attributes, not associations.
     * @see handleAssociations for further information.
     *
     * @param  {object} input   record to update and new info to update
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {object}         Updated record
     */
    updateCumulus: async function(input, context) {
        let authorization = await checkAuthorization(context, 'cumulus', 'update');
        if (authorization === true) {
            let inputSanitized = helper.sanitizeAssociationArguments(input, [Object.keys(associationArgsDef)]);
            await helper.checkAuthorizationOnAssocArgs(inputSanitized, context, associationArgsDef, ['read', 'create'], models);
            await helper.checkAndAdjustRecordLimitForCreateUpdate(inputSanitized, context, associationArgsDef);
            if (!input.skipAssociationsExistenceChecks) {
                await helper.validateAssociationArgsExistence(inputSanitized, context, associationArgsDef);
            }
            let updatedCumulus = await cumulus.updateOne(inputSanitized, context.benignErrors);
            await updatedCumulus.handleAssociations(inputSanitized, context.benignErrors);
            return updatedCumulus;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * bulkAssociateCumulusWithCriteria_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociateCumulusWithCriteria_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                criteria_id
            }) => criteria_id)), models.cumulus_criteria);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), cumulus);
        }
        return await cumulus.bulkAssociateCumulusWithCriteria_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },
    /**
     * bulkAssociateCumulusWithEcosystem_id - bulkAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to add , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkAssociateCumulusWithEcosystem_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                ecosystem_id
            }) => ecosystem_id)), models.ecosystem);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), cumulus);
        }
        return await cumulus.bulkAssociateCumulusWithEcosystem_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },
    /**
     * bulkDisAssociateCumulusWithCriteria_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociateCumulusWithCriteria_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                criteria_id
            }) => criteria_id)), models.cumulus_criteria);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), cumulus);
        }
        return await cumulus.bulkDisAssociateCumulusWithCriteria_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },
    /**
     * bulkDisAssociateCumulusWithEcosystem_id - bulkDisAssociaton resolver of given ids
     *
     * @param  {array} bulkAssociationInput Array of associations to remove , 
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {string} returns message on success
     */
    bulkDisAssociateCumulusWithEcosystem_id: async function(bulkAssociationInput, context) {
        // if specified, check existence of the unique given ids
        if (!bulkAssociationInput.skipAssociationsExistenceChecks) {
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                ecosystem_id
            }) => ecosystem_id)), models.ecosystem);
            await helper.validateExistence(helper.unique(bulkAssociationInput.bulkAssociationInput.map(({
                id
            }) => id)), cumulus);
        }
        return await cumulus.bulkDisAssociateCumulusWithEcosystem_id(bulkAssociationInput.bulkAssociationInput, context.benignErrors);
    },

    /**
     * csvTableTemplateCumulus - Returns table's template
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {Array}         Strings, one for header and one columns types
     */
    csvTableTemplateCumulus: async function(_, context) {
        if (await checkAuthorization(context, 'cumulus', 'read') === true) {
            return cumulus.csvTableTemplate(context.benignErrors);
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

    /**
     * cumulusZendroDefinition - Return data model definition
     *
     * @param  {string} _       First parameter is not used
     * @param  {object} context Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {GraphQLJSONObject}        Data model definition
     */
    cumulusZendroDefinition: async function(_, context) {
        if ((await checkAuthorization(context, "cumulus", "read")) === true) {
            return cumulus.definition;
        } else {
            throw new Error("You don't have authorization to perform this action");
        }
    },

}