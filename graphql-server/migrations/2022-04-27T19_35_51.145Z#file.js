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
            const storageHandler = await zendro.models.file.storageHandler;
            await storageHandler.getQueryInterface()
                .createTable('files', {
                    id: {
                        type: Sequelize[dict['uuid']],
                        primaryKey: true
                    },

                    createdAt: {
                        type: Sequelize.DATE
                    },

                    updatedAt: {
                        type: Sequelize.DATE
                    },

                    url: {
                        type: Sequelize[dict['String']]
                    },
                    metadata: {
                        type: Sequelize[dict['JSON']]
                    },
                    date: {
                        type: Sequelize[dict['DateTime']]
                    },
                    storage: {
                        type: Sequelize[dict['String']]
                    },
                    deployment_id: {
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
            const storageHandler = await zendro.models.file.storageHandler;
            const recordsExists = await zendro.models.file.count();
            if (recordsExists && !DOWN_MIGRATION) {
                throw new Error(`You are trying to delete all records of file and its associations. 
            If you are sure about this, set environment variable 'DOWN_MIGRATION' to 'true' 
            and re-execute this down-migration.`);
            }
            await storageHandler.getQueryInterface().dropTable('files');
        } catch (error) {
            throw new Error(error);
        }
    }
};