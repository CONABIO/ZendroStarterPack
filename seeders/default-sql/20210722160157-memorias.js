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
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0002",
            "comments": "MEM0002",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0003",
            "comments": "MEM0003",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0004",
            "comments": "MEM0004",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0005",
            "comments": "MEM0005",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0006",
            "comments": "MEM0006",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0007",
            "comments": "MEM0007",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0008",
            "comments": "MEM0008",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0009",
            "comments": "MEM0009",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0010",
            "comments": "MEM0010",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0011",
            "comments": "MEM0011",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0012",
            "comments": "MEM0012",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0013",
            "comments": "MEM0013",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0014",
            "comments": "MEM0014",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0015",
            "comments": "MEM0015",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0016",
            "comments": "MEM0016",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0017",
            "comments": "MEM0017",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0018",
            "comments": "MEM0018",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0019",
            "comments": "MEM0019",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0020",
            "comments": "MEM0020",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0021",
            "comments": "MEM0021",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0022",
            "comments": "MEM0022",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0023",
            "comments": "MEM0023",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0024",
            "comments": "MEM0024",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0025",
            "comments": "MEM0025",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0026",
            "comments": "MEM0026",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0027",
            "comments": "MEM0027",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0028",
            "comments": "MEM0028",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0029",
            "comments": "MEM0029",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0030",
            "comments": "MEM0030",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0031",
            "comments": "MEM0031",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0032",
            "comments": "MEM0032",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0033",
            "comments": "MEM0033",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0034",
            "comments": "MEM0034",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0035",
            "comments": "MEM0035",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0036",
            "comments": "MEM0036",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0037",
            "comments": "MEM0037",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0038",
            "comments": "MEM0038",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0039",
            "comments": "MEM0039",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0040",
            "comments": "MEM0040",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0041",
            "comments": "MEM0041",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0042",
            "comments": "MEM0042",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0043",
            "comments": "MEM0043",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0044",
            "comments": "MEM0044",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0045",
            "comments": "MEM0045",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0046",
            "comments": "MEM0046",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0047",
            "comments": "MEM0047",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0048",
            "comments": "MEM0048",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0049",
            "comments": "MEM0049",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0050",
            "comments": "MEM0050",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0051",
            "comments": "MEM0051",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0052",
            "comments": "MEM0052",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0053",
            "comments": "MEM0053",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0054",
            "comments": "MEM0054",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0055",
            "comments": "MEM0055",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0056",
            "comments": "MEM0056",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0057",
            "comments": "MEM0057",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0058",
            "comments": "MEM0058",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0059",
            "comments": "MEM0059",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0060",
            "comments": "MEM0060",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0061",
            "comments": "MEM0061",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0062",
            "comments": "MEM0062",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0063",
            "comments": "MEM0063",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0064",
            "comments": "MEM0064",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0065",
            "comments": "MEM0065",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0066",
            "comments": "MEM0066",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0067",
            "comments": "MEM0067",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0068",
            "comments": "MEM0068",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0069",
            "comments": "MEM0069",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0070",
            "comments": "MEM0070",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0071",
            "comments": "MEM0071",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0072",
            "comments": "MEM0072",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0073",
            "comments": "MEM0073",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0074",
            "comments": "MEM0074",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0075",
            "comments": "MEM0075",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0076",
            "comments": "MEM0076",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0077",
            "comments": "MEM0077",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0078",
            "comments": "MEM0078",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0079",
            "comments": "MEM0079",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0080",
            "comments": "MEM0080",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0081",
            "comments": "MEM0081",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0082",
            "comments": "MEM0082",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0083",
            "comments": "MEM0083",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0084",
            "comments": "MEM0084",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0085",
            "comments": "MEM0085",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0086",
            "comments": "MEM0086",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0087",
            "comments": "MEM0087",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0088",
            "comments": "MEM0088",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0089",
            "comments": "MEM0089",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0090",
            "comments": "MEM0090",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0091",
            "comments": "MEM0091",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0092",
            "comments": "MEM0092",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0093",
            "comments": "MEM0093",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0094",
            "comments": "MEM0094",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0095",
            "comments": "MEM0095",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0096",
            "comments": "MEM0096",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0097",
            "comments": "MEM0097",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0098",
            "comments": "MEM0098",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0099",
            "comments": "MEM0099",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0100",
            "comments": "MEM0100",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0101",
            "comments": "MEM0101",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0102",
            "comments": "MEM0102",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0103",
            "comments": "MEM0103",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0104",
            "comments": "MEM0104",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0105",
            "comments": "MEM0105",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0106",
            "comments": "MEM0106",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0107",
            "comments": "MEM0107",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0108",
            "comments": "MEM0108",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0109",
            "comments": "MEM0109",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0110",
            "comments": "MEM0110",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0111",
            "comments": "MEM0111",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0112",
            "comments": "MEM0112",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0113",
            "comments": "MEM0113",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0114",
            "comments": "MEM0114",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0115",
            "comments": "MEM0115",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0116",
            "comments": "MEM0116",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0117",
            "comments": "MEM0117",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0118",
            "comments": "MEM0118",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0119",
            "comments": "MEM0119",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0120",
            "comments": "MEM0120",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0121",
            "comments": "MEM0121",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0122",
            "comments": "MEM0122",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0123",
            "comments": "MEM0123",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0124",
            "comments": "MEM0124",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0125",
            "comments": "MEM0125",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0126",
            "comments": "MEM0126",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0127",
            "comments": "MEM0127",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0128",
            "comments": "MEM0128",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0129",
            "comments": "MEM0129",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0130",
            "comments": "MEM0130",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0131",
            "comments": "MEM0131",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0132",
            "comments": "MEM0132",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0133",
            "comments": "MEM0133",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0134",
            "comments": "MEM0134",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0135",
            "comments": "MEM0135",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0136",
            "comments": "MEM0136",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0137",
            "comments": "MEM0137",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0138",
            "comments": "MEM0138",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0139",
            "comments": "MEM0139",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0140",
            "comments": "MEM0140",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0141",
            "comments": "MEM0141",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0142",
            "comments": "MEM0142",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0143",
            "comments": "MEM0143",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0144",
            "comments": "MEM0144",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0145",
            "comments": "MEM0145",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0146",
            "comments": "MEM0146",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0147",
            "comments": "MEM0147",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0148",
            "comments": "MEM0148",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0149",
            "comments": "MEM0149",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0150",
            "comments": "MEM0150",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0151",
            "comments": "MEM0151",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0152",
            "comments": "MEM0152",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0153",
            "comments": "MEM0153",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0154",
            "comments": "MEM0154",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0155",
            "comments": "MEM0155",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0156",
            "comments": "MEM0156",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0157",
            "comments": "MEM0157",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0158",
            "comments": "MEM0158",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0159",
            "comments": "MEM0159",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0160",
            "comments": "MEM0160",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0161",
            "comments": "MEM0161",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0162",
            "comments": "MEM0162",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0163",
            "comments": "MEM0163",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0164",
            "comments": "MEM0164",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0165",
            "comments": "MEM0165",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0166",
            "comments": "MEM0166",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0167",
            "comments": "MEM0167",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0168",
            "comments": "MEM0168",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0169",
            "comments": "MEM0169",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0170",
            "comments": "MEM0170",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0171",
            "comments": "MEM0171",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0172",
            "comments": "MEM0172",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0173",
            "comments": "MEM0173",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0174",
            "comments": "MEM0174",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0175",
            "comments": "MEM0175",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0176",
            "comments": "MEM0176",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0177",
            "comments": "MEM0177",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0178",
            "comments": "MEM0178",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0179",
            "comments": "MEM0179",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0180",
            "comments": "MEM0180",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0181",
            "comments": "MEM0181",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0182",
            "comments": "MEM0182",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0183",
            "comments": "MEM0183",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0184",
            "comments": "MEM0184",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0185",
            "comments": "MEM0185",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0186",
            "comments": "MEM0186",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0187",
            "comments": "MEM0187",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0188",
            "comments": "MEM0188",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0189",
            "comments": "MEM0189",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0190",
            "comments": "MEM0190",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0191",
            "comments": "MEM0191",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0192",
            "comments": "MEM0192",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0193",
            "comments": "MEM0193",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0194",
            "comments": "MEM0194",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0195",
            "comments": "MEM0195",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0196",
            "comments": "MEM0196",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0197",
            "comments": "MEM0197",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0198",
            "comments": "MEM0198",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0199",
            "comments": "MEM0199",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0200",
            "comments": "MEM0200",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0201",
            "comments": "MEM0201",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0202",
            "comments": "MEM0202",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0203",
            "comments": "MEM0203",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0204",
            "comments": "MEM0204",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0205",
            "comments": "MEM0205",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0206",
            "comments": "MEM0206",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0207",
            "comments": "MEM0207",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0208",
            "comments": "MEM0208",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0209",
            "comments": "MEM0209",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0210",
            "comments": "MEM0210",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0211",
            "comments": "MEM0211",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0212",
            "comments": "MEM0212",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0213",
            "comments": "MEM0213",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0214",
            "comments": "MEM0214",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0215",
            "comments": "MEM0215",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0216",
            "comments": "MEM0216",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0217",
            "comments": "MEM0217",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0218",
            "comments": "MEM0218",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0219",
            "comments": "MEM0219",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0220",
            "comments": "MEM0220",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0221",
            "comments": "MEM0221",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0222",
            "comments": "MEM0222",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0223",
            "comments": "MEM0223",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0224",
            "comments": "MEM0224",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0225",
            "comments": "MEM0225",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0226",
            "comments": "MEM0226",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0227",
            "comments": "MEM0227",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0228",
            "comments": "MEM0228",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0229",
            "comments": "MEM0229",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0230",
            "comments": "MEM0230",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0231",
            "comments": "MEM0231",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0232",
            "comments": "MEM0232",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0233",
            "comments": "MEM0233",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0234",
            "comments": "MEM0234",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0235",
            "comments": "MEM0235",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0236",
            "comments": "MEM0236",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0237",
            "comments": "MEM0237",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0238",
            "comments": "MEM0238",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0239",
            "comments": "MEM0239",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0240",
            "comments": "MEM0240",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0241",
            "comments": "MEM0241",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0242",
            "comments": "MEM0242",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0243",
            "comments": "MEM0243",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0244",
            "comments": "MEM0244",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0245",
            "comments": "MEM0245",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0246",
            "comments": "MEM0246",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0247",
            "comments": "MEM0247",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0248",
            "comments": "MEM0248",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0249",
            "comments": "MEM0249",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0250",
            "comments": "MEM0250",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0251",
            "comments": "MEM0251",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0252",
            "comments": "MEM0252",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0253",
            "comments": "MEM0253",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0254",
            "comments": "MEM0254",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0255",
            "comments": "MEM0255",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0256",
            "comments": "MEM0256",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0257",
            "comments": "MEM0257",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0258",
            "comments": "MEM0258",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0259",
            "comments": "MEM0259",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0260",
            "comments": "MEM0260",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0261",
            "comments": "MEM0261",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0262",
            "comments": "MEM0262",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0263",
            "comments": "MEM0263",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0264",
            "comments": "MEM0264",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0265",
            "comments": "MEM0265",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0266",
            "comments": "MEM0266",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0267",
            "comments": "MEM0267",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0268",
            "comments": "MEM0268",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0269",
            "comments": "MEM0269",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0270",
            "comments": "MEM0270",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0271",
            "comments": "MEM0271",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0272",
            "comments": "MEM0272",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0273",
            "comments": "MEM0273",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0274",
            "comments": "MEM0274",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0275",
            "comments": "MEM0275",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0276",
            "comments": "MEM0276",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0277",
            "comments": "MEM0277",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0278",
            "comments": "MEM0278",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0279",
            "comments": "MEM0279",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0280",
            "comments": "MEM0280",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0281",
            "comments": "MEM0281",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0282",
            "comments": "MEM0282",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0283",
            "comments": "MEM0283",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0284",
            "comments": "MEM0284",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0285",
            "comments": "MEM0285",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0286",
            "comments": "MEM0286",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0287",
            "comments": "MEM0287",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0288",
            "comments": "MEM0288",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0289",
            "comments": "MEM0289",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0290",
            "comments": "MEM0290",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0291",
            "comments": "MEM0291",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0292",
            "comments": "MEM0292",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0293",
            "comments": "MEM0293",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0294",
            "comments": "MEM0294",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0295",
            "comments": "MEM0295",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0296",
            "comments": "MEM0296",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "MEM0297",
            "comments": "MEM0297",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "850",
            "comments": "TRM0850",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "851",
            "comments": "TRM0851",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "852",
            "comments": "TRM0852",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "853",
            "comments": "TRM0853",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "854",
            "comments": "TRM0854",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "855",
            "comments": "TRM0855",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "856",
            "comments": "TRM0856",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "857",
            "comments": "TRM0857",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "858",
            "comments": "TRM0858",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "859",
            "comments": "TRM0859",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "860",
            "comments": "TRM0860",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "861",
            "comments": "TRM0861",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "862",
            "comments": "TRM0862",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "863",
            "comments": "TRM0863",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "864",
            "comments": "TRM0864",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "865",
            "comments": "TRM0865",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "866",
            "comments": "TRM0866",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "867",
            "comments": "TRM0867",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "868",
            "comments": "TRM0868",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "869",
            "comments": "TRM0869",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "870",
            "comments": "TRM0870",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "871",
            "comments": "TRM0871",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "872",
            "comments": "TRM0872",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "873",
            "comments": "TRM0873",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "874",
            "comments": "TRM0874",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "875",
            "comments": "TRM0875",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "876",
            "comments": "TRM0876",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "877",
            "comments": "TRM0877",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "878",
            "comments": "TRM0878",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "879",
            "comments": "TRM0879",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "880",
            "comments": "TRM0880",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "881",
            "comments": "TRM0881",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "882",
            "comments": "TRM0882",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "883",
            "comments": "TRM0883",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "884",
            "comments": "TRM0884",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "885",
            "comments": "TRM0885",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "886",
            "comments": "TRM0886",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "887",
            "comments": "TRM0887",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "888",
            "comments": "TRM0888",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "889",
            "comments": "TRM0889",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "890",
            "comments": "TRM0890",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "891",
            "comments": "TRM0891",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "892",
            "comments": "TRM0892",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "893",
            "comments": "TRM0893",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "894",
            "comments": "TRM0894",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "895",
            "comments": "TRM0895",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "896",
            "comments": "TRM0896",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "897",
            "comments": "TRM0897",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "898",
            "comments": "TRM0898",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "899",
            "comments": "TRM0899",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "900",
            "comments": "TRM0900",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "901",
            "comments": "TRM0901",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "902",
            "comments": "TRM0902",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "903",
            "comments": "TRM0903",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "904",
            "comments": "TRM0904",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "905",
            "comments": "TRM0905",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "906",
            "comments": "TRM0906",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "907",
            "comments": "TRM0907",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "908",
            "comments": "TRM0908",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "909",
            "comments": "TRM0909",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "910",
            "comments": "TRM0910",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "911",
            "comments": "TRM0911",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "912",
            "comments": "TRM0912",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "913",
            "comments": "TRM0913",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "914",
            "comments": "TRM0914",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "915",
            "comments": "TRM0915",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "916",
            "comments": "TRM0916",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "917",
            "comments": "TRM0917",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "918",
            "comments": "TRM0918",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "919",
            "comments": "TRM0919",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "920",
            "comments": "TRM0920",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "921",
            "comments": "TRM0921",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "922",
            "comments": "TRM0922",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "923",
            "comments": "TRM0923",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "924",
            "comments": "TRM0924",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "925",
            "comments": "TRM0925",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "926",
            "comments": "TRM0926",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "927",
            "comments": "TRM0927",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "928",
            "comments": "TRM0928",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "929",
            "comments": "TRM0929",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "930",
            "comments": "TRM0930",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "931",
            "comments": "TRM0931",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "932",
            "comments": "TRM0932",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "933",
            "comments": "TRM0933",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "934",
            "comments": "TRM0934",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "935",
            "comments": "TRM0935",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "936",
            "comments": "TRM0936",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "937",
            "comments": "TRM0937",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "938",
            "comments": "TRM0938",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "939",
            "comments": "TRM0939",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "940",
            "comments": "TRM0940",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "941",
            "comments": "TRM0941",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "942",
            "comments": "TRM0942",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "943",
            "comments": "TRM0943",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "944",
            "comments": "TRM0944",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "945",
            "comments": "TRM0945",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "946",
            "comments": "TRM0946",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "947",
            "comments": "TRM0947",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "948",
            "comments": "TRM0948",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "949",
            "comments": "TRM0949",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "950",
            "comments": "TRM0950",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "951",
            "comments": "TRM0951",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "952",
            "comments": "TRM0952",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "953",
            "comments": "TRM0953",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "954",
            "comments": "TRM0954",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "955",
            "comments": "TRM0955",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "956",
            "comments": "TRM0956",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "957",
            "comments": "TRM0957",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "958",
            "comments": "TRM0958",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "959",
            "comments": "TRM0959",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "960",
            "comments": "TRM0960",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "961",
            "comments": "TRM0961",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "962",
            "comments": "TRM0962",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "963",
            "comments": "TRM0963",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "964",
            "comments": "TRM0964",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "965",
            "comments": "TRM0965",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "966",
            "comments": "TRM0966",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "967",
            "comments": "TRM0967",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "968",
            "comments": "TRM0968",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "969",
            "comments": "TRM0969",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "970",
            "comments": "TRM0970",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "971",
            "comments": "TRM0971",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "972",
            "comments": "TRM0972",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "973",
            "comments": "TRM0973",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "974",
            "comments": "TRM0974",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "975",
            "comments": "TRM0975",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "976",
            "comments": "TRM0976",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "977",
            "comments": "TRM0977",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "978",
            "comments": "TRM0978",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "979",
            "comments": "TRM0979",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "980",
            "comments": "TRM0980",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "981",
            "comments": "TRM0981",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "982",
            "comments": "TRM0982",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "983",
            "comments": "TRM0983",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "984",
            "comments": "TRM0984",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "985",
            "comments": "TRM0985",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "986",
            "comments": "TRM0986",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "987",
            "comments": "TRM0987",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "988",
            "comments": "TRM0988",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "989",
            "comments": "TRM0989",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "990",
            "comments": "TRM0990",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "991",
            "comments": "TRM0991",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "992",
            "comments": "TRM0992",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "993",
            "comments": "TRM0993",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "994",
            "comments": "TRM0994",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "995",
            "comments": "TRM0995",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "996",
            "comments": "TRM0996",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "997",
            "comments": "TRM0997",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "998",
            "comments": "TRM0998",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "999",
            "comments": "TRM0999",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1000",
            "comments": "TRM1000",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1001",
            "comments": "TRM1001",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1002",
            "comments": "TRM1002",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1003",
            "comments": "TRM1003",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1004",
            "comments": "TRM1004",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1005",
            "comments": "TRM1005",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1006",
            "comments": "TRM1006",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1007",
            "comments": "TRM1007",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1008",
            "comments": "TRM1008",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1009",
            "comments": "TRM1009",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1010",
            "comments": "TRM1010",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1011",
            "comments": "TRM1011",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1012",
            "comments": "TRM1012",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1013",
            "comments": "TRM1013",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1014",
            "comments": "TRM1014",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1015",
            "comments": "TRM1015",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1016",
            "comments": "TRM1016",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1017",
            "comments": "TRM1017",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1018",
            "comments": "TRM1018",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1019",
            "comments": "TRM1019",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1020",
            "comments": "TRM1020",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1021",
            "comments": "TRM1021",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1022",
            "comments": "TRM1022",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1023",
            "comments": "TRM1023",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1024",
            "comments": "TRM1024",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1025",
            "comments": "TRM1025",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1026",
            "comments": "TRM1026",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1027",
            "comments": "TRM1027",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1028",
            "comments": "TRM1028",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1029",
            "comments": "TRM1029",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1030",
            "comments": "TRM1030",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1031",
            "comments": "TRM1031",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1032",
            "comments": "TRM1032",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1033",
            "comments": "TRM1033",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1034",
            "comments": "TRM1034",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1035",
            "comments": "TRM1035",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1036",
            "comments": "TRM1036",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1037",
            "comments": "TRM1037",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1038",
            "comments": "TRM1038",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1039",
            "comments": "TRM1039",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1040",
            "comments": "TRM1040",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1041",
            "comments": "TRM1041",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1042",
            "comments": "TRM1042",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1043",
            "comments": "TRM1043",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1044",
            "comments": "TRM1044",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1045",
            "comments": "TRM1045",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1046",
            "comments": "TRM1046",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1047",
            "comments": "TRM1047",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1048",
            "comments": "TRM1048",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1049",
            "comments": "TRM1049",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1050",
            "comments": "TRM1050",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1051",
            "comments": "TRM1051",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1052",
            "comments": "TRM1052",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1053",
            "comments": "TRM1053",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1054",
            "comments": "TRM1054",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1055",
            "comments": "TRM1055",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1056",
            "comments": "TRM1056",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1057",
            "comments": "TRM1057",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1058",
            "comments": "TRM1058",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1059",
            "comments": "TRM1059",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1060",
            "comments": "TRM1060",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1061",
            "comments": "TRM1061",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1062",
            "comments": "TRM1062",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1063",
            "comments": "TRM1063",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1064",
            "comments": "TRM1064",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1065",
            "comments": "TRM1065",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1066",
            "comments": "TRM1066",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1067",
            "comments": "TRM1067",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1068",
            "comments": "TRM1068",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1069",
            "comments": "TRM1069",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1070",
            "comments": "TRM1070",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1071",
            "comments": "TRM1071",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1072",
            "comments": "TRM1072",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1073",
            "comments": "TRM1073",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1074",
            "comments": "TRM1074",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1075",
            "comments": "TRM1075",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1076",
            "comments": "TRM1076",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1077",
            "comments": "TRM1077",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1078",
            "comments": "TRM1078",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1079",
            "comments": "TRM1079",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1080",
            "comments": "TRM1080",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1081",
            "comments": "TRM1081",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1082",
            "comments": "TRM1082",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1083",
            "comments": "TRM1083",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1084",
            "comments": "TRM1084",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1085",
            "comments": "TRM1085",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1086",
            "comments": "TRM1086",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1087",
            "comments": "TRM1087",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1088",
            "comments": "TRM1088",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1089",
            "comments": "TRM1089",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1090",
            "comments": "TRM1090",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1091",
            "comments": "TRM1091",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1092",
            "comments": "TRM1092",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1093",
            "comments": "TRM1093",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1094",
            "comments": "TRM1094",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1095",
            "comments": "TRM1095",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1096",
            "comments": "TRM1096",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1097",
            "comments": "TRM1097",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1098",
            "comments": "TRM1098",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1099",
            "comments": "TRM1099",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1100",
            "comments": "TRM1100",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1101",
            "comments": "TRM1101",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1102",
            "comments": "TRM1102",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1103",
            "comments": "TRM1103",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1104",
            "comments": "TRM1104",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1105",
            "comments": "TRM1105",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1106",
            "comments": "TRM1106",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1107",
            "comments": "TRM1107",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1108",
            "comments": "TRM1108",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1109",
            "comments": "TRM1109",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1110",
            "comments": "TRM1110",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1111",
            "comments": "TRM1111",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1112",
            "comments": "TRM1112",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1113",
            "comments": "TRM1113",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1114",
            "comments": "TRM1114",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1115",
            "comments": "TRM1115",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1116",
            "comments": "TRM1116",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1117",
            "comments": "TRM1117",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1118",
            "comments": "TRM1118",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1119",
            "comments": "TRM1119",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1120",
            "comments": "TRM1120",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1121",
            "comments": "TRM1121",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1122",
            "comments": "TRM1122",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1123",
            "comments": "TRM1123",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1124",
            "comments": "TRM1124",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1125",
            "comments": "TRM1125",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1126",
            "comments": "TRM1126",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1127",
            "comments": "TRM1127",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1128",
            "comments": "TRM1128",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1129",
            "comments": "TRM1129",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1130",
            "comments": "TRM1130",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1131",
            "comments": "TRM1131",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1132",
            "comments": "TRM1132",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1133",
            "comments": "TRM1133",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1134",
            "comments": "TRM1134",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1135",
            "comments": "TRM1135",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1136",
            "comments": "TRM1136",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1137",
            "comments": "TRM1137",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1138",
            "comments": "TRM1138",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1139",
            "comments": "TRM1139",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1140",
            "comments": "TRM1140",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1141",
            "comments": "TRM1141",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1142",
            "comments": "TRM1142",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1143",
            "comments": "TRM1143",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1144",
            "comments": "TRM1144",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1145",
            "comments": "TRM1145",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1146",
            "comments": "TRM1146",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1147",
            "comments": "TRM1147",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1148",
            "comments": "TRM1148",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1149",
            "comments": "TRM1149",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1150",
            "comments": "TRM1150",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1151",
            "comments": "TRM1151",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1152",
            "comments": "TRM1152",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1153",
            "comments": "TRM1153",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1154",
            "comments": "TRM1154",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1155",
            "comments": "TRM1155",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1156",
            "comments": "TRM1156",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1157",
            "comments": "TRM1157",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1158",
            "comments": "TRM1158",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1159",
            "comments": "TRM1159",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1160",
            "comments": "TRM1160",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1161",
            "comments": "TRM1161",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1162",
            "comments": "TRM1162",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1163",
            "comments": "TRM1163",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1164",
            "comments": "TRM1164",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1165",
            "comments": "TRM1165",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1166",
            "comments": "TRM1166",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1167",
            "comments": "TRM1167",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1168",
            "comments": "TRM1168",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1169",
            "comments": "TRM1169",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1170",
            "comments": "TRM1170",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1171",
            "comments": "TRM1171",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1172",
            "comments": "TRM1172",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1173",
            "comments": "TRM1173",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1174",
            "comments": "TRM1174",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1175",
            "comments": "TRM1175",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1176",
            "comments": "TRM1176",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1177",
            "comments": "TRM1177",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1178",
            "comments": "TRM1178",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1179",
            "comments": "TRM1179",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1180",
            "comments": "TRM1180",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1181",
            "comments": "TRM1181",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1182",
            "comments": "TRM1182",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1183",
            "comments": "TRM1183",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1184",
            "comments": "TRM1184",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1185",
            "comments": "TRM1185",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1186",
            "comments": "TRM1186",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1187",
            "comments": "TRM1187",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1188",
            "comments": "TRM1188",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1189",
            "comments": "TRM1189",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1190",
            "comments": "TRM1190",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1191",
            "comments": "TRM1191",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1192",
            "comments": "TRM1192",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1193",
            "comments": "TRM1193",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1194",
            "comments": "TRM1194",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1195",
            "comments": "TRM1195",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1196",
            "comments": "TRM1196",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1197",
            "comments": "TRM1197",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1198",
            "comments": "TRM1198",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1199",
            "comments": "TRM1199",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1200",
            "comments": "TRM1200",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1201",
            "comments": "TRM1201",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1202",
            "comments": "TRM1202",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1203",
            "comments": "TRM1203",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1204",
            "comments": "TRM1204",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1205",
            "comments": "TRM1205",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1206",
            "comments": "TRM1206",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1207",
            "comments": "TRM1207",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1208",
            "comments": "TRM1208",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1209",
            "comments": "TRM1209",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1210",
            "comments": "TRM1210",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1211",
            "comments": "TRM1211",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1212",
            "comments": "TRM1212",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1213",
            "comments": "TRM1213",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1214",
            "comments": "TRM1214",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1215",
            "comments": "TRM1215",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1216",
            "comments": "TRM1216",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1217",
            "comments": "TRM1217",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1218",
            "comments": "TRM1218",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1219",
            "comments": "TRM1219",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1220",
            "comments": "TRM1220",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1221",
            "comments": "TRM1221",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1222",
            "comments": "TRM1222",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1223",
            "comments": "TRM1223",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1224",
            "comments": "TRM1224",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1225",
            "comments": "TRM1225",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1226",
            "comments": "TRM1226",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1227",
            "comments": "TRM1227",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1228",
            "comments": "TRM1228",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1229",
            "comments": "TRM1229",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1230",
            "comments": "TRM1230",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1231",
            "comments": "TRM1231",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1232",
            "comments": "TRM1232",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1233",
            "comments": "TRM1233",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1234",
            "comments": "TRM1234",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1235",
            "comments": "TRM1235",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1236",
            "comments": "TRM1236",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1237",
            "comments": "TRM1237",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1238",
            "comments": "TRM1238",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1239",
            "comments": "TRM1239",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1240",
            "comments": "TRM1240",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1241",
            "comments": "TRM1241",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1242",
            "comments": "TRM1242",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1243",
            "comments": "TRM1243",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1244",
            "comments": "TRM1244",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1245",
            "comments": "TRM1245",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1246",
            "comments": "TRM1246",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1247",
            "comments": "TRM1247",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1248",
            "comments": "TRM1248",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1249",
            "comments": "TRM1249",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1250",
            "comments": "TRM1250",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1251",
            "comments": "TRM1251",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1252",
            "comments": "TRM1252",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1253",
            "comments": "TRM1253",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1254",
            "comments": "TRM1254",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1255",
            "comments": "TRM1255",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1256",
            "comments": "TRM1256",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1257",
            "comments": "TRM1257",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1258",
            "comments": "TRM1258",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1259",
            "comments": "TRM1259",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1260",
            "comments": "TRM1260",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1261",
            "comments": "TRM1261",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1262",
            "comments": "TRM1262",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1263",
            "comments": "TRM1263",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1264",
            "comments": "TRM1264",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1265",
            "comments": "TRM1265",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1266",
            "comments": "TRM1266",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1267",
            "comments": "TRM1267",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1268",
            "comments": "TRM1268",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1269",
            "comments": "TRM1269",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1270",
            "comments": "TRM1270",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1271",
            "comments": "TRM1271",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1272",
            "comments": "TRM1272",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1273",
            "comments": "TRM1273",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1274",
            "comments": "TRM1274",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1275",
            "comments": "TRM1275",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1276",
            "comments": "TRM1276",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1277",
            "comments": "TRM1277",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1278",
            "comments": "TRM1278",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1279",
            "comments": "TRM1279",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1280",
            "comments": "TRM1280",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1281",
            "comments": "TRM1281",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1282",
            "comments": "TRM1282",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1283",
            "comments": "TRM1283",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1284",
            "comments": "TRM1284",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1285",
            "comments": "TRM1285",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1286",
            "comments": "TRM1286",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1287",
            "comments": "TRM1287",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1288",
            "comments": "TRM1288",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1289",
            "comments": "TRM1289",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1290",
            "comments": "TRM1290",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1291",
            "comments": "TRM1291",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1292",
            "comments": "TRM1292",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1293",
            "comments": "TRM1293",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1294",
            "comments": "TRM1294",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1295",
            "comments": "TRM1295",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1296",
            "comments": "TRM1296",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1297",
            "comments": "TRM1297",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1298",
            "comments": "TRM1298",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1299",
            "comments": "TRM1299",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1300",
            "comments": "TRM1300",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1301",
            "comments": "TRM1301",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1302",
            "comments": "TRM1302",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1303",
            "comments": "TRM1303",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1304",
            "comments": "TRM1304",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1305",
            "comments": "TRM1305",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1306",
            "comments": "TRM1306",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1307",
            "comments": "TRM1307",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1308",
            "comments": "TRM1308",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1309",
            "comments": "TRM1309",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1310",
            "comments": "TRM1310",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1311",
            "comments": "TRM1311",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1312",
            "comments": "TRM1312",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1313",
            "comments": "TRM1313",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1314",
            "comments": "TRM1314",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1315",
            "comments": "TRM1315",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1316",
            "comments": "TRM1316",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1317",
            "comments": "TRM1317",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1318",
            "comments": "TRM1318",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1319",
            "comments": "TRM1319",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1320",
            "comments": "TRM1320",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1321",
            "comments": "TRM1321",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1322",
            "comments": "TRM1322",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1323",
            "comments": "TRM1323",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1324",
            "comments": "TRM1324",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1325",
            "comments": "TRM1325",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1326",
            "comments": "TRM1326",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1327",
            "comments": "TRM1327",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1328",
            "comments": "TRM1328",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1329",
            "comments": "TRM1329",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1330",
            "comments": "TRM1330",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1331",
            "comments": "TRM1331",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1332",
            "comments": "TRM1332",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1333",
            "comments": "TRM1333",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1334",
            "comments": "TRM1334",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1335",
            "comments": "TRM1335",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1336",
            "comments": "TRM1336",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1337",
            "comments": "TRM1337",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1338",
            "comments": "TRM1338",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1339",
            "comments": "TRM1339",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1340",
            "comments": "TRM1340",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1341",
            "comments": "TRM1341",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1342",
            "comments": "TRM1342",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1343",
            "comments": "TRM1343",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1344",
            "comments": "TRM1344",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1345",
            "comments": "TRM1345",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1346",
            "comments": "TRM1346",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1347",
            "comments": "TRM1347",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1348",
            "comments": "TRM1348",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1349",
            "comments": "TRM1349",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1350",
            "comments": "TRM1350",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1351",
            "comments": "TRM1351",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1352",
            "comments": "TRM1352",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1353",
            "comments": "TRM1353",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1354",
            "comments": "TRM1354",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1355",
            "comments": "TRM1355",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1356",
            "comments": "TRM1356",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1357",
            "comments": "TRM1357",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1358",
            "comments": "TRM1358",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1359",
            "comments": "TRM1359",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1360",
            "comments": "TRM1360",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1361",
            "comments": "TRM1361",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1362",
            "comments": "TRM1362",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1363",
            "comments": "TRM1363",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1364",
            "comments": "TRM1364",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1365",
            "comments": "TRM1365",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1366",
            "comments": "TRM1366",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1367",
            "comments": "TRM1367",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1368",
            "comments": "TRM1368",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1369",
            "comments": "TRM1369",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1370",
            "comments": "TRM1370",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1371",
            "comments": "TRM1371",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1372",
            "comments": "TRM1372",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1373",
            "comments": "TRM1373",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1374",
            "comments": "TRM1374",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1375",
            "comments": "TRM1375",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1376",
            "comments": "TRM1376",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1377",
            "comments": "TRM1377",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1378",
            "comments": "TRM1378",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1379",
            "comments": "TRM1379",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1380",
            "comments": "TRM1380",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1381",
            "comments": "TRM1381",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1382",
            "comments": "TRM1382",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1383",
            "comments": "TRM1383",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1384",
            "comments": "TRM1384",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1385",
            "comments": "TRM1385",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1386",
            "comments": "TRM1386",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1387",
            "comments": "TRM1387",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1388",
            "comments": "TRM1388",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1389",
            "comments": "TRM1389",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1390",
            "comments": "TRM1390",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1391",
            "comments": "TRM1391",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1392",
            "comments": "TRM1392",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1393",
            "comments": "TRM1393",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1394",
            "comments": "TRM1394",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1395",
            "comments": "TRM1395",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1396",
            "comments": "TRM1396",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1397",
            "comments": "TRM1397",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1398",
            "comments": "TRM1398",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1399",
            "comments": "TRM1399",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1400",
            "comments": "TRM1400",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1401",
            "comments": "TRM1401",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1402",
            "comments": "TRM1402",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1403",
            "comments": "TRM1403",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1404",
            "comments": "TRM1404",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1405",
            "comments": "TRM1405",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1406",
            "comments": "TRM1406",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1407",
            "comments": "TRM1407",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1408",
            "comments": "TRM1408",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1409",
            "comments": "TRM1409",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1410",
            "comments": "TRM1410",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1411",
            "comments": "TRM1411",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1412",
            "comments": "TRM1412",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1413",
            "comments": "TRM1413",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1414",
            "comments": "TRM1414",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1415",
            "comments": "TRM1415",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1416",
            "comments": "TRM1416",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1417",
            "comments": "TRM1417",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1418",
            "comments": "TRM1418",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1419",
            "comments": "TRM1419",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1420",
            "comments": "TRM1420",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1421",
            "comments": "TRM1421",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1422",
            "comments": "TRM1422",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1423",
            "comments": "TRM1423",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1424",
            "comments": "TRM1424",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1425",
            "comments": "TRM1425",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1426",
            "comments": "TRM1426",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1427",
            "comments": "TRM1427",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1428",
            "comments": "TRM1428",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1429",
            "comments": "TRM1429",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1430",
            "comments": "TRM1430",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1431",
            "comments": "TRM1431",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1432",
            "comments": "TRM1432",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1433",
            "comments": "TRM1433",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1434",
            "comments": "TRM1434",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1435",
            "comments": "TRM1435",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1436",
            "comments": "TRM1436",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1437",
            "comments": "TRM1437",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1438",
            "comments": "TRM1438",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1439",
            "comments": "TRM1439",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1440",
            "comments": "TRM1440",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1441",
            "comments": "TRM1441",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1442",
            "comments": "TRM1442",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1443",
            "comments": "TRM1443",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1444",
            "comments": "TRM1444",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1445",
            "comments": "TRM1445",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1446",
            "comments": "TRM1446",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1447",
            "comments": "TRM1447",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1448",
            "comments": "TRM1448",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1449",
            "comments": "TRM1449",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1450",
            "comments": "TRM1450",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1451",
            "comments": "TRM1451",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1452",
            "comments": "TRM1452",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1453",
            "comments": "TRM1453",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1454",
            "comments": "TRM1454",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1455",
            "comments": "TRM1455",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1456",
            "comments": "TRM1456",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1457",
            "comments": "TRM1457",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1458",
            "comments": "TRM1458",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1459",
            "comments": "TRM1459",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1460",
            "comments": "TRM1460",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1461",
            "comments": "TRM1461",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1462",
            "comments": "TRM1462",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1463",
            "comments": "TRM1463",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1464",
            "comments": "TRM1464",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1465",
            "comments": "TRM1465",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1466",
            "comments": "TRM1466",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1467",
            "comments": "TRM1467",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1468",
            "comments": "TRM1468",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1469",
            "comments": "TRM1469",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1470",
            "comments": "TRM1470",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1471",
            "comments": "TRM1471",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1472",
            "comments": "TRM1472",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1473",
            "comments": "TRM1473",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1474",
            "comments": "TRM1474",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1475",
            "comments": "TRM1475",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1476",
            "comments": "TRM1476",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1477",
            "comments": "TRM1477",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1478",
            "comments": "TRM1478",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1479",
            "comments": "TRM1479",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1480",
            "comments": "TRM1480",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1481",
            "comments": "TRM1481",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1482",
            "comments": "TRM1482",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1483",
            "comments": "TRM1483",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1484",
            "comments": "TRM1484",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1485",
            "comments": "TRM1485",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1486",
            "comments": "TRM1486",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1487",
            "comments": "TRM1487",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1488",
            "comments": "TRM1488",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1489",
            "comments": "TRM1489",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1490",
            "comments": "TRM1490",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1491",
            "comments": "TRM1491",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1492",
            "comments": "TRM1492",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1493",
            "comments": "TRM1493",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1494",
            "comments": "TRM1494",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1495",
            "comments": "TRM1495",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1496",
            "comments": "TRM1496",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1497",
            "comments": "TRM1497",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1498",
            "comments": "TRM1498",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1499",
            "comments": "TRM1499",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1500",
            "comments": "TRM1500",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1501",
            "comments": "TRM1501",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1502",
            "comments": "TRM1502",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1503",
            "comments": "TRM1503",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1504",
            "comments": "TRM1504",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1505",
            "comments": "TRM1505",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1506",
            "comments": "TRM1506",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1507",
            "comments": "TRM1507",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1508",
            "comments": "TRM1508",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1509",
            "comments": "TRM1509",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1510",
            "comments": "TRM1510",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1511",
            "comments": "TRM1511",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1512",
            "comments": "TRM1512",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1513",
            "comments": "TRM1513",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1514",
            "comments": "TRM1514",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1515",
            "comments": "TRM1515",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1516",
            "comments": "TRM1516",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1517",
            "comments": "TRM1517",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1518",
            "comments": "TRM1518",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1519",
            "comments": "TRM1519",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1520",
            "comments": "TRM1520",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1521",
            "comments": "TRM1521",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1522",
            "comments": "TRM1522",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1523",
            "comments": "TRM1523",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1524",
            "comments": "TRM1524",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1525",
            "comments": "TRM1525",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1526",
            "comments": "TRM1526",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1527",
            "comments": "TRM1527",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1528",
            "comments": "TRM1528",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1529",
            "comments": "TRM1529",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1530",
            "comments": "TRM1530",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1531",
            "comments": "TRM1531",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1532",
            "comments": "TRM1532",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1533",
            "comments": "TRM1533",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1534",
            "comments": "TRM1534",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1535",
            "comments": "TRM1535",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1536",
            "comments": "TRM1536",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1537",
            "comments": "TRM1537",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1538",
            "comments": "TRM1538",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1539",
            "comments": "TRM1539",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1540",
            "comments": "TRM1540",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1541",
            "comments": "TRM1541",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1542",
            "comments": "TRM1542",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1543",
            "comments": "TRM1543",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1544",
            "comments": "TRM1544",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1545",
            "comments": "TRM1545",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1546",
            "comments": "TRM1546",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1547",
            "comments": "TRM1547",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1548",
            "comments": "TRM1548",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1549",
            "comments": "TRM1549",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1550",
            "comments": "TRM1550",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1551",
            "comments": "TRM1551",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1552",
            "comments": "TRM1552",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1553",
            "comments": "TRM1553",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1554",
            "comments": "TRM1554",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1555",
            "comments": "TRM1555",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1556",
            "comments": "TRM1556",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1557",
            "comments": "TRM1557",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1558",
            "comments": "TRM1558",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1559",
            "comments": "TRM1559",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1560",
            "comments": "TRM1560",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1561",
            "comments": "TRM1561",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1562",
            "comments": "TRM1562",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1563",
            "comments": "TRM1563",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1564",
            "comments": "TRM1564",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1565",
            "comments": "TRM1565",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1566",
            "comments": "TRM1566",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1567",
            "comments": "TRM1567",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1568",
            "comments": "TRM1568",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1569",
            "comments": "TRM1569",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1570",
            "comments": "TRM1570",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1571",
            "comments": "TRM1571",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1572",
            "comments": "TRM1572",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1573",
            "comments": "TRM1573",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1574",
            "comments": "TRM1574",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1575",
            "comments": "TRM1575",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1576",
            "comments": "TRM1576",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1577",
            "comments": "TRM1577",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1578",
            "comments": "TRM1578",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1579",
            "comments": "TRM1579",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1580",
            "comments": "TRM1580",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1581",
            "comments": "TRM1581",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1582",
            "comments": "TRM1582",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1583",
            "comments": "TRM1583",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1584",
            "comments": "TRM1584",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1585",
            "comments": "TRM1585",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1586",
            "comments": "TRM1586",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1587",
            "comments": "TRM1587",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1588",
            "comments": "TRM1588",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1589",
            "comments": "TRM1589",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1590",
            "comments": "TRM1590",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1591",
            "comments": "TRM1591",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1592",
            "comments": "TRM1592",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1593",
            "comments": "TRM1593",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1594",
            "comments": "TRM1594",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1595",
            "comments": "TRM1595",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1596",
            "comments": "TRM1596",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1597",
            "comments": "TRM1597",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1598",
            "comments": "TRM1598",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1599",
            "comments": "TRM1599",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1600",
            "comments": "TRM1600",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1601",
            "comments": "TRM1601",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1602",
            "comments": "TRM1602",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1603",
            "comments": "TRM1603",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1604",
            "comments": "TRM1604",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1605",
            "comments": "TRM1605",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1606",
            "comments": "TRM1606",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1607",
            "comments": "TRM1607",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1608",
            "comments": "TRM1608",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1609",
            "comments": "TRM1609",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1610",
            "comments": "TRM1610",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1611",
            "comments": "TRM1611",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1612",
            "comments": "TRM1612",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1613",
            "comments": "TRM1613",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1614",
            "comments": "TRM1614",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1615",
            "comments": "TRM1615",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1616",
            "comments": "TRM1616",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1617",
            "comments": "TRM1617",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1618",
            "comments": "TRM1618",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1619",
            "comments": "TRM1619",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1620",
            "comments": "TRM1620",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1621",
            "comments": "TRM1621",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1622",
            "comments": "TRM1622",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1623",
            "comments": "TRM1623",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1624",
            "comments": "TRM1624",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1625",
            "comments": "TRM1625",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1626",
            "comments": "TRM1626",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1627",
            "comments": "TRM1627",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1628",
            "comments": "TRM1628",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1629",
            "comments": "TRM1629",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1630",
            "comments": "TRM1630",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1631",
            "comments": "TRM1631",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1632",
            "comments": "TRM1632",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1633",
            "comments": "TRM1633",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1634",
            "comments": "TRM1634",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1635",
            "comments": "TRM1635",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1636",
            "comments": "TRM1636",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1637",
            "comments": "TRM1637",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1638",
            "comments": "TRM1638",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1639",
            "comments": "TRM1639",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1640",
            "comments": "TRM1640",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1641",
            "comments": "TRM1641",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1642",
            "comments": "TRM1642",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1643",
            "comments": "TRM1643",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1644",
            "comments": "TRM1644",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1645",
            "comments": "TRM1645",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1646",
            "comments": "TRM1646",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1647",
            "comments": "TRM1647",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1648",
            "comments": "TRM1648",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1649",
            "comments": "TRM1649",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1650",
            "comments": "TRM1650",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1651",
            "comments": "TRM1651",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1652",
            "comments": "TRM1652",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1653",
            "comments": "TRM1653",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1654",
            "comments": "TRM1654",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1655",
            "comments": "TRM1655",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1656",
            "comments": "TRM1656",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1657",
            "comments": "TRM1657",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1658",
            "comments": "TRM1658",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1659",
            "comments": "TRM1659",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1660",
            "comments": "TRM1660",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1661",
            "comments": "TRM1661",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1662",
            "comments": "TRM1662",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1663",
            "comments": "TRM1663",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1664",
            "comments": "TRM1664",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1665",
            "comments": "TRM1665",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1666",
            "comments": "TRM1666",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1667",
            "comments": "TRM1667",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1668",
            "comments": "TRM1668",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1669",
            "comments": "TRM1669",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1670",
            "comments": "TRM1670",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1671",
            "comments": "TRM1671",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1672",
            "comments": "TRM1672",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1673",
            "comments": "TRM1673",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1674",
            "comments": "TRM1674",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1675",
            "comments": "TRM1675",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1676",
            "comments": "TRM1676",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1677",
            "comments": "TRM1677",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1678",
            "comments": "TRM1678",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1679",
            "comments": "TRM1679",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1680",
            "comments": "TRM1680",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1681",
            "comments": "TRM1681",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1682",
            "comments": "TRM1682",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1683",
            "comments": "TRM1683",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1684",
            "comments": "TRM1684",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1685",
            "comments": "TRM1685",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1686",
            "comments": "TRM1686",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1687",
            "comments": "TRM1687",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1688",
            "comments": "TRM1688",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1689",
            "comments": "TRM1689",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1690",
            "comments": "TRM1690",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1691",
            "comments": "TRM1691",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1692",
            "comments": "TRM1692",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1693",
            "comments": "TRM1693",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1694",
            "comments": "TRM1694",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1695",
            "comments": "TRM1695",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1696",
            "comments": "TRM1696",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1697",
            "comments": "TRM1697",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1698",
            "comments": "TRM1698",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1699",
            "comments": "TRM1699",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1700",
            "comments": "TRM1700",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1701",
            "comments": "TRM1701",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1702",
            "comments": "TRM1702",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1703",
            "comments": "TRM1703",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1704",
            "comments": "TRM1704",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1705",
            "comments": "TRM1705",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1706",
            "comments": "TRM1706",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1707",
            "comments": "TRM1707",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1708",
            "comments": "TRM1708",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1709",
            "comments": "TRM1709",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1710",
            "comments": "TRM1710",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1711",
            "comments": "TRM1711",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1712",
            "comments": "TRM1712",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1713",
            "comments": "TRM1713",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1714",
            "comments": "TRM1714",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1715",
            "comments": "TRM1715",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1716",
            "comments": "TRM1716",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1717",
            "comments": "TRM1717",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1718",
            "comments": "TRM1718",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1719",
            "comments": "TRM1719",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1720",
            "comments": "TRM1720",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1721",
            "comments": "TRM1721",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1722",
            "comments": "TRM1722",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1723",
            "comments": "TRM1723",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1724",
            "comments": "TRM1724",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1725",
            "comments": "TRM1725",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1726",
            "comments": "TRM1726",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1727",
            "comments": "TRM1727",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1728",
            "comments": "TRM1728",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1729",
            "comments": "TRM1729",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1730",
            "comments": "TRM1730",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1731",
            "comments": "TRM1731",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1732",
            "comments": "TRM1732",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1733",
            "comments": "TRM1733",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1734",
            "comments": "TRM1734",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1735",
            "comments": "TRM1735",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1736",
            "comments": "TRM1736",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1737",
            "comments": "TRM1737",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1738",
            "comments": "TRM1738",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1739",
            "comments": "TRM1739",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1740",
            "comments": "TRM1740",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1741",
            "comments": "TRM1741",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1742",
            "comments": "TRM1742",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1743",
            "comments": "TRM1743",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1744",
            "comments": "TRM1744",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1745",
            "comments": "TRM1745",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1746",
            "comments": "TRM1746",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1747",
            "comments": "TRM1747",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1748",
            "comments": "TRM1748",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1749",
            "comments": "TRM1749",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1750",
            "comments": "TRM1750",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1751",
            "comments": "TRM1751",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1752",
            "comments": "TRM1752",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1753",
            "comments": "TRM1753",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1754",
            "comments": "TRM1754",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1755",
            "comments": "TRM1755",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1756",
            "comments": "TRM1756",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1757",
            "comments": "TRM1757",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1758",
            "comments": "TRM1758",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1759",
            "comments": "TRM1759",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1760",
            "comments": "TRM1760",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1761",
            "comments": "TRM1761",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1762",
            "comments": "TRM1762",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1763",
            "comments": "TRM1763",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1764",
            "comments": "TRM1764",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1765",
            "comments": "TRM1765",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1766",
            "comments": "TRM1766",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1767",
            "comments": "TRM1767",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1768",
            "comments": "TRM1768",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1769",
            "comments": "TRM1769",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1770",
            "comments": "TRM1770",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1771",
            "comments": "TRM1771",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1772",
            "comments": "TRM1772",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1773",
            "comments": "TRM1773",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1774",
            "comments": "TRM1774",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1775",
            "comments": "TRM1775",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1776",
            "comments": "TRM1776",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1777",
            "comments": "TRM1777",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1778",
            "comments": "TRM1778",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1779",
            "comments": "TRM1779",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1780",
            "comments": "TRM1780",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1781",
            "comments": "TRM1781",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1782",
            "comments": "TRM1782",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1783",
            "comments": "TRM1783",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1784",
            "comments": "TRM1784",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1785",
            "comments": "TRM1785",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1786",
            "comments": "TRM1786",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1787",
            "comments": "TRM1787",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1788",
            "comments": "TRM1788",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1789",
            "comments": "TRM1789",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1790",
            "comments": "TRM1790",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1791",
            "comments": "TRM1791",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1792",
            "comments": "TRM1792",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1793",
            "comments": "TRM1793",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1794",
            "comments": "TRM1794",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1795",
            "comments": "TRM1795",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1796",
            "comments": "TRM1796",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1797",
            "comments": "TRM1797",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1798",
            "comments": "TRM1798",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1799",
            "comments": "TRM1799",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1800",
            "comments": "TRM1800",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1801",
            "comments": "TRM1801",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1802",
            "comments": "TRM1802",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1803",
            "comments": "TRM1803",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1804",
            "comments": "TRM1804",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1805",
            "comments": "TRM1805",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1806",
            "comments": "TRM1806",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1807",
            "comments": "TRM1807",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1808",
            "comments": "TRM1808",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1809",
            "comments": "TRM1809",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1810",
            "comments": "TRM1810",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1811",
            "comments": "TRM1811",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1812",
            "comments": "TRM1812",
            "device_id": device.find(d => d.brand == 'memoria'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1813",
            "comments": "TRM1813",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1814",
            "comments": "TRM1814",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1815",
            "comments": "TRM1815",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1816",
            "comments": "TRM1816",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1817",
            "comments": "TRM1817",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1818",
            "comments": "TRM1818",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1819",
            "comments": "TRM1819",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1820",
            "comments": "TRM1820",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1821",
            "comments": "TRM1821",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1822",
            "comments": "TRM1822",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1823",
            "comments": "TRM1823",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1824",
            "comments": "TRM1824",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1825",
            "comments": "TRM1825",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1826",
            "comments": "TRM1826",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1827",
            "comments": "TRM1827",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1828",
            "comments": "TRM1828",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1829",
            "comments": "TRM1829",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1830",
            "comments": "TRM1830",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1831",
            "comments": "TRM1831",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1832",
            "comments": "TRM1832",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1833",
            "comments": "TRM1833",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1834",
            "comments": "TRM1834",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1835",
            "comments": "TRM1835",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1836",
            "comments": "TRM1836",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1837",
            "comments": "TRM1837",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1838",
            "comments": "TRM1838",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1839",
            "comments": "TRM1839",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1840",
            "comments": "TRM1840",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1841",
            "comments": "TRM1841",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1842",
            "comments": "TRM1842",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1843",
            "comments": "TRM1843",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1844",
            "comments": "TRM1844",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1845",
            "comments": "TRM1845",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1846",
            "comments": "TRM1846",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1847",
            "comments": "TRM1847",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1848",
            "comments": "TRM1848",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1849",
            "comments": "TRM1849",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1850",
            "comments": "TRM1850",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1851",
            "comments": "TRM1851",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1852",
            "comments": "TRM1852",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1853",
            "comments": "TRM1853",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1854",
            "comments": "TRM1854",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1855",
            "comments": "TRM1855",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1856",
            "comments": "TRM1856",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1857",
            "comments": "TRM1857",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1858",
            "comments": "TRM1858",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1859",
            "comments": "TRM1859",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1860",
            "comments": "TRM1860",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1861",
            "comments": "TRM1861",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1862",
            "comments": "TRM1862",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1863",
            "comments": "TRM1863",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1864",
            "comments": "TRM1864",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1865",
            "comments": "TRM1865",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1866",
            "comments": "TRM1866",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1867",
            "comments": "TRM1867",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1868",
            "comments": "TRM1868",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1869",
            "comments": "TRM1869",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1870",
            "comments": "TRM1870",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1871",
            "comments": "TRM1871",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1872",
            "comments": "TRM1872",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1873",
            "comments": "TRM1873",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1874",
            "comments": "TRM1874",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1875",
            "comments": "TRM1875",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1876",
            "comments": "TRM1876",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1877",
            "comments": "TRM1877",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1878",
            "comments": "TRM1878",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1879",
            "comments": "TRM1879",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1880",
            "comments": "TRM1880",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1881",
            "comments": "TRM1881",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1882",
            "comments": "TRM1882",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1883",
            "comments": "TRM1883",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1884",
            "comments": "TRM1884",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1885",
            "comments": "TRM1885",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1886",
            "comments": "TRM1886",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1887",
            "comments": "TRM1887",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1888",
            "comments": "TRM1888",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1889",
            "comments": "TRM1889",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1890",
            "comments": "TRM1890",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1891",
            "comments": "TRM1891",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1892",
            "comments": "TRM1892",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1893",
            "comments": "TRM1893",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1894",
            "comments": "TRM1894",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1895",
            "comments": "TRM1895",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1896",
            "comments": "TRM1896",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1897",
            "comments": "TRM1897",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1898",
            "comments": "TRM1898",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1899",
            "comments": "TRM1899",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1900",
            "comments": "TRM1900",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1901",
            "comments": "TRM1901",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1902",
            "comments": "TRM1902",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1903",
            "comments": "TRM1903",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1904",
            "comments": "TRM1904",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1905",
            "comments": "TRM1905",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1906",
            "comments": "TRM1906",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1907",
            "comments": "TRM1907",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1908",
            "comments": "TRM1908",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1909",
            "comments": "TRM1909",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1910",
            "comments": "TRM1910",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1911",
            "comments": "TRM1911",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1912",
            "comments": "TRM1912",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1913",
            "comments": "TRM1913",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1914",
            "comments": "TRM1914",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1915",
            "comments": "TRM1915",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1916",
            "comments": "TRM1916",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1917",
            "comments": "TRM1917",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1918",
            "comments": "TRM1918",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1919",
            "comments": "TRM1919",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1920",
            "comments": "TRM1920",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1921",
            "comments": "TRM1921",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1922",
            "comments": "TRM1922",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1923",
            "comments": "TRM1923",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1924",
            "comments": "TRM1924",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1925",
            "comments": "TRM1925",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1926",
            "comments": "TRM1926",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1927",
            "comments": "TRM1927",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1928",
            "comments": "TRM1928",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1929",
            "comments": "TRM1929",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1930",
            "comments": "TRM1930",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1931",
            "comments": "TRM1931",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1932",
            "comments": "TRM1932",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1933",
            "comments": "TRM1933",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1934",
            "comments": "TRM1934",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1935",
            "comments": "TRM1935",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1936",
            "comments": "TRM1936",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1937",
            "comments": "TRM1937",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1938",
            "comments": "TRM1938",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1939",
            "comments": "TRM1939",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1940",
            "comments": "TRM1940",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1941",
            "comments": "TRM1941",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1942",
            "comments": "TRM1942",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1943",
            "comments": "TRM1943",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1944",
            "comments": "TRM1944",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1945",
            "comments": "TRM1945",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1946",
            "comments": "TRM1946",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1947",
            "comments": "TRM1947",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1948",
            "comments": "TRM1948",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1949",
            "comments": "TRM1949",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1950",
            "comments": "TRM1950",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1951",
            "comments": "TRM1951",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1952",
            "comments": "TRM1952",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1953",
            "comments": "TRM1953",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1954",
            "comments": "TRM1954",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1955",
            "comments": "TRM1955",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1956",
            "comments": "TRM1956",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1957",
            "comments": "TRM1957",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1958",
            "comments": "TRM1958",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1959",
            "comments": "TRM1959",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1960",
            "comments": "TRM1960",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1961",
            "comments": "TRM1961",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1962",
            "comments": "TRM1962",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1963",
            "comments": "TRM1963",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1964",
            "comments": "TRM1964",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1965",
            "comments": "TRM1965",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1966",
            "comments": "TRM1966",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1967",
            "comments": "TRM1967",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1968",
            "comments": "TRM1968",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1969",
            "comments": "TRM1969",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1970",
            "comments": "TRM1970",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1971",
            "comments": "TRM1971",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1972",
            "comments": "TRM1972",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1973",
            "comments": "TRM1973",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1974",
            "comments": "TRM1974",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1975",
            "comments": "TRM1975",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1976",
            "comments": "TRM1976",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1977",
            "comments": "TRM1977",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1978",
            "comments": "TRM1978",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1979",
            "comments": "TRM1979",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1980",
            "comments": "TRM1980",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1981",
            "comments": "TRM1981",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1982",
            "comments": "TRM1982",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1983",
            "comments": "TRM1983",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1984",
            "comments": "TRM1984",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1985",
            "comments": "TRM1985",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1986",
            "comments": "TRM1986",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1987",
            "comments": "TRM1987",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1988",
            "comments": "TRM1988",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1989",
            "comments": "TRM1989",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1990",
            "comments": "TRM1990",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1991",
            "comments": "TRM1991",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1992",
            "comments": "TRM1992",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1993",
            "comments": "TRM1993",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1994",
            "comments": "TRM1994",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1995",
            "comments": "TRM1995",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1996",
            "comments": "TRM1996",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1997",
            "comments": "TRM1997",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1998",
            "comments": "TRM1998",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "1999",
            "comments": "TRM1999",
            "device_id": device.find(d => d.brand == 'memoria')
        },
        {
            "serial_number": "2000",
            "comments": "TRM2000",
            "device_id": device.find(d => d.brand == 'memoria')
        }
    ]).then(function(x) {
        return queryInterface.sequelize.query(
            'INSERT INTO db_was_seeded (seeded) VALUES (5)')
      })
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('physical_devices', null, {}).then(function() {
      return queryInterface.sequelize.query(
        'DELETE FROM db_was_seeded WHERE seeded = 5')
    })
  }
};
