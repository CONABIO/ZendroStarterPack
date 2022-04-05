'use strict';
const dict = require('../../utils/graphql-sequelize-types');
const {
    Sequelize
} = require("sequelize");
const {
    DOWN_MIGRATION
} = require('../../config/globals');

/**
 * @module - Migrations to create and to undo a table correpondant to a sequelize model.
 */
module.exports = {

    /**
     * up - Creates a table with the fields specified in the the createTable function.
     *
     * @param  {object} zendro initialized zendro object
     */
     up: async (zendro) => {
        try {
            const storageHandler = await zendro.models.physical_device.storageHandler;
            await storageHandler.getQueryInterface()
                .addColumn('physical_devices', 'status', {
                    type: Sequelize[dict['String']],
                    defaultValue: "inactivo"
                })
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
            const storageHandler = await zendro.models.physical_devices.storageHandler;
            const recordsExists = await zendro.models.physical_devices.count();
            if (recordsExists && !DOWN_MIGRATION) {
                throw new Error(`You are trying to delete all records of role and its associations. 
            If you are sure about this, set environment variable 'DOWN_MIGRATION' to 'true' 
            and re-execute this down-migration.`);
            }
            await storageHandler.getQueryInterface().dropTable('physical_devices');
        } catch (error) {
            throw new Error(error);
        }
    }
};