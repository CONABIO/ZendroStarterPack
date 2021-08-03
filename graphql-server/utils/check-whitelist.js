const { modelWhitelist, actionsWhitelist } = require('./whitelist');

/**
 * @function - Given a query name returns if the query is whitelisted.
 *
 * @param  {string} queryName    string containing the name of the query to check.
 * @return {boolean}            it will resolve true if the query is whitelisted.
 */
module.exports = (queryName) => {
    /* Checks if the query contains a whitelisted model */
    let model = modelWhitelist.find(item => queryName.toLowerCase().includes(item));

    if(model){
        /* Pluralize the model */
        let modelPlural = model.endsWith('s') ? model : model + 's';
        /* If the query matches the model returns a findAll of the model */
        if(modelPlural == queryName)
            return true;
        else {
            /* Checks if the query matches one of the whitelisted actions */
            if(actionsWhitelist.find(action => queryName.includes(action)))
                return true;
            else
                return false;
        }
    } else 
        return false;
}
