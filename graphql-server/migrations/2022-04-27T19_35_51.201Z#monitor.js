'use strict';
const dict = require('../utils/graphql-sequelize-types');
const {
    Sequelize
} = require("sequelize");
const {
    DOWN_MIGRATION
} = require('../config/globals');
/**
 * @module - Migrations to create or to drop a table correpondant to a sequelize model.
 */
module.exports = {

    /**
     * up - Creates a table with the fields specified in the the createTable function.
     *
     * @param  {object} zendro initialized zendro object
     */
    up: async (zendro) => {
        try {
            const storageHandler = await zendro.models.monitor.storageHandler;
            await storageHandler.getQueryInterface()
                .createTable('monitors', {
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

                    first_name: {
                        type: Sequelize[dict['String']]
                    },
                    last_name: {
                        type: Sequelize[dict['String']]
                    },
                    second_last_name: {
                        type: Sequelize[dict['String']]
                    },
                    contact: {
                        type: Sequelize[dict['String']]
                    },
                    cumulus_id: {
                        type: Sequelize[dict['Int']]
                    },
                    visit_ids: {
                        type: Sequelize[dict['[Int]']],
                        defaultValue: '[]'
                    }

                });
        } catch (error) {
            throw new Error(error);
        }
    },

    /**
     * down - Drop a table.
     *
     * @param  {object} zendro initialized zendro object
     */
    down: async (zendro) => {
        try {
            const storageHandler = await zendro.models.monitor.storageHandler;
            const recordsExists = await zendro.models.monitor.count();
            if (recordsExists && !DOWN_MIGRATION) {
                throw new Error(`You are trying to delete all records of monitor and its associations. 
            If you are sure about this, set environment variable 'DOWN_MIGRATION' to 'true' 
            and re-execute this down-migration.`);
            }
            await storageHandler.getQueryInterface().dropTable('monitors');
        } catch (error) {
            throw new Error(error);
        }
    }
};