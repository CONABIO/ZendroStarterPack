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
            const storageHandler = await zendro.models.pipeline_info.storageHandler;
            await storageHandler.getQueryInterface()
                .createTable('pipeline_infos', {
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

                    version: {
                        type: Sequelize[dict['String']]
                    },
                    commit_dvc_of_data_ref: {
                        type: Sequelize[dict['String']]
                    },
                    commit_dvc_of_model: {
                        type: Sequelize[dict['String']]
                    },
                    url_repo_model: {
                        type: Sequelize[dict['String']]
                    },
                    updatedAt: {
                        type: Sequelize[dict['DateTime']]
                    },
                    createdAt: {
                        type: Sequelize[dict['DateTime']]
                    },
                    comments: {
                        type: Sequelize[dict['String']]
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
            const storageHandler = await zendro.models.pipeline_info.storageHandler;
            const recordsExists = await zendro.models.pipeline_info.count();
            if (recordsExists && !DOWN_MIGRATION) {
                throw new Error(`You are trying to delete all records of pipeline_info and its associations. 
            If you are sure about this, set environment variable 'DOWN_MIGRATION' to 'true' 
            and re-execute this down-migration.`);
            }
            await storageHandler.getQueryInterface().dropTable('pipeline_infos');
        } catch (error) {
            throw new Error(error);
        }
    }
};