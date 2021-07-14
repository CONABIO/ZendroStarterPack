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
        return queryInterface.createTable('deployments', {

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

            date_started: {
                type: Sequelize[dict['Date']]
            },
            date_finished: {
                type: Sequelize[dict['Date']]
            },
            latitude: {
                type: Sequelize[dict['Float']]
            },
            longitude: {
                type: Sequelize[dict['Float']]
            },
            altitude: {
                type: Sequelize[dict['Float']]
            },
            comments: {
                type: Sequelize[dict['String']]
            },
            device_id: {
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
        return queryInterface.dropTable('deployments');
    }

};