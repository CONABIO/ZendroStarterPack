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
        return queryInterface.createTable('transects', {

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

            number: {
                type: Sequelize[dict['Int']]
            },
            sum_vegetation_structure: {
                type: Sequelize[dict['Float']]
            },
            sum_indicator_species: {
                type: Sequelize[dict['Float']]
            },
            sum_impact: {
                type: Sequelize[dict['Float']]
            },
            date_transecto: {
                type: Sequelize[dict['DateTime']]
            },
            latitude: {
                type: Sequelize[dict['Float']]
            },
            longitude: {
                type: Sequelize[dict['Float']]
            },
            percentage: {
                type: Sequelize[dict['Float']]
            },
            node_id: {
                type: Sequelize[dict['Int']]
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
        return queryInterface.dropTable('transects');
    }

};