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
        return Promise.all([
            queryInterface.removeColumn(
                'deployments',
                'visit_id'
            ),
            queryInterface.addColumn(
                'deployments',
                'date_deployment',
                {
                    type: Sequelize[dict['DateTime']]
                }
            ),
            queryInterface.addColumn(
                'deployments',
                'node_id',
                {
                    type: Sequelize[dict['Int']]
                }
            ),
            queryInterface.addColumn(
                'deployments',
                'cumulus_id',
                {
                    type: Sequelize[dict['Int']]
                }
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
    down: function(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.addColumn(
                'deployments',
                'visit_id',
                {
                    type: Sequelize[dict['Int']]
                }
            ),
            queryInterface.removeColumn(
                'deployments',
                'date_deployment'
            ),
            queryInterface.removeColumn(
                'deployments',
                'node_id'
            ),
            queryInterface.removeColumn(
                'deployments',
                'cumulus_id'
            )
        ])
    }

};