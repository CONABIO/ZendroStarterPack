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
            const storageHandler = await zendro.models.visit.storageHandler;
            await storageHandler.getQueryInterface()
                .createTable('visits', {
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

                    comments: {
                        type: Sequelize[dict['String']]
                    },
                    date_sipecam_first_season: {
                        type: Sequelize[dict['Date']]
                    },
                    date_sipecam_second_season: {
                        type: Sequelize[dict['Date']]
                    },
                    date_first_season: {
                        type: Sequelize[dict['Date']]
                    },
                    date_second_season: {
                        type: Sequelize[dict['Date']]
                    },
                    report_first_season: {
                        type: Sequelize[dict['String']]
                    },
                    report_second_season: {
                        type: Sequelize[dict['String']]
                    },
                    cumulus_id: {
                        type: Sequelize[dict['Int']]
                    },
                    pristine_id: {
                        type: Sequelize[dict['Int']]
                    },
                    disturbed_id: {
                        type: Sequelize[dict['Int']]
                    },
                    monitor_ids: {
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
            const storageHandler = await zendro.models.visit.storageHandler;
            const recordsExists = await zendro.models.visit.count();
            if (recordsExists && !DOWN_MIGRATION) {
                throw new Error(`You are trying to delete all records of visit and its associations. 
            If you are sure about this, set environment variable 'DOWN_MIGRATION' to 'true' 
            and re-execute this down-migration.`);
            }
            await storageHandler.getQueryInterface().dropTable('visits');
        } catch (error) {
            throw new Error(error);
        }
    }
};