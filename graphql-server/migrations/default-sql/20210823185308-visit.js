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
        return queryInterface.removeColumn('visits','node_id').then(() => {
            return queryInterface.addColumn('visits','pristine_id', {
                type: Sequelize[dict['Int']]
            }).then(() => {
                return queryInterface.addColumn('visits', 'disturbed_id', {
                    type: Sequelize[dict['Int']]
                } )
            })
        })
    },

    /**
     * down - Deletes a table.
     *
     * @param  {object} queryInterface Used to modify the table in the database.
     * @param  {object} Sequelize      Sequelize instance with data types included
     * @return {promise}                Resolved if the table was deleted successfully, rejected otherwise.
     */
    down: function(queryInterface, Sequelize) {
        return queryInterface.removeColumn('visits','disturbed_id').then(() => {
            return queryInterface.removeColumn('visits','pristine_id').then(() => {
                return queryInterface.addColumn('visits','node_id', {
                    type: Sequelize[dict['Int']]
                })
            })
        });
    }

};