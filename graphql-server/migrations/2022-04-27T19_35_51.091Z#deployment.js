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
            const storageHandler = await zendro.models.deployment.storageHandler;
            await storageHandler.getQueryInterface()
                .createTable('deployments', {
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

                    date_deployment: {
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
                    device_id: {
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
            const storageHandler = await zendro.models.deployment.storageHandler;
            const recordsExists = await zendro.models.deployment.count();
            if (recordsExists && !DOWN_MIGRATION) {
                throw new Error(`You are trying to delete all records of deployment and its associations. 
            If you are sure about this, set environment variable 'DOWN_MIGRATION' to 'true' 
            and re-execute this down-migration.`);
            }
            await storageHandler.getQueryInterface().dropTable('deployments');
        } catch (error) {
            throw new Error(error);
        }
    }
};