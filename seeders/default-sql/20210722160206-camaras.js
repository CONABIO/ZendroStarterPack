'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seeds = await queryInterface.sequelize.query(
      'SELECT seeded FROM db_was_seeded')
    try {
      let seeded = seeds[0][6].seeded;
      console.log("Database was already seeded for cameras")
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
            "serial_number": "HLPXGM09049154",
            "comments": "CAM001",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048779",
            "comments": "CAM002",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048860",
            "comments": "CAM003",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048861",
            "comments": "CAM004",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09050043",
            "comments": "CAM005",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049153",
            "comments": "CAM006",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049870",
            "comments": "CAM007",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049477",
            "comments": "CAM008",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048701",
            "comments": "CAM009",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049174",
            "comments": "CAM010",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049868",
            "comments": "CAM011",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09050005",
            "comments": "CAM012",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048189",
            "comments": "CAM013",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049103",
            "comments": "CAM014",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048396",
            "comments": "CAM015",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049211",
            "comments": "CAM016",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048502",
            "comments": "CAM017",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049639",
            "comments": "CAM018",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049616",
            "comments": "CAM019",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048402",
            "comments": "CAM020",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049567",
            "comments": "CAM021",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049533",
            "comments": "CAM022",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049532",
            "comments": "CAM023",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049861",
            "comments": "CAM024",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "HLPXGM09049172",
            "comments": "CAM025",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "HLPXGM09049566",
            "comments": "CAM026",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "HLPXGM09049565",
            "comments": "CAM027",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "HLPXGM09050051",
            "comments": "CAM028",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "HLPXGM09048603",
            "comments": "CAM029",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048606",
            "comments": "CAM030",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049542",
            "comments": "CAM031",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049535",
            "comments": "CAM032",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "HLPXGM09049175",
            "comments": "CAM033",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "HLPXGM09048607",
            "comments": "CAM034",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "HLPXGM09049991",
            "comments": "CAM035",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "HLPXGM09048682",
            "comments": "CAM036",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048462",
            "comments": "CAM037",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048196",
            "comments": "CAM038",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048210",
            "comments": "CAM039",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "HLPXGM09048199",
            "comments": "CAM040",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "HLPXGM09048207",
            "comments": "CAM041",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "HLPXGM09048197",
            "comments": "CAM042",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049506",
            "comments": "CAM043",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "HLPXGM09049480",
            "comments": "CAM044",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "HLPXGM09049996",
            "comments": "CAM045",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "HLPXGM09048863",
            "comments": "CAM046",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "HLPXGM09048507",
            "comments": "CAM047",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "HLPXGM09048862",
            "comments": "CAM048",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "HLPXGM09050016",
            "comments": "CAM049",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "HLPXGM09049998",
            "comments": "CAM050",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "HLPXGM09049997",
            "comments": "CAM051",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "HLPXGM09049481",
            "comments": "CAM052",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "HLPXGM09050019",
            "comments": "CAM053",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "HLPXGM09049507",
            "comments": "CAM054",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "HLPXGM09048521",
            "comments": "CAM055",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '54').id
        },
        {
            "serial_number": "HLPXGM09048869",
            "comments": "CAM056",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "HLPXGM09048325",
            "comments": "CAM057",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "HLPXGM09048398",
            "comments": "CAM058",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "HLPXGM09049102",
            "comments": "CAM059",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "HLPXGM09048227",
            "comments": "CAM060",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "HLPXGM09048870",
            "comments": "CAM061",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "HLPXGM09049970",
            "comments": "CAM062",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "HLPXGM09049899",
            "comments": "CAM063",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "HLPXGM09049898",
            "comments": "CAM064",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "HLPXGM09049337",
            "comments": "CAM065",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '88').id
        },
        {
            "serial_number": "HLPXGM09049971",
            "comments": "CAM066",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "HLPXGM09049522",
            "comments": "CAM067",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "HLPXGM09049539",
            "comments": "CAM068",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "HLPXGM09048692",
            "comments": "CAM069",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "HLPXGM09049523",
            "comments": "CAM070",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "HLPXGM09049537",
            "comments": "CAM071",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "HLPXGM09049546",
            "comments": "CAM072",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '32').id
        },
        {
            "serial_number": "HLPXGM09049484",
            "comments": "CAM073",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "HLPXGM09049265",
            "comments": "CAM074",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "HLPXGM0904926",
            "comments": "CAM075",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "HLPXGM09048746",
            "comments": "CAM076",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "HLPXGM09049652",
            "comments": "CAM077",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "HLPXGM09049253",
            "comments": "CAM078",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '97').id
        },
        {
            "serial_number": "HLPXGM09049790",
            "comments": "CAM079",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "HLPXGM09048208",
            "comments": "CAM080",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "HLPXGM09049835",
            "comments": "CAM081",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "HLPXGM09048464",
            "comments": "CAM082",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "HLPXGM09048205",
            "comments": "CAM083",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "HLPXGM09048198",
            "comments": "CAM084",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "HLPXGM09049155",
            "comments": "CAM085",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "HLPXGM09049544",
            "comments": "CAM086",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '34').id
        },
        {
            "serial_number": "HLPXGM09048694",
            "comments": "CAM087",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "HLPXGM09048812",
            "comments": "CAM088",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "HLPXGM09049019",
            "comments": "CAM089",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "HLPXGM09049017",
            "comments": "CAM090",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "HLPXGM09049203",
            "comments": "CAM091",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "HLPXGM09049261",
            "comments": "CAM092",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "HLPXGM09049263",
            "comments": "CAM093",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "HLPXGM09048569",
            "comments": "CAM094",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "HLPXGM09049216",
            "comments": "CAM095",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "HLPXGM09049202",
            "comments": "CAM096",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '37').id
        },
        {
            "serial_number": "HLPXGM09049504",
            "comments": "CAM097",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "HLPXGM09048449",
            "comments": "CAM098",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "HLPXGM09048480",
            "comments": "CAM099",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "HLPXGM09048448",
            "comments": "CAM100",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "HLPXGM09048483",
            "comments": "CAM101",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "HLPXGM09049482",
            "comments": "CAM102",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "HLPXGM09048888",
            "comments": "CAM103",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "HLPXGM09049093",
            "comments": "CAM104",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '13').id
        },
        {
            "serial_number": "HLPXGM09048890",
            "comments": "CAM105",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "HLPXGM09049092",
            "comments": "CAM106",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "HLPXGM09048925",
            "comments": "CAM107",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "HLPXGM09049201",
            "comments": "CAM108",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "HLPXGM09048271",
            "comments": "CAM109",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "HLPXGM09048599",
            "comments": "CAM110",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "HLPXGM09048270",
            "comments": "CAM111",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "HLPXGM09048594",
            "comments": "CAM112",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "HLPXGM09049514",
            "comments": "CAM113",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "HLPXGM09049271",
            "comments": "CAM114",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '92').id
        },
        {
            "serial_number": "HLPXGM09049470",
            "comments": "CAM115",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "HLPXGM09049766",
            "comments": "CAM116",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "HLPXGM09048973",
            "comments": "CAM117",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "HLPXGM09049680",
            "comments": "CAM118",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "HLPXGM09049767",
            "comments": "CAM119",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "HLPXGM09048975",
            "comments": "CAM120",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "HLPXGM09048642",
            "comments": "CAM121",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "HLPXGM09048206",
            "comments": "CAM122",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "HLPXGM09048598",
            "comments": "CAM123",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '95').id
        },
        {
            "serial_number": "HLPXGM09048595",
            "comments": "CAM124",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "HLPXGM09048640",
            "comments": "CAM125",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "HLPXGM09049877",
            "comments": "CAM126",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "HLPXGM09049179",
            "comments": "CAM127",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "HLPXGM09049177",
            "comments": "CAM128",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "HLPXGM09050065",
            "comments": "CAM129",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "HLPXGM09049486",
            "comments": "CAM130",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "HLPXGM09048575",
            "comments": "CAM131",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '22').id
        },
        {
            "serial_number": "HLPXGM09050064",
            "comments": "CAM132",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "HLPXGM09049194",
            "comments": "CAM133",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "HLPXGM09050057",
            "comments": "CAM134",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "HLPXGM09050059",
            "comments": "CAM135",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "HLPXGM09049618",
            "comments": "CAM136",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "HLPXGM09050056",
            "comments": "CAM137",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "HLPXGM09050032",
            "comments": "CAM138",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "HLPXGM09049164",
            "comments": "CAM139",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "HLPXGM09048224",
            "comments": "CAM140",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '16').id
        },
        {
            "serial_number": "HLPXGM09049209",
            "comments": "CAM141",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "HLPXGM09048397",
            "comments": "CAM142",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "HLPXGM09049446",
            "comments": "CAM143",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "HLPXGM09049493",
            "comments": "CAM144",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "HLPXGM09048450",
            "comments": "CAM145",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "HLPXGM09049497",
            "comments": "CAM146",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "HLPXGM09048795",
            "comments": "CAM147",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "HLPXGM09049016",
            "comments": "CAM148",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "HLPXGM09049018",
            "comments": "CAM149",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "HLPXGM09048361",
            "comments": "CAM150",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '17').id
        },
        {
            "serial_number": "HLPXGM09048518",
            "comments": "CAM151",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "HLPXGM09048451",
            "comments": "CAM152",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "HLPXGM09048482",
            "comments": "CAM153",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "HLPXGM09048516",
            "comments": "CAM154",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "HLPXGM09048481",
            "comments": "CAM155",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "HLPXGM09048517",
            "comments": "CAM156",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "HLPXGM09048794",
            "comments": "CAM157",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "HLPXGM09048792",
            "comments": "CAM158",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "HLPXGM09048815",
            "comments": "CAM159",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "HLPXGM09048814",
            "comments": "CAM160",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '18').id
        },
        {
            "serial_number": "HLPXGM09048776",
            "comments": "CAM161",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "HLPXGM09048793",
            "comments": "CAM162",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "HLPXGM09048570",
            "comments": "CAM163",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "HLPXGM09048714",
            "comments": "CAM164",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "HLPXGM08048647",
            "comments": "CAM165",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "HLPXGM09049362",
            "comments": "CAM166",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "HLPXGM09049360",
            "comments": "CAM167",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "HLPXGM09049837",
            "comments": "CAM168",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "HLPXGM09049000",
            "comments": "CAM169",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "HLPXGM09048742",
            "comments": "CAM170",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '93').id
        },
        {
            "serial_number": "HLPXGM09049036",
            "comments": "CAM171",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "HLPXGM09049852",
            "comments": "CAM172",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "HLPXGM09049807",
            "comments": "CAM173",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "HLPXGM09049854",
            "comments": "CAM174",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "HLPXGM09048572",
            "comments": "CAM175",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "HLPXGM09050006",
            "comments": "CAM176",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "HLPXGM09050042",
            "comments": "CAM177",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "HLPXGM09049802",
            "comments": "CAM178",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "HLPXGM09049999",
            "comments": "CAM179",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "HLPXGM09050004",
            "comments": "CAM180",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '5').id
        },
        {
            "serial_number": "HLPXGM09048592",
            "comments": "CAM181",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "HLPXGM09049332",
            "comments": "CAM182",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "HLPXGM09048643",
            "comments": "CAM183",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "HLPXGM09049241",
            "comments": "CAM184",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "HLPXGM09048687",
            "comments": "CAM185",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "HLPXGM09049333",
            "comments": "CAM186",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "HLPXGM09048231",
            "comments": "CAM187",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "HLPXGM09049512",
            "comments": "CAM188",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "HLPXGM09049269",
            "comments": "CAM189",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "HLPXGM09048673",
            "comments": "CAM190",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '6').id
        },
        {
            "serial_number": "HLPXGM09049268",
            "comments": "CAM191",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "HLPXGM09049545",
            "comments": "CAM192",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "HLPXGM09049270",
            "comments": "CAM193",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "HLPXGM09049181",
            "comments": "CAM194",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "HLPXGM09048693",
            "comments": "CAM195",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "HLPXGM09049819",
            "comments": "CAM196",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "HLPXGM09048996",
            "comments": "CAM197",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "HLPXGM09049183",
            "comments": "CAM198",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "HLPXGM09049617",
            "comments": "CAM199",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "HLPXGM09049862",
            "comments": "CAM200",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id,
            "cumulus_id": cumulus.find(c => c.name == '91').id
        },
        {
            "serial_number": "HLPXGM09049381",
            "comments": "CAM201",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049787",
            "comments": "CAM202",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049785",
            "comments": "CAM203",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09050058",
            "comments": "CAM204",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048461",
            "comments": "CAM205",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048463",
            "comments": "CAM206",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048209",
            "comments": "CAM207",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049495",
            "comments": "CAM208",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048204",
            "comments": "CAM209",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049492",
            "comments": "CAM210",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048523",
            "comments": "CAM211",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048641",
            "comments": "CAM212",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049716",
            "comments": "CAM213",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049372",
            "comments": "CAM214",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048522",
            "comments": "CAM215",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049334",
            "comments": "CAM216",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049176",
            "comments": "CAM217",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048712",
            "comments": "CAM218",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048771",
            "comments": "CAM219",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048573",
            "comments": "CAM220",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09050007",
            "comments": "CAM221",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048228",
            "comments": "CAM222",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049195",
            "comments": "CAM223",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049784",
            "comments": "CAM224",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09050034",
            "comments": "CAM225",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049540",
            "comments": "CAM226",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048683",
            "comments": "CAM227",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049534",
            "comments": "CAM228",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048476",
            "comments": "CAM229",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09050041",
            "comments": "CAM230",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09050040",
            "comments": "CAM231",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049505",
            "comments": "CAM232",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09050017",
            "comments": "CAM233",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09050018",
            "comments": "CAM234",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049968",
            "comments": "CAM235",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048588",
            "comments": "CAM236",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048924",
            "comments": "CAM237",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049218",
            "comments": "CAM238",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048923",
            "comments": "CAM239",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048568",
            "comments": "CAM240",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048478",
            "comments": "CAM241",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049876",
            "comments": "CAM242",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048849",
            "comments": "CAM243",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048413",
            "comments": "CAM244",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049314",
            "comments": "CAM245",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048850",
            "comments": "CAM246",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048519",
            "comments": "CAM247",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049483",
            "comments": "CAM248",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048778",
            "comments": "CAM249",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049521",
            "comments": "CAM250",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM08048645",
            "comments": "CAM251",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049536",
            "comments": "CAM252",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049383",
            "comments": "CAM253",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048401",
            "comments": "CAM254",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048362",
            "comments": "CAM255",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048403",
            "comments": "CAM256",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049101",
            "comments": "CAM257",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048754",
            "comments": "CAM258",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049789",
            "comments": "CAM259",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049821",
            "comments": "CAM260",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049832",
            "comments": "CAM261",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049100",
            "comments": "CAM262",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049791",
            "comments": "CAM263",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049788",
            "comments": "CAM264",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048921",
            "comments": "CAM265",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048889",
            "comments": "CAM266",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048891",
            "comments": "CAM267",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049262",
            "comments": "CAM268",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049094",
            "comments": "CAM269",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048922",
            "comments": "CAM270",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049792",
            "comments": "CAM271",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049192",
            "comments": "CAM272",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09050035",
            "comments": "CAM273",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09050002",
            "comments": "CAM274",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049619",
            "comments": "CAM275",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049860",
            "comments": "CAM276",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048674",
            "comments": "CAM277",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049538",
            "comments": "CAM278",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048675",
            "comments": "CAM279",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049547",
            "comments": "CAM280",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049520",
            "comments": "CAM281",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048672",
            "comments": "CAM282",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048657",
            "comments": "CAM283",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048848",
            "comments": "CAM284",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048408",
            "comments": "CAM285",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048520",
            "comments": "CAM286",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048492",
            "comments": "CAM287",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049879",
            "comments": "CAM288",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049638",
            "comments": "CAM289",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049878",
            "comments": "CAM290",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048494",
            "comments": "CAM291",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049165",
            "comments": "CAM292",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049801",
            "comments": "CAM293",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049167",
            "comments": "CAM294",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048602",
            "comments": "CAM295",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048680",
            "comments": "CAM296",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048583",
            "comments": "CAM297",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09050048",
            "comments": "CAM298",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048601",
            "comments": "CAM299",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048600",
            "comments": "CAM300",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049363",
            "comments": "CAM301",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049969",
            "comments": "CAM302",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049839",
            "comments": "CAM303",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049897",
            "comments": "CAM304",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049361",
            "comments": "CAM305",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049896",
            "comments": "CAM306",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048467",
            "comments": "CAM307",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049822",
            "comments": "CAM308",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048211",
            "comments": "CAM309",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048466",
            "comments": "CAM310",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048465",
            "comments": "CAM311",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048460",
            "comments": "CAM312",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048441",
            "comments": "CAM313",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048700",
            "comments": "CAM314",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09050066",
            "comments": "CAM315",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048574",
            "comments": "CAM316",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048442",
            "comments": "CAM317",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048702",
            "comments": "CAM318",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049871",
            "comments": "CAM319",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048443",
            "comments": "CAM320",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049800",
            "comments": "CAM321",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09050067",
            "comments": "CAM322",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049869",
            "comments": "CAM323",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049178",
            "comments": "CAM324",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049496",
            "comments": "CAM325",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048580",
            "comments": "CAM326",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09050050",
            "comments": "CAM327",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049989",
            "comments": "CAM328",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048681",
            "comments": "CAM329",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049988",
            "comments": "CAM330",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048225",
            "comments": "CAM331",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049823",
            "comments": "CAM332",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049833",
            "comments": "CAM333",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049820",
            "comments": "CAM334",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048399",
            "comments": "CAM335",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048226",
            "comments": "CAM336",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049681",
            "comments": "CAM337",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049219",
            "comments": "CAM338",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049468",
            "comments": "CAM339",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049683",
            "comments": "CAM340",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048972",
            "comments": "CAM341",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049765",
            "comments": "CAM342",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048582",
            "comments": "CAM343",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049476",
            "comments": "CAM344",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM08048644",
            "comments": "CAM345",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049173",
            "comments": "CAM346",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049478",
            "comments": "CAM347",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048605",
            "comments": "CAM348",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049757",
            "comments": "CAM349",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049266",
            "comments": "CAM350",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049655",
            "comments": "CAM351",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049382",
            "comments": "CAM352",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048813",
            "comments": "CAM353",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049741",
            "comments": "CAM354",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048695",
            "comments": "CAM355",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048997",
            "comments": "CAM356",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049182",
            "comments": "CAM357",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049817",
            "comments": "CAM358",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048230",
            "comments": "CAM359",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049818",
            "comments": "CAM360",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049479",
            "comments": "CAM361",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048703",
            "comments": "CAM362",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048713",
            "comments": "CAM363",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048715",
            "comments": "CAM364",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048440",
            "comments": "CAM365",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09050049",
            "comments": "CAM366",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049315",
            "comments": "CAM367",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048851",
            "comments": "CAM368",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048475",
            "comments": "CAM369",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048493",
            "comments": "CAM370",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048658",
            "comments": "CAM371",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049335",
            "comments": "CAM372",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09048604",
            "comments": "CAM373",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09050033",
            "comments": "CAM374",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049494",
            "comments": "CAM375",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049543",
            "comments": "CAM376",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049990",
            "comments": "CAM377",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049863",
            "comments": "CAM378",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049409",
            "comments": "CAM379",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049200",
            "comments": "CAM380",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049411",
            "comments": "CAM381",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049764",
            "comments": "CAM382",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049408",
            "comments": "CAM383",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049469",
            "comments": "CAM384",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049836",
            "comments": "CAM385",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049339",
            "comments": "CAM386",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049838",
            "comments": "CAM387",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049338",
            "comments": "CAM388",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049336",
            "comments": "CAM389",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049444",
            "comments": "CAM390",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049380",
            "comments": "CAM391",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049904",
            "comments": "CAM392",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049412",
            "comments": "CAM393",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049693",
            "comments": "CAM394",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049551",
            "comments": "CAM395",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049695",
            "comments": "CAM396",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049736",
            "comments": "CAM397",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049001",
            "comments": "CAM398",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049426",
            "comments": "CAM399",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        },
        {
            "serial_number": "HLPXGM09049780",
            "comments": "CAM400",
            "device_id": device.find(d => d.brand == 'Camara RECONYX').id
        }
    ]).then(function (x) {
        return queryInterface.sequelize.query(
          'INSERT INTO db_was_seeded (seeded) VALUES (7)')
      })
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('physical_devices', null, {}).then(function () {
      return queryInterface.sequelize.query(
        'DELETE FROM db_was_seeded WHERE seeded = 7')
    })
  }
};
