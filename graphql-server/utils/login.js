const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const path = require('path')
const users = require(path.join(__dirname, '..', 'models', 'index.js')).user
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
    const roles = await user_data.getRoles();
    console.log(roles)
    const name_roles = roles.map( x =>{ return x.name })
    console.log("ROLES: ", name_roles);
    // return json web token
    return jsonwebtoken.sign({
        id: user_data.id,
        username: user_data.username,
        roles: name_roles
    }, globals.JWT_SECRET, { expiresIn: '1h' })
  }

}
