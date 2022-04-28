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
            const storageHandler = await zendro.models.user.storageHandler;
            await storageHandler.getQueryInterface()
                .createTable('users', {
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

                    username: {
                        type: Sequelize[dict['String']]
                    },
                    password: {
                        type: Sequelize[dict['String']]
                    },
                    first_name: {
                        type: Sequelize[dict['String']]
                    },
                    last_name: {
                        type: Sequelize[dict['String']]
                    },
                    email: {
                        type: Sequelize[dict['String']]
                    },
                    is_active: {
                        type: Sequelize[dict['Boolean']]
                    },
                    last_login: {
                        type: Sequelize[dict['DateTime']]
                    },
                    institution_id: {
                        type: Sequelize[dict['Int']]
                    },
                    cumulus_ids: {
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
            const storageHandler = await zendro.models.user.storageHandler;
            const recordsExists = await zendro.models.user.count();
            if (recordsExists && !DOWN_MIGRATION) {
                throw new Error(`You are trying to delete all records of user and its associations. 
            If you are sure about this, set environment variable 'DOWN_MIGRATION' to 'true' 
            and re-execute this down-migration.`);
            }
            await storageHandler.getQueryInterface().dropTable('users');
        } catch (error) {
            throw new Error(error);
        }
    }
};