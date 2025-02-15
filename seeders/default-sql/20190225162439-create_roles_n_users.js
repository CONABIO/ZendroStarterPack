'use strict';
const bcrypt = require('bcrypt');
const globals = require('../../config/globals');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      'SELECT 1 FROM db_was_seeded LIMIT 0').then(function(x) {
      console.log('Database was already seeded, no new records are inserted.')
    }).catch(async function(e) {
      // Database has not been seeded yet.
      return queryInterface.bulkInsert('roles', [{
        name: 'admin',
        description: 'The administrator is allowed to create, read, update, and delete users and their roles.'
      }, {
        name: 'partner',
        description: 'An editor can create, update, and delete data of the various data models, excluding users and user-roles.'
      }, {
        name: 'monitor',
        description: 'A reader is allowed read access to all data models, excluding users and user-roles.'
      }]).then(async function(x) {
        let hashedPassword = await bcrypt.hash('admin', globals.SALT_ROUNDS);
        return queryInterface.bulkInsert('users', [{
            username: 'admin',
            password: hashedPassword
        }]) 
      }).then(function(x) {
        return queryInterface.sequelize.query(
          'INSERT INTO role_to_users ("user_id", "role_id") VALUES ' +
          '( (SELECT (id) FROM users WHERE username = \'admin\'), ' +
          '(SELECT (id) FROM roles WHERE name = \'admin\') ), ' +
          '( (SELECT (id) FROM users WHERE username = \'admin\'), ' +
          '(SELECT (id) FROM roles WHERE name = \'partner\') ), ' +
          '( (SELECT (id) FROM users WHERE username = \'admin\'), ' +
          '(SELECT (id) FROM roles WHERE name = \'monitor\') )'
        )
      }).then(function(x) {
        return queryInterface.bulkInsert('cumulus_criteria', [
          {
            name: "Modelo IE"
          }, 
          {
            name: "Integridad Fauna"
          }, 
          {
            name: "Propuesto y Justificado por Socio"
          }
        ]) 
      }).then(function(x) {
        return queryInterface.bulkInsert('ecosystems', [
          {
            name: "Bosques templados"
          },
          {
            name: "Bosques mesofilos"
          },
          {
            name: "Selvas humedas"
          },
          {
            name: "Selvas secas"
          },
          {
            name: "Matorrales xerofilos"
          },
          {
            name: "Pastizales"
          },
          {
            name: "Manglar"
          }
        ]) 
      }).then(function(x) {
        return queryInterface.sequelize.query(
          'CREATE TABLE db_was_seeded ( seeded INT )')
      }).then(function(x) {
        return queryInterface.sequelize.query(
            'INSERT INTO db_was_seeded (seeded) VALUES (1)')
      })
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {}).then(u => {
      return queryInterface.bulkDelete('role_to_users', null, {})
    }).then(r => {
        return queryInterface.bulkDelete('roles', null, {})
    });
  }
};
