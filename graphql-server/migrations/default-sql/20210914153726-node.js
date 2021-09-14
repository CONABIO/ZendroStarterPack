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
        return queryInterface.removeColumn(
            'nodes',
            'has_partner'
        ).then(() => {
            return queryInterface.addColumn('nodes', 'con_socio', {
                type: Sequelize[dict['Int']]
            });
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
        return queryInterface.removeColumn(
            'nodes',
            'con_socio'
        ).then(() => {
        return queryInterface.addColumn('nodes', 'has_partner', {
            type: Sequelize[dict['Boolean']]
        });
    })
    }

};