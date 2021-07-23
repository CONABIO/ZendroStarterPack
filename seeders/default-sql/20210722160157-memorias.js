'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const seeds = await queryInterface.sequelize.query(
            'SELECT seeded FROM db_was_seeded')
        try {
            let seeded = seeds[0][4].seeded;
            console.log("Database was already seeded for memorias")
            return queryInterface.sequelize.query(
                'SELECT 1 FROM db_was_seeded')
        } catch {
            const rawDataCumulus = await queryInterface.sequelize.query(
                `SELECT id,name FROM cumulus;`
            );
            const cumulus = rawDataCumulus[0];

            const rawDataDevice = await queryInterface.sequelize.query(
                `SELECT id,brand FROM device_catalogs;`
            );
            const device = rawDataDevice[0];

            return queryInterface.bulkInsert('physical_devices', [
                {
                    "serial_number": "MEM0001",
                    "comments": "MEM0001",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0002",
                    "comments": "MEM0002",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0003",
                    "comments": "MEM0003",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0004",
                    "comments": "MEM0004",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0005",
                    "comments": "MEM0005",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0006",
                    "comments": "MEM0006",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0007",
                    "comments": "MEM0007",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0008",
                    "comments": "MEM0008",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0009",
                    "comments": "MEM0009",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0010",
                    "comments": "MEM0010",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0011",
                    "comments": "MEM0011",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0012",
                    "comments": "MEM0012",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0013",
                    "comments": "MEM0013",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0014",
                    "comments": "MEM0014",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0015",
                    "comments": "MEM0015",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0016",
                    "comments": "MEM0016",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0017",
                    "comments": "MEM0017",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0018",
                    "comments": "MEM0018",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0019",
                    "comments": "MEM0019",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0020",
                    "comments": "MEM0020",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0021",
                    "comments": "MEM0021",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0022",
                    "comments": "MEM0022",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0023",
                    "comments": "MEM0023",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0024",
                    "comments": "MEM0024",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0025",
                    "comments": "MEM0025",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0026",
                    "comments": "MEM0026",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0027",
                    "comments": "MEM0027",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0028",
                    "comments": "MEM0028",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0029",
                    "comments": "MEM0029",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0030",
                    "comments": "MEM0030",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0031",
                    "comments": "MEM0031",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0032",
                    "comments": "MEM0032",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0033",
                    "comments": "MEM0033",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0034",
                    "comments": "MEM0034",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0035",
                    "comments": "MEM0035",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0036",
                    "comments": "MEM0036",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0037",
                    "comments": "MEM0037",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0038",
                    "comments": "MEM0038",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0039",
                    "comments": "MEM0039",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0040",
                    "comments": "MEM0040",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0041",
                    "comments": "MEM0041",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0042",
                    "comments": "MEM0042",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0043",
                    "comments": "MEM0043",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0044",
                    "comments": "MEM0044",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0045",
                    "comments": "MEM0045",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0046",
                    "comments": "MEM0046",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0047",
                    "comments": "MEM0047",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0048",
                    "comments": "MEM0048",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0049",
                    "comments": "MEM0049",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0050",
                    "comments": "MEM0050",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0051",
                    "comments": "MEM0051",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0052",
                    "comments": "MEM0052",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0053",
                    "comments": "MEM0053",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0054",
                    "comments": "MEM0054",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0055",
                    "comments": "MEM0055",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0056",
                    "comments": "MEM0056",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0057",
                    "comments": "MEM0057",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0058",
                    "comments": "MEM0058",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0059",
                    "comments": "MEM0059",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0060",
                    "comments": "MEM0060",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0061",
                    "comments": "MEM0061",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0062",
                    "comments": "MEM0062",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0063",
                    "comments": "MEM0063",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0064",
                    "comments": "MEM0064",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0065",
                    "comments": "MEM0065",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0066",
                    "comments": "MEM0066",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0067",
                    "comments": "MEM0067",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0068",
                    "comments": "MEM0068",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0069",
                    "comments": "MEM0069",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0070",
                    "comments": "MEM0070",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0071",
                    "comments": "MEM0071",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0072",
                    "comments": "MEM0072",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0073",
                    "comments": "MEM0073",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0074",
                    "comments": "MEM0074",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0075",
                    "comments": "MEM0075",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0076",
                    "comments": "MEM0076",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0077",
                    "comments": "MEM0077",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0078",
                    "comments": "MEM0078",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0079",
                    "comments": "MEM0079",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0080",
                    "comments": "MEM0080",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0081",
                    "comments": "MEM0081",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0082",
                    "comments": "MEM0082",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0083",
                    "comments": "MEM0083",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0084",
                    "comments": "MEM0084",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0085",
                    "comments": "MEM0085",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0086",
                    "comments": "MEM0086",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0087",
                    "comments": "MEM0087",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0088",
                    "comments": "MEM0088",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0089",
                    "comments": "MEM0089",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0090",
                    "comments": "MEM0090",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0091",
                    "comments": "MEM0091",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0092",
                    "comments": "MEM0092",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0093",
                    "comments": "MEM0093",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0094",
                    "comments": "MEM0094",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0095",
                    "comments": "MEM0095",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0096",
                    "comments": "MEM0096",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0097",
                    "comments": "MEM0097",
                    "device_id": device.find(d => d.brand == 'KINGSTON MICRO SD').id
                },
                {
                    "serial_number": "MEM0098",
                    "comments": "MEM0098",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0099",
                    "comments": "MEM0099",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0100",
                    "comments": "MEM0100",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0101",
                    "comments": "MEM0101",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0102",
                    "comments": "MEM0102",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0103",
                    "comments": "MEM0103",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0104",
                    "comments": "MEM0104",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0105",
                    "comments": "MEM0105",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0106",
                    "comments": "MEM0106",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0107",
                    "comments": "MEM0107",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0108",
                    "comments": "MEM0108",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0109",
                    "comments": "MEM0109",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0110",
                    "comments": "MEM0110",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0111",
                    "comments": "MEM0111",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0112",
                    "comments": "MEM0112",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0113",
                    "comments": "MEM0113",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0114",
                    "comments": "MEM0114",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0115",
                    "comments": "MEM0115",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0116",
                    "comments": "MEM0116",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0117",
                    "comments": "MEM0117",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0118",
                    "comments": "MEM0118",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0119",
                    "comments": "MEM0119",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0120",
                    "comments": "MEM0120",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0121",
                    "comments": "MEM0121",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0122",
                    "comments": "MEM0122",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0123",
                    "comments": "MEM0123",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0124",
                    "comments": "MEM0124",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0125",
                    "comments": "MEM0125",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0126",
                    "comments": "MEM0126",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0127",
                    "comments": "MEM0127",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0128",
                    "comments": "MEM0128",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0129",
                    "comments": "MEM0129",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0130",
                    "comments": "MEM0130",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0131",
                    "comments": "MEM0131",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0132",
                    "comments": "MEM0132",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0133",
                    "comments": "MEM0133",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0134",
                    "comments": "MEM0134",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0135",
                    "comments": "MEM0135",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0136",
                    "comments": "MEM0136",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0137",
                    "comments": "MEM0137",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0138",
                    "comments": "MEM0138",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0139",
                    "comments": "MEM0139",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0140",
                    "comments": "MEM0140",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0141",
                    "comments": "MEM0141",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0142",
                    "comments": "MEM0142",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0143",
                    "comments": "MEM0143",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0144",
                    "comments": "MEM0144",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0145",
                    "comments": "MEM0145",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0146",
                    "comments": "MEM0146",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0147",
                    "comments": "MEM0147",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0148",
                    "comments": "MEM0148",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0149",
                    "comments": "MEM0149",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0150",
                    "comments": "MEM0150",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0151",
                    "comments": "MEM0151",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0152",
                    "comments": "MEM0152",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0153",
                    "comments": "MEM0153",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0154",
                    "comments": "MEM0154",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0155",
                    "comments": "MEM0155",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0156",
                    "comments": "MEM0156",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0157",
                    "comments": "MEM0157",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0158",
                    "comments": "MEM0158",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0159",
                    "comments": "MEM0159",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0160",
                    "comments": "MEM0160",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0161",
                    "comments": "MEM0161",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0162",
                    "comments": "MEM0162",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0163",
                    "comments": "MEM0163",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0164",
                    "comments": "MEM0164",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0165",
                    "comments": "MEM0165",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0166",
                    "comments": "MEM0166",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0167",
                    "comments": "MEM0167",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0168",
                    "comments": "MEM0168",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0169",
                    "comments": "MEM0169",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0170",
                    "comments": "MEM0170",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0171",
                    "comments": "MEM0171",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0172",
                    "comments": "MEM0172",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0173",
                    "comments": "MEM0173",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0174",
                    "comments": "MEM0174",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0175",
                    "comments": "MEM0175",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0176",
                    "comments": "MEM0176",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0177",
                    "comments": "MEM0177",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0178",
                    "comments": "MEM0178",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0179",
                    "comments": "MEM0179",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0180",
                    "comments": "MEM0180",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0181",
                    "comments": "MEM0181",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0182",
                    "comments": "MEM0182",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0183",
                    "comments": "MEM0183",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0184",
                    "comments": "MEM0184",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0185",
                    "comments": "MEM0185",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0186",
                    "comments": "MEM0186",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0187",
                    "comments": "MEM0187",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0188",
                    "comments": "MEM0188",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0189",
                    "comments": "MEM0189",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0190",
                    "comments": "MEM0190",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0191",
                    "comments": "MEM0191",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0192",
                    "comments": "MEM0192",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0193",
                    "comments": "MEM0193",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0194",
                    "comments": "MEM0194",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0195",
                    "comments": "MEM0195",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0196",
                    "comments": "MEM0196",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0197",
                    "comments": "MEM0197",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0198",
                    "comments": "MEM0198",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0199",
                    "comments": "MEM0199",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0200",
                    "comments": "MEM0200",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0201",
                    "comments": "MEM0201",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0202",
                    "comments": "MEM0202",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0203",
                    "comments": "MEM0203",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0204",
                    "comments": "MEM0204",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0205",
                    "comments": "MEM0205",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0206",
                    "comments": "MEM0206",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0207",
                    "comments": "MEM0207",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0208",
                    "comments": "MEM0208",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0209",
                    "comments": "MEM0209",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0210",
                    "comments": "MEM0210",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0211",
                    "comments": "MEM0211",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0212",
                    "comments": "MEM0212",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0213",
                    "comments": "MEM0213",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0214",
                    "comments": "MEM0214",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0215",
                    "comments": "MEM0215",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0216",
                    "comments": "MEM0216",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0217",
                    "comments": "MEM0217",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0218",
                    "comments": "MEM0218",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0219",
                    "comments": "MEM0219",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0220",
                    "comments": "MEM0220",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0221",
                    "comments": "MEM0221",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0222",
                    "comments": "MEM0222",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0223",
                    "comments": "MEM0223",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0224",
                    "comments": "MEM0224",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0225",
                    "comments": "MEM0225",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0226",
                    "comments": "MEM0226",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0227",
                    "comments": "MEM0227",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0228",
                    "comments": "MEM0228",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0229",
                    "comments": "MEM0229",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0230",
                    "comments": "MEM0230",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0231",
                    "comments": "MEM0231",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0232",
                    "comments": "MEM0232",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0233",
                    "comments": "MEM0233",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0234",
                    "comments": "MEM0234",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0235",
                    "comments": "MEM0235",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0236",
                    "comments": "MEM0236",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0237",
                    "comments": "MEM0237",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0238",
                    "comments": "MEM0238",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0239",
                    "comments": "MEM0239",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0240",
                    "comments": "MEM0240",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0241",
                    "comments": "MEM0241",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0242",
                    "comments": "MEM0242",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0243",
                    "comments": "MEM0243",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0244",
                    "comments": "MEM0244",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0245",
                    "comments": "MEM0245",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0246",
                    "comments": "MEM0246",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0247",
                    "comments": "MEM0247",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0248",
                    "comments": "MEM0248",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0249",
                    "comments": "MEM0249",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0250",
                    "comments": "MEM0250",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0251",
                    "comments": "MEM0251",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0252",
                    "comments": "MEM0252",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0253",
                    "comments": "MEM0253",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0254",
                    "comments": "MEM0254",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0255",
                    "comments": "MEM0255",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0256",
                    "comments": "MEM0256",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0257",
                    "comments": "MEM0257",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0258",
                    "comments": "MEM0258",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0259",
                    "comments": "MEM0259",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0260",
                    "comments": "MEM0260",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0261",
                    "comments": "MEM0261",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0262",
                    "comments": "MEM0262",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0263",
                    "comments": "MEM0263",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0264",
                    "comments": "MEM0264",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0265",
                    "comments": "MEM0265",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0266",
                    "comments": "MEM0266",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0267",
                    "comments": "MEM0267",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0268",
                    "comments": "MEM0268",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0269",
                    "comments": "MEM0269",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0270",
                    "comments": "MEM0270",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0271",
                    "comments": "MEM0271",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0272",
                    "comments": "MEM0272",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0273",
                    "comments": "MEM0273",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0274",
                    "comments": "MEM0274",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0275",
                    "comments": "MEM0275",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0276",
                    "comments": "MEM0276",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0277",
                    "comments": "MEM0277",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0278",
                    "comments": "MEM0278",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0279",
                    "comments": "MEM0279",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0280",
                    "comments": "MEM0280",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0281",
                    "comments": "MEM0281",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0282",
                    "comments": "MEM0282",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0283",
                    "comments": "MEM0283",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0284",
                    "comments": "MEM0284",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0285",
                    "comments": "MEM0285",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0286",
                    "comments": "MEM0286",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0287",
                    "comments": "MEM0287",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0288",
                    "comments": "MEM0288",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0289",
                    "comments": "MEM0289",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0290",
                    "comments": "MEM0290",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0291",
                    "comments": "MEM0291",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0292",
                    "comments": "MEM0292",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0293",
                    "comments": "MEM0293",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0294",
                    "comments": "MEM0294",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0295",
                    "comments": "MEM0295",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0296",
                    "comments": "MEM0296",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                },
                {
                    "serial_number": "MEM0297",
                    "comments": "MEM0297",
                    "device_id": device.find(d => d.brand == 'SUPERIOR PRO MICRO SD').id
                }
            ]).then(function (x) {
                return queryInterface.sequelize.query(
                    'INSERT INTO db_was_seeded (seeded) VALUES (5)')
            })
        }
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('physical_devices', null, {}).then(function () {
            return queryInterface.sequelize.query(
                'DELETE FROM db_was_seeded WHERE seeded = 5')
        })
    }
};
