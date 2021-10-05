const path = require('path');
const hull = require("hull.js");
const models = require(path.join(__dirname, '..', 'models', 'index.js'));

module.exports = {

    /**
     * createConvexHull - Creates a convex hull for the given cumulus based on its associated nodes
     * 
     * @param {number} cumulusId    Id of the cumulus 
     * @return {boolean}           returns true if update was succesful
     */
    createConvexHull: async function(cumulusId) { 
        // get cumulus whose geom we are going to change
        let cumulusToChange = await models.cumulus.findOne({
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
            pointsNodes.push([
                node.location.coordinates[0],
                node.location.coordinates[1]
            ]);
        })

        let updatedCumulus; // var to store the response of the update

        // Checks if there is at least three nodes associated with this cumulus.
        // That's the least quantity to create a polygon
        if(pointsNodes.length >= 3) { 
            // Create convex hull with hull function from hull.js
            let convexHull = hull(pointsNodes,80);
            // Update cumulus with the new geometry created from hull.js function 
            updatedCumulus = await models.cumulus.update(
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
                updatedCumulus = await models.cumulus.update(
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
}