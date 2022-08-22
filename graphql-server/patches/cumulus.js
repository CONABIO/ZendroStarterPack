const path = require('path');
const models = require(path.join(__dirname, '..', 'models', 'index.js'));
const hull = require("hull.js");

// Dear user, edit the schema to adjust it to your model
module.exports.logic_patch = function(cumulus) {

    cumulus.createAndSaveConvexHull = async (cumulusId,nodeId,add) => {
        // get cumulus whose geom we are going to change
        let cumulusToChange = await cumulus.findOne({
            where: { 
                id: cumulusId 
            }, 
            include: [{
                model: models.node,
                as: "nodes"
            }]
        });
        let pointsNodes = []; // var to store the points for the convex hull
        /*
         * filter the point of the node that is 
         * going to be added or removed
         */
        cumulusToChange.nodes.forEach(node => {
            console.log(node.n)
            if(!add && node.id != nodeId) { // filter removed point
                pointsNodes.push([         
                    node.location.coordinates[0],
                    node.location.coordinates[1]
                ]);
            } else if (add) { // no filter if a node is going to be added
                pointsNodes.push([
                    node.location.coordinates[0],
                    node.location.coordinates[1]
                ]);
            }
        })
    
        // if nodeId is null doesn't add new node and only creates convex hull
        // from current associated nodes
        if(add && nodeId) { // add point coordinates for the node that is going to be associated
            let nodeToadd = await models.node.findOne({ where: { id: nodeId } });
            pointsNodes.push([
                nodeToadd.location.coordinates[0],
                nodeToadd.location.coordinates[1]
            ])
        }
    
        let updatedCumulus; // var to store the response of the update
    
        // Checks if there is at least three nodes associated with this cumulus.
        // That's the least quantity to create a polygon
        if(pointsNodes.length >= 3) { 
            // Create convex hull with hull function from hull.js
            let convexHull = hull(pointsNodes,80);
            // Update cumulus with the new geometry created from hull.js function 
            updatedCumulus = await cumulus.update(
                { "geometry": {
                        "type": "Polygon",
                        "coordinates": [convexHull]
                    } 
                },
                { returning: true, where: {id: cumulusId} }
            );
        } else {
            // If there are less than 3 nodes associated and
            // the cumulus has already a geom created, then it 
            // deletes it
            if(cumulusToChange.geometry) {
                updatedCumulus = await cumulus.update(
                    { "geometry": null },
                    { returning: true, where: {id: cumulusId} }
                );
            } else {
                return true; // nothing to do, just return true
            }
        }
    
        // return true if update was succesful
        return updatedCumulus;
    }

    return cumulus;
};