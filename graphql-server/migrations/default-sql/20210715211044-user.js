'use strict';
const dict = require('../../utils/graphql-sequelize-types');

/**
 * @module - Migrations to create and to undo a table correpondant to a sequelize model.
 */
module.exports = {

    /**
     * up - Creates a table with the fields specified in the the createTable function.
     *
     * @param  {object} queryInterface Used to modify the table in the database.
     * @param  {object} Sequelize      Sequelize instance with data types included
     * @return {promise}                Resolved if the table was created successfully, rejected otherwise.
     */
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('users', {

            id: {
                type: Sequelize[dict['Int']],
                primaryKey: true,
                autoIncrement: true
            },

            createdAt: {
                type: Sequelize.DATE
            },

            updatedAt: {
                type: Sequelize.DATE
            },

            username: {
                type: Sequelize[dict['String']]
            },
            password: {
                type: Sequelize[dict['String']]
            },
            first_name: {
                type: Sequelize[dict['String']]
            },
            last_name: {
                type: Sequelize[dict['String']]
            },
            grade: {
                type: Sequelize[dict['String']]
            },
            email: {
                type: Sequelize[dict['String']]
            },
            address: {
                type: Sequelize[dict['String']]
            },
            is_active: {
                type: Sequelize[dict['Boolean']]
            },
            comments: {
                type: Sequelize[dict['String']]
            },
            last_login: {
                type: Sequelize[dict['DateTime']]
            },
            institution_id: {
                type: Sequelize[dict['Int']]
            },
            created_at: {
                type: Sequelize[dict['DateTime']]
            }

        });
    },

    /**
     * down - Deletes a table.
     *
     * @param  {object} queryInterface Used to modify the table in the database.
     * @param  {object} Sequelize      Sequelize instance with data types included
     * @return {promise}                Resolved if the table was deleted successfully, rejected otherwise.
     */
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('users');
    }

};