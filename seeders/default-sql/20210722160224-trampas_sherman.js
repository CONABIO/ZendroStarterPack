'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seeds = await queryInterface.sequelize.query(
      'SELECT seeded FROM db_was_seeded')
    try {
      let seeded = seeds[0][7].seeded;
      console.log("Database was already seeded for tsherman")
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
            "serial_number": "1",
            "comments": "TRM0001",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "2",
            "comments": "TRM0002",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "3",
            "comments": "TRM0003",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "4",
            "comments": "TRM0004",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "5",
            "comments": "TRM0005",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "6",
            "comments": "TRM0006",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "7",
            "comments": "TRM0007",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "8",
            "comments": "TRM0008",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "9",
            "comments": "TRM0009",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "10",
            "comments": "TRM0010",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "11",
            "comments": "TRM0011",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "12",
            "comments": "TRM0012",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "13",
            "comments": "TRM0013",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "14",
            "comments": "TRM0014",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "15",
            "comments": "TRM0015",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "16",
            "comments": "TRM0016",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "17",
            "comments": "TRM0017",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "18",
            "comments": "TRM0018",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "19",
            "comments": "TRM0019",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "20",
            "comments": "TRM0020",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "21",
            "comments": "TRM0021",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "22",
            "comments": "TRM0022",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "23",
            "comments": "TRM0023",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "24",
            "comments": "TRM0024",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "25",
            "comments": "TRM0025",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "26",
            "comments": "TRM0026",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "27",
            "comments": "TRM0027",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "28",
            "comments": "TRM0028",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "29",
            "comments": "TRM0029",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "30",
            "comments": "TRM0030",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "31",
            "comments": "TRM0031",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "32",
            "comments": "TRM0032",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "33",
            "comments": "TRM0033",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "34",
            "comments": "TRM0034",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "35",
            "comments": "TRM0035",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "36",
            "comments": "TRM0036",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "37",
            "comments": "TRM0037",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "38",
            "comments": "TRM0038",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "39",
            "comments": "TRM0039",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "40",
            "comments": "TRM0040",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "41",
            "comments": "TRM0041",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "42",
            "comments": "TRM0042",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "43",
            "comments": "TRM0043",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "44",
            "comments": "TRM0044",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "45",
            "comments": "TRM0045",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "46",
            "comments": "TRM0046",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "47",
            "comments": "TRM0047",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "48",
            "comments": "TRM0048",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "49",
            "comments": "TRM0049",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "50",
            "comments": "TRM0050",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "51",
            "comments": "TRM0051",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "52",
            "comments": "TRM0052",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "53",
            "comments": "TRM0053",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "54",
            "comments": "TRM0054",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "55",
            "comments": "TRM0055",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "56",
            "comments": "TRM0056",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "57",
            "comments": "TRM0057",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "58",
            "comments": "TRM0058",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "59",
            "comments": "TRM0059",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "60",
            "comments": "TRM0060",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "61",
            "comments": "TRM0061",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "62",
            "comments": "TRM0062",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "63",
            "comments": "TRM0063",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "64",
            "comments": "TRM0064",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "65",
            "comments": "TRM0065",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "66",
            "comments": "TRM0066",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "67",
            "comments": "TRM0067",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "68",
            "comments": "TRM0068",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "69",
            "comments": "TRM0069",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "70",
            "comments": "TRM0070",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "71",
            "comments": "TRM0071",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "72",
            "comments": "TRM0072",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "73",
            "comments": "TRM0073",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "74",
            "comments": "TRM0074",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "75",
            "comments": "TRM0075",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "76",
            "comments": "TRM0076",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "77",
            "comments": "TRM0077",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "78",
            "comments": "TRM0078",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "79",
            "comments": "TRM0079",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "80",
            "comments": "TRM0080",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "81",
            "comments": "TRM0081",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "82",
            "comments": "TRM0082",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "83",
            "comments": "TRM0083",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "84",
            "comments": "TRM0084",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "85",
            "comments": "TRM0085",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "86",
            "comments": "TRM0086",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "87",
            "comments": "TRM0087",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "88",
            "comments": "TRM0088",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "89",
            "comments": "TRM0089",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "90",
            "comments": "TRM0090",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "91",
            "comments": "TRM0091",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "92",
            "comments": "TRM0092",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "93",
            "comments": "TRM0093",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "94",
            "comments": "TRM0094",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "95",
            "comments": "TRM0095",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "96",
            "comments": "TRM0096",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "97",
            "comments": "TRM0097",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "98",
            "comments": "TRM0098",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "99",
            "comments": "TRM0099",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "100",
            "comments": "TRM0100",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "101",
            "comments": "TRM0101",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "102",
            "comments": "TRM0102",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "103",
            "comments": "TRM0103",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "104",
            "comments": "TRM0104",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "105",
            "comments": "TRM0105",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "106",
            "comments": "TRM0106",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "107",
            "comments": "TRM0107",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "108",
            "comments": "TRM0108",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "109",
            "comments": "TRM0109",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "110",
            "comments": "TRM0110",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "111",
            "comments": "TRM0111",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "112",
            "comments": "TRM0112",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "113",
            "comments": "TRM0113",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "114",
            "comments": "TRM0114",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "115",
            "comments": "TRM0115",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "116",
            "comments": "TRM0116",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "117",
            "comments": "TRM0117",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "118",
            "comments": "TRM0118",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "119",
            "comments": "TRM0119",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "120",
            "comments": "TRM0120",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "121",
            "comments": "TRM0121",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "122",
            "comments": "TRM0122",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "123",
            "comments": "TRM0123",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "124",
            "comments": "TRM0124",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "125",
            "comments": "TRM0125",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "126",
            "comments": "TRM0126",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "127",
            "comments": "TRM0127",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "128",
            "comments": "TRM0128",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "129",
            "comments": "TRM0129",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "130",
            "comments": "TRM0130",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "131",
            "comments": "TRM0131",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "132",
            "comments": "TRM0132",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "133",
            "comments": "TRM0133",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "134",
            "comments": "TRM0134",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "135",
            "comments": "TRM0135",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "136",
            "comments": "TRM0136",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "137",
            "comments": "TRM0137",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "138",
            "comments": "TRM0138",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "139",
            "comments": "TRM0139",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "140",
            "comments": "TRM0140",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "141",
            "comments": "TRM0141",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "142",
            "comments": "TRM0142",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "143",
            "comments": "TRM0143",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "144",
            "comments": "TRM0144",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "145",
            "comments": "TRM0145",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "146",
            "comments": "TRM0146",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "147",
            "comments": "TRM0147",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "148",
            "comments": "TRM0148",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "149",
            "comments": "TRM0149",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "150",
            "comments": "TRM0150",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "151",
            "comments": "TRM0151",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "152",
            "comments": "TRM0152",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "153",
            "comments": "TRM0153",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "154",
            "comments": "TRM0154",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "155",
            "comments": "TRM0155",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "156",
            "comments": "TRM0156",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "157",
            "comments": "TRM0157",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "158",
            "comments": "TRM0158",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "159",
            "comments": "TRM0159",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "160",
            "comments": "TRM0160",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "161",
            "comments": "TRM0161",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "162",
            "comments": "TRM0162",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "163",
            "comments": "TRM0163",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "164",
            "comments": "TRM0164",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "165",
            "comments": "TRM0165",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "166",
            "comments": "TRM0166",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "167",
            "comments": "TRM0167",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "168",
            "comments": "TRM0168",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "169",
            "comments": "TRM0169",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "170",
            "comments": "TRM0170",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "171",
            "comments": "TRM0171",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "172",
            "comments": "TRM0172",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "173",
            "comments": "TRM0173",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "174",
            "comments": "TRM0174",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "175",
            "comments": "TRM0175",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "176",
            "comments": "TRM0176",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "177",
            "comments": "TRM0177",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "178",
            "comments": "TRM0178",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "179",
            "comments": "TRM0179",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "180",
            "comments": "TRM0180",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "181",
            "comments": "TRM0181",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "182",
            "comments": "TRM0182",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "183",
            "comments": "TRM0183",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "184",
            "comments": "TRM0184",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "185",
            "comments": "TRM0185",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "186",
            "comments": "TRM0186",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "187",
            "comments": "TRM0187",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "188",
            "comments": "TRM0188",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "189",
            "comments": "TRM0189",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "190",
            "comments": "TRM0190",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "191",
            "comments": "TRM0191",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "192",
            "comments": "TRM0192",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "193",
            "comments": "TRM0193",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "194",
            "comments": "TRM0194",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "195",
            "comments": "TRM0195",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "196",
            "comments": "TRM0196",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "197",
            "comments": "TRM0197",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "198",
            "comments": "TRM0198",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "199",
            "comments": "TRM0199",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "200",
            "comments": "TRM0200",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "201",
            "comments": "TRM0201",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "202",
            "comments": "TRM0202",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "203",
            "comments": "TRM0203",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "204",
            "comments": "TRM0204",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "205",
            "comments": "TRM0205",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "206",
            "comments": "TRM0206",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "207",
            "comments": "TRM0207",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "208",
            "comments": "TRM0208",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "209",
            "comments": "TRM0209",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "210",
            "comments": "TRM0210",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "211",
            "comments": "TRM0211",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "212",
            "comments": "TRM0212",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "213",
            "comments": "TRM0213",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "214",
            "comments": "TRM0214",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "215",
            "comments": "TRM0215",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "216",
            "comments": "TRM0216",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "217",
            "comments": "TRM0217",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "218",
            "comments": "TRM0218",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "219",
            "comments": "TRM0219",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "220",
            "comments": "TRM0220",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "221",
            "comments": "TRM0221",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "222",
            "comments": "TRM0222",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "223",
            "comments": "TRM0223",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "224",
            "comments": "TRM0224",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "225",
            "comments": "TRM0225",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "226",
            "comments": "TRM0226",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "227",
            "comments": "TRM0227",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "228",
            "comments": "TRM0228",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "229",
            "comments": "TRM0229",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "230",
            "comments": "TRM0230",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "231",
            "comments": "TRM0231",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "232",
            "comments": "TRM0232",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "233",
            "comments": "TRM0233",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "234",
            "comments": "TRM0234",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "235",
            "comments": "TRM0235",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "236",
            "comments": "TRM0236",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "237",
            "comments": "TRM0237",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "238",
            "comments": "TRM0238",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "239",
            "comments": "TRM0239",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "240",
            "comments": "TRM0240",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "241",
            "comments": "TRM0241",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "242",
            "comments": "TRM0242",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "243",
            "comments": "TRM0243",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "244",
            "comments": "TRM0244",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "245",
            "comments": "TRM0245",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "246",
            "comments": "TRM0246",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "247",
            "comments": "TRM0247",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "248",
            "comments": "TRM0248",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "249",
            "comments": "TRM0249",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "250",
            "comments": "TRM0250",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "251",
            "comments": "TRM0251",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "252",
            "comments": "TRM0252",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "253",
            "comments": "TRM0253",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "254",
            "comments": "TRM0254",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "255",
            "comments": "TRM0255",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "256",
            "comments": "TRM0256",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "257",
            "comments": "TRM0257",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "258",
            "comments": "TRM0258",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "259",
            "comments": "TRM0259",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "260",
            "comments": "TRM0260",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "261",
            "comments": "TRM0261",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "262",
            "comments": "TRM0262",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "263",
            "comments": "TRM0263",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "264",
            "comments": "TRM0264",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "265",
            "comments": "TRM0265",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "266",
            "comments": "TRM0266",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "267",
            "comments": "TRM0267",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "268",
            "comments": "TRM0268",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "269",
            "comments": "TRM0269",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "270",
            "comments": "TRM0270",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "271",
            "comments": "TRM0271",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "272",
            "comments": "TRM0272",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "273",
            "comments": "TRM0273",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "274",
            "comments": "TRM0274",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "275",
            "comments": "TRM0275",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "276",
            "comments": "TRM0276",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "277",
            "comments": "TRM0277",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "278",
            "comments": "TRM0278",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "279",
            "comments": "TRM0279",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "280",
            "comments": "TRM0280",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "281",
            "comments": "TRM0281",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "282",
            "comments": "TRM0282",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "283",
            "comments": "TRM0283",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "284",
            "comments": "TRM0284",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "285",
            "comments": "TRM0285",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "286",
            "comments": "TRM0286",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "287",
            "comments": "TRM0287",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "288",
            "comments": "TRM0288",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "289",
            "comments": "TRM0289",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "290",
            "comments": "TRM0290",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "291",
            "comments": "TRM0291",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "292",
            "comments": "TRM0292",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "293",
            "comments": "TRM0293",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "294",
            "comments": "TRM0294",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "295",
            "comments": "TRM0295",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "296",
            "comments": "TRM0296",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "297",
            "comments": "TRM0297",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "298",
            "comments": "TRM0298",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "299",
            "comments": "TRM0299",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "300",
            "comments": "TRM0300",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "301",
            "comments": "TRM0301",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "302",
            "comments": "TRM0302",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "303",
            "comments": "TRM0303",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "304",
            "comments": "TRM0304",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "305",
            "comments": "TRM0305",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "306",
            "comments": "TRM0306",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "307",
            "comments": "TRM0307",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "308",
            "comments": "TRM0308",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "309",
            "comments": "TRM0309",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "310",
            "comments": "TRM0310",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "311",
            "comments": "TRM0311",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "312",
            "comments": "TRM0312",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "313",
            "comments": "TRM0313",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "314",
            "comments": "TRM0314",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "315",
            "comments": "TRM0315",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "316",
            "comments": "TRM0316",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "317",
            "comments": "TRM0317",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "318",
            "comments": "TRM0318",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "319",
            "comments": "TRM0319",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "320",
            "comments": "TRM0320",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "321",
            "comments": "TRM0321",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "322",
            "comments": "TRM0322",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "323",
            "comments": "TRM0323",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "324",
            "comments": "TRM0324",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "325",
            "comments": "TRM0325",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "326",
            "comments": "TRM0326",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "327",
            "comments": "TRM0327",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "328",
            "comments": "TRM0328",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "329",
            "comments": "TRM0329",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "330",
            "comments": "TRM0330",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "331",
            "comments": "TRM0331",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "332",
            "comments": "TRM0332",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "333",
            "comments": "TRM0333",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "334",
            "comments": "TRM0334",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "335",
            "comments": "TRM0335",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "336",
            "comments": "TRM0336",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "337",
            "comments": "TRM0337",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "338",
            "comments": "TRM0338",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "339",
            "comments": "TRM0339",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "340",
            "comments": "TRM0340",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "341",
            "comments": "TRM0341",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "342",
            "comments": "TRM0342",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "343",
            "comments": "TRM0343",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "344",
            "comments": "TRM0344",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "345",
            "comments": "TRM0345",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "346",
            "comments": "TRM0346",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "347",
            "comments": "TRM0347",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "348",
            "comments": "TRM0348",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "349",
            "comments": "TRM0349",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "350",
            "comments": "TRM0350",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "351",
            "comments": "TRM0351",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "352",
            "comments": "TRM0352",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "353",
            "comments": "TRM0353",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "354",
            "comments": "TRM0354",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "355",
            "comments": "TRM0355",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "356",
            "comments": "TRM0356",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "357",
            "comments": "TRM0357",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "358",
            "comments": "TRM0358",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "359",
            "comments": "TRM0359",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "360",
            "comments": "TRM0360",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "361",
            "comments": "TRM0361",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "362",
            "comments": "TRM0362",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "363",
            "comments": "TRM0363",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "364",
            "comments": "TRM0364",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "365",
            "comments": "TRM0365",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "366",
            "comments": "TRM0366",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "367",
            "comments": "TRM0367",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "368",
            "comments": "TRM0368",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "369",
            "comments": "TRM0369",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "370",
            "comments": "TRM0370",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "371",
            "comments": "TRM0371",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "372",
            "comments": "TRM0372",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "373",
            "comments": "TRM0373",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "374",
            "comments": "TRM0374",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "375",
            "comments": "TRM0375",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "376",
            "comments": "TRM0376",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "377",
            "comments": "TRM0377",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "378",
            "comments": "TRM0378",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "379",
            "comments": "TRM0379",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "380",
            "comments": "TRM0380",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "381",
            "comments": "TRM0381",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "382",
            "comments": "TRM0382",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "383",
            "comments": "TRM0383",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "384",
            "comments": "TRM0384",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "385",
            "comments": "TRM0385",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "386",
            "comments": "TRM0386",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "387",
            "comments": "TRM0387",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "388",
            "comments": "TRM0388",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "389",
            "comments": "TRM0389",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "390",
            "comments": "TRM0390",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "391",
            "comments": "TRM0391",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "392",
            "comments": "TRM0392",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "393",
            "comments": "TRM0393",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "394",
            "comments": "TRM0394",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "395",
            "comments": "TRM0395",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "396",
            "comments": "TRM0396",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "397",
            "comments": "TRM0397",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "398",
            "comments": "TRM0398",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "399",
            "comments": "TRM0399",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "400",
            "comments": "TRM0400",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "401",
            "comments": "TRM0401",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "402",
            "comments": "TRM0402",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "403",
            "comments": "TRM0403",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "404",
            "comments": "TRM0404",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "405",
            "comments": "TRM0405",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "406",
            "comments": "TRM0406",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "407",
            "comments": "TRM0407",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "408",
            "comments": "TRM0408",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "409",
            "comments": "TRM0409",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "410",
            "comments": "TRM0410",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "411",
            "comments": "TRM0411",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "412",
            "comments": "TRM0412",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "413",
            "comments": "TRM0413",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "414",
            "comments": "TRM0414",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "415",
            "comments": "TRM0415",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "416",
            "comments": "TRM0416",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "417",
            "comments": "TRM0417",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "418",
            "comments": "TRM0418",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "419",
            "comments": "TRM0419",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "420",
            "comments": "TRM0420",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "421",
            "comments": "TRM0421",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "422",
            "comments": "TRM0422",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "423",
            "comments": "TRM0423",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "424",
            "comments": "TRM0424",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "425",
            "comments": "TRM0425",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "426",
            "comments": "TRM0426",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "427",
            "comments": "TRM0427",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "428",
            "comments": "TRM0428",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "429",
            "comments": "TRM0429",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "430",
            "comments": "TRM0430",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "431",
            "comments": "TRM0431",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "432",
            "comments": "TRM0432",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "433",
            "comments": "TRM0433",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "434",
            "comments": "TRM0434",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "435",
            "comments": "TRM0435",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "436",
            "comments": "TRM0436",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "437",
            "comments": "TRM0437",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "438",
            "comments": "TRM0438",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "439",
            "comments": "TRM0439",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "440",
            "comments": "TRM0440",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "441",
            "comments": "TRM0441",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "442",
            "comments": "TRM0442",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "443",
            "comments": "TRM0443",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "444",
            "comments": "TRM0444",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "445",
            "comments": "TRM0445",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "446",
            "comments": "TRM0446",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "447",
            "comments": "TRM0447",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "448",
            "comments": "TRM0448",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "449",
            "comments": "TRM0449",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "450",
            "comments": "TRM0450",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "451",
            "comments": "TRM0451",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "452",
            "comments": "TRM0452",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "453",
            "comments": "TRM0453",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "454",
            "comments": "TRM0454",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "455",
            "comments": "TRM0455",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "456",
            "comments": "TRM0456",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "457",
            "comments": "TRM0457",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "458",
            "comments": "TRM0458",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "459",
            "comments": "TRM0459",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "460",
            "comments": "TRM0460",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "461",
            "comments": "TRM0461",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "462",
            "comments": "TRM0462",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "463",
            "comments": "TRM0463",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "464",
            "comments": "TRM0464",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "465",
            "comments": "TRM0465",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "466",
            "comments": "TRM0466",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "467",
            "comments": "TRM0467",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "468",
            "comments": "TRM0468",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "469",
            "comments": "TRM0469",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "470",
            "comments": "TRM0470",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "471",
            "comments": "TRM0471",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "472",
            "comments": "TRM0472",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "473",
            "comments": "TRM0473",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "474",
            "comments": "TRM0474",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "475",
            "comments": "TRM0475",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "476",
            "comments": "TRM0476",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "477",
            "comments": "TRM0477",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "478",
            "comments": "TRM0478",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "479",
            "comments": "TRM0479",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "480",
            "comments": "TRM0480",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "481",
            "comments": "TRM0481",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "482",
            "comments": "TRM0482",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "483",
            "comments": "TRM0483",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "484",
            "comments": "TRM0484",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "485",
            "comments": "TRM0485",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "486",
            "comments": "TRM0486",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "487",
            "comments": "TRM0487",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "488",
            "comments": "TRM0488",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "489",
            "comments": "TRM0489",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "490",
            "comments": "TRM0490",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "491",
            "comments": "TRM0491",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "492",
            "comments": "TRM0492",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "493",
            "comments": "TRM0493",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "494",
            "comments": "TRM0494",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "495",
            "comments": "TRM0495",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "496",
            "comments": "TRM0496",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "497",
            "comments": "TRM0497",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "498",
            "comments": "TRM0498",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "499",
            "comments": "TRM0499",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "500",
            "comments": "TRM0500",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "501",
            "comments": "TRM0501",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "502",
            "comments": "TRM0502",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "503",
            "comments": "TRM0503",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "504",
            "comments": "TRM0504",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "505",
            "comments": "TRM0505",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "506",
            "comments": "TRM0506",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "507",
            "comments": "TRM0507",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "508",
            "comments": "TRM0508",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "509",
            "comments": "TRM0509",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "510",
            "comments": "TRM0510",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "511",
            "comments": "TRM0511",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "512",
            "comments": "TRM0512",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "513",
            "comments": "TRM0513",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "514",
            "comments": "TRM0514",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "515",
            "comments": "TRM0515",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "516",
            "comments": "TRM0516",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "517",
            "comments": "TRM0517",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "518",
            "comments": "TRM0518",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "519",
            "comments": "TRM0519",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "520",
            "comments": "TRM0520",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "521",
            "comments": "TRM0521",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "522",
            "comments": "TRM0522",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "523",
            "comments": "TRM0523",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "524",
            "comments": "TRM0524",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "525",
            "comments": "TRM0525",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "526",
            "comments": "TRM0526",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "527",
            "comments": "TRM0527",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "528",
            "comments": "TRM0528",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "529",
            "comments": "TRM0529",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "530",
            "comments": "TRM0530",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "531",
            "comments": "TRM0531",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "532",
            "comments": "TRM0532",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "533",
            "comments": "TRM0533",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "534",
            "comments": "TRM0534",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "535",
            "comments": "TRM0535",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "536",
            "comments": "TRM0536",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "537",
            "comments": "TRM0537",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "538",
            "comments": "TRM0538",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "539",
            "comments": "TRM0539",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "540",
            "comments": "TRM0540",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "541",
            "comments": "TRM0541",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "542",
            "comments": "TRM0542",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "543",
            "comments": "TRM0543",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "544",
            "comments": "TRM0544",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "545",
            "comments": "TRM0545",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "546",
            "comments": "TRM0546",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "547",
            "comments": "TRM0547",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "548",
            "comments": "TRM0548",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "549",
            "comments": "TRM0549",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "550",
            "comments": "TRM0550",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "551",
            "comments": "TRM0551",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "552",
            "comments": "TRM0552",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "553",
            "comments": "TRM0553",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "554",
            "comments": "TRM0554",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "555",
            "comments": "TRM0555",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "556",
            "comments": "TRM0556",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "557",
            "comments": "TRM0557",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "558",
            "comments": "TRM0558",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "559",
            "comments": "TRM0559",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "560",
            "comments": "TRM0560",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "561",
            "comments": "TRM0561",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "562",
            "comments": "TRM0562",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "563",
            "comments": "TRM0563",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "564",
            "comments": "TRM0564",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "565",
            "comments": "TRM0565",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "566",
            "comments": "TRM0566",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "567",
            "comments": "TRM0567",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "568",
            "comments": "TRM0568",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "569",
            "comments": "TRM0569",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "570",
            "comments": "TRM0570",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "571",
            "comments": "TRM0571",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "572",
            "comments": "TRM0572",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "573",
            "comments": "TRM0573",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "574",
            "comments": "TRM0574",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "575",
            "comments": "TRM0575",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "576",
            "comments": "TRM0576",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "577",
            "comments": "TRM0577",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "578",
            "comments": "TRM0578",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "579",
            "comments": "TRM0579",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "580",
            "comments": "TRM0580",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "581",
            "comments": "TRM0581",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "582",
            "comments": "TRM0582",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "583",
            "comments": "TRM0583",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "584",
            "comments": "TRM0584",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "585",
            "comments": "TRM0585",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "586",
            "comments": "TRM0586",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "587",
            "comments": "TRM0587",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "588",
            "comments": "TRM0588",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "589",
            "comments": "TRM0589",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "590",
            "comments": "TRM0590",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "591",
            "comments": "TRM0591",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "592",
            "comments": "TRM0592",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "593",
            "comments": "TRM0593",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "594",
            "comments": "TRM0594",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "595",
            "comments": "TRM0595",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "596",
            "comments": "TRM0596",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "597",
            "comments": "TRM0597",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "598",
            "comments": "TRM0598",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "599",
            "comments": "TRM0599",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "600",
            "comments": "TRM0600",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "601",
            "comments": "TRM0601",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "602",
            "comments": "TRM0602",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "603",
            "comments": "TRM0603",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "604",
            "comments": "TRM0604",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "605",
            "comments": "TRM0605",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "606",
            "comments": "TRM0606",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "607",
            "comments": "TRM0607",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "608",
            "comments": "TRM0608",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "609",
            "comments": "TRM0609",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "610",
            "comments": "TRM0610",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "611",
            "comments": "TRM0611",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "612",
            "comments": "TRM0612",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "613",
            "comments": "TRM0613",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "614",
            "comments": "TRM0614",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "615",
            "comments": "TRM0615",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "616",
            "comments": "TRM0616",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "617",
            "comments": "TRM0617",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "618",
            "comments": "TRM0618",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "619",
            "comments": "TRM0619",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "620",
            "comments": "TRM0620",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "621",
            "comments": "TRM0621",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "622",
            "comments": "TRM0622",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "623",
            "comments": "TRM0623",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "624",
            "comments": "TRM0624",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "625",
            "comments": "TRM0625",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "626",
            "comments": "TRM0626",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "627",
            "comments": "TRM0627",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "628",
            "comments": "TRM0628",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "629",
            "comments": "TRM0629",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "630",
            "comments": "TRM0630",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "631",
            "comments": "TRM0631",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "632",
            "comments": "TRM0632",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "633",
            "comments": "TRM0633",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "634",
            "comments": "TRM0634",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "635",
            "comments": "TRM0635",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "636",
            "comments": "TRM0636",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "637",
            "comments": "TRM0637",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "638",
            "comments": "TRM0638",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "639",
            "comments": "TRM0639",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "640",
            "comments": "TRM0640",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "641",
            "comments": "TRM0641",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "642",
            "comments": "TRM0642",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "643",
            "comments": "TRM0643",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "644",
            "comments": "TRM0644",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "645",
            "comments": "TRM0645",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "646",
            "comments": "TRM0646",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "647",
            "comments": "TRM0647",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "648",
            "comments": "TRM0648",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "649",
            "comments": "TRM0649",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "650",
            "comments": "TRM0650",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "651",
            "comments": "TRM0651",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "652",
            "comments": "TRM0652",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "653",
            "comments": "TRM0653",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "654",
            "comments": "TRM0654",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "655",
            "comments": "TRM0655",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "656",
            "comments": "TRM0656",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "657",
            "comments": "TRM0657",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "658",
            "comments": "TRM0658",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "659",
            "comments": "TRM0659",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "660",
            "comments": "TRM0660",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "661",
            "comments": "TRM0661",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "662",
            "comments": "TRM0662",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "663",
            "comments": "TRM0663",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "664",
            "comments": "TRM0664",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "665",
            "comments": "TRM0665",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "666",
            "comments": "TRM0666",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "667",
            "comments": "TRM0667",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "668",
            "comments": "TRM0668",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "669",
            "comments": "TRM0669",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "670",
            "comments": "TRM0670",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "671",
            "comments": "TRM0671",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "672",
            "comments": "TRM0672",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "673",
            "comments": "TRM0673",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "674",
            "comments": "TRM0674",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "675",
            "comments": "TRM0675",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "676",
            "comments": "TRM0676",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "677",
            "comments": "TRM0677",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "678",
            "comments": "TRM0678",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "679",
            "comments": "TRM0679",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "680",
            "comments": "TRM0680",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "681",
            "comments": "TRM0681",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "682",
            "comments": "TRM0682",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "683",
            "comments": "TRM0683",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "684",
            "comments": "TRM0684",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "685",
            "comments": "TRM0685",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "686",
            "comments": "TRM0686",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "687",
            "comments": "TRM0687",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "688",
            "comments": "TRM0688",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "689",
            "comments": "TRM0689",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "690",
            "comments": "TRM0690",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "691",
            "comments": "TRM0691",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "692",
            "comments": "TRM0692",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "693",
            "comments": "TRM0693",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "694",
            "comments": "TRM0694",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "695",
            "comments": "TRM0695",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "696",
            "comments": "TRM0696",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "697",
            "comments": "TRM0697",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "698",
            "comments": "TRM0698",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "699",
            "comments": "TRM0699",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "700",
            "comments": "TRM0700",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "701",
            "comments": "TRM0701",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "702",
            "comments": "TRM0702",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "703",
            "comments": "TRM0703",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "704",
            "comments": "TRM0704",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "705",
            "comments": "TRM0705",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "706",
            "comments": "TRM0706",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "707",
            "comments": "TRM0707",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "708",
            "comments": "TRM0708",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "709",
            "comments": "TRM0709",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "710",
            "comments": "TRM0710",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "711",
            "comments": "TRM0711",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "712",
            "comments": "TRM0712",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "713",
            "comments": "TRM0713",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "714",
            "comments": "TRM0714",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "715",
            "comments": "TRM0715",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "716",
            "comments": "TRM0716",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "717",
            "comments": "TRM0717",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "718",
            "comments": "TRM0718",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "719",
            "comments": "TRM0719",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "720",
            "comments": "TRM0720",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "721",
            "comments": "TRM0721",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "722",
            "comments": "TRM0722",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "723",
            "comments": "TRM0723",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "724",
            "comments": "TRM0724",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "725",
            "comments": "TRM0725",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "726",
            "comments": "TRM0726",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "727",
            "comments": "TRM0727",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "728",
            "comments": "TRM0728",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "729",
            "comments": "TRM0729",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "730",
            "comments": "TRM0730",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "731",
            "comments": "TRM0731",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "732",
            "comments": "TRM0732",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "733",
            "comments": "TRM0733",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "734",
            "comments": "TRM0734",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "735",
            "comments": "TRM0735",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "736",
            "comments": "TRM0736",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "737",
            "comments": "TRM0737",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "738",
            "comments": "TRM0738",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "739",
            "comments": "TRM0739",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "740",
            "comments": "TRM0740",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "741",
            "comments": "TRM0741",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "742",
            "comments": "TRM0742",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "743",
            "comments": "TRM0743",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "744",
            "comments": "TRM0744",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "745",
            "comments": "TRM0745",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "746",
            "comments": "TRM0746",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "747",
            "comments": "TRM0747",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "748",
            "comments": "TRM0748",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "749",
            "comments": "TRM0749",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "750",
            "comments": "TRM0750",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "751",
            "comments": "TRM0751",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "752",
            "comments": "TRM0752",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "753",
            "comments": "TRM0753",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "754",
            "comments": "TRM0754",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "755",
            "comments": "TRM0755",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "756",
            "comments": "TRM0756",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "757",
            "comments": "TRM0757",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "758",
            "comments": "TRM0758",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "759",
            "comments": "TRM0759",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "760",
            "comments": "TRM0760",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "761",
            "comments": "TRM0761",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "762",
            "comments": "TRM0762",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "763",
            "comments": "TRM0763",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "764",
            "comments": "TRM0764",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "765",
            "comments": "TRM0765",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "766",
            "comments": "TRM0766",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "767",
            "comments": "TRM0767",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "768",
            "comments": "TRM0768",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "769",
            "comments": "TRM0769",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "770",
            "comments": "TRM0770",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "771",
            "comments": "TRM0771",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "772",
            "comments": "TRM0772",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "773",
            "comments": "TRM0773",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "774",
            "comments": "TRM0774",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "775",
            "comments": "TRM0775",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "776",
            "comments": "TRM0776",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "777",
            "comments": "TRM0777",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "778",
            "comments": "TRM0778",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "779",
            "comments": "TRM0779",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "780",
            "comments": "TRM0780",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "781",
            "comments": "TRM0781",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "782",
            "comments": "TRM0782",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "783",
            "comments": "TRM0783",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "784",
            "comments": "TRM0784",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "785",
            "comments": "TRM0785",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "786",
            "comments": "TRM0786",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "787",
            "comments": "TRM0787",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "788",
            "comments": "TRM0788",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "789",
            "comments": "TRM0789",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "790",
            "comments": "TRM0790",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "791",
            "comments": "TRM0791",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "792",
            "comments": "TRM0792",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "793",
            "comments": "TRM0793",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "794",
            "comments": "TRM0794",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "795",
            "comments": "TRM0795",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "796",
            "comments": "TRM0796",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "797",
            "comments": "TRM0797",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "798",
            "comments": "TRM0798",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "799",
            "comments": "TRM0799",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "800",
            "comments": "TRM0800",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "801",
            "comments": "TRM0801",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "802",
            "comments": "TRM0802",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "803",
            "comments": "TRM0803",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "804",
            "comments": "TRM0804",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "805",
            "comments": "TRM0805",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "806",
            "comments": "TRM0806",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "807",
            "comments": "TRM0807",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "808",
            "comments": "TRM0808",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "809",
            "comments": "TRM0809",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "810",
            "comments": "TRM0810",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "811",
            "comments": "TRM0811",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "812",
            "comments": "TRM0812",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "813",
            "comments": "TRM0813",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "814",
            "comments": "TRM0814",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "815",
            "comments": "TRM0815",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "816",
            "comments": "TRM0816",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "817",
            "comments": "TRM0817",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "818",
            "comments": "TRM0818",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "819",
            "comments": "TRM0819",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "820",
            "comments": "TRM0820",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "821",
            "comments": "TRM0821",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "822",
            "comments": "TRM0822",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "823",
            "comments": "TRM0823",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "824",
            "comments": "TRM0824",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "825",
            "comments": "TRM0825",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "826",
            "comments": "TRM0826",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "827",
            "comments": "TRM0827",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "828",
            "comments": "TRM0828",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "829",
            "comments": "TRM0829",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "830",
            "comments": "TRM0830",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "831",
            "comments": "TRM0831",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "832",
            "comments": "TRM0832",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "833",
            "comments": "TRM0833",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "834",
            "comments": "TRM0834",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "835",
            "comments": "TRM0835",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "836",
            "comments": "TRM0836",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "837",
            "comments": "TRM0837",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "838",
            "comments": "TRM0838",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "839",
            "comments": "TRM0839",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "840",
            "comments": "TRM0840",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "841",
            "comments": "TRM0841",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "842",
            "comments": "TRM0842",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "843",
            "comments": "TRM0843",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "844",
            "comments": "TRM0844",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "845",
            "comments": "TRM0845",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "846",
            "comments": "TRM0846",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "847",
            "comments": "TRM0847",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "848",
            "comments": "TRM0848",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "849",
            "comments": "TRM0849",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "850",
            "comments": "TRM0850",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "851",
            "comments": "TRM0851",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "852",
            "comments": "TRM0852",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "853",
            "comments": "TRM0853",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "854",
            "comments": "TRM0854",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "855",
            "comments": "TRM0855",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "856",
            "comments": "TRM0856",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "857",
            "comments": "TRM0857",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "858",
            "comments": "TRM0858",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "859",
            "comments": "TRM0859",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "860",
            "comments": "TRM0860",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "861",
            "comments": "TRM0861",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "862",
            "comments": "TRM0862",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "863",
            "comments": "TRM0863",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "864",
            "comments": "TRM0864",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "865",
            "comments": "TRM0865",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "866",
            "comments": "TRM0866",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "867",
            "comments": "TRM0867",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "868",
            "comments": "TRM0868",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "869",
            "comments": "TRM0869",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "870",
            "comments": "TRM0870",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "871",
            "comments": "TRM0871",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "872",
            "comments": "TRM0872",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "873",
            "comments": "TRM0873",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "874",
            "comments": "TRM0874",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "875",
            "comments": "TRM0875",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "876",
            "comments": "TRM0876",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "877",
            "comments": "TRM0877",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "878",
            "comments": "TRM0878",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "879",
            "comments": "TRM0879",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "880",
            "comments": "TRM0880",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "881",
            "comments": "TRM0881",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "882",
            "comments": "TRM0882",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "883",
            "comments": "TRM0883",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "884",
            "comments": "TRM0884",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "885",
            "comments": "TRM0885",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "886",
            "comments": "TRM0886",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "887",
            "comments": "TRM0887",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "888",
            "comments": "TRM0888",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "889",
            "comments": "TRM0889",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "890",
            "comments": "TRM0890",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "891",
            "comments": "TRM0891",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "892",
            "comments": "TRM0892",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "893",
            "comments": "TRM0893",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "894",
            "comments": "TRM0894",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "895",
            "comments": "TRM0895",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "896",
            "comments": "TRM0896",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "897",
            "comments": "TRM0897",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "898",
            "comments": "TRM0898",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "899",
            "comments": "TRM0899",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "900",
            "comments": "TRM0900",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "901",
            "comments": "TRM0901",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "902",
            "comments": "TRM0902",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "903",
            "comments": "TRM0903",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "904",
            "comments": "TRM0904",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "905",
            "comments": "TRM0905",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "906",
            "comments": "TRM0906",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "907",
            "comments": "TRM0907",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "908",
            "comments": "TRM0908",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "909",
            "comments": "TRM0909",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "910",
            "comments": "TRM0910",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "911",
            "comments": "TRM0911",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "912",
            "comments": "TRM0912",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "913",
            "comments": "TRM0913",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "914",
            "comments": "TRM0914",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "915",
            "comments": "TRM0915",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "916",
            "comments": "TRM0916",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "917",
            "comments": "TRM0917",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "918",
            "comments": "TRM0918",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "919",
            "comments": "TRM0919",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "920",
            "comments": "TRM0920",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "921",
            "comments": "TRM0921",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "922",
            "comments": "TRM0922",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "923",
            "comments": "TRM0923",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "924",
            "comments": "TRM0924",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "925",
            "comments": "TRM0925",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "926",
            "comments": "TRM0926",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "927",
            "comments": "TRM0927",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "928",
            "comments": "TRM0928",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "929",
            "comments": "TRM0929",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "930",
            "comments": "TRM0930",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "931",
            "comments": "TRM0931",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "932",
            "comments": "TRM0932",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "933",
            "comments": "TRM0933",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "934",
            "comments": "TRM0934",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "935",
            "comments": "TRM0935",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "936",
            "comments": "TRM0936",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "937",
            "comments": "TRM0937",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "938",
            "comments": "TRM0938",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "939",
            "comments": "TRM0939",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "940",
            "comments": "TRM0940",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "941",
            "comments": "TRM0941",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "942",
            "comments": "TRM0942",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "943",
            "comments": "TRM0943",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "944",
            "comments": "TRM0944",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "945",
            "comments": "TRM0945",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "946",
            "comments": "TRM0946",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "947",
            "comments": "TRM0947",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "948",
            "comments": "TRM0948",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "949",
            "comments": "TRM0949",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "950",
            "comments": "TRM0950",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "951",
            "comments": "TRM0951",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "952",
            "comments": "TRM0952",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "953",
            "comments": "TRM0953",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "954",
            "comments": "TRM0954",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "955",
            "comments": "TRM0955",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "956",
            "comments": "TRM0956",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "957",
            "comments": "TRM0957",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "958",
            "comments": "TRM0958",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "959",
            "comments": "TRM0959",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "960",
            "comments": "TRM0960",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "961",
            "comments": "TRM0961",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "962",
            "comments": "TRM0962",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "963",
            "comments": "TRM0963",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "964",
            "comments": "TRM0964",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "965",
            "comments": "TRM0965",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "966",
            "comments": "TRM0966",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "967",
            "comments": "TRM0967",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "968",
            "comments": "TRM0968",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "969",
            "comments": "TRM0969",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "970",
            "comments": "TRM0970",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "971",
            "comments": "TRM0971",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "972",
            "comments": "TRM0972",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "973",
            "comments": "TRM0973",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "974",
            "comments": "TRM0974",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "975",
            "comments": "TRM0975",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "976",
            "comments": "TRM0976",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "977",
            "comments": "TRM0977",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "978",
            "comments": "TRM0978",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "979",
            "comments": "TRM0979",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "980",
            "comments": "TRM0980",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "981",
            "comments": "TRM0981",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "982",
            "comments": "TRM0982",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "983",
            "comments": "TRM0983",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "984",
            "comments": "TRM0984",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "985",
            "comments": "TRM0985",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "986",
            "comments": "TRM0986",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "987",
            "comments": "TRM0987",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "988",
            "comments": "TRM0988",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "989",
            "comments": "TRM0989",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "990",
            "comments": "TRM0990",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "991",
            "comments": "TRM0991",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "992",
            "comments": "TRM0992",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "993",
            "comments": "TRM0993",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "994",
            "comments": "TRM0994",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "995",
            "comments": "TRM0995",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "996",
            "comments": "TRM0996",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "997",
            "comments": "TRM0997",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "998",
            "comments": "TRM0998",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "999",
            "comments": "TRM0999",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1000",
            "comments": "TRM1000",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1001",
            "comments": "TRM1001",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1002",
            "comments": "TRM1002",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1003",
            "comments": "TRM1003",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1004",
            "comments": "TRM1004",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1005",
            "comments": "TRM1005",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1006",
            "comments": "TRM1006",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1007",
            "comments": "TRM1007",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1008",
            "comments": "TRM1008",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1009",
            "comments": "TRM1009",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1010",
            "comments": "TRM1010",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1011",
            "comments": "TRM1011",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1012",
            "comments": "TRM1012",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1013",
            "comments": "TRM1013",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "1014",
            "comments": "TRM1014",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1015",
            "comments": "TRM1015",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1016",
            "comments": "TRM1016",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1017",
            "comments": "TRM1017",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1018",
            "comments": "TRM1018",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1019",
            "comments": "TRM1019",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1020",
            "comments": "TRM1020",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1021",
            "comments": "TRM1021",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1022",
            "comments": "TRM1022",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1023",
            "comments": "TRM1023",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1024",
            "comments": "TRM1024",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1025",
            "comments": "TRM1025",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1026",
            "comments": "TRM1026",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1027",
            "comments": "TRM1027",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1028",
            "comments": "TRM1028",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1029",
            "comments": "TRM1029",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1030",
            "comments": "TRM1030",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1031",
            "comments": "TRM1031",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1032",
            "comments": "TRM1032",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1033",
            "comments": "TRM1033",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1034",
            "comments": "TRM1034",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1035",
            "comments": "TRM1035",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1036",
            "comments": "TRM1036",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1037",
            "comments": "TRM1037",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1038",
            "comments": "TRM1038",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1039",
            "comments": "TRM1039",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1040",
            "comments": "TRM1040",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1041",
            "comments": "TRM1041",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1042",
            "comments": "TRM1042",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1043",
            "comments": "TRM1043",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1044",
            "comments": "TRM1044",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1045",
            "comments": "TRM1045",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1046",
            "comments": "TRM1046",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1047",
            "comments": "TRM1047",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1048",
            "comments": "TRM1048",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1049",
            "comments": "TRM1049",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1050",
            "comments": "TRM1050",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1051",
            "comments": "TRM1051",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1052",
            "comments": "TRM1052",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1053",
            "comments": "TRM1053",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1054",
            "comments": "TRM1054",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1055",
            "comments": "TRM1055",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1056",
            "comments": "TRM1056",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1057",
            "comments": "TRM1057",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1058",
            "comments": "TRM1058",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1059",
            "comments": "TRM1059",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1060",
            "comments": "TRM1060",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1061",
            "comments": "TRM1061",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1062",
            "comments": "TRM1062",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1063",
            "comments": "TRM1063",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1064",
            "comments": "TRM1064",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1065",
            "comments": "TRM1065",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1066",
            "comments": "TRM1066",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1067",
            "comments": "TRM1067",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1068",
            "comments": "TRM1068",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1069",
            "comments": "TRM1069",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1070",
            "comments": "TRM1070",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1071",
            "comments": "TRM1071",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1072",
            "comments": "TRM1072",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1073",
            "comments": "TRM1073",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1074",
            "comments": "TRM1074",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1075",
            "comments": "TRM1075",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1076",
            "comments": "TRM1076",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1077",
            "comments": "TRM1077",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1078",
            "comments": "TRM1078",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1079",
            "comments": "TRM1079",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1080",
            "comments": "TRM1080",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1081",
            "comments": "TRM1081",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1082",
            "comments": "TRM1082",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1083",
            "comments": "TRM1083",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1084",
            "comments": "TRM1084",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1085",
            "comments": "TRM1085",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1086",
            "comments": "TRM1086",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1087",
            "comments": "TRM1087",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1088",
            "comments": "TRM1088",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1089",
            "comments": "TRM1089",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1090",
            "comments": "TRM1090",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1091",
            "comments": "TRM1091",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1092",
            "comments": "TRM1092",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1093",
            "comments": "TRM1093",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1094",
            "comments": "TRM1094",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1095",
            "comments": "TRM1095",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1096",
            "comments": "TRM1096",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1097",
            "comments": "TRM1097",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1098",
            "comments": "TRM1098",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1099",
            "comments": "TRM1099",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1100",
            "comments": "TRM1100",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1101",
            "comments": "TRM1101",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1102",
            "comments": "TRM1102",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1103",
            "comments": "TRM1103",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1104",
            "comments": "TRM1104",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1105",
            "comments": "TRM1105",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1106",
            "comments": "TRM1106",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1107",
            "comments": "TRM1107",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1108",
            "comments": "TRM1108",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1109",
            "comments": "TRM1109",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1110",
            "comments": "TRM1110",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1111",
            "comments": "TRM1111",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1112",
            "comments": "TRM1112",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "1113",
            "comments": "TRM1113",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1114",
            "comments": "TRM1114",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1115",
            "comments": "TRM1115",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1116",
            "comments": "TRM1116",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1117",
            "comments": "TRM1117",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1118",
            "comments": "TRM1118",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1119",
            "comments": "TRM1119",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1120",
            "comments": "TRM1120",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1121",
            "comments": "TRM1121",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1122",
            "comments": "TRM1122",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1123",
            "comments": "TRM1123",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1124",
            "comments": "TRM1124",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1125",
            "comments": "TRM1125",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1126",
            "comments": "TRM1126",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1127",
            "comments": "TRM1127",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1128",
            "comments": "TRM1128",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1129",
            "comments": "TRM1129",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1130",
            "comments": "TRM1130",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1131",
            "comments": "TRM1131",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1132",
            "comments": "TRM1132",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1133",
            "comments": "TRM1133",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1134",
            "comments": "TRM1134",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1135",
            "comments": "TRM1135",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1136",
            "comments": "TRM1136",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1137",
            "comments": "TRM1137",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1138",
            "comments": "TRM1138",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1139",
            "comments": "TRM1139",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1140",
            "comments": "TRM1140",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1141",
            "comments": "TRM1141",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1142",
            "comments": "TRM1142",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1143",
            "comments": "TRM1143",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1144",
            "comments": "TRM1144",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1145",
            "comments": "TRM1145",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1146",
            "comments": "TRM1146",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1147",
            "comments": "TRM1147",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1148",
            "comments": "TRM1148",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1149",
            "comments": "TRM1149",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1150",
            "comments": "TRM1150",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1151",
            "comments": "TRM1151",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1152",
            "comments": "TRM1152",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1153",
            "comments": "TRM1153",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1154",
            "comments": "TRM1154",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1155",
            "comments": "TRM1155",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1156",
            "comments": "TRM1156",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1157",
            "comments": "TRM1157",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1158",
            "comments": "TRM1158",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1159",
            "comments": "TRM1159",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1160",
            "comments": "TRM1160",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1161",
            "comments": "TRM1161",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1162",
            "comments": "TRM1162",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1163",
            "comments": "TRM1163",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1164",
            "comments": "TRM1164",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1165",
            "comments": "TRM1165",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1166",
            "comments": "TRM1166",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1167",
            "comments": "TRM1167",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1168",
            "comments": "TRM1168",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1169",
            "comments": "TRM1169",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1170",
            "comments": "TRM1170",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1171",
            "comments": "TRM1171",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1172",
            "comments": "TRM1172",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1173",
            "comments": "TRM1173",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1174",
            "comments": "TRM1174",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1175",
            "comments": "TRM1175",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1176",
            "comments": "TRM1176",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1177",
            "comments": "TRM1177",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1178",
            "comments": "TRM1178",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1179",
            "comments": "TRM1179",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1180",
            "comments": "TRM1180",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1181",
            "comments": "TRM1181",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1182",
            "comments": "TRM1182",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1183",
            "comments": "TRM1183",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1184",
            "comments": "TRM1184",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1185",
            "comments": "TRM1185",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1186",
            "comments": "TRM1186",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1187",
            "comments": "TRM1187",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1188",
            "comments": "TRM1188",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1189",
            "comments": "TRM1189",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1190",
            "comments": "TRM1190",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1191",
            "comments": "TRM1191",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1192",
            "comments": "TRM1192",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1193",
            "comments": "TRM1193",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1194",
            "comments": "TRM1194",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1195",
            "comments": "TRM1195",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1196",
            "comments": "TRM1196",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1197",
            "comments": "TRM1197",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1198",
            "comments": "TRM1198",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1199",
            "comments": "TRM1199",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1200",
            "comments": "TRM1200",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1201",
            "comments": "TRM1201",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1202",
            "comments": "TRM1202",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1203",
            "comments": "TRM1203",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1204",
            "comments": "TRM1204",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1205",
            "comments": "TRM1205",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1206",
            "comments": "TRM1206",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1207",
            "comments": "TRM1207",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1208",
            "comments": "TRM1208",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1209",
            "comments": "TRM1209",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1210",
            "comments": "TRM1210",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1211",
            "comments": "TRM1211",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1212",
            "comments": "TRM1212",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '4').id
        },
        {
            "serial_number": "1213",
            "comments": "TRM1213",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1214",
            "comments": "TRM1214",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1215",
            "comments": "TRM1215",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1216",
            "comments": "TRM1216",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1217",
            "comments": "TRM1217",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1218",
            "comments": "TRM1218",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1219",
            "comments": "TRM1219",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1220",
            "comments": "TRM1220",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1221",
            "comments": "TRM1221",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1222",
            "comments": "TRM1222",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1223",
            "comments": "TRM1223",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1224",
            "comments": "TRM1224",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1225",
            "comments": "TRM1225",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1226",
            "comments": "TRM1226",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1227",
            "comments": "TRM1227",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1228",
            "comments": "TRM1228",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1229",
            "comments": "TRM1229",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1230",
            "comments": "TRM1230",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1231",
            "comments": "TRM1231",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1232",
            "comments": "TRM1232",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1233",
            "comments": "TRM1233",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1234",
            "comments": "TRM1234",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1235",
            "comments": "TRM1235",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1236",
            "comments": "TRM1236",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1237",
            "comments": "TRM1237",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1238",
            "comments": "TRM1238",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1239",
            "comments": "TRM1239",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1240",
            "comments": "TRM1240",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1241",
            "comments": "TRM1241",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1242",
            "comments": "TRM1242",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1243",
            "comments": "TRM1243",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1244",
            "comments": "TRM1244",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1245",
            "comments": "TRM1245",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1246",
            "comments": "TRM1246",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1247",
            "comments": "TRM1247",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1248",
            "comments": "TRM1248",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1249",
            "comments": "TRM1249",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1250",
            "comments": "TRM1250",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1251",
            "comments": "TRM1251",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1252",
            "comments": "TRM1252",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1253",
            "comments": "TRM1253",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1254",
            "comments": "TRM1254",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1255",
            "comments": "TRM1255",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1256",
            "comments": "TRM1256",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1257",
            "comments": "TRM1257",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1258",
            "comments": "TRM1258",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1259",
            "comments": "TRM1259",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1260",
            "comments": "TRM1260",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1261",
            "comments": "TRM1261",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1262",
            "comments": "TRM1262",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1263",
            "comments": "TRM1263",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1264",
            "comments": "TRM1264",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1265",
            "comments": "TRM1265",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1266",
            "comments": "TRM1266",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1267",
            "comments": "TRM1267",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1268",
            "comments": "TRM1268",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1269",
            "comments": "TRM1269",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1270",
            "comments": "TRM1270",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1271",
            "comments": "TRM1271",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1272",
            "comments": "TRM1272",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1273",
            "comments": "TRM1273",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1274",
            "comments": "TRM1274",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1275",
            "comments": "TRM1275",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1276",
            "comments": "TRM1276",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1277",
            "comments": "TRM1277",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1278",
            "comments": "TRM1278",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1279",
            "comments": "TRM1279",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1280",
            "comments": "TRM1280",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1281",
            "comments": "TRM1281",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1282",
            "comments": "TRM1282",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1283",
            "comments": "TRM1283",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1284",
            "comments": "TRM1284",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1285",
            "comments": "TRM1285",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1286",
            "comments": "TRM1286",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1287",
            "comments": "TRM1287",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1288",
            "comments": "TRM1288",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1289",
            "comments": "TRM1289",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1290",
            "comments": "TRM1290",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1291",
            "comments": "TRM1291",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1292",
            "comments": "TRM1292",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1293",
            "comments": "TRM1293",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1294",
            "comments": "TRM1294",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1295",
            "comments": "TRM1295",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1296",
            "comments": "TRM1296",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1297",
            "comments": "TRM1297",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1298",
            "comments": "TRM1298",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1299",
            "comments": "TRM1299",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1300",
            "comments": "TRM1300",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1301",
            "comments": "TRM1301",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1302",
            "comments": "TRM1302",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1303",
            "comments": "TRM1303",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1304",
            "comments": "TRM1304",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1305",
            "comments": "TRM1305",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1306",
            "comments": "TRM1306",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1307",
            "comments": "TRM1307",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1308",
            "comments": "TRM1308",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1309",
            "comments": "TRM1309",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1310",
            "comments": "TRM1310",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1311",
            "comments": "TRM1311",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1312",
            "comments": "TRM1312",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "1313",
            "comments": "TRM1313",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1314",
            "comments": "TRM1314",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1315",
            "comments": "TRM1315",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1316",
            "comments": "TRM1316",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1317",
            "comments": "TRM1317",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1318",
            "comments": "TRM1318",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1319",
            "comments": "TRM1319",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1320",
            "comments": "TRM1320",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1321",
            "comments": "TRM1321",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1322",
            "comments": "TRM1322",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1323",
            "comments": "TRM1323",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1324",
            "comments": "TRM1324",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1325",
            "comments": "TRM1325",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1326",
            "comments": "TRM1326",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1327",
            "comments": "TRM1327",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1328",
            "comments": "TRM1328",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1329",
            "comments": "TRM1329",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1330",
            "comments": "TRM1330",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1331",
            "comments": "TRM1331",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1332",
            "comments": "TRM1332",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1333",
            "comments": "TRM1333",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1334",
            "comments": "TRM1334",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1335",
            "comments": "TRM1335",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1336",
            "comments": "TRM1336",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1337",
            "comments": "TRM1337",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1338",
            "comments": "TRM1338",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1339",
            "comments": "TRM1339",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1340",
            "comments": "TRM1340",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1341",
            "comments": "TRM1341",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1342",
            "comments": "TRM1342",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1343",
            "comments": "TRM1343",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1344",
            "comments": "TRM1344",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1345",
            "comments": "TRM1345",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1346",
            "comments": "TRM1346",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1347",
            "comments": "TRM1347",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1348",
            "comments": "TRM1348",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1349",
            "comments": "TRM1349",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1350",
            "comments": "TRM1350",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1351",
            "comments": "TRM1351",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1352",
            "comments": "TRM1352",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1353",
            "comments": "TRM1353",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1354",
            "comments": "TRM1354",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1355",
            "comments": "TRM1355",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1356",
            "comments": "TRM1356",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1357",
            "comments": "TRM1357",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1358",
            "comments": "TRM1358",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1359",
            "comments": "TRM1359",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1360",
            "comments": "TRM1360",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1361",
            "comments": "TRM1361",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1362",
            "comments": "TRM1362",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1363",
            "comments": "TRM1363",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1364",
            "comments": "TRM1364",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1365",
            "comments": "TRM1365",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1366",
            "comments": "TRM1366",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1367",
            "comments": "TRM1367",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1368",
            "comments": "TRM1368",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1369",
            "comments": "TRM1369",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1370",
            "comments": "TRM1370",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1371",
            "comments": "TRM1371",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1372",
            "comments": "TRM1372",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1373",
            "comments": "TRM1373",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1374",
            "comments": "TRM1374",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1375",
            "comments": "TRM1375",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1376",
            "comments": "TRM1376",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1377",
            "comments": "TRM1377",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1378",
            "comments": "TRM1378",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1379",
            "comments": "TRM1379",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1380",
            "comments": "TRM1380",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1381",
            "comments": "TRM1381",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1382",
            "comments": "TRM1382",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1383",
            "comments": "TRM1383",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1384",
            "comments": "TRM1384",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1385",
            "comments": "TRM1385",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1386",
            "comments": "TRM1386",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1387",
            "comments": "TRM1387",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1388",
            "comments": "TRM1388",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1389",
            "comments": "TRM1389",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1390",
            "comments": "TRM1390",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1391",
            "comments": "TRM1391",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1392",
            "comments": "TRM1392",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1393",
            "comments": "TRM1393",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1394",
            "comments": "TRM1394",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1395",
            "comments": "TRM1395",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1396",
            "comments": "TRM1396",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1397",
            "comments": "TRM1397",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1398",
            "comments": "TRM1398",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1399",
            "comments": "TRM1399",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1400",
            "comments": "TRM1400",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1401",
            "comments": "TRM1401",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1402",
            "comments": "TRM1402",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1403",
            "comments": "TRM1403",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1404",
            "comments": "TRM1404",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1405",
            "comments": "TRM1405",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1406",
            "comments": "TRM1406",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1407",
            "comments": "TRM1407",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1408",
            "comments": "TRM1408",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1409",
            "comments": "TRM1409",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1410",
            "comments": "TRM1410",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1411",
            "comments": "TRM1411",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1412",
            "comments": "TRM1412",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "1413",
            "comments": "TRM1413",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1414",
            "comments": "TRM1414",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1415",
            "comments": "TRM1415",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1416",
            "comments": "TRM1416",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1417",
            "comments": "TRM1417",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1418",
            "comments": "TRM1418",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1419",
            "comments": "TRM1419",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1420",
            "comments": "TRM1420",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1421",
            "comments": "TRM1421",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1422",
            "comments": "TRM1422",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1423",
            "comments": "TRM1423",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1424",
            "comments": "TRM1424",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1425",
            "comments": "TRM1425",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1426",
            "comments": "TRM1426",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1427",
            "comments": "TRM1427",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1428",
            "comments": "TRM1428",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1429",
            "comments": "TRM1429",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1430",
            "comments": "TRM1430",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1431",
            "comments": "TRM1431",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1432",
            "comments": "TRM1432",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1433",
            "comments": "TRM1433",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1434",
            "comments": "TRM1434",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1435",
            "comments": "TRM1435",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1436",
            "comments": "TRM1436",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1437",
            "comments": "TRM1437",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1438",
            "comments": "TRM1438",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1439",
            "comments": "TRM1439",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1440",
            "comments": "TRM1440",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1441",
            "comments": "TRM1441",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1442",
            "comments": "TRM1442",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1443",
            "comments": "TRM1443",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1444",
            "comments": "TRM1444",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1445",
            "comments": "TRM1445",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1446",
            "comments": "TRM1446",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1447",
            "comments": "TRM1447",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1448",
            "comments": "TRM1448",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1449",
            "comments": "TRM1449",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1450",
            "comments": "TRM1450",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1451",
            "comments": "TRM1451",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1452",
            "comments": "TRM1452",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1453",
            "comments": "TRM1453",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1454",
            "comments": "TRM1454",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1455",
            "comments": "TRM1455",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1456",
            "comments": "TRM1456",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1457",
            "comments": "TRM1457",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1458",
            "comments": "TRM1458",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1459",
            "comments": "TRM1459",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1460",
            "comments": "TRM1460",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1461",
            "comments": "TRM1461",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1462",
            "comments": "TRM1462",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1463",
            "comments": "TRM1463",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1464",
            "comments": "TRM1464",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1465",
            "comments": "TRM1465",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1466",
            "comments": "TRM1466",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1467",
            "comments": "TRM1467",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1468",
            "comments": "TRM1468",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1469",
            "comments": "TRM1469",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1470",
            "comments": "TRM1470",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1471",
            "comments": "TRM1471",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1472",
            "comments": "TRM1472",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1473",
            "comments": "TRM1473",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1474",
            "comments": "TRM1474",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1475",
            "comments": "TRM1475",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1476",
            "comments": "TRM1476",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1477",
            "comments": "TRM1477",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1478",
            "comments": "TRM1478",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1479",
            "comments": "TRM1479",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1480",
            "comments": "TRM1480",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1481",
            "comments": "TRM1481",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1482",
            "comments": "TRM1482",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1483",
            "comments": "TRM1483",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1484",
            "comments": "TRM1484",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1485",
            "comments": "TRM1485",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1486",
            "comments": "TRM1486",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1487",
            "comments": "TRM1487",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1488",
            "comments": "TRM1488",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1489",
            "comments": "TRM1489",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1490",
            "comments": "TRM1490",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1491",
            "comments": "TRM1491",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1492",
            "comments": "TRM1492",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1493",
            "comments": "TRM1493",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1494",
            "comments": "TRM1494",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1495",
            "comments": "TRM1495",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1496",
            "comments": "TRM1496",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1497",
            "comments": "TRM1497",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1498",
            "comments": "TRM1498",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1499",
            "comments": "TRM1499",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1500",
            "comments": "TRM1500",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1501",
            "comments": "TRM1501",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1502",
            "comments": "TRM1502",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1503",
            "comments": "TRM1503",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1504",
            "comments": "TRM1504",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1505",
            "comments": "TRM1505",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1506",
            "comments": "TRM1506",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1507",
            "comments": "TRM1507",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1508",
            "comments": "TRM1508",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1509",
            "comments": "TRM1509",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1510",
            "comments": "TRM1510",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1511",
            "comments": "TRM1511",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1512",
            "comments": "TRM1512",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "1513",
            "comments": "TRM1513",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1514",
            "comments": "TRM1514",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1515",
            "comments": "TRM1515",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1516",
            "comments": "TRM1516",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1517",
            "comments": "TRM1517",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1518",
            "comments": "TRM1518",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1519",
            "comments": "TRM1519",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1520",
            "comments": "TRM1520",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1521",
            "comments": "TRM1521",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1522",
            "comments": "TRM1522",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1523",
            "comments": "TRM1523",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1524",
            "comments": "TRM1524",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1525",
            "comments": "TRM1525",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1526",
            "comments": "TRM1526",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1527",
            "comments": "TRM1527",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1528",
            "comments": "TRM1528",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1529",
            "comments": "TRM1529",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1530",
            "comments": "TRM1530",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1531",
            "comments": "TRM1531",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1532",
            "comments": "TRM1532",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1533",
            "comments": "TRM1533",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1534",
            "comments": "TRM1534",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1535",
            "comments": "TRM1535",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1536",
            "comments": "TRM1536",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1537",
            "comments": "TRM1537",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1538",
            "comments": "TRM1538",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1539",
            "comments": "TRM1539",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1540",
            "comments": "TRM1540",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1541",
            "comments": "TRM1541",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1542",
            "comments": "TRM1542",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1543",
            "comments": "TRM1543",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1544",
            "comments": "TRM1544",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1545",
            "comments": "TRM1545",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1546",
            "comments": "TRM1546",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1547",
            "comments": "TRM1547",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1548",
            "comments": "TRM1548",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1549",
            "comments": "TRM1549",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1550",
            "comments": "TRM1550",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1551",
            "comments": "TRM1551",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1552",
            "comments": "TRM1552",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1553",
            "comments": "TRM1553",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1554",
            "comments": "TRM1554",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1555",
            "comments": "TRM1555",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1556",
            "comments": "TRM1556",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1557",
            "comments": "TRM1557",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1558",
            "comments": "TRM1558",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1559",
            "comments": "TRM1559",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1560",
            "comments": "TRM1560",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1561",
            "comments": "TRM1561",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1562",
            "comments": "TRM1562",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1563",
            "comments": "TRM1563",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1564",
            "comments": "TRM1564",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1565",
            "comments": "TRM1565",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1566",
            "comments": "TRM1566",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1567",
            "comments": "TRM1567",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1568",
            "comments": "TRM1568",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1569",
            "comments": "TRM1569",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1570",
            "comments": "TRM1570",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1571",
            "comments": "TRM1571",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1572",
            "comments": "TRM1572",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1573",
            "comments": "TRM1573",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1574",
            "comments": "TRM1574",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1575",
            "comments": "TRM1575",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1576",
            "comments": "TRM1576",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1577",
            "comments": "TRM1577",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1578",
            "comments": "TRM1578",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1579",
            "comments": "TRM1579",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1580",
            "comments": "TRM1580",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1581",
            "comments": "TRM1581",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1582",
            "comments": "TRM1582",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1583",
            "comments": "TRM1583",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1584",
            "comments": "TRM1584",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1585",
            "comments": "TRM1585",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1586",
            "comments": "TRM1586",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1587",
            "comments": "TRM1587",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1588",
            "comments": "TRM1588",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1589",
            "comments": "TRM1589",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1590",
            "comments": "TRM1590",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1591",
            "comments": "TRM1591",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1592",
            "comments": "TRM1592",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1593",
            "comments": "TRM1593",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1594",
            "comments": "TRM1594",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1595",
            "comments": "TRM1595",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1596",
            "comments": "TRM1596",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1597",
            "comments": "TRM1597",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1598",
            "comments": "TRM1598",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1599",
            "comments": "TRM1599",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1600",
            "comments": "TRM1600",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1601",
            "comments": "TRM1601",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1602",
            "comments": "TRM1602",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1603",
            "comments": "TRM1603",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1604",
            "comments": "TRM1604",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1605",
            "comments": "TRM1605",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1606",
            "comments": "TRM1606",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1607",
            "comments": "TRM1607",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1608",
            "comments": "TRM1608",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1609",
            "comments": "TRM1609",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1610",
            "comments": "TRM1610",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1611",
            "comments": "TRM1611",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1612",
            "comments": "TRM1612",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "1613",
            "comments": "TRM1613",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1614",
            "comments": "TRM1614",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1615",
            "comments": "TRM1615",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1616",
            "comments": "TRM1616",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1617",
            "comments": "TRM1617",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1618",
            "comments": "TRM1618",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1619",
            "comments": "TRM1619",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1620",
            "comments": "TRM1620",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1621",
            "comments": "TRM1621",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1622",
            "comments": "TRM1622",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1623",
            "comments": "TRM1623",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1624",
            "comments": "TRM1624",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1625",
            "comments": "TRM1625",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1626",
            "comments": "TRM1626",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1627",
            "comments": "TRM1627",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1628",
            "comments": "TRM1628",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1629",
            "comments": "TRM1629",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1630",
            "comments": "TRM1630",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1631",
            "comments": "TRM1631",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1632",
            "comments": "TRM1632",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1633",
            "comments": "TRM1633",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1634",
            "comments": "TRM1634",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1635",
            "comments": "TRM1635",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1636",
            "comments": "TRM1636",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1637",
            "comments": "TRM1637",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1638",
            "comments": "TRM1638",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1639",
            "comments": "TRM1639",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1640",
            "comments": "TRM1640",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1641",
            "comments": "TRM1641",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1642",
            "comments": "TRM1642",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1643",
            "comments": "TRM1643",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1644",
            "comments": "TRM1644",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1645",
            "comments": "TRM1645",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1646",
            "comments": "TRM1646",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1647",
            "comments": "TRM1647",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1648",
            "comments": "TRM1648",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1649",
            "comments": "TRM1649",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1650",
            "comments": "TRM1650",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1651",
            "comments": "TRM1651",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1652",
            "comments": "TRM1652",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1653",
            "comments": "TRM1653",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1654",
            "comments": "TRM1654",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1655",
            "comments": "TRM1655",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1656",
            "comments": "TRM1656",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1657",
            "comments": "TRM1657",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1658",
            "comments": "TRM1658",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1659",
            "comments": "TRM1659",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1660",
            "comments": "TRM1660",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1661",
            "comments": "TRM1661",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1662",
            "comments": "TRM1662",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1663",
            "comments": "TRM1663",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1664",
            "comments": "TRM1664",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1665",
            "comments": "TRM1665",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1666",
            "comments": "TRM1666",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1667",
            "comments": "TRM1667",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1668",
            "comments": "TRM1668",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1669",
            "comments": "TRM1669",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1670",
            "comments": "TRM1670",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1671",
            "comments": "TRM1671",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1672",
            "comments": "TRM1672",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1673",
            "comments": "TRM1673",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1674",
            "comments": "TRM1674",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1675",
            "comments": "TRM1675",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1676",
            "comments": "TRM1676",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1677",
            "comments": "TRM1677",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1678",
            "comments": "TRM1678",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1679",
            "comments": "TRM1679",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1680",
            "comments": "TRM1680",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1681",
            "comments": "TRM1681",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1682",
            "comments": "TRM1682",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1683",
            "comments": "TRM1683",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1684",
            "comments": "TRM1684",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1685",
            "comments": "TRM1685",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1686",
            "comments": "TRM1686",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1687",
            "comments": "TRM1687",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1688",
            "comments": "TRM1688",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1689",
            "comments": "TRM1689",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1690",
            "comments": "TRM1690",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1691",
            "comments": "TRM1691",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1692",
            "comments": "TRM1692",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1693",
            "comments": "TRM1693",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1694",
            "comments": "TRM1694",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1695",
            "comments": "TRM1695",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1696",
            "comments": "TRM1696",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1697",
            "comments": "TRM1697",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1698",
            "comments": "TRM1698",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1699",
            "comments": "TRM1699",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1700",
            "comments": "TRM1700",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1701",
            "comments": "TRM1701",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1702",
            "comments": "TRM1702",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1703",
            "comments": "TRM1703",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1704",
            "comments": "TRM1704",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1705",
            "comments": "TRM1705",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1706",
            "comments": "TRM1706",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1707",
            "comments": "TRM1707",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1708",
            "comments": "TRM1708",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1709",
            "comments": "TRM1709",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1710",
            "comments": "TRM1710",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1711",
            "comments": "TRM1711",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1712",
            "comments": "TRM1712",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "1713",
            "comments": "TRM1713",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1714",
            "comments": "TRM1714",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1715",
            "comments": "TRM1715",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1716",
            "comments": "TRM1716",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1717",
            "comments": "TRM1717",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1718",
            "comments": "TRM1718",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1719",
            "comments": "TRM1719",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1720",
            "comments": "TRM1720",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1721",
            "comments": "TRM1721",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1722",
            "comments": "TRM1722",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1723",
            "comments": "TRM1723",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1724",
            "comments": "TRM1724",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1725",
            "comments": "TRM1725",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1726",
            "comments": "TRM1726",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1727",
            "comments": "TRM1727",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1728",
            "comments": "TRM1728",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1729",
            "comments": "TRM1729",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1730",
            "comments": "TRM1730",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1731",
            "comments": "TRM1731",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1732",
            "comments": "TRM1732",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1733",
            "comments": "TRM1733",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1734",
            "comments": "TRM1734",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1735",
            "comments": "TRM1735",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1736",
            "comments": "TRM1736",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1737",
            "comments": "TRM1737",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1738",
            "comments": "TRM1738",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1739",
            "comments": "TRM1739",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1740",
            "comments": "TRM1740",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1741",
            "comments": "TRM1741",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1742",
            "comments": "TRM1742",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1743",
            "comments": "TRM1743",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1744",
            "comments": "TRM1744",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1745",
            "comments": "TRM1745",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1746",
            "comments": "TRM1746",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1747",
            "comments": "TRM1747",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1748",
            "comments": "TRM1748",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1749",
            "comments": "TRM1749",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1750",
            "comments": "TRM1750",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1751",
            "comments": "TRM1751",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1752",
            "comments": "TRM1752",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1753",
            "comments": "TRM1753",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1754",
            "comments": "TRM1754",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1755",
            "comments": "TRM1755",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1756",
            "comments": "TRM1756",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1757",
            "comments": "TRM1757",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1758",
            "comments": "TRM1758",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1759",
            "comments": "TRM1759",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1760",
            "comments": "TRM1760",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1761",
            "comments": "TRM1761",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1762",
            "comments": "TRM1762",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1763",
            "comments": "TRM1763",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1764",
            "comments": "TRM1764",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1765",
            "comments": "TRM1765",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1766",
            "comments": "TRM1766",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1767",
            "comments": "TRM1767",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1768",
            "comments": "TRM1768",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1769",
            "comments": "TRM1769",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1770",
            "comments": "TRM1770",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1771",
            "comments": "TRM1771",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1772",
            "comments": "TRM1772",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1773",
            "comments": "TRM1773",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1774",
            "comments": "TRM1774",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1775",
            "comments": "TRM1775",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1776",
            "comments": "TRM1776",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1777",
            "comments": "TRM1777",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1778",
            "comments": "TRM1778",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1779",
            "comments": "TRM1779",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1780",
            "comments": "TRM1780",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1781",
            "comments": "TRM1781",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1782",
            "comments": "TRM1782",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1783",
            "comments": "TRM1783",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1784",
            "comments": "TRM1784",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1785",
            "comments": "TRM1785",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1786",
            "comments": "TRM1786",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1787",
            "comments": "TRM1787",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1788",
            "comments": "TRM1788",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1789",
            "comments": "TRM1789",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1790",
            "comments": "TRM1790",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1791",
            "comments": "TRM1791",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1792",
            "comments": "TRM1792",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1793",
            "comments": "TRM1793",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1794",
            "comments": "TRM1794",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1795",
            "comments": "TRM1795",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1796",
            "comments": "TRM1796",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1797",
            "comments": "TRM1797",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1798",
            "comments": "TRM1798",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1799",
            "comments": "TRM1799",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1800",
            "comments": "TRM1800",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1801",
            "comments": "TRM1801",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1802",
            "comments": "TRM1802",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1803",
            "comments": "TRM1803",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1804",
            "comments": "TRM1804",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1805",
            "comments": "TRM1805",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1806",
            "comments": "TRM1806",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1807",
            "comments": "TRM1807",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1808",
            "comments": "TRM1808",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1809",
            "comments": "TRM1809",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1810",
            "comments": "TRM1810",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1811",
            "comments": "TRM1811",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1812",
            "comments": "TRM1812",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "1813",
            "comments": "TRM1813",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1814",
            "comments": "TRM1814",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1815",
            "comments": "TRM1815",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1816",
            "comments": "TRM1816",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1817",
            "comments": "TRM1817",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1818",
            "comments": "TRM1818",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1819",
            "comments": "TRM1819",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1820",
            "comments": "TRM1820",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1821",
            "comments": "TRM1821",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1822",
            "comments": "TRM1822",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1823",
            "comments": "TRM1823",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1824",
            "comments": "TRM1824",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1825",
            "comments": "TRM1825",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1826",
            "comments": "TRM1826",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1827",
            "comments": "TRM1827",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1828",
            "comments": "TRM1828",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1829",
            "comments": "TRM1829",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1830",
            "comments": "TRM1830",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1831",
            "comments": "TRM1831",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1832",
            "comments": "TRM1832",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1833",
            "comments": "TRM1833",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1834",
            "comments": "TRM1834",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1835",
            "comments": "TRM1835",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1836",
            "comments": "TRM1836",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1837",
            "comments": "TRM1837",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1838",
            "comments": "TRM1838",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1839",
            "comments": "TRM1839",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1840",
            "comments": "TRM1840",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1841",
            "comments": "TRM1841",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1842",
            "comments": "TRM1842",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1843",
            "comments": "TRM1843",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1844",
            "comments": "TRM1844",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1845",
            "comments": "TRM1845",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1846",
            "comments": "TRM1846",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1847",
            "comments": "TRM1847",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1848",
            "comments": "TRM1848",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1849",
            "comments": "TRM1849",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1850",
            "comments": "TRM1850",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1851",
            "comments": "TRM1851",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1852",
            "comments": "TRM1852",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1853",
            "comments": "TRM1853",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1854",
            "comments": "TRM1854",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1855",
            "comments": "TRM1855",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1856",
            "comments": "TRM1856",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1857",
            "comments": "TRM1857",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1858",
            "comments": "TRM1858",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1859",
            "comments": "TRM1859",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1860",
            "comments": "TRM1860",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1861",
            "comments": "TRM1861",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1862",
            "comments": "TRM1862",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1863",
            "comments": "TRM1863",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1864",
            "comments": "TRM1864",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1865",
            "comments": "TRM1865",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1866",
            "comments": "TRM1866",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1867",
            "comments": "TRM1867",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1868",
            "comments": "TRM1868",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1869",
            "comments": "TRM1869",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1870",
            "comments": "TRM1870",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1871",
            "comments": "TRM1871",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1872",
            "comments": "TRM1872",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1873",
            "comments": "TRM1873",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1874",
            "comments": "TRM1874",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1875",
            "comments": "TRM1875",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1876",
            "comments": "TRM1876",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1877",
            "comments": "TRM1877",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1878",
            "comments": "TRM1878",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1879",
            "comments": "TRM1879",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1880",
            "comments": "TRM1880",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1881",
            "comments": "TRM1881",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1882",
            "comments": "TRM1882",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1883",
            "comments": "TRM1883",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1884",
            "comments": "TRM1884",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1885",
            "comments": "TRM1885",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1886",
            "comments": "TRM1886",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1887",
            "comments": "TRM1887",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1888",
            "comments": "TRM1888",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1889",
            "comments": "TRM1889",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1890",
            "comments": "TRM1890",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1891",
            "comments": "TRM1891",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1892",
            "comments": "TRM1892",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1893",
            "comments": "TRM1893",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1894",
            "comments": "TRM1894",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1895",
            "comments": "TRM1895",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1896",
            "comments": "TRM1896",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1897",
            "comments": "TRM1897",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1898",
            "comments": "TRM1898",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1899",
            "comments": "TRM1899",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1900",
            "comments": "TRM1900",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1901",
            "comments": "TRM1901",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1902",
            "comments": "TRM1902",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1903",
            "comments": "TRM1903",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1904",
            "comments": "TRM1904",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1905",
            "comments": "TRM1905",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1906",
            "comments": "TRM1906",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1907",
            "comments": "TRM1907",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1908",
            "comments": "TRM1908",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1909",
            "comments": "TRM1909",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1910",
            "comments": "TRM1910",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1911",
            "comments": "TRM1911",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1912",
            "comments": "TRM1912",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1913",
            "comments": "TRM1913",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1914",
            "comments": "TRM1914",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1915",
            "comments": "TRM1915",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1916",
            "comments": "TRM1916",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1917",
            "comments": "TRM1917",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1918",
            "comments": "TRM1918",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1919",
            "comments": "TRM1919",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1920",
            "comments": "TRM1920",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1921",
            "comments": "TRM1921",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1922",
            "comments": "TRM1922",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1923",
            "comments": "TRM1923",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1924",
            "comments": "TRM1924",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1925",
            "comments": "TRM1925",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1926",
            "comments": "TRM1926",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1927",
            "comments": "TRM1927",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1928",
            "comments": "TRM1928",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1929",
            "comments": "TRM1929",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1930",
            "comments": "TRM1930",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1931",
            "comments": "TRM1931",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1932",
            "comments": "TRM1932",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1933",
            "comments": "TRM1933",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1934",
            "comments": "TRM1934",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1935",
            "comments": "TRM1935",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1936",
            "comments": "TRM1936",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1937",
            "comments": "TRM1937",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1938",
            "comments": "TRM1938",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1939",
            "comments": "TRM1939",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1940",
            "comments": "TRM1940",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1941",
            "comments": "TRM1941",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1942",
            "comments": "TRM1942",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1943",
            "comments": "TRM1943",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1944",
            "comments": "TRM1944",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1945",
            "comments": "TRM1945",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1946",
            "comments": "TRM1946",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1947",
            "comments": "TRM1947",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1948",
            "comments": "TRM1948",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1949",
            "comments": "TRM1949",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1950",
            "comments": "TRM1950",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1951",
            "comments": "TRM1951",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1952",
            "comments": "TRM1952",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1953",
            "comments": "TRM1953",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1954",
            "comments": "TRM1954",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1955",
            "comments": "TRM1955",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1956",
            "comments": "TRM1956",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1957",
            "comments": "TRM1957",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1958",
            "comments": "TRM1958",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1959",
            "comments": "TRM1959",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1960",
            "comments": "TRM1960",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1961",
            "comments": "TRM1961",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1962",
            "comments": "TRM1962",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1963",
            "comments": "TRM1963",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1964",
            "comments": "TRM1964",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1965",
            "comments": "TRM1965",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1966",
            "comments": "TRM1966",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1967",
            "comments": "TRM1967",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1968",
            "comments": "TRM1968",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1969",
            "comments": "TRM1969",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1970",
            "comments": "TRM1970",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1971",
            "comments": "TRM1971",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1972",
            "comments": "TRM1972",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1973",
            "comments": "TRM1973",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1974",
            "comments": "TRM1974",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1975",
            "comments": "TRM1975",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1976",
            "comments": "TRM1976",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1977",
            "comments": "TRM1977",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1978",
            "comments": "TRM1978",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1979",
            "comments": "TRM1979",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1980",
            "comments": "TRM1980",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1981",
            "comments": "TRM1981",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1982",
            "comments": "TRM1982",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1983",
            "comments": "TRM1983",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1984",
            "comments": "TRM1984",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1985",
            "comments": "TRM1985",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1986",
            "comments": "TRM1986",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1987",
            "comments": "TRM1987",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1988",
            "comments": "TRM1988",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1989",
            "comments": "TRM1989",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1990",
            "comments": "TRM1990",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1991",
            "comments": "TRM1991",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1992",
            "comments": "TRM1992",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1993",
            "comments": "TRM1993",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1994",
            "comments": "TRM1994",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1995",
            "comments": "TRM1995",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1996",
            "comments": "TRM1996",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1997",
            "comments": "TRM1997",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1998",
            "comments": "TRM1998",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "1999",
            "comments": "TRM1999",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        },
        {
            "serial_number": "2000",
            "comments": "TRM2000",
            "device_id": device.find(d => d.brand == 'Trampa SHERMAN').id
        }
    ]).then(function (x) {
        return queryInterface.sequelize.query(
          'INSERT INTO db_was_seeded (seeded) VALUES (8)')
      })
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('physical_devices', null, {}).then(function () {
      return queryInterface.sequelize.query(
        'DELETE FROM db_was_seeded WHERE seeded = 8')
    })
  }
};
