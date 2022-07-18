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
            const storageHandler = await zendro.models.annotations_geom_obs_type.storageHandler;
            await storageHandler.getQueryInterface()
                .createTable('annotations_geom_obs_types', {
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

                    classified_by: {
                        type: Sequelize[dict['String']]
                    },
                    classification_method: {
                        type: Sequelize[dict['String']]
                    },
                    observation_type: {
                        type: Sequelize[dict['String']]
                    },
                    confidence: {
                        type: Sequelize[dict['Float']]
                    },
                    geometry: {
                        type: Sequelize[dict['GeometryCollection']]
                    },
                    video_frame_num: {
                        type: Sequelize[dict['Int']]
                    },
                    frequency_min: {
                        type: Sequelize[dict['Float']]
                    },
                    frequency_max: {
                        type: Sequelize[dict['Float']]
                    },
                    time_min: {
                        type: Sequelize[dict['Float']]
                    },
                    time_max: {
                        type: Sequelize[dict['Float']]
                    },
                    metadata: {
                        type: Sequelize[dict['JSON']]
                    },
                    product_id_alfesco: {
                        type: Sequelize[dict['String']]
                    },
                    updatedAt: {
                        type: Sequelize[dict['DateTime']]
                    },
                    createdAt: {
                        type: Sequelize[dict['DateTime']]
                    },
                    file_id: {
                        type: Sequelize[dict['Int']]
                    },
                    pipeline_id: {
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
            const storageHandler = await zendro.models.annotations_geom_obs_type.storageHandler;
            const recordsExists = await zendro.models.annotations_geom_obs_type.count();
            if (recordsExists && !DOWN_MIGRATION) {
                throw new Error(`You are trying to delete all records of annotations_geom_obs_type and its associations. 
            If you are sure about this, set environment variable 'DOWN_MIGRATION' to 'true' 
            and re-execute this down-migration.`);
            }
            await storageHandler.getQueryInterface().dropTable('annotations_geom_obs_types');
        } catch (error) {
            throw new Error(error);
        }
    }
};