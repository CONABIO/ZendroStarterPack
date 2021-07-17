let filteredJson = nodeJson.map(node => {
    return {
        "nomenclatura": node.nomenclatura,
        "has_partner": false,
        "fid": node.fid_sipe_1,
        "location": {
            "type": "Point",
            "coordinates": [
                node.latitude,
                node.longitude,
                node.altitude
            ]
        },
        "cat_itegr": node.cat_itegr,
        "integrity": node.cat_itegr == "Integro" ? true : false, 
    }
})