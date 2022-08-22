const path = require('path');
const models = require(path.join(__dirname, '..', 'models', 'index.js'));
const helper = require('../utils/helper');

// Dear user, edit the schema to adjust it to your model
module.exports.logic_patch = function(physical_device) {

    physical_device.remove_cumulus_device = async (input, benignErrorReporter) => {
        let toChange = await physical_device.findOne({
            where: { 
                id: physical_device.getIdValue() 
            }
        });
        let previous_ids =  [];
        if(toChange.previous_cumulus_ids)
            previous_ids = toChange.previous_cumulus_ids
                                                    .replace('[','')
                                                    .replace(']','')
                                                    .split(',')
                                                    .map(v => parseInt(v));
    
        if( ! previous_ids.includes(physical_device.cumulus_id) )
            previous_ids.push(physical_device.cumulus_id)
        
        await physical_device.update(
            { "previous_cumulus_ids": '[' + previous_ids.toString() + ']'},
            { returning: true, where: {id: physical_device.getIdValue() } }
        );
    
        if (input.removeCumulus_device == physical_device.cumulus_id) {
            await physical_device.remove_cumulus_id(physical_device.getIdValue(), input.removeCumulus_device, benignErrorReporter);
            physical_device.cumulus_id = null;
        }
        
    }

    physical_device.bulkDisAssociatePhysical_deviceWithCumulus_id = async (bulkAssociationInput) => {
        let mappedForeignKeys = helper.mapForeignKeysToPrimaryKeyArray(bulkAssociationInput, "id", "cumulus_id");
        var promises = [];
        mappedForeignKeys.forEach(({
            cumulus_id,
            id
        }) => {
            promises.push(physical_device.update({
                cumulus_id: null
            }, {
                where: {
                    id: id,
                    cumulus_id: cumulus_id
                }
            }));
        })
        await Promise.all(promises);

        for(const device of bulkAssociationInput) {
            let toChange = await models.physical_device.findOne({
                where: { 
                    id: device.id
                }
            });
            let previous_ids =  [];
            if(toChange.previous_cumulus_ids)
                previous_ids = toChange.previous_cumulus_ids
                                                        .replace('[','')
                                                        .replace(']','')
                                                        .split(',')
                                                        .map(v => parseInt(v));
        
            if( ! previous_ids.includes(device.cumulus_id) )
                previous_ids.push(device.cumulus_id)
            
            await models.physical_device.update(
                { "previous_cumulus_ids": '[' + previous_ids.toString() + ']'},
                { returning: true, where: {id: device.id } }
            );
        }

        return "Records successfully updated!"
    }

    return physical_device;
};