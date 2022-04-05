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
                'visits',
                'date_started_pristine'
            ),
            queryInterface.removeColumn(
                'visits',
                'date_finished_pristine'
            ),
            queryInterface.removeColumn(
                'visits',
                'date_started_disturbed'
            ),
            queryInterface.removeColumn(
                'visits',
                'date_finished_disturbed'
            ),
            queryInterface.addColumn(
                'visits',
                'date_sipecam_first_season',
                {
                    type: Sequelize[dict['Date']]
                }
            ),
            queryInterface.addColumn(
                'visits',
                'date_sipecam_second_season',
                {
                    type: Sequelize[dict['Date']]
                }
            ),
            queryInterface.addColumn(
                'visits',
                'date_first_season',
                {
                    type: Sequelize[dict['Date']]
                }
            ),
            queryInterface.addColumn(
                'visits',
                'date_second_season',
                {
                    type: Sequelize[dict['Date']]
                }
            ),
            queryInterface.addColumn(
                'visits',
                'report_first_season',
                {
                    type: Sequelize[dict['String']]
                }
            ),
            queryInterface.addColumn(
                'visits',
                'report_second_season',
                {
                    type: Sequelize[dict['String']]
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
                'visits',
                'date_started_pristine',
                {
                    type: Sequelize[dict['Date']]
                }
            ),
            queryInterface.addColumn(
                'visits',
                'date_finished_pristine',
                {
                    type: Sequelize[dict['Date']]
                }
            ),
            queryInterface.addColumn(
                'visits',
                'date_started_disturbed',
                {
                    type: Sequelize[dict['Date']]
                }
            ),
            queryInterface.addColumn(
                'visits',
                'date_finished_disturbed',
                {
                    type: Sequelize[dict['Date']]
                }
            ),
            queryInterface.removeColumn(
                'visits',
                'date_sipecam_first_season'
            ),
            queryInterface.removeColumn(
                'visits',
                'date_sipecam_second_season'
            ),
            queryInterface.removeColumn(
                'visits',
                'report_first_season'
            ),
            queryInterface.removeColumn(
                'visits',
                'report_second_season'
            )
        ])
    }

};