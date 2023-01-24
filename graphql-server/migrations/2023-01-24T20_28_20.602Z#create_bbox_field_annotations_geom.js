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
                .removeColumn('annotations_geoms', 'geometry');
            await storageHandler.getQueryInterface()
                .addColumn('annotations_geoms', 'bbox', {
                    type: Sequelize[dict['String']]
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