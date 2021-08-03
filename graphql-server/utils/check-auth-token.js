const globals = require("../config/globals");
const jwt =  require('jsonwebtoken');
const bcrypt = require('bcryptjs');

/**
 * @function - Given a context this function checks if the auth token is valid.
 *
 * @param  {object} context    context object contains the request info and the acl rules.
 * @return {promise}            it will resolve true if within the context the user is allowed to perform 'permission' action to the 'resource' model.
 */

 module.exports = (context) => {
    let token_bearer =  context.request.headers["authorization"];
    const token = token_bearer && typeof token_bearer === "string" ? token_bearer.replace("Bearer ","") : undefined;
    try{
      //Identify user from context
      let decoded = jwt.verify(token, globals.JWT_SECRET);

      return decoded;
    } catch(err){
      //invalid token
      console.log("invalid token...");
      console.log(err);
      throw new Error(err);
    }
}