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
            const storageHandler = await zendro.models.transect.storageHandler;
            await storageHandler.getQueryInterface()
                .createTable('transects', {
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
            const storageHandler = await zendro.models.transect.storageHandler;
            const recordsExists = await zendro.models.transect.count();
            if (recordsExists && !DOWN_MIGRATION) {
                throw new Error(`You are trying to delete all records of transect and its associations. 
            If you are sure about this, set environment variable 'DOWN_MIGRATION' to 'true' 
            and re-execute this down-migration.`);
            }
            await storageHandler.getQueryInterface().dropTable('transects');
        } catch (error) {
            throw new Error(error);
        }
    }
};