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
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.removeColumn(
                'calendars',
                'created_at'
            ),
            queryInterface.removeColumn(
                'calendars',
                'updated_at'
            ),
            queryInterface.removeColumn(
                'cumulus',
                'created_at'
            ),
            queryInterface.removeColumn(
                'cumulus_criteria',
                'created_at'
            ),
            queryInterface.removeColumn(
                'deployments',
                'created_at'
            ),
            queryInterface.removeColumn(
                'institutions',
                'created_at'
            ),
            queryInterface.removeColumn(
                'nodes',
                'created_at'
            ),
            queryInterface.removeColumn(
                'physical_devices',
                'created_at'
            ),
            queryInterface.removeColumn(
                'roles',
                'created_at'
            ),
            queryInterface.removeColumn(
                'role_to_users',
                'created_at'
            ),
            queryInterface.removeColumn(
                'users',
                'created_at'
            )
        ])
    },

    /**
     * down - Deletes a table.
     *
     * @param  {object} queryInterface Used to modify the table in the database.
     * @param  {object} Sequelize      Sequelize instance with data types included
     * @return {promise}                Resolved if the table was deleted successfully, rejected otherwise.
     */
    down: function (queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.addColumn(
                'calendars',
                'created_at',
                {
                    type: Sequelize[dict['DateTime']]
                }
            ),
            queryInterface.addColumn(
                'calendars',
                'updated_at',
                {
                    type: Sequelize[dict['DateTime']]
                }
            ),
            queryInterface.addColumn(
                'cumulus',
                'created_at',
                {
                    type: Sequelize[dict['DateTime']]
                }
            ),
            queryInterface.addColumn(
                'cumulus_criteria',
                'created_at',
                {
                    type: Sequelize[dict['DateTime']]
                }
            ),
            queryInterface.addColumn(
                'deployments',
                'created_at',
                {
                    type: Sequelize[dict['DateTime']]
                }
            ),
            queryInterface.addColumn(
                'institutions',
                'created_at',
                {
                    type: Sequelize[dict['DateTime']]
                }
            ),
            queryInterface.addColumn(
                'nodes',
                'created_at',
                {
                    type: Sequelize[dict['DateTime']]
                }
            ),
            queryInterface.addColumn(
                'physical_devices',
                'created_at',
                {
                    type: Sequelize[dict['DateTime']]
                }
            ),
            queryInterface.addColumn(
                'roles',
                'created_at',
                {
                    type: Sequelize[dict['DateTime']]
                }
            ),
            queryInterface.addColumn(
                'role_to_users',
                'created_at',
                {
                    type: Sequelize[dict['DateTime']]
                }
            ),
            queryInterface.addColumn(
                'users',
                'created_at',
                {
                    type: Sequelize[dict['DateTime']]
                }
            )
        ])
    }

};