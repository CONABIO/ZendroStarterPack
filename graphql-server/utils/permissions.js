const { rule, shield, and } = require("graphql-shield");
const globals = require("../config/globals");
const checkAuth = require('./check-auth-token');
const checkWhitelist = require('./check-whitelist');


const hasPermission = rule()((parent,args,context,info) => {
    if(globals.REQUIRE_SIGN_IN) {
        if(checkWhitelist(info.fieldName)) {
            return true;
        } else {
            let decoded = checkAuth(context);
            return decoded.username ? true : false;
        }
    }
    else
        return true;
});


const permissions = shield({
    Query: hasPermission,
    Mutation: hasPermission
});
  
module.exports = { permissions };