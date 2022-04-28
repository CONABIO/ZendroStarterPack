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
            const storageHandler = await zendro.models.individual.storageHandler;
            await storageHandler.getQueryInterface()
                .createTable('individuals', {
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

                    date_trap: {
                        type: Sequelize[dict['DateTime']]
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
                    metadata: {
                        type: Sequelize[dict['JSON']]
                    },
                    kobo_url: {
                        type: Sequelize[dict['String']]
                    },
                    clave_posicion_malla: {
                        type: Sequelize[dict['String']]
                    },
                    arete: {
                        type: Sequelize[dict['Int']]
                    },
                    node_id: {
                        type: Sequelize[dict['Int']]
                    },
                    cumulus_id: {
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
            const storageHandler = await zendro.models.individual.storageHandler;
            const recordsExists = await zendro.models.individual.count();
            if (recordsExists && !DOWN_MIGRATION) {
                throw new Error(`You are trying to delete all records of individual and its associations. 
            If you are sure about this, set environment variable 'DOWN_MIGRATION' to 'true' 
            and re-execute this down-migration.`);
            }
            await storageHandler.getQueryInterface().dropTable('individuals');
        } catch (error) {
            throw new Error(error);
        }
    }
};