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
            const storageHandler = await zendro.models.annotations_geom.storageHandler;
            await storageHandler.getQueryInterface()
                .createTable('annotations_geoms', {
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

                    file_id: {
                        type: Sequelize[dict['Int']]
                    },
                    user_id: {
                        type: Sequelize[dict['Int']]
                    },
                    annotation_method_id: {
                        type: Sequelize[dict['Int']]
                    },
                    observation_type: {
                        type: Sequelize[dict['String']]
                    },
                    confidence: {
                        type: Sequelize[dict['Float']]
                    },
                    pipeline_id: {
                        type: Sequelize[dict['Int']]
                    },
                    geometry: {
                        type: Sequelize[dict['Polygon']]
                    },
                    video_frame_num: {
                        type: Sequelize[dict['Int']]
                    },
                    is_setup_or_pickup: {
                        type: Sequelize[dict['Boolean']]
                    },
                    taxon_id: {
                        type: Sequelize[dict['String']]
                    },
                    count: {
                        type: Sequelize[dict['Int']]
                    },
                    life_stage: {
                        type: Sequelize[dict['String']]
                    },
                    sex: {
                        type: Sequelize[dict['String']]
                    },
                    behaviour: {
                        type: Sequelize[dict['String']]
                    },
                    individual_id: {
                        type: Sequelize[dict['String']]
                    },
                    comments: {
                        type: Sequelize[dict['String']]
                    },
                    updatedAt: {
                        type: Sequelize[dict['DateTime']]
                    },
                    createdAt: {
                        type: Sequelize[dict['DateTime']]
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
            const storageHandler = await zendro.models.annotations_geom.storageHandler;
            const recordsExists = await zendro.models.annotations_geom.count();
            if (recordsExists && !DOWN_MIGRATION) {
                throw new Error(`You are trying to delete all records of annotations_geom and its associations. 
            If you are sure about this, set environment variable 'DOWN_MIGRATION' to 'true' 
            and re-execute this down-migration.`);
            }
            await storageHandler.getQueryInterface().dropTable('annotations_geoms');
        } catch (error) {
            throw new Error(error);
        }
    }
};