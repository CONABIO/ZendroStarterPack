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
            const storageHandler = await zendro.models.cumulus.storageHandler;
            await storageHandler.getQueryInterface()
                .createTable('cumulus', {
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

                    name: {
                        type: Sequelize[dict['String']]
                    },
                    geometry: {
                        type: Sequelize[dict['Polygon']]
                    },
                    criteria_id: {
                        type: Sequelize[dict['Int']]
                    },
                    user_ids: {
                        type: Sequelize[dict['[Int]']],
                        defaultValue: '[]'
                    },
                    ecosystem_id: {
                        type: Sequelize[dict['Int']]
                    },
                    con_socio: {
                        type: Sequelize[dict['Int']]
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
            const storageHandler = await zendro.models.cumulus.storageHandler;
            const recordsExists = await zendro.models.cumulus.count();
            if (recordsExists && !DOWN_MIGRATION) {
                throw new Error(`You are trying to delete all records of cumulus and its associations. 
            If you are sure about this, set environment variable 'DOWN_MIGRATION' to 'true' 
            and re-execute this down-migration.`);
            }
            await storageHandler.getQueryInterface().dropTable('cumulus');
        } catch (error) {
            throw new Error(error);
        }
    }
};