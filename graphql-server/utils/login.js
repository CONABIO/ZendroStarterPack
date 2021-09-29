const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const path = require('path')
const users = require(path.join(__dirname, '..', 'models', 'index.js')).user
const cumulus = require(path.join(__dirname, '..', 'models', 'index.js')).cumulus
const globals = require('../config/globals');

module.exports = {

  /**
   * login - Search for email in users table and returns a webtoken if the password is valid.
   *
   * @param  {String} username    User's username
   * @param  {String} password  User's password
   * @return {String}            Webtoken with user's data encoded
   */
  login: async function({ username, password }) {

    const user_data = await users.findOne({ where: { username } })
    console.log(user_data);
    if (!user_data) {
        throw new Error('No user with that username')
    }

    const valid = await bcrypt.compare(password, user_data.password)

    if (!valid) {
        throw new Error('Incorrect password')
    }
    // roles
    const roles = await user_data.getRoles();
    console.log(roles)
    const name_roles = roles.map( x =>{ return x.name })
    console.log("ROLES: ", name_roles);
    // cumulus
    let cumulusIds = user_data.cumulus_ids.replace(/\[|\]|\"/g, '');
    let retrievedArray = [];
    if(cumulusIds) {
        cumulusIds = cumulusIds.split(',').map(value => parseInt(value.replace(/"/g, '')));
        retrievedArray = await Promise.all(
          cumulusIds.map(async (c) => {
            const retrievedCumulus = await cumulus.findOne({ where: { id: c }});
            return { id: retrievedCumulus.id, name: retrievedCumulus.name};
          })
        )
    }
    console.log("CUMULUS: ", retrievedArray);

    // return json web token
    return jsonwebtoken.sign({
        id: user_data.id,
        username: user_data.username,
        email: user_data.email,
        roles: name_roles,
        cumulus: retrievedArray
    }, globals.JWT_SECRET, { expiresIn: '1h' })
  }

}
