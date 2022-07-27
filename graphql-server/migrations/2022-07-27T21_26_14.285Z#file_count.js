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
            const storageHandler = await zendro.models.file_count.storageHandler;
            await storageHandler.getQueryInterface()
                .createTable('file_counts', {
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

                    delivery_date: {
                        type: Sequelize[dict['Date']]
                    },
                    audio_files: {
                        type: Sequelize[dict['Int']]
                    },
                    image_files: {
                        type: Sequelize[dict['Int']]
                    },
                    video_files: {
                        type: Sequelize[dict['Int']]
                    },
                    size: {
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
            const storageHandler = await zendro.models.file_count.storageHandler;
            const recordsExists = await zendro.models.file_count.count();
            if (recordsExists && !DOWN_MIGRATION) {
                throw new Error(`You are trying to delete all records of file_count and its associations. 
            If you are sure about this, set environment variable 'DOWN_MIGRATION' to 'true' 
            and re-execute this down-migration.`);
            }
            await storageHandler.getQueryInterface().dropTable('file_counts');
        } catch (error) {
            throw new Error(error);
        }
    }
};