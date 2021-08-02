const { rule, shield, and } = require("graphql-shield");
const globals = require("../config/globals");
const jwt =  require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const modelWhitelist = [
    "cumulus"
];

const actionsWhitelist = [
    "readOne",
    "count",
    "vueTable",
    "csvTableTemplate"
]

const checkWhitelist = (queryName) => {
    let model = modelWhitelist.find(item => queryName.toLowerCase().includes(item));
    if(model){
        if(model == queryName)
            return true;
        else {
            if(actionsWhitelist.find(action => queryName.includes(action)))
                return true;
            else
                return false;
        }
    } else 
        return false;
}

const checkAuth = (context) => {
    let token_bearer =  context.request.headers["authorization"];
    const token = token_bearer && typeof token_bearer === "string" ? token_bearer.replace("Bearer ","") : undefined;
    try{
      //Identify user from context
      let decoded = jwt.verify(token, globals.JWT_SECRET);

      return decoded;
    }catch(err){
      //invalid token
      console.log("invalid token...");
      console.log(err);
      throw new Error(err);
    }
}

const hasPermission = rule()((parent,args,context,info) => {
    if(globals.REQUIRE_SIGN_IN) {
        if(checkWhitelist(info.fieldName)) {
            return true;
        } else {
            checkAuth(context);
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