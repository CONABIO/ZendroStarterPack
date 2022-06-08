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
            const storageHandler = await zendro.models.annotation.storageHandler;
            await storageHandler.getQueryInterface()
                .createTable('annotations', {
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

                    has_fauna: {
                        type: Sequelize[dict['Boolean']]
                    },
                    updatedAt: {
                        type: Sequelize[dict['DateTime']]
                    },
                    createdAt: {
                        type: Sequelize[dict['DateTime']]
                    },
                    comments: {
                        type: Sequelize[dict['String']]
                    },
                    file_id: {
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
            const storageHandler = await zendro.models.annotation.storageHandler;
            const recordsExists = await zendro.models.annotation.count();
            if (recordsExists && !DOWN_MIGRATION) {
                throw new Error(`You are trying to delete all records of annotation and its associations. 
            If you are sure about this, set environment variable 'DOWN_MIGRATION' to 'true' 
            and re-execute this down-migration.`);
            }
            await storageHandler.getQueryInterface().dropTable('annotations');
        } catch (error) {
            throw new Error(error);
        }
    }
};