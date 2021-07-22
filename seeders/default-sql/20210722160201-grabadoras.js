'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seeds = await queryInterface.sequelize.query(
      'SELECT seeded FROM db_was_seeded')
    try {
      let seeded = seeds[0][5].seeded;
      console.log("Database was already seeded for audiomoth")
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
            "serial_number": "10231184",
            "comments": "ADM001",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10231127",
            "comments": "ADM002",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10231113",
            "comments": "ADM003",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10230781",
            "comments": "ADM004",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10230720",
            "comments": "ADM005",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10231099",
            "comments": "ADM006",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10230777",
            "comments": "ADM007",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10231172",
            "comments": "ADM008",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10231002",
            "comments": "ADM009",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10231141",
            "comments": "ADM010",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10230782",
            "comments": "ADM011",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10231194",
            "comments": "ADM012",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10231195",
            "comments": "ADM013",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10230797",
            "comments": "ADM014",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10231119",
            "comments": "ADM015",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10230799",
            "comments": "ADM016",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10231140",
            "comments": "ADM017",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10230788",
            "comments": "ADM018",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10230783",
            "comments": "ADM019",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10231128",
            "comments": "ADM020",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10241149",
            "comments": "ADM021",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10240839",
            "comments": "ADM022",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10240938",
            "comments": "ADM023",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10240863",
            "comments": "ADM024",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10240962",
            "comments": "ADM025",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10241141",
            "comments": "ADM026",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "10241537",
            "comments": "ADM027",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "10240899",
            "comments": "ADM028",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "10240759",
            "comments": "ADM029",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "10240855",
            "comments": "ADM030",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "10262842",
            "comments": "ADM031",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10261514",
            "comments": "ADM032",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10262294",
            "comments": "ADM033",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10262882",
            "comments": "ADM034",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "10263103",
            "comments": "ADM035",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "10263107",
            "comments": "ADM036",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "10262113",
            "comments": "ADM037",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "10262784",
            "comments": "ADM038",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '96').id
        },
        {
            "serial_number": "10262850",
            "comments": "ADM039",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '96').id
        },
        {
            "serial_number": "10263605",
            "comments": "ADM040",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '96').id
        },
        {
            "serial_number": "10262329",
            "comments": "ADM041",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "10262727",
            "comments": "ADM042",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "10263486",
            "comments": "ADM043",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "10262341",
            "comments": "ADM044",
            "device_id": device.find(d => d.brand == 'audiomoth')
        },
        {
            "serial_number": "10262078",
            "comments": "ADM045",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "10262337",
            "comments": "ADM046",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "10262062",
            "comments": "ADM047",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "10262066",
            "comments": "ADM048",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "10262333",
            "comments": "ADM049",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "10262719",
            "comments": "ADM050",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "10261847",
            "comments": "248C7D075B1F9135",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "10263600",
            "comments": "24F319035DAEB675",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "10263592",
            "comments": "2449BC045DAEB669",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "10261758",
            "comments": "248C7D075B1F857D",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "10263595",
            "comments": "2453AC025DAEB680",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "10261843",
            "comments": "248C7D075B1F9142",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "10263587",
            "comments": "247AA5015DAEB68C",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "10262780",
            "comments": "247AA5015DAEB6BC",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "10262772",
            "comments": "2449BC045DAEB6B0",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "10261835",
            "comments": "248C7D075B1FB909",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "10262852",
            "comments": "2495F30653E1BE08",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "10263269",
            "comments": "247AA5025EC9E965",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "10263650",
            "comments": "24E144055DAEB615",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "10262182",
            "comments": "24EB9B0359442868",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "10262049",
            "comments": "247475055F256D68",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "10261526",
            "comments": "248C7D075B1F95A4",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "10261510",
            "comments": "248C7D075B1F95CC",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "10263657",
            "comments": "24F319035DAEB615",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "10261506",
            "comments": "243B1F055B1F95CC",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "10262057",
            "comments": "24A04F075F256D68",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "10261714",
            "comments": "248C7D075B1F853F",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "10263588",
            "comments": "2453AC025DAEB669",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "10262093",
            "comments": "243B1F055B1F3FEC",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "10263599",
            "comments": "24E144055DAEB680",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "10262044",
            "comments": "248C7D075B1F3F31",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "10262050",
            "comments": "243B1F055B1F3F9C",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "10262137",
            "comments": "248C7D075B1F81B1",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "10262036",
            "comments": "248C7D075B1F3F16",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "10261518",
            "comments": "243B1F055B1F95BF",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "10263614",
            "comments": "247AA5025EC9F2C8",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "10262828",
            "comments": "248C7D075B1F7C20",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "10263127",
            "comments": "243B1F075C7A024D",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "10262857",
            "comments": "242CB60153E1C4A1",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "10262901",
            "comments": "243B1F075C7A022A",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "10262907",
            "comments": "243B1F075C7A021E",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "10262790",
            "comments": "243B1F055B1F7B1C",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "10262839",
            "comments": "243B1F055B1F7D1F",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "10262830",
            "comments": "243B1F055B1F7C2D",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "10262831",
            "comments": "243B1F055B1F7C47",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "10261706",
            "comments": "248C7D075B1F8524",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "10262219",
            "comments": "243B1F055B1F40D0",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "10261718",
            "comments": "243B1F055B1F8532",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "10262195",
            "comments": "248C7D075B1F40C2",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "10263601",
            "comments": "24A04F015EC9F2D4",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "10262157",
            "comments": "243B1F055B1F81BE",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "10262145",
            "comments": "248C7D075B1F81BE",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "10262141",
            "comments": "243B1F055B1F81CC",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "10261734",
            "comments": "243B1F055B1F853F",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "10262771",
            "comments": "2410660659442D6A",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "10262227",
            "comments": "243B1F055B1F40C2",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "10261726",
            "comments": "248C7D075B1F854C",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "10263602",
            "comments": "248D9B045EC9F20A",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "10262199",
            "comments": "243B1F055B1F40DD",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "10262105",
            "comments": "248C7D075B1F3FEC",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "10262082",
            "comments": "24E144085F256CD0",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "10262054",
            "comments": "248C7D075B1F3F9C",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "10262046",
            "comments": "243B1F055B1F3F66",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "10263613",
            "comments": "242A26075EC9F2E1",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "10262022",
            "comments": "243B1F055B1F3F4B",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "10262097",
            "comments": "248C7D075B1F3FDF",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "10262149",
            "comments": "243B1F055B1F81B1",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "10262039",
            "comments": "243B1F055B1F3F3E",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "10262089",
            "comments": "243B1F055B1F3FD2",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "10263606",
            "comments": "248D9B045EC9F3DC",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "10262101",
            "comments": "243B1F055B1F3FFA",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "10262012",
            "comments": "243B1F055B1F3F58",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "10263609",
            "comments": "247AA5025EC9F262",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "10262223",
            "comments": "248C7D075B1F40B4",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "10262153",
            "comments": "248C7D075B1F81A3",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "10261730",
            "comments": "248C7D075B1F855A",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "10262855",
            "comments": "2401010753E1BE19",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "10263270",
            "comments": "248D9B045EC9E6B1",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "10262198",
            "comments": "2411E5085944285C",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "10262856",
            "comments": "24E4C30453E1BE08",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "10262194",
            "comments": "2411E5085944299F",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "10261803",
            "comments": "248C7D075B1F6103",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "10262053",
            "comments": "24E144085F256D5B",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "10261792",
            "comments": "248C7D075B1F6133",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "10263097",
            "comments": "2453AC025DAEB645",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "10262045",
            "comments": "2423C2045F256D74",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "10262847",
            "comments": "248C7D075B1F7CCE",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "10262782",
            "comments": "243B1F055B1F7A97",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "10263099",
            "comments": "2408640553E1C5F6",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "10263111",
            "comments": "240AA60353E1C0F7",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "10263104",
            "comments": "242CB60153E1C5A0",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "10262070",
            "comments": "24E144085F256CE9",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "10263485",
            "comments": "2453AC025DAEB7B1",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "10263112",
            "comments": "2408640553E1C5AB",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "10262846",
            "comments": "248C7D075B1F7CB3",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "10262843",
            "comments": "248C7D075B1F7CDB",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "10261831",
            "comments": "248C7D075B1FB916",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "10262939",
            "comments": "248C7D075B1F7A39",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "10262776",
            "comments": "2453AC025DAEB6A5",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "10263662",
            "comments": "2453AC025DAEB5FD",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "10262816",
            "comments": "248C7D075B1F7BF7",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "10262938",
            "comments": "248C7D075B1F7A11",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "10262935",
            "comments": "248C7D075B1F7A2B",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "10262809",
            "comments": "248C7D075B1F7C12",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "10262934",
            "comments": "248C7D075B1F7A1E",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "10262694",
            "comments": "2408640553E1C525",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "10263105",
            "comments": "24F319035DAEB645",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "10263106",
            "comments": "2453AC025DAEB62D",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "10263653",
            "comments": "2449BC045DAEB609",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "10262812",
            "comments": "248C7D075B1F7BCC",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "10262851",
            "comments": "242CB60153E1C614",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "10263098",
            "comments": "24F319035DAEB62D",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "10262854",
            "comments": "2408640553E1BE19",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "10262853",
            "comments": "240AA60353E1BE19",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "10263649",
            "comments": "247AA5015DAEB615",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "10262813",
            "comments": "248C7D075B1F7C04",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "10263101",
            "comments": "24E144055DAEB645",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "10262178",
            "comments": "2410660659442868",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "10263102",
            "comments": "24E144055DAEB62D",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "10262849",
            "comments": "2408640553E1C601",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "10263267",
            "comments": "243B1F055B1F7948",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "10261522",
            "comments": "243B1F055B1F95A4",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "10262041",
            "comments": "2423C2045F256D68",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "10263109",
            "comments": "247AA5015DAEB645",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "10263266",
            "comments": "242A26075EC9E965",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "10263271",
            "comments": "243B1F055B1F793B",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "10262575",
            "comments": "248D9B045EC9E3CD",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "10262494",
            "comments": "247AA5025EC9E440",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "10262723",
            "comments": "24EB9B0359442BFC",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "10263348",
            "comments": "248D9B045EC9E753",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "10263343",
            "comments": "242A26075EC9E747",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "10263345",
            "comments": "247AA5025EC9E753",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "10262731",
            "comments": "24EB9B0359442BD8",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "10262179",
            "comments": "247475055F256D28",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "10262040",
            "comments": "243B1F055B1F3F24",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "10263341",
            "comments": "242A26075EC9E753",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "10262074",
            "comments": "24A04F075F256CE9",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "10262884",
            "comments": "248C7D075B1F7A89",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "10262781",
            "comments": "248C7D075B1F7AA4",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "10263100",
            "comments": "2408640553E1C595",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "10262090",
            "comments": "2423C2045F256CE9",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "10263490",
            "comments": "2453AC025DAEB6C8",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "10261750",
            "comments": "243B1F055B1F8598",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "10263491",
            "comments": "24E144055DAEB79A",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "10263108",
            "comments": "242CB60153E1C5AB",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "10262094",
            "comments": "24E144085F256CDD",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "10261754",
            "comments": "248C7D075B1F8598",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "10263489",
            "comments": "24F319035DAEB79A",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "10261738",
            "comments": "243B1F055B1F858A",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "10262711",
            "comments": "2410660659442C14",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "10262735",
            "comments": "2411E50859442BF0",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "10262844",
            "comments": "243B1F055B1F7CB3",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "10262848",
            "comments": "248C7D075B1F7CC0",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "10262845",
            "comments": "243B1F055B1F7CDB",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "10262841",
            "comments": "243B1F055B1F7CE9",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "10262325",
            "comments": "248C7D075B1F7FF3",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "10262881",
            "comments": "248C7D075B1F7ABF",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "10262073",
            "comments": "2423C2045F256CC3",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "10263119",
            "comments": "242CB60153E1C595",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "10262190",
            "comments": "241066065944285C",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "10262081",
            "comments": "2423C2045F256CB6",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "10262811",
            "comments": "243B1F055B1F7C12",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "10263110",
            "comments": "2449BC045DAEB62D",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "10263654",
            "comments": "2453AC025DAEB615",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "10262010",
            "comments": "2423C2045F256D0F",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "10263265",
            "comments": "248C7D075B1F7948",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "10263560",
            "comments": "2410660659442DD7",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "10263558",
            "comments": "2410660659442D98",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "10263564",
            "comments": "24EB9B0359442BF0",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "10263096",
            "comments": "24E144055DAEB669",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "10263092",
            "comments": "2449BC045DAEB65D",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "10263083",
            "comments": "24F319035DAEB65D",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "10263095",
            "comments": "24E144055DAEB675",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "10263091",
            "comments": "2453AC025DAEB675",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "10263087",
            "comments": "247AA5015DAEB65D",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "10263557",
            "comments": "2410660659442DA3",
            "device_id": device.find(d => d.brand == 'audiomoth'),
            "cumulus_id": cumulus.find(c => c.name == '6').id
        }
    ]).then(function (x) {
        return queryInterface.sequelize.query(
          'INSERT INTO db_was_seeded (seeded) VALUES (6)')
      })
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('physical_devices', null, {}).then(function () {
      return queryInterface.sequelize.query(
        'DELETE FROM db_was_seeded WHERE seeded = 6')
    })
  }
};
