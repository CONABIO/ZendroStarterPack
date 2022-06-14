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
                .dropTable('annotations')
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

                    classification_method: {
                        type: Sequelize[dict['String']]
                    },
                    classification_by: {
                        type: Sequelize[dict['String']]
                    },
                    observation_type: {
                        type: Sequelize[dict['String']]
                    },
                    label_id: {
                        type: Sequelize[dict['String']]
                    },
                    label: {
                        type: Sequelize[dict['String']]
                    },
                    confidence: {
                        type: Sequelize[dict['Float']]
                    },
                    behaviour: {
                        type: Sequelize[dict['String']]
                    },
                    sex: {
                        type: Sequelize[dict['String']]
                    },
                    age: {
                        type: Sequelize[dict['Int']]
                    },
                    bbox_geometry: {
                        type: Sequelize[dict['Polygon']]
                    },
                    geometry_wkt: {
                        type: Sequelize[dict['GeometryCollection']]
                    },
                    timestamp_video: {
                        type: Sequelize[dict['DateTime']]
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
                    },
                    model_id: {
                        type: Sequelize[dict['Int']]
                    },
                    taxon_id: {
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