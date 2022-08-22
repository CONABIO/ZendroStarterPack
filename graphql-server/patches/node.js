const path = require('path');
const models = require(path.join(__dirname, '..', 'models', 'index.js'));
const helper = require('../utils/helper');

// Dear user, edit the schema to adjust it to your model
module.exports.logic_patch = function(node) {

    node.add_cumulus_id = async (id, cumulus_id, benignErrorReporter) => {
        try {
            await models.cumulus.createAndSaveConvexHull(cumulus_id,id,true);
            let updated = await node.update({
                cumulus_id: cumulus_id
            }, {
                where: {
                    id: id
                }
            });
            return updated[0];
        } catch (error) {
            benignErrorReporter.push({
                message: error
            });
        }
    }

    node.remove_cumulus_id = async (id, cumulus_id, benignErrorReporter) => {
        try {
            await models.cumulus.createAndSaveConvexHull(cumulus_id,id,false);
            let updated = await node.update({
                cumulus_id: null
            }, {
                where: {
                    id: id,
                    cumulus_id: cumulus_id
                }
            });
            return updated[0];
        } catch (error) {
            benignErrorReporter.push({
                message: error
            });
        }
    }

    node.bulkAssociateNodeWithCumulus_id = async (bulkAssociationInput) => {
        let mappedForeignKeys = helper.mapForeignKeysToPrimaryKeyArray(bulkAssociationInput, "id", "cumulus_id");
        var promises = [];
        var cumulusIds = [];
        mappedForeignKeys.forEach(({
            cumulus_id,
            id
        }) => {
            if(!cumulusIds.includes(cumulus_id))
                cumulusIds.push(cumulus_id);
            promises.push(node.update({
                cumulus_id: cumulus_id
            }, {
                where: {
                    id: id
                }
            }));
        })
        await Promise.all(promises);

        for(const id of cumulusIds) 
            await models.cumulus.createAndSaveConvexHull(id,null,false);

        return "Records successfully updated!"
    }

    node.bulkDisAssociateNodeWithCumulus_id = async (bulkAssociationInput) => {
        let mappedForeignKeys = helper.mapForeignKeysToPrimaryKeyArray(bulkAssociationInput, "id", "cumulus_id");
        var promises = [];
        var cumulusIds = [];
        mappedForeignKeys.forEach(({
            cumulus_id,
            id
        }) => {
            if(!cumulusIds.includes(cumulus_id))
                cumulusIds.push(cumulus_id);

            promises.push(node.update({
                cumulus_id: null
            }, {
                where: {
                    id: id,
                    cumulus_id: cumulus_id
                }
            }));
        })
        await Promise.all(promises);

        for(const id of cumulusIds) 
            await models.cumulus.createAndSaveConvexHull(id,null,false);

        return "Records successfully updated!"
    }

    return node;
};