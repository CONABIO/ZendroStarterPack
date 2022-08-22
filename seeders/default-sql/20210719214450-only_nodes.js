'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seeds = await queryInterface.sequelize.query(
      'SELECT seeded FROM db_was_seeded')
    try {
      let seeded = seeds[0][2].seeded;
      console.log("Database was already seeded for nodes")
      return queryInterface.sequelize.query(
        'SELECT 1 FROM db_was_seeded')
    } catch {
      const rawData = await queryInterface.sequelize.query(
        `SELECT id,name FROM cumulus;` 
      );
      const cumulus = rawData[0];

      return queryInterface.bulkInsert('nodes', [
        {
          "nomenclatura": "2_14_0_687",
          "con_socio": 0,
          "fid": 687,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.794844,15.747781,1174]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '14').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_14_0_688",
          "con_socio": 0,
          "fid": 688,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.748452,15.744886,1022]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '14').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_14_1_674",
          "con_socio": 0,
          "fid": 674,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.803781,15.613011,1442]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '14').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_14_1_675",
          "con_socio": 0,
          "fid": 675,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.847167,15.660808,2038]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '14').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_14_1_676",
          "con_socio": 0,
          "fid": 676,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.800804,15.65793,2052]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '14').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_14_1_677",
          "con_socio": 0,
          "fid": 677,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.754442,15.655037,1902]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '14').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_14_1_680",
          "con_socio": 0,
          "fid": 680,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.890584,15.708597,1698]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '14').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_14_1_681",
          "con_socio": 0,
          "fid": 681,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.844204,15.705732,1321]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '14').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_14_1_685",
          "con_socio": 0,
          "fid": 685,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.887633,15.753527,1197]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '14').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_14_1_686",
          "con_socio": 0,
          "fid": 686,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.841238,15.750661,1107]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '14').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_23_0_689",
          "con_socio": 0,
          "fid": 689,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.416764,15.973792,1178]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '23').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_23_0_690",
          "con_socio": 0,
          "fid": 690,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.323709,15.970257,723]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '23').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_23_0_692",
          "con_socio": 0,
          "fid": 692,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.321866,16.015268,775]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '23').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_23_1_691",
          "con_socio": 0,
          "fid": 691,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.137613,15.963011,1491]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '23').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_23_1_693",
          "con_socio": 0,
          "fid": 693,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.13571,16.008019,1919]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '23').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "3_16_0_551",
          "con_socio": 0,
          "fid": 551,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.171767,15.680548,296]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '16').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_16_0_552",
          "con_socio": 0,
          "fid": 552,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.12539,15.677771,325]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '16').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_16_0_553",
          "con_socio": 0,
          "fid": 553,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.079015,15.67498,443]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '16').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_16_0_557",
          "con_socio": 0,
          "fid": 557,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.168907,15.725481,210]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '16').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_16_0_559",
          "con_socio": 0,
          "fid": 559,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.212455,15.773182,199]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '16').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_16_0_560",
          "con_socio": 0,
          "fid": 560,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.166046,15.770418,262]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '16').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_16_0_561",
          "con_socio": 0,
          "fid": 561,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.119639,15.767639,588]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '16').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_16_1_549",
          "con_socio": 0,
          "fid": 549,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.89648,15.61875,785]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '16').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_16_1_550",
          "con_socio": 0,
          "fid": 550,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.850129,15.615887,781]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '16').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_16_1_555",
          "con_socio": 0,
          "fid": 555,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.939901,15.66652,1443]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '16').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_16_1_556",
          "con_socio": 0,
          "fid": 556,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.893533,15.663671,1522]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '16').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_16_1_558",
          "con_socio": 0,
          "fid": 558,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.029737,15.717104,1370]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '16').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "4_21_0_342",
          "con_socio": 0,
          "fid": 342,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.860498,15.906705,33]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '21').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_21_0_346",
          "con_socio": 0,
          "fid": 346,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.811992,15.949768,219]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '21').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_21_1_339",
          "con_socio": 0,
          "fid": 339,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.001947,15.867424,86]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '21').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_21_1_340",
          "con_socio": 0,
          "fid": 340,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.000001,15.912421,257]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '21').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_21_1_341",
          "con_socio": 0,
          "fid": 341,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.953499,15.91053,192]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '21').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_21_1_343",
          "con_socio": 0,
          "fid": 343,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.998054,15.957423,393]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '21').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_21_1_344",
          "con_socio": 0,
          "fid": 344,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.951536,15.955531,385]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '21').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_21_1_345",
          "con_socio": 0,
          "fid": 345,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.90502,15.953625,402]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '21').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_21_1_347",
          "con_socio": 0,
          "fid": 347,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.996105,16.002429,429]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '21').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_21_1_348",
          "con_socio": 0,
          "fid": 348,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.949573,16.000537,570]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '21').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_21_1_349",
          "con_socio": 0,
          "fid": 349,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.903042,15.998629,624]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '21').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "7_15_0_1031",
          "con_socio": 0,
          "fid": 1031,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.744035,15.113434,6]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '15').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_15_0_1033",
          "con_socio": 0,
          "fid": 1033,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.876701,15.211811,9]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '15').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_15_0_1034",
          "con_socio": 0,
          "fid": 1034,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.830487,15.208945,6]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '15').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_15_0_1035",
          "con_socio": 0,
          "fid": 1035,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.919988,15.259542,3]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '15').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_15_0_1038",
          "con_socio": 0,
          "fid": 1038,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.316532,15.59893,4]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '15').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_15_0_1040",
          "con_socio": 0,
          "fid": 1040,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.447297,15.741842,-7]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '15').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_15_0_1041",
          "con_socio": 0,
          "fid": 1041,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.627501,15.842361,-9]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '15').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_15_1_1030",
          "con_socio": 0,
          "fid": 1030,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.790217,15.116327,1]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '15').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_15_1_1036",
          "con_socio": 0,
          "fid": 1036,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.183186,15.50086,1]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '15').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_15_1_1037",
          "con_socio": 0,
          "fid": 1037,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.226668,15.548534,3]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '15').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_15_1_1039",
          "con_socio": 0,
          "fid": 1039,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.493702,15.744518,1]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '15').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "2_14_0_679",
          "con_socio": 0,
          "fid": 679,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.615368,15.646272,1095]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '14').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_14_0_682",
          "con_socio": 0,
          "fid": 682,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.797825,15.702853,1117]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '14').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_14_0_683",
          "con_socio": 0,
          "fid": 683,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.705073,15.697051,1276]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '14').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_14_0_684",
          "con_socio": 0,
          "fid": 684,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.658701,15.694128,981]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '14').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "1_26_0_778",
          "con_socio": 0,
          "fid": 778,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.51484,16.597367,940]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '26').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_26_0_779",
          "con_socio": 0,
          "fid": 779,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.468089,16.595949,1489]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '26').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_26_0_781",
          "con_socio": 0,
          "fid": 781,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.560144,16.643853,1199]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '26').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_17_1_768",
          "con_socio": 0,
          "fid": 768,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.646863,16.294761,1490]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '17').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_17_1_769",
          "con_socio": 0,
          "fid": 769,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.553681,16.289484,816]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '17').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_17_1_770",
          "con_socio": 0,
          "fid": 770,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.507093,16.286824,1248]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '17').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_26_0_782",
          "con_socio": 0,
          "fid": 782,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.513377,16.642449,1563]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '26').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_26_0_783",
          "con_socio": 0,
          "fid": 783,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.466611,16.641031,1002]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '26').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_26_0_791",
          "con_socio": 0,
          "fid": 791,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.558695,16.68894,658]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '26').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_26_0_792",
          "con_socio": 0,
          "fid": 792,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.511913,16.687536,1836]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '26').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_26_0_793",
          "con_socio": 0,
          "fid": 793,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.465131,16.686117,990]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '26').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_26_1_784",
          "con_socio": 0,
          "fid": 784,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.326318,16.636688,1533]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '26').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_26_1_785",
          "con_socio": 0,
          "fid": 785,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.279556,16.635211,2244]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '26').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_26_1_786",
          "con_socio": 0,
          "fid": 786,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.232795,16.63372,1751]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '26').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_26_1_787",
          "con_socio": 0,
          "fid": 787,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.186035,16.632213,2257]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '26').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_26_1_794",
          "con_socio": 0,
          "fid": 794,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.324793,16.681773,2005]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '26').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_26_1_795",
          "con_socio": 0,
          "fid": 795,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.278016,16.680295,1721]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '26').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "2_23_0_695",
          "con_socio": 0,
          "fid": 695,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.366579,16.062061,1763]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '23').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_23_0_696",
          "con_socio": 0,
          "fid": 696,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.273466,16.058493,1971]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '23').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_23_0_699",
          "con_socio": 0,
          "fid": 699,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.411322,16.108844,2003]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '23').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_23_0_700",
          "con_socio": 0,
          "fid": 700,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.364749,16.107082,2498]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '23').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_23_1_694",
          "con_socio": 0,
          "fid": 694,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.089173,16.006171,1047]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '23').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_23_1_697",
          "con_socio": 0,
          "fid": 697,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.133805,16.053032,2362]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '23').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_23_1_698",
          "con_socio": 0,
          "fid": 698,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.087254,16.051183,816]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '23').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_23_1_701",
          "con_socio": 0,
          "fid": 701,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.131899,16.098049,2241]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '23').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_23_1_702",
          "con_socio": 0,
          "fid": 702,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.085333,16.096199,1140]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '23').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "3_8_0_562",
          "con_socio": 0,
          "fid": 562,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.319627,16.145337,342]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '8').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_8_0_563",
          "con_socio": 0,
          "fid": 563,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.45569,16.200272,463]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '8').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_8_0_564",
          "con_socio": 0,
          "fid": 564,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.362666,16.193623,298]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '8').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_8_0_566",
          "con_socio": 0,
          "fid": 566,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.312685,16.235219,239]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '8').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_8_0_567",
          "con_socio": 0,
          "fid": 567,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.266164,16.231856,228]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '8').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_8_1_568",
          "con_socio": 0,
          "fid": 568,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.169608,16.27003,338]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '8').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_8_1_569",
          "con_socio": 0,
          "fid": 569,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.123079,16.266622,657]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '8').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_8_1_570",
          "con_socio": 0,
          "fid": 570,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.076551,16.263199,345]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '8').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_8_1_571",
          "con_socio": 0,
          "fid": 571,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.166087,16.314976,480]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '8').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_8_1_572",
          "con_socio": 0,
          "fid": 572,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.119542,16.311567,282]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '8').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_8_1_573",
          "con_socio": 0,
          "fid": 573,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.073,16.308143,639]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '8').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "4_21_0_350",
          "con_socio": 0,
          "fid": 350,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.809984,15.994771,336]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '21').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_21_0_351",
          "con_socio": 0,
          "fid": 351,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.807974,16.039779,544]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '21').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_21_0_352",
          "con_socio": 0,
          "fid": 352,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.761431,16.037827,345]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '21').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_21_0_353",
          "con_socio": 0,
          "fid": 353,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.668351,16.03388,114]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '21').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_21_0_354",
          "con_socio": 0,
          "fid": 354,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.759405,16.082838,361]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '21').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "1_11_0_788",
          "con_socio": 0,
          "fid": 788,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.911105,16.367542,1707]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '11').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_11_0_789",
          "con_socio": 0,
          "fid": 789,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.864524,16.364366,1646]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '11').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_11_0_790",
          "con_socio": 0,
          "fid": 790,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.817947,16.361175,1220]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '11').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_17_1_763",
          "con_socio": 0,
          "fid": 763,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.649579,16.249764,1121]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '17').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_17_1_765",
          "con_socio": 0,
          "fid": 765,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.509854,16.24183,1451]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '17').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_17_1_766",
          "con_socio": 0,
          "fid": 766,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.463282,16.239156,1367]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '17').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_17_1_767",
          "con_socio": 0,
          "fid": 767,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.693457,16.297377,1394]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '17').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_26_0_777",
          "con_socio": 0,
          "fid": 777,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.561591,16.598769,817]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '26').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_11_1_803",
          "con_socio": 0,
          "fid": 803,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.854623,16.499292,2019]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '11').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_11_1_804",
          "con_socio": 0,
          "fid": 804,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.944601,16.550623,1757]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '11').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_11_1_805",
          "con_socio": 0,
          "fid": 805,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.897959,16.547456,1857]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '11').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_22_0_806",
          "con_socio": 0,
          "fid": 806,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.954893,16.948514,1786]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '22').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_22_0_810",
          "con_socio": 0,
          "fid": 810,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.046652,16.997385,2682]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '22').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_22_0_811",
          "con_socio": 0,
          "fid": 811,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.999784,16.995504,1773]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '22').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_22_0_812",
          "con_socio": 0,
          "fid": 812,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.952916,16.993609,1215]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '22').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_22_0_818",
          "con_socio": 0,
          "fid": 818,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.950938,17.038707,1981]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '22').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_22_1_814",
          "con_socio": 0,
          "fid": 814,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.765459,16.985881,1322]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '22').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_22_1_815",
          "con_socio": 0,
          "fid": 815,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.718598,16.983912,997]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '22').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_22_1_819",
          "con_socio": 0,
          "fid": 819,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.810298,17.032931,628]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '22').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_22_1_820",
          "con_socio": 0,
          "fid": 820,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.76342,17.030976,548]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '22').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_22_1_821",
          "con_socio": 0,
          "fid": 821,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.716544,17.029007,594]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '22').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_26_1_796",
          "con_socio": 0,
          "fid": 796,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.231239,16.678803,2258]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '26').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_26_1_797",
          "con_socio": 0,
          "fid": 797,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.184464,16.677296,2186]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '26').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_30_0_822",
          "con_socio": 0,
          "fid": 822,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.858693,17.173505,1605]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '30').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_30_0_823",
          "con_socio": 0,
          "fid": 823,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.811735,17.172508,1081]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '30').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_30_0_824",
          "con_socio": 0,
          "fid": 824,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.764777,17.171497,1233]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '30').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_30_1_807",
          "con_socio": 0,
          "fid": 807,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.766895,17.081224,1308]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '30').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_30_1_808",
          "con_socio": 0,
          "fid": 808,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.719968,17.080199,1337]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '30').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_30_1_809",
          "con_socio": 0,
          "fid": 809,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.673043,17.07916,1493]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '30').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_30_1_816",
          "con_socio": 0,
          "fid": 816,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.718895,17.125334,1649]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '30').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_30_1_817",
          "con_socio": 0,
          "fid": 817,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.671954,17.124293,2041]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '30').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_80_0_1103",
          "con_socio": 0,
          "fid": 1103,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.560512,17.062206,1882]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '80').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "2_10_0_703",
          "con_socio": 0,
          "fid": 703,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.674867,16.396482,1041]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '10').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_10_0_706",
          "con_socio": 0,
          "fid": 706,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.624907,16.4382,1264]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '10').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_10_0_710",
          "con_socio": 0,
          "fid": 710,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.668144,16.486426,1236]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '10').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_10_0_712",
          "con_socio": 0,
          "fid": 712,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.80468,16.541079,1327]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '10').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_10_0_713",
          "con_socio": 0,
          "fid": 713,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.71141,16.534643,1261]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '10').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_10_0_714",
          "con_socio": 0,
          "fid": 714,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.848012,16.589262,1362]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '10').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_10_0_715",
          "con_socio": 0,
          "fid": 715,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.754707,16.582853,892]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '10').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_10_1_704",
          "con_socio": 0,
          "fid": 704,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.764712,16.447911,2080]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '10').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_10_1_705",
          "con_socio": 0,
          "fid": 705,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.671507,16.441452,1543]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '10').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_10_1_707",
          "con_socio": 0,
          "fid": 707,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.808,16.496097,2167]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '10').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_10_1_708",
          "con_socio": 0,
          "fid": 708,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.761379,16.492888,1803]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '10').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_10_1_709",
          "con_socio": 0,
          "fid": 709,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.71476,16.489664,1373]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '10').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_10_1_711",
          "con_socio": 0,
          "fid": 711,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.851318,16.544275,2007]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '10').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_29_1_716",
          "con_socio": 0,
          "fid": 716,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.013559,17.153311,1473]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '29').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_29_1_718",
          "con_socio": 0,
          "fid": 718,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.872728,17.14948,1748]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '29').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "3_19_0_580",
          "con_socio": 0,
          "fid": 580,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.015851,16.952612,158]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '19').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_19_0_584",
          "con_socio": 0,
          "fid": 584,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-94.966714,16.995489,82]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '19').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_19_1_577",
          "con_socio": 0,
          "fid": 577,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-94.877668,16.90088,131]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '19').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_19_1_578",
          "con_socio": 0,
          "fid": 578,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-94.83085,16.898632,316]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '19').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_19_1_581",
          "con_socio": 0,
          "fid": 581,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-94.87534,16.945955,223]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '19').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_19_1_582",
          "con_socio": 0,
          "fid": 582,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-94.828507,16.943707,131]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '19').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_19_1_583",
          "con_socio": 0,
          "fid": 583,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-94.781674,16.941443,220]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '19').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_19_1_585",
          "con_socio": 0,
          "fid": 585,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-94.873011,16.991034,162]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '19').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_19_1_586",
          "con_socio": 0,
          "fid": 586,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-94.826162,16.988785,290]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '19').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_19_1_587",
          "con_socio": 0,
          "fid": 587,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-94.779315,16.986521,254]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '19').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_8_1_574",
          "con_socio": 0,
          "fid": 574,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.162563,16.359927,522]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '8').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_8_1_575",
          "con_socio": 0,
          "fid": 575,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.116003,16.356516,425]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '8').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_8_1_576",
          "con_socio": 0,
          "fid": 576,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.069446,16.353091,257]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '8').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "1_11_0_799",
          "con_socio": 0,
          "fid": 799,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.861226,16.409337,1551]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '11').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_11_1_800",
          "con_socio": 0,
          "fid": 800,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.904536,16.457491,1772]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '11').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_11_1_801",
          "con_socio": 0,
          "fid": 801,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.947876,16.505637,1983]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '11').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_11_1_802",
          "con_socio": 0,
          "fid": 802,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.901248,16.502471,2298]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '11').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_30_0_832",
          "con_socio": 0,
          "fid": 832,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.762657,17.261785,1732]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '30').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_30_1_831",
          "con_socio": 0,
          "fid": 831,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.669774,17.214572,1644]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '30').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_80_0_1107",
          "con_socio": 0,
          "fid": 1107,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.463095,17.148977,3074]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '80').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_80_0_1117",
          "con_socio": 0,
          "fid": 1117,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.598575,17.28951,2214]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '80').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_80_1_1105",
          "con_socio": 0,
          "fid": 1105,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.60388,17.154139,2739]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '80').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_80_1_1108",
          "con_socio": 0,
          "fid": 1108,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.697742,17.157506,2745]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '80').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_80_1_1109",
          "con_socio": 0,
          "fid": 1109,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.649059,17.200951,3062]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '80').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_80_1_1110",
          "con_socio": 0,
          "fid": 1110,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.602113,17.199259,2649]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '80').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_80_1_1112",
          "con_socio": 0,
          "fid": 1112,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.694268,17.247752,3000]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '80').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_80_1_1113",
          "con_socio": 0,
          "fid": 1113,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.647306,17.246075,2658]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '80').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_80_1_1115",
          "con_socio": 0,
          "fid": 1115,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.739508,17.294544,2890]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '80').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "2_29_0_723",
          "con_socio": 0,
          "fid": 723,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.104899,17.246066,2067]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '29').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_29_0_724",
          "con_socio": 0,
          "fid": 724,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.197609,17.293632,2633]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '29').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_29_0_725",
          "con_socio": 0,
          "fid": 725,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.150616,17.292428,2591]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '29').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_29_0_726",
          "con_socio": 0,
          "fid": 726,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.196363,17.33878,2486]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '29').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_29_0_727",
          "con_socio": 0,
          "fid": 727,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.149354,17.337575,2309]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '29').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_29_0_730",
          "con_socio": 0,
          "fid": 730,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.195115,17.38393,2462]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '29').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_29_1_717",
          "con_socio": 0,
          "fid": 717,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.919671,17.150772,1301]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '29').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_29_1_719",
          "con_socio": 0,
          "fid": 719,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.106175,17.200927,1088]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '29').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_29_1_720",
          "con_socio": 0,
          "fid": 720,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.059213,17.199693,1628]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '29').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_29_1_721",
          "con_socio": 0,
          "fid": 721,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.012253,17.198446,2359]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '29').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_29_1_722",
          "con_socio": 0,
          "fid": 722,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.151877,17.247285,2028]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '29').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "3_18_0_604",
          "con_socio": 0,
          "fid": 604,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.459878,17.052323,319]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '18').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_18_0_605",
          "con_socio": 0,
          "fid": 605,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.73828,17.113247,377]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '18').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_18_1_588",
          "con_socio": 0,
          "fid": 588,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.746381,16.978047,538]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '18').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_18_1_589",
          "con_socio": 0,
          "fid": 589,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.699556,16.975444,717]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '18').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_18_1_590",
          "con_socio": 0,
          "fid": 590,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.652733,16.972826,941]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '18').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_18_1_596",
          "con_socio": 0,
          "fid": 596,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.696843,17.020506,522]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '18').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_18_1_597",
          "con_socio": 0,
          "fid": 597,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.650004,17.017886,731]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '18').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_18_1_598",
          "con_socio": 0,
          "fid": 598,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.603168,17.015253,921]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '18').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_18_1_599",
          "con_socio": 0,
          "fid": 599,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.556333,17.012604,739]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '18').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_19_0_592",
          "con_socio": 0,
          "fid": 592,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-94.962112,17.085662,120]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '19').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "1_80_0_1104",
          "con_socio": 0,
          "fid": 1104,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.558732,17.107318,1967]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '80').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_80_0_1111",
          "con_socio": 0,
          "fid": 1111,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.508224,17.195831,2178]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '80').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_80_0_1114",
          "con_socio": 0,
          "fid": 1114,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.553384,17.242675,2283]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '80').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "3_19_0_593",
          "con_socio": 0,
          "fid": 593,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-94.868348,17.081204,73]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '19').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_19_0_594",
          "con_socio": 0,
          "fid": 594,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-94.821468,17.078952,172]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '19').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_19_0_601",
          "con_socio": 0,
          "fid": 601,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-94.866014,17.126294,135]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '19').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_9_0_611",
          "con_socio": 0,
          "fid": 611,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.185332,17.266587,236]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '9').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_9_0_612",
          "con_socio": 0,
          "fid": 612,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.138465,17.263177,170]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '9').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_9_1_607",
          "con_socio": 0,
          "fid": 607,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.4197,17.283413,250]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '9').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_9_1_608",
          "con_socio": 0,
          "fid": 608,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.372822,17.280077,173]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '9').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_9_1_609",
          "con_socio": 0,
          "fid": 609,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.325946,17.276727,207]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '9').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_9_1_610",
          "con_socio": 0,
          "fid": 610,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.232201,17.269981,404]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '9').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "1_22_1_828",
          "con_socio": 0,
          "fid": 828,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.714488,17.074105,919]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '22').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_30_0_829",
          "con_socio": 0,
          "fid": 829,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.81069,17.217651,1405]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '30').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_30_0_830",
          "con_socio": 0,
          "fid": 830,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.763717,17.216639,1651]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '30').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_30_0_833",
          "con_socio": 0,
          "fid": 833,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.761596,17.306934,2381]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '30').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_30_1_825",
          "con_socio": 0,
          "fid": 825,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.670864,17.169431,1971]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '30').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_80_0_1106",
          "con_socio": 0,
          "fid": 1106,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.510022,17.150713,2800]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '80').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_25_0_841",
          "con_socio": 0,
          "fid": 841,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.283241,17.900447,2367]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '25').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_25_1_839",
          "con_socio": 0,
          "fid": 839,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.143265,17.850741,1995]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '25').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_25_1_842",
          "con_socio": 0,
          "fid": 842,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.188857,17.897444,2007]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '25').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_25_1_843",
          "con_socio": 0,
          "fid": 843,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.187273,17.942627,1941]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '25').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_25_1_844",
          "con_socio": 0,
          "fid": 844,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.140067,17.941103,1648]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '25').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_25_1_845",
          "con_socio": 0,
          "fid": 845,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.280134,17.990818,2540]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '25').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_25_1_846",
          "con_socio": 0,
          "fid": 846,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.23291,17.989323,1652]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '25').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_25_1_847",
          "con_socio": 0,
          "fid": 847,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.185688,17.987813,1555]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '25').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_25_1_848",
          "con_socio": 0,
          "fid": 848,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.23134,18.034513,1398]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '25').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "2_24_0_740",
          "con_socio": 0,
          "fid": 740,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.848373,18.157585,1433]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '24').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_24_0_741",
          "con_socio": 0,
          "fid": 741,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.94126,18.206002,1669]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '24').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_24_0_742",
          "con_socio": 0,
          "fid": 742,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.892281,18.249601,1230]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '24').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_24_0_743",
          "con_socio": 0,
          "fid": 743,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.844973,18.247983,333]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '24').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_24_0_745",
          "con_socio": 0,
          "fid": 745,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.843271,18.293186,712]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '24').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_24_0_750",
          "con_socio": 0,
          "fid": 750,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.79423,18.336758,107]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '24').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_24_1_744",
          "con_socio": 0,
          "fid": 744,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.890595,18.294805,2053]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '24').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_24_1_746",
          "con_socio": 0,
          "fid": 746,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.98359,18.343205,2253]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '24').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_24_1_747",
          "con_socio": 0,
          "fid": 747,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.936249,18.341616,1279]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '24').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_24_1_748",
          "con_socio": 0,
          "fid": 748,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.888908,18.340011,1517]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '24').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_24_1_749",
          "con_socio": 0,
          "fid": 749,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.841568,18.338392,1172]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '24').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "3_9_0_615",
          "con_socio": 0,
          "fid": 615,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.134908,17.308208,82]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '9').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_9_0_616",
          "con_socio": 0,
          "fid": 616,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.318951,17.366803,146]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '9').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_9_0_617",
          "con_socio": 0,
          "fid": 617,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.225145,17.360053,71]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '9').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_9_0_618",
          "con_socio": 0,
          "fid": 618,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.178246,17.356655,63]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '9').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_9_1_613",
          "con_socio": 0,
          "fid": 613,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.228674,17.315015,250]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '9').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_9_1_614",
          "con_socio": 0,
          "fid": 614,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.18179,17.311619,256]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '9').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "4_28_0_356",
          "con_socio": 0,
          "fid": 356,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.607833,18.09126,2198]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '28').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_28_0_360",
          "con_socio": 0,
          "fid": 360,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.700942,18.139201,1763]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '28').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_28_0_361",
          "con_socio": 0,
          "fid": 361,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.653663,18.137838,1793]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '28').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_28_0_362",
          "con_socio": 0,
          "fid": 362,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.559108,18.135068,2256]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '28').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "1_25_0_838",
          "con_socio": 0,
          "fid": 838,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.237616,17.853772,2356]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '25').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_25_0_840",
          "con_socio": 0,
          "fid": 840,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.330435,17.901926,2131]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '25').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "4_28_0_365",
          "con_socio": 0,
          "fid": 365,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.699524,18.184406,1722]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '28').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_28_0_366",
          "con_socio": 0,
          "fid": 366,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.510351,18.178863,2113]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '28').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_28_1_357",
          "con_socio": 0,
          "fid": 357,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.418793,18.085602,1404]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '28').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_28_1_358",
          "con_socio": 0,
          "fid": 358,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.371535,18.08415,1457]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '28').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_28_1_364",
          "con_socio": 0,
          "fid": 364,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.370009,18.129348,1452]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '28').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_28_1_367",
          "con_socio": 0,
          "fid": 367,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.368482,18.174549,2277]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '28').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_28_1_368",
          "con_socio": 0,
          "fid": 368,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.414258,18.221207,2026]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '28').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_28_1_369",
          "con_socio": 0,
          "fid": 369,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.366953,18.219753,2260]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '28').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "5_27_0_134",
          "con_socio": 0,
          "fid": 134,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.647923,18.318674,1840]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '27').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_27_0_135",
          "con_socio": 0,
          "fid": 135,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.600582,18.317294,1718]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '27').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_27_0_137",
          "con_socio": 0,
          "fid": 137,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.505904,18.314489,1514]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '27').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_27_0_141",
          "con_socio": 0,
          "fid": 141,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.362363,18.355383,1385]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '27').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_27_1_136",
          "con_socio": 0,
          "fid": 136,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.553243,18.315899,1610]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '27').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_27_1_138",
          "con_socio": 0,
          "fid": 138,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.50442,18.359704,1996]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '27').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_27_1_139",
          "con_socio": 0,
          "fid": 139,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.457066,18.358279,1839]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '27').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_27_1_140",
          "con_socio": 0,
          "fid": 140,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.409714,18.356838,1396]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '27').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "1_25_0_835",
          "con_socio": 0,
          "fid": 835,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.286344,17.810088,2120]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '25').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_25_0_837",
          "con_socio": 0,
          "fid": 837,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.284793,17.855266,1933]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '25').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "4_28_0_355",
          "con_socio": 0,
          "fid": 355,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.609281,18.046062,2307]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '28').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_28_1_363",
          "con_socio": 0,
          "fid": 363,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.417282,18.1308,1797]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '28').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "5_27_0_142",
          "con_socio": 0,
          "fid": 142,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.455565,18.403496,1920]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '27').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_27_1_143",
          "con_socio": 0,
          "fid": 143,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.59622,18.45295,2060]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '27').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_27_1_144",
          "con_socio": 0,
          "fid": 144,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.548833,18.451553,2020]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '27').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_27_1_145",
          "con_socio": 0,
          "fid": 145,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.501448,18.450142,1872]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '27').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_27_1_146",
          "con_socio": 0,
          "fid": 146,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.454064,18.448716,1799]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '27').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "2_24_1_752",
          "con_socio": 0,
          "fid": 752,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.932902,18.43204,1679]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '24').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "3_20_0_623",
          "con_socio": 0,
          "fid": 623,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.126833,18.496109,884]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '20').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_20_0_624",
          "con_socio": 0,
          "fid": 624,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-94.937366,18.48732,235]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '20').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_20_0_639",
          "con_socio": 0,
          "fid": 639,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.169688,18.588667,941]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '20').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_20_0_642",
          "con_socio": 0,
          "fid": 642,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.214847,18.636018,400]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '20').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_20_0_643",
          "con_socio": 0,
          "fid": 643,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.167428,18.63387,592]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '20').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_20_1_631",
          "con_socio": 0,
          "fid": 631,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.219334,18.545613,975]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '20').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_20_1_632",
          "con_socio": 0,
          "fid": 632,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.12456,18.541306,833]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '20').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_20_1_637",
          "con_socio": 0,
          "fid": 637,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.264496,18.592946,527]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '20').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_20_1_641",
          "con_socio": 0,
          "fid": 641,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.074886,18.584328,165]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '20').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_4_1_626",
          "con_socio": 0,
          "fid": 626,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.550441,18.136737,289]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '4').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_4_1_627",
          "con_socio": 0,
          "fid": 627,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.50332,18.132809,293]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '4').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_4_1_635",
          "con_socio": 0,
          "fid": 635,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.499203,18.177862,271]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '4').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_5_1_1077",
          "con_socio": 0,
          "fid": 1077,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.81075,18.2613,305]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '5').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_20_1_638",
          "con_socio": 0,
          "fid": 638,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.217091,18.590814,863]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '20').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_5_1_1079",
          "con_socio": 0,
          "fid": 1079,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.78676,18.24545,309]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '5').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "4_34_0_391",
          "con_socio": 0,
          "fid": 391,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.00599,18.834278,168]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_34_0_393",
          "con_socio": 0,
          "fid": 393,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.005992,18.879547,226]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_34_0_394",
          "con_socio": 0,
          "fid": 394,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.958435,18.879542,312]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_34_1_386",
          "con_socio": 0,
          "fid": 386,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.768436,18.74357,650]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_34_1_388",
          "con_socio": 0,
          "fid": 388,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.863411,18.78895,440]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_34_1_389",
          "con_socio": 0,
          "fid": 389,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.815885,18.788899,293]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_34_1_390",
          "con_socio": 0,
          "fid": 390,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.768359,18.788834,716]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_34_1_392",
          "con_socio": 0,
          "fid": 392,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.863365,18.834216,558]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "7_12_0_1046",
          "con_socio": 0,
          "fid": 1046,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.801751,18.488384,9]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '12').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_12_1_1042",
          "con_socio": 0,
          "fid": 1042,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.085601,18.507405,5]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '12').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_12_1_1043",
          "con_socio": 0,
          "fid": 1043,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.038288,18.504272,2]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '12').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_12_1_1044",
          "con_socio": 0,
          "fid": 1044,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.896359,18.494784,-5]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '12').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_12_1_1045",
          "con_socio": 0,
          "fid": 1045,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.849054,18.491591,0]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '12').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_12_1_1047",
          "con_socio": 0,
          "fid": 1047,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.082324,18.552546,4]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '12').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_12_1_1048",
          "con_socio": 0,
          "fid": 1048,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.034995,18.549412,4]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '12').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "3_20_1_640",
          "con_socio": 0,
          "fid": 640,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.122286,18.586505,526]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '20').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "4_34_1_395",
          "con_socio": 0,
          "fid": 395,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.86332,18.879485,953]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "3_2_0_654",
          "con_socio": 0,
          "fid": 654,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.465433,18.542275,24]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '2').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "1_35_0_866",
          "con_socio": 0,
          "fid": 866,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.382672,19.414322,1808]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '35').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_35_0_867",
          "con_socio": 0,
          "fid": 867,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.33493,19.413804,2090]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '35').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "3_2_0_655",
          "con_socio": 0,
          "fid": 655,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.418206,18.538004,6]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '2').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "1_35_0_868",
          "con_socio": 0,
          "fid": 868,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.28719,19.41327,2517]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '35').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_81_0_1119",
          "con_socio": 0,
          "fid": 1119,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.244672,19.377477,2342]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '81').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "3_2_0_660",
          "con_socio": 0,
          "fid": 660,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.508207,18.591583,52]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '2').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_2_0_667",
          "con_socio": 0,
          "fid": 667,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.404735,18.673157,19]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '2').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_2_0_671",
          "con_socio": 0,
          "fid": 671,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.447528,18.722491,23]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '2').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_2_0_672",
          "con_socio": 0,
          "fid": 672,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.537663,18.776066,21]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '2').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_2_0_673",
          "con_socio": 0,
          "fid": 673,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.443045,18.767551,19]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '2').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_2_1_661",
          "con_socio": 0,
          "fid": 661,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.59828,18.645113,62]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '2').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_2_1_662",
          "con_socio": 0,
          "fid": 662,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.551013,18.640883,35]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '2').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_2_1_663",
          "con_socio": 0,
          "fid": 663,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.503748,18.636638,39]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '2').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_2_1_664",
          "con_socio": 0,
          "fid": 664,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.593849,18.690173,79]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '2').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_2_1_665",
          "con_socio": 0,
          "fid": 665,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.546566,18.685941,31]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '2').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_2_1_666",
          "con_socio": 0,
          "fid": 666,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.499286,18.681695,38]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '2').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_2_1_669",
          "con_socio": 0,
          "fid": 669,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.542116,18.731003,31]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '2').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_2_1_670",
          "con_socio": 0,
          "fid": 670,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.494821,18.726754,28]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '2').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_5_0_1084",
          "con_socio": 0,
          "fid": 1084,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.87911,18.48039,178]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '5').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_5_0_1085",
          "con_socio": 0,
          "fid": 1085,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.88905,18.43228,193]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '5').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_5_0_1088",
          "con_socio": 0,
          "fid": 1088,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.81478,18.50048,193]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '5').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "4_34_0_396",
          "con_socio": 0,
          "fid": 396,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.053567,18.92481,229]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_34_0_398",
          "con_socio": 0,
          "fid": 398,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.053585,18.970084,259]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_34_0_399",
          "con_socio": 0,
          "fid": 399,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.910818,18.970067,322]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_34_0_400",
          "con_socio": 0,
          "fid": 400,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.053603,19.015361,329]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_34_1_397",
          "con_socio": 0,
          "fid": 397,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.863275,18.924757,588]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_37_0_401",
          "con_socio": 0,
          "fid": 401,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.822751,19.396616,188]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '37').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_37_1_402",
          "con_socio": 0,
          "fid": 402,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.014665,19.438219,84]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '37').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_37_1_403",
          "con_socio": 0,
          "fid": 403,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.966922,19.439163,169]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '37').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "7_12_0_1052",
          "con_socio": 0,
          "fid": 1052,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.981045,18.636548,1]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '12').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_12_0_1053",
          "con_socio": 0,
          "fid": 1053,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.07248,18.687986,0]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '12').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_12_0_1054",
          "con_socio": 0,
          "fid": 1054,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.025104,18.684848,1]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '12').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_12_0_1055",
          "con_socio": 0,
          "fid": 1055,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.97773,18.681695,1]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '12').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_12_1_1050",
          "con_socio": 0,
          "fid": 1050,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.0317,18.594554,2]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '12').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_12_1_1051",
          "con_socio": 0,
          "fid": 1051,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.984357,18.591404,0]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '12').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "1_81_1_1122",
          "con_socio": 0,
          "fid": 1122,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.197006,19.422846,2389]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '81').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "7_1_1_1062",
          "con_socio": 0,
          "fid": 1062,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-87.653153,19.467762,5]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '1').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "1_35_1_886",
          "con_socio": 0,
          "fid": 886,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.285477,19.549169,2961]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '35').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_35_1_887",
          "con_socio": 0,
          "fid": 887,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.189901,19.548056,3303]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '35').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_35_1_889",
          "con_socio": 0,
          "fid": 889,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.237102,19.593924,3389]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '35').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_35_1_891",
          "con_socio": 0,
          "fid": 891,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.236514,19.63923,3290]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '35').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "4_37_0_404",
          "con_socio": 0,
          "fid": 404,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.871435,19.441007,238]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '37').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_37_0_405",
          "con_socio": 0,
          "fid": 405,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.823691,19.441907,229]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '37').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_37_0_409",
          "con_socio": 0,
          "fid": 409,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.824631,19.4872,241]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '37').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_37_0_413",
          "con_socio": 0,
          "fid": 413,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.873348,19.531596,213]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '37').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_37_0_415",
          "con_socio": 0,
          "fid": 415,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.922098,19.575978,282]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '37').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_37_1_407",
          "con_socio": 0,
          "fid": 407,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.015669,19.483511,215]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '37').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_37_1_408",
          "con_socio": 0,
          "fid": 408,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.96791,19.484456,220]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '37').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_37_1_411",
          "con_socio": 0,
          "fid": 411,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.016674,19.528805,120]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '37').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_37_1_412",
          "con_socio": 0,
          "fid": 412,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.968899,19.52975,258]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '37').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_37_1_414",
          "con_socio": 0,
          "fid": 414,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.017679,19.574101,125]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '37').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "5_82_0_1130",
          "con_socio": 0,
          "fid": 1130,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.784995,20.340752,2137]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '82').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_82_0_1131",
          "con_socio": 0,
          "fid": 1131,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.783917,20.386083,2000]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '82').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_82_0_1132",
          "con_socio": 0,
          "fid": 1132,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.687768,20.384019,1657]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '82').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "7_1_0_1063",
          "con_socio": 0,
          "fid": 1063,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-87.600843,19.508305,5]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '1').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_1_1_1056",
          "con_socio": 0,
          "fid": 1056,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-87.781303,19.161279,10]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '1').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_1_1_1057",
          "con_socio": 0,
          "fid": 1057,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-87.776584,19.206344,6]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '1').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_1_1_1058",
          "con_socio": 0,
          "fid": 1058,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-87.76241,19.341552,0]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '1').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_1_1_1059",
          "con_socio": 0,
          "fid": 1059,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-87.80518,19.39111,2]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '1').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "1_35_0_873",
          "con_socio": 0,
          "fid": 873,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.382133,19.45962,1849]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '35').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_35_0_874",
          "con_socio": 0,
          "fid": 874,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.334376,19.459101,2045]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '35').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_35_1_882",
          "con_socio": 0,
          "fid": 882,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.286049,19.503867,2404]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '35').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_35_1_885",
          "con_socio": 0,
          "fid": 885,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.333266,19.549703,2566]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '35').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "7_1_1_1061",
          "con_socio": 0,
          "fid": 1061,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-87.79574,19.481267,0]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '1').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "1_42_0_894",
          "con_socio": 0,
          "fid": 894,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.176953,20.812709,1689]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '42').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_42_0_896",
          "con_socio": 0,
          "fid": 896,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.322435,20.855927,1321]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '42').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_42_0_897",
          "con_socio": 0,
          "fid": 897,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.274185,20.856654,1321]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '42').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_42_0_898",
          "con_socio": 0,
          "fid": 898,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.225936,20.857365,1404]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '42').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_42_0_899",
          "con_socio": 0,
          "fid": 899,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.129435,20.858743,1480]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '42').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_42_1_895",
          "con_socio": 0,
          "fid": 895,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.370683,20.855185,1599]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '42').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_42_1_900",
          "con_socio": 0,
          "fid": 900,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.419746,20.899781,1402]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '42').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_42_1_901",
          "con_socio": 0,
          "fid": 901,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.371481,20.900538,1927]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '42').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_42_1_902",
          "con_socio": 0,
          "fid": 902,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.323216,20.901281,1640]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '42').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_42_1_903",
          "con_socio": 0,
          "fid": 903,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.46884,20.944362,904]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '42').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_42_1_904",
          "con_socio": 0,
          "fid": 904,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.42056,20.945135,1495]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '42').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_42_1_905",
          "con_socio": 0,
          "fid": 905,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.37228,20.945893,2057]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '42').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_42_1_906",
          "con_socio": 0,
          "fid": 906,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.323998,20.946636,1668]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '42').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_42_1_907",
          "con_socio": 0,
          "fid": 907,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.421375,20.990491,1343]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '42').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "2_38_0_758",
          "con_socio": 0,
          "fid": 758,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.534254,20.743496,1123]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '38').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_38_0_759",
          "con_socio": 0,
          "fid": 759,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.486053,20.742392,1090]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '38').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_38_0_760",
          "con_socio": 0,
          "fid": 760,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.581306,20.789927,1227]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '38').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_38_0_761",
          "con_socio": 0,
          "fid": 761,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.580156,20.835272,1081]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '38').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_38_0_762",
          "con_socio": 0,
          "fid": 762,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.626121,20.92704,1534]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '38').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_38_1_753",
          "con_socio": 0,
          "fid": 753,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.489593,20.606374,1563]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '38').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_38_1_754",
          "con_socio": 0,
          "fid": 754,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.441442,20.605257,1356]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '38').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_38_1_755",
          "con_socio": 0,
          "fid": 755,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.393291,20.604124,645]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '38').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_38_1_756",
          "con_socio": 0,
          "fid": 756,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.536582,20.652815,1597]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '38').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_38_1_757",
          "con_socio": 0,
          "fid": 757,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.487234,20.697052,1191]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '38').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "5_40_1_147",
          "con_socio": 0,
          "fid": 147,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.832286,20.994303,1591]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '40').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_40_1_148",
          "con_socio": 0,
          "fid": 148,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.783987,20.993609,1471]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '40').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_40_1_149",
          "con_socio": 0,
          "fid": 149,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.735688,20.992901,1354]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '40').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_82_0_1134",
          "con_socio": 0,
          "fid": 1134,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.686657,20.42935,1730]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '82').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_82_0_1135",
          "con_socio": 0,
          "fid": 1135,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.638567,20.428295,1686]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '82').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_82_0_1136",
          "con_socio": 0,
          "fid": 1136,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.781759,20.476749,1971]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '82').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_82_1_1137",
          "con_socio": 0,
          "fid": 1137,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.87588,20.569427,1669]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '82').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_82_1_1138",
          "con_socio": 0,
          "fid": 1138,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.922989,20.615747,1666]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '82').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_82_1_1139",
          "con_socio": 0,
          "fid": 1139,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.921955,20.661088,1300]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '82').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_82_1_1140",
          "con_socio": 0,
          "fid": 1140,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.873781,20.660108,1458]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '82').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_82_1_1141",
          "con_socio": 0,
          "fid": 1141,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.920921,20.706431,1337]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '82').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_82_1_1142",
          "con_socio": 0,
          "fid": 1142,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.87273,20.70545,1239]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '82').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_82_1_1143",
          "con_socio": 0,
          "fid": 1143,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.871679,20.750794,1471]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '82').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "7_7_0_0",
          "con_socio": 0,
          "fid": 0,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.471519,20.164095,3]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '7').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_7_0_1",
          "con_socio": 0,
          "fid": 1,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.467662,20.209283,3]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '7').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_7_0_2",
          "con_socio": 0,
          "fid": 2,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.463804,20.254473,0]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '7').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_7_0_4",
          "con_socio": 0,
          "fid": 4,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.456078,20.344859,0]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '7').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_7_0_9",
          "con_socio": 0,
          "fid": 9,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.448343,20.435251,1]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '7').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_7_1_10",
          "con_socio": 0,
          "fid": 10,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.400395,20.431595,0]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '7').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_7_1_11",
          "con_socio": 0,
          "fid": 11,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.352449,20.427924,0]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '7').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_7_1_3",
          "con_socio": 0,
          "fid": 3,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.412042,20.296013,0]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '7').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_7_1_5",
          "con_socio": 0,
          "fid": 5,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.408162,20.341206,1]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '7').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_7_1_6",
          "con_socio": 0,
          "fid": 6,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.360249,20.337537,2]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '7').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_7_1_7",
          "con_socio": 0,
          "fid": 7,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.40428,20.386399,0]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '7').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_7_1_8",
          "con_socio": 0,
          "fid": 8,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.35635,20.38273,2]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '7').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "1_41_0_909",
          "con_socio": 0,
          "fid": 909,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.991586,21.006358,2008]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '41').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_41_0_910",
          "con_socio": 0,
          "fid": 910,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.087895,21.052328,2270]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '41').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_42_0_892",
          "con_socio": 0,
          "fid": 892,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.320873,20.765224,1305]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '42').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_42_0_893",
          "con_socio": 0,
          "fid": 893,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.273421,20.811301,1417]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '42').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_39_1_925",
          "con_socio": 0,
          "fid": 925,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.152312,21.164633,1455]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '39').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_39_1_928",
          "con_socio": 0,
          "fid": 928,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.151352,21.209993,1789]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '39').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_39_1_931",
          "con_socio": 0,
          "fid": 931,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.19878,21.256247,1771]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '39').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_39_1_932",
          "con_socio": 0,
          "fid": 932,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.15039,21.255353,1921]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '39').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_39_1_934",
          "con_socio": 0,
          "fid": 934,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.197834,21.301609,1685]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '39').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_39_1_935",
          "con_socio": 0,
          "fid": 935,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.149428,21.300715,1628]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '39').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_39_1_936",
          "con_socio": 0,
          "fid": 936,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.148466,21.346078,2225]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '39').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_41_0_912",
          "con_socio": 0,
          "fid": 912,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.135929,21.097974,2179]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '41').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_41_0_913",
          "con_socio": 0,
          "fid": 913,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.039247,21.097396,2198]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '41').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_41_0_914",
          "con_socio": 0,
          "fid": 914,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.990906,21.097085,2047]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '41').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_41_0_915",
          "con_socio": 0,
          "fid": 915,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.942566,21.096758,1988]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '41').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_41_0_919",
          "con_socio": 0,
          "fid": 919,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.08728,21.143059,2060]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '41').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_41_1_911",
          "con_socio": 0,
          "fid": 911,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.232612,21.09849,2731]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '41').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_41_1_916",
          "con_socio": 0,
          "fid": 916,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.280711,21.144091,2662]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '41').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_41_1_917",
          "con_socio": 0,
          "fid": 917,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.232353,21.143856,2617]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '41').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_41_1_918",
          "con_socio": 0,
          "fid": 918,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.183995,21.143605,2361]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '41').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_41_1_922",
          "con_socio": 0,
          "fid": 922,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.280468,21.189458,2431]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '41').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_41_1_923",
          "con_socio": 0,
          "fid": 923,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.232094,21.189223,2583]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '41').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_41_1_924",
          "con_socio": 0,
          "fid": 924,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.18372,21.188973,2477]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '41').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_41_1_927",
          "con_socio": 0,
          "fid": 927,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.231835,21.234592,2507]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '41').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_45_0_937",
          "con_socio": 0,
          "fid": 937,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.430379,21.489487,1232]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '45').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "4_3_0_424",
          "con_socio": 0,
          "fid": 424,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.910649,20.856846,20]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '3').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_3_0_429",
          "con_socio": 0,
          "fid": 429,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.906249,20.902017,20]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '3').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_3_0_430",
          "con_socio": 0,
          "fid": 430,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.85818,20.897874,15]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '3').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_3_0_431",
          "con_socio": 0,
          "fid": 431,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.810114,20.893716,17]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '3').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_3_1_417",
          "con_socio": 0,
          "fid": 417,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.775384,20.754048,29]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '3').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_3_1_420",
          "con_socio": 0,
          "fid": 420,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.722914,20.795026,27]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '3').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_3_1_421",
          "con_socio": 0,
          "fid": 421,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.674888,20.790825,26]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '3').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_3_1_425",
          "con_socio": 0,
          "fid": 425,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.718454,20.840189,25]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '3').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_3_1_426",
          "con_socio": 0,
          "fid": 426,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.670412,20.835987,29]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '3').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_3_1_427",
          "con_socio": 0,
          "fid": 427,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.622374,20.83177,29]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '3').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_3_1_432",
          "con_socio": 0,
          "fid": 432,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.665933,20.88115,29]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '3').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_44_1_416",
          "con_socio": 0,
          "fid": 416,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.942965,21.31493,994]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '44').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_44_1_418",
          "con_socio": 0,
          "fid": 418,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.943621,21.360298,905]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '44').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_44_1_419",
          "con_socio": 0,
          "fid": 419,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.895189,21.360905,1067]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '44').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_44_1_422",
          "con_socio": 0,
          "fid": 422,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.944277,21.405668,869]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '44').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_44_1_423",
          "con_socio": 0,
          "fid": 423,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.895829,21.406275,1039]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '44').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_44_1_428",
          "con_socio": 0,
          "fid": 428,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.896469,21.451646,988]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '44').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "5_40_0_156",
          "con_socio": 0,
          "fid": 156,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.781745,21.129688,1639]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '40').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_40_0_157",
          "con_socio": 0,
          "fid": 157,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.780997,21.17505,2091]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '40').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_40_0_158",
          "con_socio": 0,
          "fid": 158,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.732633,21.174341,2266]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '40').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_40_0_159",
          "con_socio": 0,
          "fid": 159,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.828629,21.221108,1796]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '40').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_40_0_160",
          "con_socio": 0,
          "fid": 160,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.827896,21.266473,1918]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '40').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_40_0_161",
          "con_socio": 0,
          "fid": 161,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.827163,21.311839,2180]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '40').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_40_1_150",
          "con_socio": 0,
          "fid": 150,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.831555,21.039661,1395]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '40').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_40_1_151",
          "con_socio": 0,
          "fid": 151,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.78324,21.038968,1361]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '40').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_40_1_152",
          "con_socio": 0,
          "fid": 152,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.734925,21.038259,1243]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '40').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_40_1_153",
          "con_socio": 0,
          "fid": 153,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.830824,21.085021,1527]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '40').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_40_1_154",
          "con_socio": 0,
          "fid": 154,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.782493,21.084327,1497]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '40').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_40_1_155",
          "con_socio": 0,
          "fid": 155,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.734162,21.083618,1659]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '40').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "6_43_0_24",
          "con_socio": 0,
          "fid": 24,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.939707,21.459715,2136]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '43').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_43_0_25",
          "con_socio": 0,
          "fid": 25,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.891236,21.459372,2091]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '43').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "1_39_0_921",
          "con_socio": 0,
          "fid": 921,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.056593,21.117443,1478]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '39').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_39_0_929",
          "con_socio": 0,
          "fid": 929,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.102979,21.209084,1444]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '39').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_39_0_930",
          "con_socio": 0,
          "fid": 930,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.054607,21.20816,1044]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '39').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_39_0_933",
          "con_socio": 0,
          "fid": 933,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.102002,21.254444,1174]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '39').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_45_0_949",
          "con_socio": 0,
          "fid": 949,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.338168,21.763232,1330]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '45').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_45_0_950",
          "con_socio": 0,
          "fid": 950,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.289592,21.763964,1261]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '45').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_45_1_942",
          "con_socio": 0,
          "fid": 942,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.531609,21.714776,448]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '45').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_45_1_943",
          "con_socio": 0,
          "fid": 943,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.483052,21.715569,1029]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '45').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_45_1_944",
          "con_socio": 0,
          "fid": 944,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.434494,21.716347,1384]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '45').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_45_1_946",
          "con_socio": 0,
          "fid": 946,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.532466,21.76015,1358]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '45').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_45_1_947",
          "con_socio": 0,
          "fid": 947,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.483893,21.760943,1142]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '45').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_45_1_948",
          "con_socio": 0,
          "fid": 948,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.435318,21.761722,1433]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '45').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_45_1_951",
          "con_socio": 0,
          "fid": 951,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.533324,21.805525,488]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '45').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_45_1_952",
          "con_socio": 0,
          "fid": 952,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.484734,21.806319,779]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '45').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_45_1_953",
          "con_socio": 0,
          "fid": 953,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.436144,21.807097,1737]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '45').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_47_0_954",
          "con_socio": 0,
          "fid": 954,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.572812,21.988801,1254]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '47').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_47_0_955",
          "con_socio": 0,
          "fid": 955,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.620662,22.034941,1309]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '47').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_47_0_956",
          "con_socio": 0,
          "fid": 956,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.571988,22.034181,1249]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '47').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_47_0_957",
          "con_socio": 0,
          "fid": 957,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.523315,22.033405,1329]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '47').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_83_1_1144",
          "con_socio": 0,
          "fid": 1144,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.546544,21.9557,2051]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '83').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_83_1_1145",
          "con_socio": 0,
          "fid": 1145,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.546051,22.001083,2041]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '83').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_83_1_1146",
          "con_socio": 0,
          "fid": 1146,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.59424,22.046919,2286]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '83').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_83_1_1147",
          "con_socio": 0,
          "fid": 1147,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.545557,22.046467,1959]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '83').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "4_3_0_434",
          "con_socio": 0,
          "fid": 434,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.901847,20.947189,18]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '3').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_3_0_435",
          "con_socio": 0,
          "fid": 435,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.853762,20.943045,19]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '3').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_3_0_436",
          "con_socio": 0,
          "fid": 436,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.80568,20.938885,16]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '3').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_3_1_437",
          "con_socio": 0,
          "fid": 437,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.661451,20.926315,30]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '3').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_44_0_438",
          "con_socio": 0,
          "fid": 438,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.897752,21.54239,1216]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '44').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_44_0_439",
          "con_socio": 0,
          "fid": 439,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.800755,21.54356,1055]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '44').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_44_0_441",
          "con_socio": 0,
          "fid": 441,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.84988,21.588357,937]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '44').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_44_0_442",
          "con_socio": 0,
          "fid": 442,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.801974,21.634309,883]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '44').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_44_0_443",
          "con_socio": 0,
          "fid": 443,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.803195,21.725062,838]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '44').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "6_43_0_26",
          "con_socio": 0,
          "fid": 26,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.890861,21.504746,2172]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '43').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_43_0_27",
          "con_socio": 0,
          "fid": 27,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.841982,21.549763,2102]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '43').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_43_0_29",
          "con_socio": 0,
          "fid": 29,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.793071,21.594765,1982]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '43').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_43_0_32",
          "con_socio": 0,
          "fid": 32,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.792663,21.640142,1936]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '43').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_43_1_28",
          "con_socio": 0,
          "fid": 28,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.793479,21.549389,2069]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '43').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_43_1_30",
          "con_socio": 0,
          "fid": 30,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.744552,21.594376,1902]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '43').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_43_1_31",
          "con_socio": 0,
          "fid": 31,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.647514,21.59355,1937]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '43').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_43_1_33",
          "con_socio": 0,
          "fid": 33,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.695592,21.639348,1850]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '43').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_43_1_34",
          "con_socio": 0,
          "fid": 34,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.647056,21.638927,1831]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '43').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_43_1_35",
          "con_socio": 0,
          "fid": 35,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.598522,21.638491,1868]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '43').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "7_46_0_12",
          "con_socio": 0,
          "fid": 12,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.454075,21.696784,1]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '46').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_46_0_13",
          "con_socio": 0,
          "fid": 13,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.457586,21.83289,0]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '46').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_46_0_14",
          "con_socio": 0,
          "fid": 14,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.555976,21.87604,1]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '46').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_46_0_17",
          "con_socio": 0,
          "fid": 17,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.410148,21.879346,0]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '46').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_46_0_23",
          "con_socio": 0,
          "fid": 23,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.414779,22.060836,5]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '46').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_46_1_15",
          "con_socio": 0,
          "fid": 15,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.507368,21.877158,-1]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '46').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_46_1_16",
          "con_socio": 0,
          "fid": 16,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.458758,21.87826,-1]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '46').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_46_1_18",
          "con_socio": 0,
          "fid": 18,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.508557,21.922528,-1]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '46').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_46_1_19",
          "con_socio": 0,
          "fid": 19,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.509747,21.9679,-3]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '46').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_46_1_20",
          "con_socio": 0,
          "fid": 20,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.461105,21.969002,-1]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '46').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_46_1_21",
          "con_socio": 0,
          "fid": 21,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.510938,22.013272,-4]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '46').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_46_1_22",
          "con_socio": 0,
          "fid": 22,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.46228,22.014375,-1]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '46').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "1_45_0_939",
          "con_socio": 0,
          "fid": 939,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.383514,21.58099,1031]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '45').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_45_0_940",
          "con_socio": 0,
          "fid": 940,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.335794,21.627109,1233]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '45').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_45_0_941",
          "con_socio": 0,
          "fid": 941,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.288042,21.673214,1249]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '45').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_45_0_945",
          "con_socio": 0,
          "fid": 945,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.337376,21.717857,1221]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '45').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_47_1_964",
          "con_socio": 0,
          "fid": 964,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.471209,22.214135,1516]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '47').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_47_1_965",
          "con_socio": 0,
          "fid": 965,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.56786,22.261088,1339]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '47').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_47_1_966",
          "con_socio": 0,
          "fid": 966,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.519104,22.26031,1450]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '47').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_47_1_967",
          "con_socio": 0,
          "fid": 967,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.470349,22.259517,1509]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '47').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_49_0_968",
          "con_socio": 0,
          "fid": 968,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.06348,22.856625,1791]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '49').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_49_0_969",
          "con_socio": 0,
          "fid": 969,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.014503,22.857271,2017]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '49').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_49_0_970",
          "con_socio": 0,
          "fid": 970,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.965526,22.8579,1907]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '49').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_49_0_971",
          "con_socio": 0,
          "fid": 971,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.064185,22.902015,1743]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '49').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_49_0_972",
          "con_socio": 0,
          "fid": 972,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.015191,22.90266,1762]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '49').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_49_0_976",
          "con_socio": 0,
          "fid": 976,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.064891,22.947404,1770]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '49').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_49_0_977",
          "con_socio": 0,
          "fid": 977,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.01588,22.94805,1955]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '49').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_49_0_978",
          "con_socio": 0,
          "fid": 978,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.966869,22.94868,2013]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '49').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_49_0_982",
          "con_socio": 0,
          "fid": 982,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.016569,22.99344,1901]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '49').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_49_1_973",
          "con_socio": 0,
          "fid": 973,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.868207,22.904504,2084]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '49').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_49_1_974",
          "con_socio": 0,
          "fid": 974,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.819212,22.905087,2425]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '49').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_49_1_975",
          "con_socio": 0,
          "fid": 975,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.770216,22.905655,2478]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '49').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_49_1_979",
          "con_socio": 0,
          "fid": 979,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.868846,22.949894,2051]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '49').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_49_1_980",
          "con_socio": 0,
          "fid": 980,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.819834,22.950478,2170]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '49').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_49_1_981",
          "con_socio": 0,
          "fid": 981,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.770821,22.951046,2482]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '49').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_49_1_983",
          "con_socio": 0,
          "fid": 983,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.869485,22.995285,2298]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '49').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_49_1_984",
          "con_socio": 0,
          "fid": 984,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.820456,22.995869,2456]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '49').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_49_1_985",
          "con_socio": 0,
          "fid": 985,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.91917,23.040076,2535]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '49').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_83_0_1150",
          "con_socio": 0,
          "fid": 1150,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.642001,22.138127,1893]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '83').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_83_0_1152",
          "con_socio": 0,
          "fid": 1152,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.64154,22.183513,1908]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '83').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_83_0_1154",
          "con_socio": 0,
          "fid": 1154,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.689827,22.229322,1887]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '83').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_83_0_1155",
          "con_socio": 0,
          "fid": 1155,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.641078,22.228899,1753]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '83').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_83_0_1156",
          "con_socio": 0,
          "fid": 1156,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.592329,22.228462,1734]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '83').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_83_0_1157",
          "con_socio": 0,
          "fid": 1157,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.689382,22.274709,1771]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '83').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_83_1_1148",
          "con_socio": 0,
          "fid": 1148,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.593763,22.092304,2160]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '83').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_83_1_1149",
          "con_socio": 0,
          "fid": 1149,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.545063,22.091851,1915]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '83').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_83_1_1151",
          "con_socio": 0,
          "fid": 1151,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.544569,22.137236,1643]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '83').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "4_48_0_450",
          "con_socio": 0,
          "fid": 450,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.911326,22.495402,1567]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '48').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_48_0_451",
          "con_socio": 0,
          "fid": 451,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.862481,22.496,1782]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '48').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_48_0_454",
          "con_socio": 0,
          "fid": 454,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.960838,22.540177,1607]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '48').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_48_0_455",
          "con_socio": 0,
          "fid": 455,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.911977,22.54079,1592]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '48').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_48_0_456",
          "con_socio": 0,
          "fid": 456,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.863115,22.541388,1755]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '48').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_48_0_457",
          "con_socio": 0,
          "fid": 457,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.961506,22.585566,1748]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '48').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_48_0_458",
          "con_socio": 0,
          "fid": 458,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.912629,22.586179,1667]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '48').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_48_0_459",
          "con_socio": 0,
          "fid": 459,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.962175,22.630954,1634]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '48').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_48_1_444",
          "con_socio": 0,
          "fid": 444,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.104551,22.3567,922]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '48').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_48_1_445",
          "con_socio": 0,
          "fid": 445,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.105267,22.402086,1269]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '48').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_48_1_446",
          "con_socio": 0,
          "fid": 446,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.056457,22.402745,1646]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '48').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_48_1_447",
          "con_socio": 0,
          "fid": 447,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.057157,22.448131,970]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '48').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_48_1_448",
          "con_socio": 0,
          "fid": 448,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.106701,22.492859,1212]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '48').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_48_1_449",
          "con_socio": 0,
          "fid": 449,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.057858,22.493518,958]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '48').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_48_1_452",
          "con_socio": 0,
          "fid": 452,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.107419,22.538246,1513]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '48').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_48_1_453",
          "con_socio": 0,
          "fid": 453,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.058559,22.538905,1037]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '48').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "5_51_0_165",
          "con_socio": 0,
          "fid": 165,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.664268,23.288494,307]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '51').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_59_0_162",
          "con_socio": 0,
          "fid": 162,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.713406,23.087081,57]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '59').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_59_0_163",
          "con_socio": 0,
          "fid": 163,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.716045,23.13241,82]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '59').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_59_0_166",
          "con_socio": 0,
          "fid": 166,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.718685,23.177739,63]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '59').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "6_53_0_40",
          "con_socio": 0,
          "fid": 40,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.142998,24.046417,2122]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '53').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "1_47_1_959",
          "con_socio": 0,
          "fid": 959,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.569513,22.170323,1495]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '47').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_47_1_961",
          "con_socio": 0,
          "fid": 961,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.472068,22.168754,1428]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '47').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_47_1_962",
          "con_socio": 0,
          "fid": 962,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.568687,22.215705,1530]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '47').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_47_1_963",
          "con_socio": 0,
          "fid": 963,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.519948,22.214928,1521]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '47').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "4_50_0_477",
          "con_socio": 0,
          "fid": 477,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.359536,23.644913,271]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '50').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_50_0_478",
          "con_socio": 0,
          "fid": 478,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.310278,23.643753,205]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '50').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_50_1_460",
          "con_socio": 0,
          "fid": 460,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.315341,23.46224,502]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '50').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_50_1_461",
          "con_socio": 0,
          "fid": 461,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.266152,23.461066,359]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '50').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_50_1_462",
          "con_socio": 0,
          "fid": 462,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.412492,23.509921,542]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '50').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_50_1_463",
          "con_socio": 0,
          "fid": 463,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.363284,23.508777,524]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '50').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_50_1_464",
          "con_socio": 0,
          "fid": 464,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.314077,23.507619,364]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '50').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_50_1_465",
          "con_socio": 0,
          "fid": 465,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.264871,23.506444,300]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '50').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_50_1_467",
          "con_socio": 0,
          "fid": 467,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.41126,23.5553,398]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '50').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_50_1_468",
          "con_socio": 0,
          "fid": 468,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.362035,23.554156,483]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '50').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_50_1_469",
          "con_socio": 0,
          "fid": 469,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.312812,23.552997,307]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '50').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_54_0_482",
          "con_socio": 0,
          "fid": 482,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.442412,23.669502,155]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '54').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_54_0_486",
          "con_socio": 0,
          "fid": 486,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.544052,23.757398,145]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '54').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_54_0_487",
          "con_socio": 0,
          "fid": 487,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.49476,23.758828,241]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '54').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_54_0_488",
          "con_socio": 0,
          "fid": 488,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.445467,23.760243,266]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '54').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_54_0_489",
          "con_socio": 0,
          "fid": 489,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.448526,23.850982,285]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '54').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_54_1_472",
          "con_socio": 0,
          "fid": 472,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.636257,23.573016,128]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '54').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_54_1_475",
          "con_socio": 0,
          "fid": 475,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.687087,23.61691,85]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '54').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_54_1_476",
          "con_socio": 0,
          "fid": 476,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.637849,23.618385,277]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '54').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_54_1_479",
          "con_socio": 0,
          "fid": 479,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.688697,23.662278,143]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '54').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_54_1_480",
          "con_socio": 0,
          "fid": 480,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.639442,23.663754,282]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '54').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_54_1_483",
          "con_socio": 0,
          "fid": 483,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.690308,23.707647,165]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '54').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_54_1_484",
          "con_socio": 0,
          "fid": 484,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.641037,23.709123,249]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '54').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_54_1_485",
          "con_socio": 0,
          "fid": 485,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.642632,23.754491,90]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '54').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_60_0_1092",
          "con_socio": 0,
          "fid": 1092,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.786364,23.492582,260]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '60').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_60_0_1094",
          "con_socio": 0,
          "fid": 1094,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.789036,23.537908,262]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '60').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_60_0_1096",
          "con_socio": 0,
          "fid": 1096,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.840887,23.580762,1060]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '60').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_60_0_1097",
          "con_socio": 0,
          "fid": 1097,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.892771,23.623598,1004]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '60').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_60_0_1098",
          "con_socio": 0,
          "fid": 1098,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.843579,23.626087,818]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '60').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_60_1_1099",
          "con_socio": 0,
          "fid": 1099,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.745188,23.631019,387]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '60').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_60_1_1101",
          "con_socio": 0,
          "fid": 1101,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.797062,23.673886,271]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '60').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_60_1_1102",
          "con_socio": 0,
          "fid": 1102,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.747849,23.676345,151]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '60').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "5_51_0_169",
          "con_socio": 0,
          "fid": 169,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.71227,23.334924,314]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '51').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_51_0_170",
          "con_socio": 0,
          "fid": 170,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.663125,23.333876,359]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '51').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_51_0_180",
          "con_socio": 0,
          "fid": 180,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.710015,23.425689,289]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '51').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_51_0_182",
          "con_socio": 0,
          "fid": 182,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.708887,23.471071,238]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '51').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_51_0_183",
          "con_socio": 0,
          "fid": 183,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.659691,23.470021,310]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '51').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_51_1_171",
          "con_socio": 0,
          "fid": 171,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.61398,23.332812,555]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '51').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_51_1_176",
          "con_socio": 0,
          "fid": 176,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.612819,23.378194,505]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '51').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_51_1_181",
          "con_socio": 0,
          "fid": 181,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.611658,23.423575,619]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '51').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_51_1_184",
          "con_socio": 0,
          "fid": 184,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.610495,23.468956,466]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '51').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_51_1_185",
          "con_socio": 0,
          "fid": 185,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.609332,23.514337,422]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '51').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_59_0_177",
          "con_socio": 0,
          "fid": 177,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.773033,23.265945,142]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '59').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_59_0_178",
          "con_socio": 0,
          "fid": 178,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.723971,23.268396,135]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '59').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_59_1_167",
          "con_socio": 0,
          "fid": 167,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.620623,23.182592,199]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '59').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_59_1_168",
          "con_socio": 0,
          "fid": 168,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.571589,23.184995,236]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '59').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_59_1_174",
          "con_socio": 0,
          "fid": 174,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.67228,23.225503,136]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '59').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_59_1_175",
          "con_socio": 0,
          "fid": 175,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.623232,23.227922,283]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '59').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "6_53_0_36",
          "con_socio": 0,
          "fid": 36,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.093198,24.001384,2051]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '53').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_53_0_37",
          "con_socio": 0,
          "fid": 37,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.043792,24.001722,1973]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '53').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_53_1_38",
          "con_socio": 0,
          "fid": 38,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.895573,24.002642,1804]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '53').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_53_1_39",
          "con_socio": 0,
          "fid": 39,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.846166,24.002918,1936]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '53').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "4_50_0_470",
          "con_socio": 0,
          "fid": 470,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.214366,23.550632,141]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '50').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_50_0_471",
          "con_socio": 0,
          "fid": 471,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.165145,23.549426,118]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '50').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_50_0_473",
          "con_socio": 0,
          "fid": 473,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.311545,23.598375,252]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '50').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_50_0_474",
          "con_socio": 0,
          "fid": 474,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.213066,23.59601,119]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '50').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "1_56_1_992",
          "con_socio": 0,
          "fid": 992,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.262033,25.130107,2633]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '56').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_56_1_995",
          "con_socio": 0,
          "fid": 995,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.361126,25.176538,2670]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '56').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_56_1_996",
          "con_socio": 0,
          "fid": 996,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.311277,25.176012,2195]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '56').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_57_0_997",
          "con_socio": 0,
          "fid": 997,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.347148,25.194888,2148]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '57').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_57_1_993",
          "con_socio": 0,
          "fid": 993,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.146666,25.153642,2332]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '57').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_57_1_994",
          "con_socio": 0,
          "fid": 994,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.096834,25.154629,2547]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '57').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "4_58_0_490",
          "con_socio": 0,
          "fid": 490,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-107.073534,24.694748,201]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '58').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_58_0_494",
          "con_socio": 0,
          "fid": 494,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-107.075291,24.740097,153]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '58').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_58_0_501",
          "con_socio": 0,
          "fid": 501,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-107.078809,24.830791,192]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '58').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_58_0_502",
          "con_socio": 0,
          "fid": 502,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-107.229684,24.871245,145]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '58').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_58_0_503",
          "con_socio": 0,
          "fid": 503,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-107.130276,24.874521,158]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '58').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_58_0_504",
          "con_socio": 0,
          "fid": 504,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-107.030863,24.877735,183]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '58').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_58_1_491",
          "con_socio": 0,
          "fid": 491,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.974256,24.697927,278]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '58').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_58_1_492",
          "con_socio": 0,
          "fid": 492,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.924615,24.699492,495]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '58').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_58_1_493",
          "con_socio": 0,
          "fid": 493,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.874973,24.701042,637]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '58').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_58_1_495",
          "con_socio": 0,
          "fid": 495,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.975979,24.743276,467]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '58').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_58_1_496",
          "con_socio": 0,
          "fid": 496,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.926321,24.744843,297]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '58').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_58_1_497",
          "con_socio": 0,
          "fid": 497,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.876662,24.746393,595]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '58').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_58_1_498",
          "con_socio": 0,
          "fid": 498,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.977703,24.788625,319]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '58').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_58_1_499",
          "con_socio": 0,
          "fid": 499,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.928028,24.790192,391]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '58').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_58_1_500",
          "con_socio": 0,
          "fid": 500,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.878352,24.791743,763]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '58').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "5_52_0_188",
          "con_socio": 0,
          "fid": 188,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.918507,24.092245,1711]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '52').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_52_0_191",
          "con_socio": 0,
          "fid": 191,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.967591,24.137966,1724]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '52').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_52_0_192",
          "con_socio": 0,
          "fid": 192,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.918134,24.137632,1710]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '52').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_52_0_195",
          "con_socio": 0,
          "fid": 195,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.967235,24.183352,1736]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '52').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_52_0_197",
          "con_socio": 0,
          "fid": 197,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.917387,24.228403,1712]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '52').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_52_0_198",
          "con_socio": 0,
          "fid": 198,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.867896,24.228052,1694]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '52').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_52_1_186",
          "con_socio": 0,
          "fid": 186,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.066828,24.093202,2025]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '52').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_52_1_187",
          "con_socio": 0,
          "fid": 187,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.017387,24.092898,1833]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '52').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_52_1_189",
          "con_socio": 0,
          "fid": 189,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.066506,24.138588,2081]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '52').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_52_1_190",
          "con_socio": 0,
          "fid": 190,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.017049,24.138285,1820]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '52').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_52_1_194",
          "con_socio": 0,
          "fid": 194,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.01671,24.183671,1827]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '52').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_52_1_196",
          "con_socio": 0,
          "fid": 196,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.065862,24.22936,2045]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '52').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_55_0_199",
          "con_socio": 0,
          "fid": 199,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.213444,25.038821,1941]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '55').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_55_0_200",
          "con_socio": 0,
          "fid": 200,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.163648,25.038248,1524]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '55').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_55_0_201",
          "con_socio": 0,
          "fid": 201,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.262636,25.084743,1987]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '55').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_55_0_202",
          "con_socio": 0,
          "fid": 202,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.212202,25.129549,1802]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '55').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_55_0_203",
          "con_socio": 0,
          "fid": 203,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.112542,25.128387,2446]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '55').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_55_0_204",
          "con_socio": 0,
          "fid": 204,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.261429,25.17547,1557]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '55').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_55_1_205",
          "con_socio": 0,
          "fid": 205,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.06204,25.173144,1505]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '55').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_61_0_206",
          "con_socio": 0,
          "fid": 206,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-111.567627,24.939579,64]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '61').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_61_0_207",
          "con_socio": 0,
          "fid": 207,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-111.517975,24.942595,74]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '61').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "6_53_0_41",
          "con_socio": 0,
          "fid": 41,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.093575,24.046771,2034]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '53').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_53_0_42",
          "con_socio": 0,
          "fid": 42,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.044152,24.04711,2040]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '53').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_53_0_45",
          "con_socio": 0,
          "fid": 45,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.143392,24.091804,2218]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '53').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_53_0_46",
          "con_socio": 0,
          "fid": 46,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.093952,24.092158,2114]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '53').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_53_0_47",
          "con_socio": 0,
          "fid": 47,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.044512,24.092497,2055]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '53').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_53_1_43",
          "con_socio": 0,
          "fid": 43,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.895881,24.048031,1774]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '53').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_53_1_44",
          "con_socio": 0,
          "fid": 44,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.846457,24.048306,1928]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '53').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_53_1_48",
          "con_socio": 0,
          "fid": 48,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.945631,24.093127,1870]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '53').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_53_1_49",
          "con_socio": 0,
          "fid": 49,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.945957,24.138513,1803]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '53').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_53_1_50",
          "con_socio": 0,
          "fid": 50,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.995758,24.183592,1836]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '53').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "1_56_0_987",
          "con_socio": 0,
          "fid": 987,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.313622,24.994553,2771]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '56').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_56_0_989",
          "con_socio": 0,
          "fid": 989,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.412079,25.086321,2603]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '56').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_56_0_990",
          "con_socio": 0,
          "fid": 990,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.31245,25.085285,2132]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '56').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_56_1_991",
          "con_socio": 0,
          "fid": 991,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.311864,25.130649,2849]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '56').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_57_0_1005",
          "con_socio": 0,
          "fid": 1005,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.298449,25.241291,1852]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '57').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_57_0_1006",
          "con_socio": 0,
          "fid": 1006,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.248585,25.242326,1967]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '57').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_57_0_1010",
          "con_socio": 0,
          "fid": 1010,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.349477,25.28559,1858]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '57').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_57_0_1011",
          "con_socio": 0,
          "fid": 1011,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.299596,25.286641,1843]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '57').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_57_0_1012",
          "con_socio": 0,
          "fid": 1012,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.249715,25.287677,1930]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '57').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_57_0_998",
          "con_socio": 0,
          "fid": 998,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.247455,25.196974,2220]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '57').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_57_1_1000",
          "con_socio": 0,
          "fid": 1000,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.097911,25.199984,2249]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '57').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_57_1_1007",
          "con_socio": 0,
          "fid": 1007,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.148854,25.244349,2501]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '57').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_57_1_1008",
          "con_socio": 0,
          "fid": 1008,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.098988,25.245337,2484]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '57').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_57_1_1013",
          "con_socio": 0,
          "fid": 1013,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.14995,25.289701,2438]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '57').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_57_1_1014",
          "con_socio": 0,
          "fid": 1014,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.100066,25.290689,2306]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '57').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_57_1_999",
          "con_socio": 0,
          "fid": 999,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.14776,25.198996,2757]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '57').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "4_62_0_507",
          "con_socio": 0,
          "fid": 507,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.273479,25.877292,84]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '62').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_62_0_508",
          "con_socio": 0,
          "fid": 508,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.223405,25.879267,105]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '62').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_62_0_510",
          "con_socio": 0,
          "fid": 510,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.425937,25.916569,63]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '62').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_62_0_511",
          "con_socio": 0,
          "fid": 511,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.325762,25.920599,110]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '62').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_62_0_512",
          "con_socio": 0,
          "fid": 512,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.175487,25.926525,110]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '62').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_62_0_516",
          "con_socio": 0,
          "fid": 516,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.277866,25.967885,119]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '62').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_62_1_505",
          "con_socio": 0,
          "fid": 505,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.018888,25.796402,628]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '62').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_62_1_506",
          "con_socio": 0,
          "fid": 506,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.02099,25.841706,495]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '62').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_62_1_509",
          "con_socio": 0,
          "fid": 509,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.023094,25.887008,273]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '62').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_62_1_513",
          "con_socio": 0,
          "fid": 513,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.075296,25.930397,124]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '62').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_62_1_514",
          "con_socio": 0,
          "fid": 514,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.025199,25.932309,144]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '62').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_62_1_515",
          "con_socio": 0,
          "fid": 515,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-107.9751,25.934205,276]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '62').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_62_1_517",
          "con_socio": 0,
          "fid": 517,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.027305,25.977607,555]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '62').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_62_1_518",
          "con_socio": 0,
          "fid": 518,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-107.977189,25.979504,556]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '62').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "5_55_1_208",
          "con_socio": 0,
          "fid": 208,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.11123,25.21911,908]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '55').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_55_1_209",
          "con_socio": 0,
          "fid": 209,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.061366,25.218504,547]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '55').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_55_1_213",
          "con_socio": 0,
          "fid": 213,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.110573,25.264469,651]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '55').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_55_1_219",
          "con_socio": 0,
          "fid": 219,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.209714,25.310991,1593]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '55').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_55_1_221",
          "con_socio": 0,
          "fid": 221,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.109916,25.309827,1149]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '55').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_61_0_214",
          "con_socio": 0,
          "fid": 214,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-111.574266,25.030118,70]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '61').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_61_0_215",
          "con_socio": 0,
          "fid": 215,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-111.52458,25.033136,77]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '61').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_61_0_225",
          "con_socio": 0,
          "fid": 225,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-111.580914,25.120652,66]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '61').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_61_1_210",
          "con_socio": 0,
          "fid": 210,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-111.421931,24.993855,96]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '61').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_61_1_211",
          "con_socio": 0,
          "fid": 211,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-111.372255,24.996825,124]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '61').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_61_1_212",
          "con_socio": 0,
          "fid": 212,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-111.322576,24.99978,175]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '61').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_61_1_216",
          "con_socio": 0,
          "fid": 216,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-111.4252,25.039127,120]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '61').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_61_1_217",
          "con_socio": 0,
          "fid": 217,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-111.375507,25.042098,152]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '61').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_61_1_218",
          "con_socio": 0,
          "fid": 218,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-111.325811,25.045054,196]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '61').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_61_1_222",
          "con_socio": 0,
          "fid": 222,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-111.428471,25.084397,121]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '61').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_61_1_223",
          "con_socio": 0,
          "fid": 223,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-111.378761,25.08737,140]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '61').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_61_1_224",
          "con_socio": 0,
          "fid": 224,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-111.329048,25.090326,148]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '61').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_65_0_226",
          "con_socio": 0,
          "fid": 226,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.765245,26.218252,1087]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '65').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_65_0_227",
          "con_socio": 0,
          "fid": 227,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.714995,26.218802,1099]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '65').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_65_0_228",
          "con_socio": 0,
          "fid": 228,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.765864,26.263575,1094]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '65').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_65_0_229",
          "con_socio": 0,
          "fid": 229,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.715597,26.264125,1099]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '65').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "6_63_0_52",
          "con_socio": 0,
          "fid": 52,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.022376,26.24466,1887]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '63').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_63_0_53",
          "con_socio": 0,
          "fid": 53,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.972123,26.245607,1769]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '63').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_63_1_51",
          "con_socio": 0,
          "fid": 51,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.870609,26.202135,1791]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '63').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_63_1_54",
          "con_socio": 0,
          "fid": 54,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.871615,26.247454,1782]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '63').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_63_1_55",
          "con_socio": 0,
          "fid": 55,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.82136,26.248353,1702]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '63').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "1_17_0_1423",
          "con_socio": 0,
          "fid": 1423,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.468829,16.149184,1088]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '17').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_56_1_1003",
          "con_socio": 0,
          "fid": 1003,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.260824,25.220831,1988]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '56').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_56_1_1009",
          "con_socio": 0,
          "fid": 1009,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.359985,25.26726,2349]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '56').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_57_0_1004",
          "con_socio": 0,
          "fid": 1004,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.348312,25.240239,2049]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '57').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "4_71_1_523",
          "con_socio": 0,
          "fid": 523,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.982831,26.936564,676]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '71').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_71_1_524",
          "con_socio": 0,
          "fid": 524,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.932356,26.93876,322]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '71').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_71_1_526",
          "con_socio": 0,
          "fid": 526,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.035783,26.979589,497]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '71').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_71_1_527",
          "con_socio": 0,
          "fid": 527,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.038263,27.024824,698]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '71').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_71_1_528",
          "con_socio": 0,
          "fid": 528,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.987754,27.027037,541]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '71').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "5_65_0_230",
          "con_socio": 0,
          "fid": 230,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.665329,26.264659,1098]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '65').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_65_0_231",
          "con_socio": 0,
          "fid": 231,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.766483,26.308896,1106]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '65').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_65_1_232",
          "con_socio": 0,
          "fid": 232,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.616193,26.355819,1121]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '65').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_65_1_233",
          "con_socio": 0,
          "fid": 233,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.56589,26.356322,1381]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '65').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_65_1_234",
          "con_socio": 0,
          "fid": 234,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.616761,26.401137,1150]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '65').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_65_1_235",
          "con_socio": 0,
          "fid": 235,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.566439,26.40164,1340]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '65').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_65_1_236",
          "con_socio": 0,
          "fid": 236,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.617328,26.446453,1190]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '65').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_65_1_237",
          "con_socio": 0,
          "fid": 237,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.566989,26.446956,1300]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '65').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_65_1_238",
          "con_socio": 0,
          "fid": 238,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.516649,26.447443,1354]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '65').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_66_0_239",
          "con_socio": 0,
          "fid": 239,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.140403,26.670389,299]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '66').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_66_0_240",
          "con_socio": 0,
          "fid": 240,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.240637,26.716834,372]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '66').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_66_0_241",
          "con_socio": 0,
          "fid": 241,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.190193,26.71627,331]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '66').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_66_0_242",
          "con_socio": 0,
          "fid": 242,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.240018,26.762134,380]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '66').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_66_0_243",
          "con_socio": 0,
          "fid": 243,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.189556,26.76157,321]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '66').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_66_0_244",
          "con_socio": 0,
          "fid": 244,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.139095,26.76099,290]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '66').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_66_1_245",
          "con_socio": 0,
          "fid": 245,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.340358,26.808511,729]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '66').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_66_1_246",
          "con_socio": 0,
          "fid": 246,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.289878,26.807979,515]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '66').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_66_1_247",
          "con_socio": 0,
          "fid": 247,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.339774,26.853807,703]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '66').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_66_1_248",
          "con_socio": 0,
          "fid": 248,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.289276,26.853275,445]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '66').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_66_1_249",
          "con_socio": 0,
          "fid": 249,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.238778,26.852726,353]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '66').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_66_1_250",
          "con_socio": 0,
          "fid": 250,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.389705,26.899616,1340]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '66').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_66_1_251",
          "con_socio": 0,
          "fid": 251,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.339189,26.8991,478]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '66').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_66_1_252",
          "con_socio": 0,
          "fid": 252,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.288673,26.898567,335]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '66').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_66_1_253",
          "con_socio": 0,
          "fid": 253,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.389138,26.944907,840]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '66').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "6_63_0_56",
          "con_socio": 0,
          "fid": 56,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.123974,26.288033,1902]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '63').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_63_0_57",
          "con_socio": 0,
          "fid": 57,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.073705,26.289012,1880]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '63').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_63_0_58",
          "con_socio": 0,
          "fid": 58,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.023436,26.289975,1901]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '63').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_63_0_59",
          "con_socio": 0,
          "fid": 59,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.973165,26.290923,1778]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '63').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_63_0_62",
          "con_socio": 0,
          "fid": 62,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.024496,26.335289,1852]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '63').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_63_1_60",
          "con_socio": 0,
          "fid": 60,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.872622,26.29277,1742]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '63').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_63_1_61",
          "con_socio": 0,
          "fid": 61,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.822349,26.29367,1619]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '63').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_63_1_63",
          "con_socio": 0,
          "fid": 63,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.923919,26.337168,1686]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '63').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_63_1_64",
          "con_socio": 0,
          "fid": 64,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.873629,26.338084,1625]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '63').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_64_0_65",
          "con_socio": 0,
          "fid": 65,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.121441,26.485859,1187]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '64').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_64_0_66",
          "con_socio": 0,
          "fid": 66,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.172555,26.53049,1193]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '64').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_64_0_67",
          "con_socio": 0,
          "fid": 67,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.274091,26.574392,1212]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '64').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_64_0_68",
          "con_socio": 0,
          "fid": 68,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.173319,26.575797,1188]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '64').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_64_0_69",
          "con_socio": 0,
          "fid": 69,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.122931,26.576476,1178]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '64').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_64_0_70",
          "con_socio": 0,
          "fid": 70,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.072544,26.577138,1168]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '64').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_64_1_71",
          "con_socio": 0,
          "fid": 71,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.922053,26.624337,1119]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '64').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_64_1_72",
          "con_socio": 0,
          "fid": 72,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.871646,26.624936,1118]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '64').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_64_1_73",
          "con_socio": 0,
          "fid": 73,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.821238,26.62552,1114]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '64').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_64_1_74",
          "con_socio": 0,
          "fid": 74,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.922729,26.669641,1114]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '64').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_64_1_75",
          "con_socio": 0,
          "fid": 75,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.872304,26.67024,1112]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '64').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_64_1_76",
          "con_socio": 0,
          "fid": 76,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.821878,26.670824,1112]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '64').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_64_1_77",
          "con_socio": 0,
          "fid": 77,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.923405,26.714942,1107]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '64').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_64_1_78",
          "con_socio": 0,
          "fid": 78,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.872962,26.715542,1107]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '64').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_64_1_79",
          "con_socio": 0,
          "fid": 79,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.822519,26.716126,1113]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '64').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "4_71_0_529",
          "con_socio": 0,
          "fid": 529,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.937243,27.029235,380]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '71').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_71_1_519",
          "con_socio": 0,
          "fid": 519,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.030828,26.889112,490]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '71').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_71_1_520",
          "con_socio": 0,
          "fid": 520,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.980373,26.891323,340]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '71').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_71_1_522",
          "con_socio": 0,
          "fid": 522,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.033305,26.934352,648]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '71').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "1_70_0_1020",
          "con_socio": 0,
          "fid": 1020,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.784077,27.651561,2139]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '70').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_70_1_1021",
          "con_socio": 0,
          "fid": 1021,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.990757,27.735838,2242]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '70').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_70_1_1022",
          "con_socio": 0,
          "fid": 1022,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.939937,27.737404,2553]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '70').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_70_1_1023",
          "con_socio": 0,
          "fid": 1023,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.889116,27.738954,2757]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '70').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_70_1_1024",
          "con_socio": 0,
          "fid": 1024,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.992527,27.781055,2338]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '70').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_70_1_1025",
          "con_socio": 0,
          "fid": 1025,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.941689,27.782621,2546]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '70').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_70_1_1026",
          "con_socio": 0,
          "fid": 1026,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.890849,27.784172,2424]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '70').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_70_1_1027",
          "con_socio": 0,
          "fid": 1027,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.994298,27.826268,2446]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '70').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_70_1_1028",
          "con_socio": 0,
          "fid": 1028,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.943442,27.827835,2448]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '70').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_70_1_1029",
          "con_socio": 0,
          "fid": 1029,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.892584,27.829386,2003]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '70').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "4_71_0_530",
          "con_socio": 0,
          "fid": 530,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.141792,27.06558,362]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '71').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_71_0_531",
          "con_socio": 0,
          "fid": 531,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.09377,27.113055,259]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '71').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_71_0_532",
          "con_socio": 0,
          "fid": 532,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.197388,27.153771,135]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '71').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_71_0_533",
          "con_socio": 0,
          "fid": 533,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.146831,27.156034,144]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '71').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "5_68_0_269",
          "con_socio": 0,
          "fid": 269,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.024382,27.855077,1068]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '68').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_68_0_270",
          "con_socio": 0,
          "fid": 270,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.973485,27.855392,1080]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '68').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_68_0_271",
          "con_socio": 0,
          "fid": 271,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.126575,27.899633,1048]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '68').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_68_0_272",
          "con_socio": 0,
          "fid": 272,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.07566,27.899981,1065]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '68').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_68_0_273",
          "con_socio": 0,
          "fid": 273,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.024746,27.900312,1092]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '68').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_68_0_274",
          "con_socio": 0,
          "fid": 274,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.126975,27.944865,1055]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '68').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_68_1_275",
          "con_socio": 0,
          "fid": 275,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.076425,27.990441,1457]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '68').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_68_1_276",
          "con_socio": 0,
          "fid": 276,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.025474,27.990773,1548]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '68').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_68_1_277",
          "con_socio": 0,
          "fid": 277,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.974523,27.991088,1444]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '68').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_68_1_278",
          "con_socio": 0,
          "fid": 278,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.076807,28.035667,1547]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '68').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_68_1_279",
          "con_socio": 0,
          "fid": 279,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.025838,28.035998,1503]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '68').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_68_1_280",
          "con_socio": 0,
          "fid": 280,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.974869,28.036314,1572]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '68').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_72_0_255",
          "con_socio": 0,
          "fid": 255,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.277507,26.827227,2]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '72').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_72_0_256",
          "con_socio": 0,
          "fid": 256,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.432521,26.861635,0]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '72').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_72_0_257",
          "con_socio": 0,
          "fid": 257,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.382175,26.865234,1]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '72').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_72_0_258",
          "con_socio": 0,
          "fid": 258,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.331826,26.868817,8]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '72').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_72_1_259",
          "con_socio": 0,
          "fid": 259,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.44057,26.951936,33]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '72').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_72_1_260",
          "con_socio": 0,
          "fid": 260,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.390189,26.955537,58]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '72').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_72_1_261",
          "con_socio": 0,
          "fid": 261,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.339805,26.959123,49]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '72').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_72_1_262",
          "con_socio": 0,
          "fid": 262,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.444598,26.997083,107]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '72').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_72_1_263",
          "con_socio": 0,
          "fid": 263,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.3942,27.000685,77]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '72').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_72_1_264",
          "con_socio": 0,
          "fid": 264,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.343799,27.004271,59]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '72').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_72_1_265",
          "con_socio": 0,
          "fid": 265,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.44863,27.042227,124]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '72').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_72_1_266",
          "con_socio": 0,
          "fid": 266,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.398214,27.04583,91]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '72').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_72_1_267",
          "con_socio": 0,
          "fid": 267,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.347795,27.049418,62]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '72').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "6_69_0_80",
          "con_socio": 0,
          "fid": 80,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.362275,27.21069,1529]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '69').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_69_0_81",
          "con_socio": 0,
          "fid": 81,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.363816,27.255945,1556]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '69').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_69_0_82",
          "con_socio": 0,
          "fid": 82,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.313179,27.257315,1485]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '69').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_69_0_83",
          "con_socio": 0,
          "fid": 83,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.365358,27.301198,1577]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '69').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_69_0_84",
          "con_socio": 0,
          "fid": 84,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.314703,27.302568,1500]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '69').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_69_0_86",
          "con_socio": 0,
          "fid": 86,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.3669,27.346448,1619]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '69').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_69_0_87",
          "con_socio": 0,
          "fid": 87,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.316228,27.347818,1488]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '69').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_69_1_85",
          "con_socio": 0,
          "fid": 85,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.061412,27.309177,1538]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '69').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_69_1_88",
          "con_socio": 0,
          "fid": 88,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.113526,27.353139,1487]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '69').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_69_1_89",
          "con_socio": 0,
          "fid": 89,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.267062,27.394421,1532]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '69').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_69_1_90",
          "con_socio": 0,
          "fid": 90,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.165675,27.397082,1457]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '69').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_69_1_91",
          "con_socio": 0,
          "fid": 91,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.268571,27.439666,1628]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '69').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_69_1_92",
          "con_socio": 0,
          "fid": 92,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.21786,27.441005,1462]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '69').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "1_70_0_1017",
          "con_socio": 0,
          "fid": 1017,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-107.038005,27.643815,1915]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '70').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_70_0_1018",
          "con_socio": 0,
          "fid": 1018,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.987222,27.645396,1975]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '70').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_70_0_1019",
          "con_socio": 0,
          "fid": 1019,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.936437,27.646961,2141]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '70').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_85_0_1177",
          "con_socio": 0,
          "fid": 1177,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.2568,29.681217,2206]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '85').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "4_73_0_534",
          "con_socio": 0,
          "fid": 534,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.100313,28.60582,480]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '73').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_73_0_535",
          "con_socio": 0,
          "fid": 535,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.049194,28.608362,529]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '73').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_73_0_536",
          "con_socio": 0,
          "fid": 536,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.998073,28.610889,433]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '73').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_73_0_537",
          "con_socio": 0,
          "fid": 537,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.103205,28.650929,503]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '73').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_73_0_538",
          "con_socio": 0,
          "fid": 538,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.208403,28.690899,528]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '73').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_73_0_539",
          "con_socio": 0,
          "fid": 539,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.211334,28.736,567]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '73').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_73_1_540",
          "con_socio": 0,
          "fid": 540,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.108993,28.741138,694]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '73').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_73_1_541",
          "con_socio": 0,
          "fid": 541,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.05782,28.743683,647]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '73').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_73_1_542",
          "con_socio": 0,
          "fid": 542,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.006644,28.746211,507]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '73').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_73_1_543",
          "con_socio": 0,
          "fid": 543,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.111891,28.786237,710]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '73').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_73_1_545",
          "con_socio": 0,
          "fid": 545,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.009505,28.791311,546]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '73').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_73_1_546",
          "con_socio": 0,
          "fid": 546,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.11479,28.831332,627]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '73').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_73_1_547",
          "con_socio": 0,
          "fid": 547,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.06358,28.833878,617]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '73').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_73_1_548",
          "con_socio": 0,
          "fid": 548,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.012368,28.836408,561]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '73').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "5_67_0_290",
          "con_socio": 0,
          "fid": 290,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.314038,28.762131,990]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '67').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_67_0_291",
          "con_socio": 0,
          "fid": 291,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.211512,28.762296,1446]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '67').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_67_0_292",
          "con_socio": 0,
          "fid": 292,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.160249,28.762355,1702]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '67').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_67_0_293",
          "con_socio": 0,
          "fid": 293,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.057722,28.762424,1385]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '67').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_67_0_294",
          "con_socio": 0,
          "fid": 294,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.211587,28.807466,1596]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '67').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_67_1_284",
          "con_socio": 0,
          "fid": 284,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.00645,28.581721,926]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '67').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_67_1_285",
          "con_socio": 0,
          "fid": 285,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.108869,28.626868,862]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '67').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_67_1_286",
          "con_socio": 0,
          "fid": 286,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.006452,28.626904,887]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '67').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_67_1_287",
          "con_socio": 0,
          "fid": 287,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.108908,28.672048,1020]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '67').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_67_1_288",
          "con_socio": 0,
          "fid": 288,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.057681,28.672074,1027]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '67').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_67_1_289",
          "con_socio": 0,
          "fid": 289,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.006455,28.672084,986]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '67').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_68_1_281",
          "con_socio": 0,
          "fid": 281,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.07719,28.080889,1403]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '68').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_68_1_282",
          "con_socio": 0,
          "fid": 282,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.026203,28.081221,1629]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '68').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_68_1_283",
          "con_socio": 0,
          "fid": 283,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.975216,28.081537,1742]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '68').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_75_0_304",
          "con_socio": 0,
          "fid": 304,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.991686,29.599248,458]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '75').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_75_1_295",
          "con_socio": 0,
          "fid": 295,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-111.23921,29.449878000000002,430]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '75').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_75_1_296",
          "con_socio": 0,
          "fid": 296,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-111.187772,29.452774,472]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '75').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_75_1_297",
          "con_socio": 0,
          "fid": 297,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-111.136332,29.455654,520]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '75').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_75_1_298",
          "con_socio": 0,
          "fid": 298,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-111.24253,29.494895,450]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '75').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_75_1_299",
          "con_socio": 0,
          "fid": 299,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-111.191073,29.497792,492]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '75').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_75_1_300",
          "con_socio": 0,
          "fid": 300,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-111.139615,29.500673,538]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '75').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_75_1_301",
          "con_socio": 0,
          "fid": 301,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-111.245851,29.539909,468]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '75').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_75_1_302",
          "con_socio": 0,
          "fid": 302,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-111.194377,29.542806,492]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '75').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_75_1_303",
          "con_socio": 0,
          "fid": 303,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-111.142899,29.545688,550]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '75').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "6_84_0_1163",
          "con_socio": 0,
          "fid": 1163,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.520204,29.032566,1427]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '84').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_84_0_1165",
          "con_socio": 0,
          "fid": 1165,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.571782,29.077541,1491]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '84').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_84_0_1166",
          "con_socio": 0,
          "fid": 1166,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.468999,29.077869,1245]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '84').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_84_0_1167",
          "con_socio": 0,
          "fid": 1167,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.417608,29.078008,1158]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '84').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_84_0_1169",
          "con_socio": 0,
          "fid": 1169,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.623396,29.122496,1639]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '84').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_84_0_1170",
          "con_socio": 0,
          "fid": 1170,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.417758,29.123151,1116]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '84').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_84_0_1171",
          "con_socio": 0,
          "fid": 1171,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.417908,29.168291,1083]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '84').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_84_1_1158",
          "con_socio": 0,
          "fid": 1158,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.467993,28.806931,1352]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '84').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_84_1_1159",
          "con_socio": 0,
          "fid": 1159,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.468161,28.852096,1365]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '84').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_84_1_1160",
          "con_socio": 0,
          "fid": 1160,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.365693,28.897521,1248]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '84').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_84_1_1161",
          "con_socio": 0,
          "fid": 1161,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.41701,28.897398,1363]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '84').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_84_1_1162",
          "con_socio": 0,
          "fid": 1162,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.365955,28.987834,1304]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '84').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_84_1_1164",
          "con_socio": 0,
          "fid": 1164,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.366086,29.032984,1155]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '84').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "1_85_0_1173",
          "con_socio": 0,
          "fid": 1173,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.409255,29.630195,2196]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '85').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_85_0_1174",
          "con_socio": 0,
          "fid": 1174,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.357688,29.632202,2152]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '85').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_85_0_1175",
          "con_socio": 0,
          "fid": 1175,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.411562,29.675245,2175]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '85').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_85_0_1176",
          "con_socio": 0,
          "fid": 1176,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.308389,29.679242,2111]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '85').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_85_1_1183",
          "con_socio": 0,
          "fid": 1183,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.52177,29.806301,1739]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '85').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_85_1_1184",
          "con_socio": 0,
          "fid": 1184,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.472464,29.853374,2105]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '85').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "5_75_0_306",
          "con_socio": 0,
          "fid": 306,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.998157,29.689261,508]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '75').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_75_0_307",
          "con_socio": 0,
          "fid": 307,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-111.052954,29.731425,584]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '75').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_75_0_308",
          "con_socio": 0,
          "fid": 308,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-111.001396,29.734261,534]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '75').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_76_0_309",
          "con_socio": 0,
          "fid": 309,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-107.23338,31.158498,1457]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '76').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_76_0_310",
          "con_socio": 0,
          "fid": 310,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-107.181158,31.16013,1337]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '76').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_76_0_311",
          "con_socio": 0,
          "fid": 311,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-107.339765,31.200092,1257]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '76').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_76_0_312",
          "con_socio": 0,
          "fid": 312,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-107.287527,31.201756,1330]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '76').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_76_0_313",
          "con_socio": 0,
          "fid": 313,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-107.235287,31.203404,1377]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '76').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_76_0_314",
          "con_socio": 0,
          "fid": 314,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-107.289454,31.246657,1380]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '76').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_76_0_318",
          "con_socio": 0,
          "fid": 318,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-107.291383,31.291552,1403]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '76').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_76_1_315",
          "con_socio": 0,
          "fid": 315,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-107.132674,31.251553,1187]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '76').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_76_1_316",
          "con_socio": 0,
          "fid": 316,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-107.080411,31.253152,1173]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '76').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_76_1_317",
          "con_socio": 0,
          "fid": 317,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-107.028146,31.254735,1176]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '76').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "6_74_0_101",
          "con_socio": 0,
          "fid": 101,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.732595,29.938348,1281]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '74').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_74_0_102",
          "con_socio": 0,
          "fid": 102,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.680866,29.939512,1270]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '74').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_74_0_104",
          "con_socio": 0,
          "fid": 104,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.682195,29.984563,1268]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '74').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_74_0_107",
          "con_socio": 0,
          "fid": 107,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.683524,30.029608,1257]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '74').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_74_0_109",
          "con_socio": 0,
          "fid": 109,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.633069,30.075799,1249]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '74').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_74_0_93",
          "con_socio": 0,
          "fid": 93,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.781593,29.847054,1296]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '74').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_74_0_94",
          "con_socio": 0,
          "fid": 94,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.729903,29.848235,1270]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '74').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_74_0_95",
          "con_socio": 0,
          "fid": 95,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.678212,29.849399,1269]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '74').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_74_0_97",
          "con_socio": 0,
          "fid": 97,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.731248,29.893293,1270]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '74').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_74_0_98",
          "con_socio": 0,
          "fid": 98,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.679539,29.894458,1269]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '74').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_74_1_100",
          "con_socio": 0,
          "fid": 100,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.576117,29.896738,1334]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '74').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_74_1_103",
          "con_socio": 0,
          "fid": 103,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.629137,29.940661,1289]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '74').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_74_1_105",
          "con_socio": 0,
          "fid": 105,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.630447,29.985711,1264]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '74').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_74_1_106",
          "con_socio": 0,
          "fid": 106,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.578698,29.986844,1286]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '74').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_74_1_108",
          "con_socio": 0,
          "fid": 108,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.57999,30.03189,1272]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '74').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_74_1_96",
          "con_socio": 0,
          "fid": 96,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.574828,29.851678,1338]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '74').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_74_1_99",
          "con_socio": 0,
          "fid": 99,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.627828,29.895606,1293]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '74').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_77_0_110",
          "con_socio": 0,
          "fid": 110,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.469776,30.800034,1434]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '77').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_77_0_111",
          "con_socio": 0,
          "fid": 111,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.313612,30.806046,1409]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '77').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_77_0_112",
          "con_socio": 0,
          "fid": 112,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.420055,30.846985,1415]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '77').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_77_0_113",
          "con_socio": 0,
          "fid": 113,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.367981,30.84899,1406]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '77').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_77_0_114",
          "con_socio": 0,
          "fid": 114,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.26383,30.852949,1384]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '77').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_77_0_115",
          "con_socio": 0,
          "fid": 115,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.422388,30.891911,1396]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '77').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_77_1_116",
          "con_socio": 0,
          "fid": 116,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.424723,30.936832,1382]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '77').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_77_1_117",
          "con_socio": 0,
          "fid": 117,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.372612,30.938837,1450]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '77').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_77_1_118",
          "con_socio": 0,
          "fid": 118,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.42706,30.981748,1375]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '77').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_77_1_119",
          "con_socio": 0,
          "fid": 119,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.37493,30.983754,1396]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '77').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_77_1_120",
          "con_socio": 0,
          "fid": 120,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.37725,31.028665,1402]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '77').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_77_1_122",
          "con_socio": 0,
          "fid": 122,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.379571,31.073571,1473]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '77').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_78_0_127",
          "con_socio": 0,
          "fid": 127,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.213305,31.128238,1400]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '78').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_78_0_129",
          "con_socio": 0,
          "fid": 129,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.320645,31.167925,1412]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '78').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_78_0_130",
          "con_socio": 0,
          "fid": 130,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.268472,31.170522,1380]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '78').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_78_0_131",
          "con_socio": 0,
          "fid": 131,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.216296,31.173104,1371]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '78').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_78_1_123",
          "con_socio": 0,
          "fid": 123,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.467902,31.025432,1303]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '78').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_78_1_124",
          "con_socio": 0,
          "fid": 124,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.470983,31.070305,1359]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '78').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_78_1_125",
          "con_socio": 0,
          "fid": 125,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.418854,31.07295,1578]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '78').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_78_1_126",
          "con_socio": 0,
          "fid": 126,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.369769,31.120447,1531]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '78').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_78_1_128",
          "con_socio": 0,
          "fid": 128,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.424986,31.162681,1520]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '78').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "1_85_1_1179",
          "con_socio": 0,
          "fid": 1179,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.571038,29.759209,1727]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '85').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_85_1_1180",
          "con_socio": 0,
          "fid": 1180,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.467801,29.763306,1896]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '85').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_85_1_1181",
          "con_socio": 0,
          "fid": 1181,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.519421,29.761266,1994]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '85').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_85_1_1182",
          "con_socio": 0,
          "fid": 1182,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.573406,29.804244,1502]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '85').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_31_1_1209",
          "con_socio": 0,
          "fid": 1209,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.158838,17.353264,1243]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '31').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_31_1_1210",
          "con_socio": 0,
          "fid": 1210,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.182974,17.383517,1399]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '31').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_31_1_1211",
          "con_socio": 0,
          "fid": 1211,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.182199,17.305201,1171]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '31').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_31_1_1212",
          "con_socio": 0,
          "fid": 1212,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.17014,17.425744,1945]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '31').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_31_1_1213",
          "con_socio": 0,
          "fid": 1213,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.210284,17.437271,1206]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '31').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_33_1_1219",
          "con_socio": 0,
          "fid": 1219,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.705016,17.656183,1918]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '33').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_86_0_1185",
          "con_socio": 0,
          "fid": 1185,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-115.368933,30.838447,2157]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '86').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_86_0_1186",
          "con_socio": 0,
          "fid": 1186,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-115.477606,30.874817,2135]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '86').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_86_0_1187",
          "con_socio": 0,
          "fid": 1187,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-115.425698,30.879029,2186]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '86').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_86_0_1188",
          "con_socio": 0,
          "fid": 1188,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-115.373786,30.883224,2261]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '86').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_86_0_1189",
          "con_socio": 0,
          "fid": 1189,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-115.378643,30.927996,2523]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '86').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_86_1_1191",
          "con_socio": 0,
          "fid": 1191,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-115.487397,30.964351,2402]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '86').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_86_1_1192",
          "con_socio": 0,
          "fid": 1192,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-115.435452,30.968565,2498]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '86').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_86_1_1193",
          "con_socio": 0,
          "fid": 1193,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-115.544259,31.004879,2449]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '86').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_86_1_1194",
          "con_socio": 0,
          "fid": 1194,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-115.497203,31.053864,2395]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '86').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "5_76_0_321",
          "con_socio": 0,
          "fid": 321,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-107.241017,31.338091,1325]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '76').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_76_1_319",
          "con_socio": 0,
          "fid": 319,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-107.134545,31.296449,1181]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '76').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_76_1_320",
          "con_socio": 0,
          "fid": 320,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-107.082263,31.298049,1176]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '76').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_76_1_322",
          "con_socio": 0,
          "fid": 322,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-107.136419,31.34134,1180]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '76').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_76_1_323",
          "con_socio": 0,
          "fid": 323,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-107.084118,31.342941,1179]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '76').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_79_0_324",
          "con_socio": 0,
          "fid": 324,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-116.716258,32.033511,377]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '79').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_79_0_325",
          "con_socio": 0,
          "fid": 325,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-116.774021,32.073503,61]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '79').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_79_0_326",
          "con_socio": 0,
          "fid": 326,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-116.831822,32.113471,288]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '79').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_79_0_330",
          "con_socio": 0,
          "fid": 330,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-116.889661,32.153415,133]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '79').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_79_0_331",
          "con_socio": 0,
          "fid": 331,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-116.837261,32.158051,371]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '79').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_79_0_335",
          "con_socio": 0,
          "fid": 335,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-116.895122,32.197988,66]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '79').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_79_1_327",
          "con_socio": 0,
          "fid": 327,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-116.727047,32.122693,295]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '79').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_79_1_328",
          "con_socio": 0,
          "fid": 328,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-116.674654,32.127279,397]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '79').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_79_1_329",
          "con_socio": 0,
          "fid": 329,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-116.622257,32.131849,416]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '79').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_79_1_332",
          "con_socio": 0,
          "fid": 332,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-116.732448,32.167275,395]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '79').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_79_1_333",
          "con_socio": 0,
          "fid": 333,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-116.680036,32.171862,381]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '79').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_79_1_334",
          "con_socio": 0,
          "fid": 334,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-116.62762,32.176433,645]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '79').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_79_1_336",
          "con_socio": 0,
          "fid": 336,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-116.737853,32.211851,563]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '79').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_79_1_337",
          "con_socio": 0,
          "fid": 337,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-116.685422,32.21644,538]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '79').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_79_1_338",
          "con_socio": 0,
          "fid": 338,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-116.632987,32.221012,590]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '79').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_87_0_1198",
          "con_socio": 0,
          "fid": 1198,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.421371,31.839916,291]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '87').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_87_0_1199",
          "con_socio": 0,
          "fid": 1199,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.368989,31.843476,236]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '87').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_87_0_1200",
          "con_socio": 0,
          "fid": 1200,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.316604,31.84702,194]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '87').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_87_0_1203",
          "con_socio": 0,
          "fid": 1203,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.373152,31.888189,270]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '87').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_87_0_1204",
          "con_socio": 0,
          "fid": 1204,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.320748,31.891734,212]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '87').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_87_0_1206",
          "con_socio": 0,
          "fid": 1206,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.377318,31.932896,239]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '87').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_87_1_1195",
          "con_socio": 0,
          "fid": 1195,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.626613,31.780797,195]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '87').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_87_1_1196",
          "con_socio": 0,
          "fid": 1196,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.574263,31.784422,359]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '87').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_87_1_1201",
          "con_socio": 0,
          "fid": 1201,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.582737,31.873846,261]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '87').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_87_1_1202",
          "con_socio": 0,
          "fid": 1202,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.530345,31.877456,329]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '87').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_87_1_1205",
          "con_socio": 0,
          "fid": 1205,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.534568,31.922161,349]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '87').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_87_1_1207",
          "con_socio": 0,
          "fid": 1207,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.591224,31.963248,288]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '87').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_87_1_1208",
          "con_socio": 0,
          "fid": 1208,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.486361,31.970456,338]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '87').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "6_78_0_133",
          "con_socio": 0,
          "fid": 133,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.271484,31.215382,1421]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '78').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_78_1_132",
          "con_socio": 0,
          "fid": 132,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.375867,31.21017,1460]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '78').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "1_31_0_1215",
          "con_socio": 0,
          "fid": 1215,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.236621,17.413991,884]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '31').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_31_0_1216",
          "con_socio": 0,
          "fid": 1216,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.264825,17.386558,770]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '31').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_31_0_1217",
          "con_socio": 0,
          "fid": 1217,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.274022,17.347286,879]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '31').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_31_0_1218",
          "con_socio": 0,
          "fid": 1218,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.345016,17.318128,385]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '31').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_33_1_1220",
          "con_socio": 0,
          "fid": 1220,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.60832,17.623545,1988]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '33').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_33_1_1221",
          "con_socio": 0,
          "fid": 1221,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.641829,17.671385,1939]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '33').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_33_1_1225",
          "con_socio": 0,
          "fid": 1225,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.611695,17.580171,1931]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '33').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "4_32_0_1278",
          "con_socio": 0,
          "fid": 1278,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.188044,18.444639,900]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '32').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_32_0_1279",
          "con_socio": 0,
          "fid": 1279,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.150531,18.479811,775]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '32').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_32_0_1280",
          "con_socio": 0,
          "fid": 1280,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.127736,18.494208,904]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '32').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_32_0_1281",
          "con_socio": 0,
          "fid": 1281,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.105339,18.475969,1073]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '32').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_32_0_1282",
          "con_socio": 0,
          "fid": 1282,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.093294,18.446886,1013]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '32').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_32_1_1283",
          "con_socio": 0,
          "fid": 1283,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.084622,18.403208,987]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '32').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_32_1_1284",
          "con_socio": 0,
          "fid": 1284,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.067869,18.340986,900]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '32').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_32_1_1285",
          "con_socio": 0,
          "fid": 1285,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.037608,18.372583,965]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '32').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_32_1_1286",
          "con_socio": 0,
          "fid": 1286,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.028122,18.410156,1100]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '32').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_32_1_1287",
          "con_socio": 0,
          "fid": 1287,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.999575,18.419361,1211]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '32').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_60_0_1290",
          "con_socio": 0,
          "fid": 1290,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.947419,23.711739,1156]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '60').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_60_0_1293",
          "con_socio": 0,
          "fid": 1293,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.895482,23.668922,809]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '60').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_60_1_1288",
          "con_socio": 0,
          "fid": 1288,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.802422,23.764537,550]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '60').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_60_1_1289",
          "con_socio": 0,
          "fid": 1289,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.753175,23.766997,216]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '60').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_60_1_1291",
          "con_socio": 0,
          "fid": 1291,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.799741,23.719212,368]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '60').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_60_1_1292",
          "con_socio": 0,
          "fid": 1292,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.750511,23.721671,173]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '60').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_88_0_1234",
          "con_socio": 0,
          "fid": 1234,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.043843,23.239494,168]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '88').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_88_0_1235",
          "con_socio": 0,
          "fid": 1235,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.995153,23.237947,253]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '88').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_88_0_1236",
          "con_socio": 0,
          "fid": 1236,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.1396,23.287546,177]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '88').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_88_0_1237",
          "con_socio": 0,
          "fid": 1237,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.090885,23.286026,157]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '88').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_88_0_1238",
          "con_socio": 0,
          "fid": 1238,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.042175,23.28449,154]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '88').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_88_1_1229",
          "con_socio": 0,
          "fid": 1229,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.094185,23.196027,128]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '88').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_88_1_1230",
          "con_socio": 0,
          "fid": 1230,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.045507,23.194498,187]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '88').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_88_1_1231",
          "con_socio": 0,
          "fid": 1231,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.996833,23.192954,232]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '88').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_88_1_1232",
          "con_socio": 0,
          "fid": 1232,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.141236,23.242544,101]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '88').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_88_1_1233",
          "con_socio": 0,
          "fid": 1233,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.092537,23.241026,241]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '88').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_88_1_1239",
          "con_socio": 0,
          "fid": 1239,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-105.993468,23.28294,327]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '88').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "5_59_1_1294",
          "con_socio": 0,
          "fid": 1294,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.680168,23.361491,198]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '59').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_59_1_1295",
          "con_socio": 0,
          "fid": 1295,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.677537,23.316162,200]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '59').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_89_0_1264",
          "con_socio": 0,
          "fid": 1264,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.653805,26.499602,1273]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '89').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_89_0_1265",
          "con_socio": 0,
          "fid": 1265,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.603442,26.499484,1270]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '89').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_89_0_1273",
          "con_socio": 0,
          "fid": 1273,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.855053,26.681154,880]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '89').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_89_0_1275",
          "con_socio": 0,
          "fid": 1275,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.905454,26.726497,776]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '89').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_89_1_1263",
          "con_socio": 0,
          "fid": 1263,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.704168,26.499703,1313]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '89').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_89_1_1268",
          "con_socio": 0,
          "fid": 1268,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.704064,26.545017,1199]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '89').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_89_1_1274",
          "con_socio": 0,
          "fid": 1274,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.804619,26.6811,1215]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '89').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_89_1_1276",
          "con_socio": 0,
          "fid": 1276,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.855002,26.726459,918]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '89').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_89_1_1277",
          "con_socio": 0,
          "fid": 1277,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.854951,26.771762,1220]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '89').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_90_0_1260",
          "con_socio": 0,
          "fid": 1260,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.396483,26.355947,522]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '90').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_90_0_1266",
          "con_socio": 0,
          "fid": 1266,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.495508,26.492877,531]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '90').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_90_0_1267",
          "con_socio": 0,
          "fid": 1267,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.445151,26.492394,446]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '90').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_90_0_1270",
          "con_socio": 0,
          "fid": 1270,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.544844,26.583966,579]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '90').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_90_0_1271",
          "con_socio": 0,
          "fid": 1271,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.494451,26.583498,468]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '90').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_90_1_1258",
          "con_socio": 0,
          "fid": 1258,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.497091,26.356929,1497]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '90').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_90_1_1259",
          "con_socio": 0,
          "fid": 1259,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.446787,26.356446,1354]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '90').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_90_1_1261",
          "con_socio": 0,
          "fid": 1261,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.446242,26.401764,596]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '90').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_90_1_1262",
          "con_socio": 0,
          "fid": 1262,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.496036,26.447563,908]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '90').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_90_1_1269",
          "con_socio": 0,
          "fid": 1269,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.545355,26.538656,621]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '90').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "1_33_0_1224",
          "con_socio": 0,
          "fid": 1224,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.645364,17.520509,700]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '33').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_33_0_1226",
          "con_socio": 0,
          "fid": 1226,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.675461,17.615477,1386]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '33').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_33_0_1227",
          "con_socio": 0,
          "fid": 1227,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.693208,17.484108,900]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '33').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_33_0_1228",
          "con_socio": 0,
          "fid": 1228,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.700245,17.560264,813]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '33').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "3_92_0_1341",
          "con_socio": 0,
          "fid": 1341,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.856,16.117,196]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '92').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_92_0_1342",
          "con_socio": 0,
          "fid": 1342,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.811481,16.109274,185]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '92').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_4_1_1332",
          "con_socio": 0,
          "fid": 1332,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.542001,18.07854,261]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '4').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_4_1_1333",
          "con_socio": 0,
          "fid": 1333,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.58317,18.0716,270]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '4').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_92_0_1343",
          "con_socio": 0,
          "fid": 1343,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.894264,16.103474,155]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '92').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_92_1_1334",
          "con_socio": 0,
          "fid": 1334,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.936983,16.252845,172]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '92').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_92_1_1335",
          "con_socio": 0,
          "fid": 1335,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.890465,16.249365,148]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '92').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_92_1_1337",
          "con_socio": 0,
          "fid": 1337,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.940578,16.20791,194]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '92').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_92_1_1338",
          "con_socio": 0,
          "fid": 1338,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.909,16.163,149]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '92').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_92_1_1340",
          "con_socio": 0,
          "fid": 1340,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.94417,16.162978,253]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '92').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "5_59_1_1296",
          "con_socio": 0,
          "fid": 1296,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.568999,23.139664,143]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '59').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_59_1_1297",
          "con_socio": 0,
          "fid": 1297,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.615411,23.091931,128]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '59').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "3_5_0_1323",
          "con_socio": 0,
          "fid": 1323,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.89334,18.53298,184]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '5').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_5_0_1324",
          "con_socio": 0,
          "fid": 1324,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.87335,18.51133,150]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '5').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_5_1_1325",
          "con_socio": 0,
          "fid": 1325,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.886681,18.305558,196]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '5').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_5_1_1326",
          "con_socio": 0,
          "fid": 1326,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.849268,18.249178,217]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '5').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_5_1_1327",
          "con_socio": 0,
          "fid": 1327,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.81129,18.22297,279]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '5').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_91_0_1299",
          "con_socio": 0,
          "fid": 1299,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.334001,18.936234,178]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '91').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_91_0_1300",
          "con_socio": 0,
          "fid": 1300,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.28661,18.932233,157]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '91').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_91_0_1303",
          "con_socio": 0,
          "fid": 1303,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.385573,18.895122,187]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '91').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_91_0_1304",
          "con_socio": 0,
          "fid": 1304,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.338195,18.891138,191]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '91').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_91_0_1328",
          "con_socio": 0,
          "fid": 1328,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.28785,18.87538,164]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '91').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_91_1_1307",
          "con_socio": 0,
          "fid": 1307,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.25611,18.747861,200]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '91').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_91_1_1308",
          "con_socio": 0,
          "fid": 1308,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.208787,18.743837,171]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '91').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_91_1_1329",
          "con_socio": 0,
          "fid": 1329,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.19682,18.69968,197]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '91').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_91_1_1330",
          "con_socio": 0,
          "fid": 1330,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.26631,18.67722,213]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '91').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_91_1_1331",
          "con_socio": 0,
          "fid": 1331,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.20066,18.65153,201]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '91').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_92_0_1336",
          "con_socio": 0,
          "fid": 1336,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.809,16.202,192]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '92').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_92_0_1339",
          "con_socio": 0,
          "fid": 1339,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.812536,16.152511,188]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '92').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "1_11_0_780",
          "con_socio": 0,
          "fid": 780,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.867821,16.319398,1694]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '11').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_11_0_798",
          "con_socio": 0,
          "fid": 798,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.907821,16.412514,1696]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '11').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "3_4_0_1316",
          "con_socio": 0,
          "fid": 1316,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.573003,18.411031,239]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '4').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_4_0_1317",
          "con_socio": 0,
          "fid": 1317,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.624306,18.369867,277]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '4').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_4_0_1318",
          "con_socio": 0,
          "fid": 1318,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.577103,18.36596,269]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '4').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_4_0_1320",
          "con_socio": 0,
          "fid": 1320,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.581201,18.320893,284]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '4').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_4_0_1321",
          "con_socio": 0,
          "fid": 1321,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-89.534016,18.316973,295]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '4').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "1_25_0_836",
          "con_socio": 0,
          "fid": 836,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.239183,17.808595,2309]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '25').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_31_0_1214",
          "con_socio": 0,
          "fid": 1214,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.402501,17.340345,634]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '31').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_33_0_1223",
          "con_socio": 0,
          "fid": 1223,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.605698,17.49509,939]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '33').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_33_1_1222",
          "con_socio": 0,
          "fid": 1222,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.564005,17.58894,2300]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '33').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_35_0_865",
          "con_socio": 0,
          "fid": 865,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.430413,19.414825,1829]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '35').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_35_0_872",
          "con_socio": 0,
          "fid": 872,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.429891,19.460123,1949]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '35').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_39_0_920",
          "con_socio": 0,
          "fid": 920,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.104932,21.118367,1478]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '39').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_39_0_926",
          "con_socio": 0,
          "fid": 926,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.055601,21.162801,386]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '39').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_17_0_1421",
          "con_socio": 0,
          "fid": 1421,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.561914,16.154512,964]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '17').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_41_0_908",
          "con_socio": 0,
          "fid": 908,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.039894,21.006669,2150]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '41').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_45_0_938",
          "con_socio": 0,
          "fid": 938,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.382708,21.535619,867]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '45').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_47_0_958",
          "con_socio": 0,
          "fid": 958,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.571164,22.079561,1393]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '47').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_47_1_960",
          "con_socio": 0,
          "fid": 960,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.52079,22.169546,1532]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '47').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_56_0_986",
          "con_socio": 0,
          "fid": 986,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.265047,24.903275,2723]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '56').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_56_0_988",
          "con_socio": 0,
          "fid": 988,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.263842,24.994012,2364]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '56').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_56_1_1001",
          "con_socio": 0,
          "fid": 1001,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.360556,25.221899,2514]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '56').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_70_0_1015",
          "con_socio": 0,
          "fid": 1015,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.883922,27.603284,2155]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '70').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_80_1_1116",
          "con_socio": 0,
          "fid": 1116,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.692529,17.292881,2800]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '80').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_83_1_1153",
          "con_socio": 0,
          "fid": 1153,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.544075,22.182622,1678]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '83').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_85_0_1172",
          "con_socio": 0,
          "fid": 1172,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.46082,29.628172,2199]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '85').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_85_1_1178",
          "con_socio": 0,
          "fid": 1178,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.568673,29.71417,1807]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '85').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_86_1_1190",
          "con_socio": 0,
          "fid": 1190,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-115.539339,30.960121,2339]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '86').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "2_14_0_678",
          "con_socio": 0,
          "fid": 678,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.661724,15.649208,1564]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '14').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "2_24_1_751",
          "con_socio": 0,
          "fid": 751,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-96.934576,18.386826,2156]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '24').id,
          "ecosystem_id": 2
        },
        {
          "nomenclatura": "3_16_1_554",
          "con_socio": 0,
          "fid": 554,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.98627,15.669355,895]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '16').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_19_1_579",
          "con_socio": 0,
          "fid": 579,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-94.784033,16.89637,189]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '19').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_2_1_668",
          "con_socio": 0,
          "fid": 668,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.589414,18.735236,38]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '2').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_8_0_565",
          "con_socio": 0,
          "fid": 565,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.359209,16.238567,219]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '8').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "4_28_0_359",
          "con_socio": 0,
          "fid": 359,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.748222,18.140549,1654]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '28').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_3_0_440",
          "con_socio": 0,
          "fid": 440,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.84934,20.988216,20]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '3').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_34_0_387",
          "con_socio": 0,
          "fid": 387,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.053514,18.789002,172]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_44_0_433",
          "con_socio": 0,
          "fid": 433,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.897111,21.497017,1008]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '44').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_50_0_466",
          "con_socio": 0,
          "fid": 466,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.166461,23.504049,145]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '50').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_54_0_481",
          "con_socio": 0,
          "fid": 481,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.491671,23.668089,300]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '54').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_71_0_521",
          "con_socio": 0,
          "fid": 521,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.929915,26.893519,237]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '71').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_71_0_525",
          "con_socio": 0,
          "fid": 525,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.881879,26.940941,274]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '71').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_73_1_544",
          "con_socio": 0,
          "fid": 544,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-110.060699,28.788782,600]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '73').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "5_52_1_193",
          "con_socio": 0,
          "fid": 193,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.066184,24.183975,2173]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '52').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_55_1_220",
          "con_socio": 0,
          "fid": 220,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.159815,25.310417,982]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '55').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_59_0_172",
          "con_socio": 0,
          "fid": 172,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-109.770373,23.220617,222]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '59').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_68_0_268",
          "con_socio": 0,
          "fid": 268,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-103.075278,27.854746,1058]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '68').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_72_0_254",
          "con_socio": 0,
          "fid": 254,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.378172,26.820079,1]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '72').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_75_0_305",
          "con_socio": 0,
          "fid": 305,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-111.046442,29.641422,518]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '75').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_82_0_1133",
          "con_socio": 0,
          "fid": 1133,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-98.782839,20.431415,1864]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '82').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_87_1_1197",
          "con_socio": 0,
          "fid": 1197,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-113.578498,31.829137,356]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '87').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "5_89_0_1272",
          "con_socio": 0,
          "fid": 1272,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.905487,26.681192,802]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '89').id,
          "ecosystem_id": 5
        },
        {
          "nomenclatura": "6_77_1_121",
          "con_socio": 0,
          "fid": 121,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.431739,31.071565,1369]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '77').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "6_84_0_1168",
          "con_socio": 0,
          "fid": 1168,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.674805,29.122292,1606]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '84').id,
          "ecosystem_id": 6
        },
        {
          "nomenclatura": "7_1_0_1060",
          "con_socio": 0,
          "fid": 1060,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-87.657921,19.422687,4]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '1').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_12_0_1049",
          "con_socio": 0,
          "fid": 1049,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.940343,18.543099,-2]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '12').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_15_1_1032",
          "con_socio": 0,
          "fid": 1032,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-92.833444,15.164072,8]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '15').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "1_17_0_1422",
          "con_socio": 0,
          "fid": 1422,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.515371,16.151855,1105]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '17').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_22_0_813",
          "con_socio": 0,
          "fid": 813,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.90605,16.991699,844]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '22').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_22_1_826",
          "con_socio": 0,
          "fid": 826,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.808273,17.078031,544]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '22').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_25_0_834",
          "con_socio": 0,
          "fid": 834,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-97.240748,17.763421,2387]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '25').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_94_0_1373",
          "con_socio": 0,
          "fid": 1373,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.099612,19.123341,3096]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '94').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_94_0_1374",
          "con_socio": 0,
          "fid": 1374,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.05198,19.122418,3228]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '94').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_94_0_1375",
          "con_socio": 0,
          "fid": 1375,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.004348,19.12148,3396]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '94').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_94_0_1376",
          "con_socio": 0,
          "fid": 1376,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.100575,19.078067,3140]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '94').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_94_0_1377",
          "con_socio": 0,
          "fid": 1377,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.052958,19.077145,3135]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '94').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_94_1_1368",
          "con_socio": 0,
          "fid": 1368,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.286543,19.308009,3000]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '94').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_94_1_1369",
          "con_socio": 0,
          "fid": 1369,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.287445,19.262724,3170]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '94').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_94_1_1370",
          "con_socio": 0,
          "fid": 1370,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.24068,19.216578,3292]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '94').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_94_1_1371",
          "con_socio": 0,
          "fid": 1371,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.289248,19.172161,3278]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '94').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_94_1_1372",
          "con_socio": 0,
          "fid": 1372,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.242513,19.126021,3100]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '94').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_95_0_1344",
          "con_socio": 0,
          "fid": 1344,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.787882,31.32972,1661]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '95').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_95_0_1345",
          "con_socio": 0,
          "fid": 1345,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.816882,31.315041,1622]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '95').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_95_0_1346",
          "con_socio": 0,
          "fid": 1346,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.836656,31.293244,1652]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '95').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_95_0_1347",
          "con_socio": 0,
          "fid": 1347,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.883741,31.270731,1507]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '95').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_95_0_1348",
          "con_socio": 0,
          "fid": 1348,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.917335,31.256982,1502]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '95').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_95_1_1349",
          "con_socio": 0,
          "fid": 1349,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.820594,31.191138,2039]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '95').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_95_1_1350",
          "con_socio": 0,
          "fid": 1350,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.905487,31.183303,1783]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '95').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_95_1_1351",
          "con_socio": 0,
          "fid": 1351,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.869332,31.169857,1891]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '95').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_95_1_1352",
          "con_socio": 0,
          "fid": 1352,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.907656,31.144329,1800]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '95').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_95_1_1353",
          "con_socio": 0,
          "fid": 1353,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-108.849703,31.144953,2200]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '95').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_96_0_1358",
          "con_socio": 0,
          "fid": 1358,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.94271,25.16079,506]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '96').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_96_0_1360",
          "con_socio": 0,
          "fid": 1360,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.971071,25.1305,583]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '96').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_96_0_1361",
          "con_socio": 0,
          "fid": 1361,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.938959,25.131272,548]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '96').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_96_0_1362",
          "con_socio": 0,
          "fid": 1362,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.903902,25.121527,535]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '96').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_96_0_1363",
          "con_socio": 0,
          "fid": 1363,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.941304,25.095809,601]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '96').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_96_0_1364",
          "con_socio": 0,
          "fid": 1364,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.905947,25.085933,559]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '96').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_96_1_1354",
          "con_socio": 0,
          "fid": 1354,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.054618,25.225442,520]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '96').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_96_1_1355",
          "con_socio": 0,
          "fid": 1355,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.018424,25.221238,538]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '96').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_96_1_1356",
          "con_socio": 0,
          "fid": 1356,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.021311,25.190412,776]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '96').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_96_1_1357",
          "con_socio": 0,
          "fid": 1357,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-99.980451,25.178635,526]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '96').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_96_1_1359",
          "con_socio": 0,
          "fid": 1359,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.001747,25.151674,852]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '96').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "3_13_0_1392",
          "con_socio": 0,
          "fid": 1392,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.767972,18.304661,3]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '13').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_13_0_1394",
          "con_socio": 0,
          "fid": 1394,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.81857,18.262758,1]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '13').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_13_0_1395",
          "con_socio": 0,
          "fid": 1395,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.724126,18.256312,6]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '13').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_13_0_1396",
          "con_socio": 0,
          "fid": 1396,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.727514,18.211198,7]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '13').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_13_1_1397",
          "con_socio": 0,
          "fid": 1397,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.919673,18.17891,6]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '13').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_13_1_1398",
          "con_socio": 0,
          "fid": 1398,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.922994,18.133797,9]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '13').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_13_1_1399",
          "con_socio": 0,
          "fid": 1399,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.973482,18.091853,15]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '13').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_13_1_1400",
          "con_socio": 0,
          "fid": 1400,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.879148,18.085505,14]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '13').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_13_1_1401",
          "con_socio": 0,
          "fid": 1401,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.831985,18.082309,16]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '13').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_18_0_1402",
          "con_socio": 0,
          "fid": 1402,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.785152,17.115839,125]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '18').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_18_0_1403",
          "con_socio": 0,
          "fid": 1403,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.69141,17.11064,544]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '18').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_18_0_1404",
          "con_socio": 0,
          "fid": 1404,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.644541,17.108019,222]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '18').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_18_0_1405",
          "con_socio": 0,
          "fid": 1405,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.787839,17.070767,463]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '18').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_18_0_1406",
          "con_socio": 0,
          "fid": 1406,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.740982,17.068177,381]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '18').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_18_1_1407",
          "con_socio": 0,
          "fid": 1407,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.600422,17.060316,600]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '18').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_18_1_1408",
          "con_socio": 0,
          "fid": 1408,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.605912,16.970193,1063]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '18').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "4_34_0_1378",
          "con_socio": 0,
          "fid": 1378,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.815579,19.015258,1167]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_34_0_1379",
          "con_socio": 0,
          "fid": 1379,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.767974,19.015192,716]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_34_0_1380",
          "con_socio": 0,
          "fid": 1380,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.72037,19.015111,900]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_34_0_1381",
          "con_socio": 0,
          "fid": 1381,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.720463,18.969834,1051]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_34_0_1382",
          "con_socio": 0,
          "fid": 1382,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.720555,18.92456,638]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_34_0_1383",
          "con_socio": 0,
          "fid": 1383,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.720648,18.879289,602]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_34_0_1384",
          "con_socio": 0,
          "fid": 1384,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.00599,18.834278,164]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_34_0_1385",
          "con_socio": 0,
          "fid": 1385,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.053514,18.789002,144]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_34_0_1386",
          "con_socio": 0,
          "fid": 1386,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.053479,18.698478,356]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_34_0_1387",
          "con_socio": 0,
          "fid": 1387,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.005984,18.698487,280]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "1_17_0_1428",
          "con_socio": 0,
          "fid": 1428,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.4716,16.104204,800]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '17').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_17_0_1429",
          "con_socio": 0,
          "fid": 1429,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.378552,16.098819,900]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '17').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_70_0_1016",
          "con_socio": 0,
          "fid": 1016,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-106.833153,27.604817,2126]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '70').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "3_97_0_1439",
          "con_socio": 0,
          "fid": 1439,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.2498,17.044864,305]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_0_1440",
          "con_socio": 0,
          "fid": 1440,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.203007,17.041477,152]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "4_34_0_1390",
          "con_socio": 0,
          "fid": 1390,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.00598,18.607973,460]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_34_0_1391",
          "con_socio": 0,
          "fid": 1391,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.911054,18.607947,265]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_93_0_1409",
          "con_socio": 0,
          "fid": 1409,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-94.019662,16.315284,270]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '93').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_93_0_1410",
          "con_socio": 0,
          "fid": 1410,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.973056,16.31277,155]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '93').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_93_0_1411",
          "con_socio": 0,
          "fid": 1411,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.926452,16.310241,600]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '93').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_93_0_1412",
          "con_socio": 0,
          "fid": 1412,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.833249,16.305139,623]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '93').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_93_0_1413",
          "con_socio": 0,
          "fid": 1413,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.78665,16.302566,580]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '93').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_93_0_1414",
          "con_socio": 0,
          "fid": 1414,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-94.022257,16.270278,191]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '93').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_93_0_1415",
          "con_socio": 0,
          "fid": 1415,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.929078,16.265237,100]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '93').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_93_0_1416",
          "con_socio": 0,
          "fid": 1416,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.789321,16.257566,528]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '93').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_93_0_1417",
          "con_socio": 0,
          "fid": 1417,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-94.024851,16.225277,100]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '93').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_93_0_1418",
          "con_socio": 0,
          "fid": 1418,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.79199,16.21257,303]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '93').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_93_0_1425",
          "con_socio": 0,
          "fid": 1425,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.750785,16.120008,460]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '93').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_93_0_1430",
          "con_socio": 0,
          "fid": 1430,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.706944,16.072429,215]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '93').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_93_0_1433",
          "con_socio": 0,
          "fid": 1433,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.709636,16.027452,100]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '93').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_93_0_1434",
          "con_socio": 0,
          "fid": 1434,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.663132,16.024842,121]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '93').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_93_0_1436",
          "con_socio": 0,
          "fid": 1436,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.619351,15.977247,227]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '93').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_93_0_1437",
          "con_socio": 0,
          "fid": 1437,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.572866,15.974609,600]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '93').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_93_0_1438",
          "con_socio": 0,
          "fid": 1438,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.5756,15.929643,83]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '93').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_93_1_1420",
          "con_socio": 0,
          "fid": 1420,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.655006,16.159782,527]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '93').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_93_1_1426",
          "con_socio": 0,
          "fid": 1426,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.657716,16.114798,432]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '93').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_93_1_1427",
          "con_socio": 0,
          "fid": 1427,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.611185,16.112171,1228]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '93').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_93_1_1431",
          "con_socio": 0,
          "fid": 1431,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.613908,16.067192,637]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '93').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_93_1_1435",
          "con_socio": 0,
          "fid": 1435,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.570131,16.019578,1300]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '93').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "7_1_0_1365",
          "con_socio": 0,
          "fid": 1365,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-87.500954,19.544267,1]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '1').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_1_0_1366",
          "con_socio": 0,
          "fid": 1366,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-87.45341,19.539688,-9999]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '1').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "7_1_0_1367",
          "con_socio": 0,
          "fid": 1367,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-87.458247,19.494616,1]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '1').id,
          "ecosystem_id": 7
        },
        {
          "nomenclatura": "1_22_1_827",
          "con_socio": 0,
          "fid": 827,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-95.76138,17.076075,642]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '22').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_56_1_1002",
          "con_socio": 0,
          "fid": 1002,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-100.31069,25.221373,3230]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '56').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "3_97_0_1441",
          "con_socio": 0,
          "fid": 1441,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.253313,16.999852,323]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_0_1442",
          "con_socio": 0,
          "fid": 1442,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.206535,16.996465,207]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_0_1443",
          "con_socio": 0,
          "fid": 1443,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.15976,16.993064,99]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_0_1444",
          "con_socio": 0,
          "fid": 1444,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.350356,16.961569,572]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_0_1445",
          "con_socio": 0,
          "fid": 1445,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.303589,16.958213,527]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_0_1446",
          "con_socio": 0,
          "fid": 1446,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.443898,16.968236,630]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_0_1447",
          "con_socio": 0,
          "fid": 1447,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.447345,16.923226,895]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_0_1450",
          "con_socio": 0,
          "fid": 1450,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.260332,16.909838,393]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_0_1454",
          "con_socio": 0,
          "fid": 1454,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.407508,16.829893,933]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_0_1455",
          "con_socio": 0,
          "fid": 1455,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.360784,16.826556,790]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_0_1456",
          "con_socio": 0,
          "fid": 1456,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.314062,16.823204,679]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_0_1462",
          "con_socio": 0,
          "fid": 1462,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.317548,16.778209,769]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_0_1463",
          "con_socio": 0,
          "fid": 1463,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.270844,16.774844,678]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_0_1464",
          "con_socio": 0,
          "fid": 1464,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.224142,16.771465,488]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_1_1448",
          "con_socio": 0,
          "fid": 1448,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.16684,16.903056,700]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_1_1451",
          "con_socio": 0,
          "fid": 1451,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.123648,16.854645,698]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_1_1452",
          "con_socio": 0,
          "fid": 1452,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.076923,16.851219,300]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_1_1453",
          "con_socio": 0,
          "fid": 1453,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.983479,16.844323,290]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_1_1457",
          "con_socio": 0,
          "fid": 1457,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.127197,16.809652,352]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_1_1458",
          "con_socio": 0,
          "fid": 1458,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.080487,16.806227,532]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_1_1459",
          "con_socio": 0,
          "fid": 1459,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.987073,16.799334,201]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_1_1460",
          "con_socio": 0,
          "fid": 1460,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.084049,16.761239,526]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_1_1461",
          "con_socio": 0,
          "fid": 1461,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.410964,16.784895,1077]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_1_1465",
          "con_socio": 0,
          "fid": 1465,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.177442,16.768071,402]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "4_34_0_1388",
          "con_socio": 0,
          "fid": 1388,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.053461,18.653219,1123]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "4_34_0_1389",
          "con_socio": 0,
          "fid": 1389,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-101.958504,18.653223,293]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '34').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "1_36_0_1491",
          "con_socio": 0,
          "fid": 1491,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.36492,19.53911,1464]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '36').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_36_0_1492",
          "con_socio": 0,
          "fid": 1492,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.258314,19.531303,1166]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '36').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_36_0_1493",
          "con_socio": 0,
          "fid": 1493,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.260422,19.520467,1120]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '36').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "3_97_1_1467",
          "con_socio": 0,
          "fid": 1467,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.321032,16.733217,980]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_1_1468",
          "con_socio": 0,
          "fid": 1468,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.274343,16.729854,942]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_1_1470",
          "con_socio": 0,
          "fid": 1470,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.134289,16.719676,363]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_98_0_1471",
          "con_socio": 0,
          "fid": 1471,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.148465,19.787229,22]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '98').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_98_0_1472",
          "con_socio": 0,
          "fid": 1472,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.24836,19.75083,28]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '98').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_98_0_1473",
          "con_socio": 0,
          "fid": 1473,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.200719,19.746484,24]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '98').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_6_0_1505",
          "con_socio": 0,
          "fid": 1505,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.680791,18.816541,90]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '6').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_6_0_1506",
          "con_socio": 0,
          "fid": 1506,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.633404,18.812965,66]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '6').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_6_0_1508",
          "con_socio": 0,
          "fid": 1508,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.722859,18.79518,83]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '6').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_6_0_1510",
          "con_socio": 0,
          "fid": 1510,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.637166,18.767842,98]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '6').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_6_0_1511",
          "con_socio": 0,
          "fid": 1511,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.685432,18.764977,104]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '6').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_6_1_1507",
          "con_socio": 0,
          "fid": 1507,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.54428,18.787406,63]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '6').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_6_1_1509",
          "con_socio": 0,
          "fid": 1509,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.492905,18.760542,99]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '6').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "1_17_0_1424",
          "con_socio": 0,
          "fid": 1424,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.422289,16.146497,685]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '17').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_17_0_1432",
          "con_socio": 0,
          "fid": 1432,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.381352,16.053845,698]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '17').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_17_1_764",
          "con_socio": 0,
          "fid": 764,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.556427,16.244489,1067]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '17').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_36_0_1489",
          "con_socio": 0,
          "fid": 1489,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.384908,19.571847,936]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '36').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_36_0_1494",
          "con_socio": 0,
          "fid": 1494,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.206399,19.491963,1437]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '36').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_36_0_1495",
          "con_socio": 0,
          "fid": 1495,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.21255,19.492867,1391]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '36').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_36_0_1496",
          "con_socio": 0,
          "fid": 1496,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.258838,19.443379,904]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '36').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_36_1_1484",
          "con_socio": 0,
          "fid": 1484,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.387924,19.684137,1541]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '36').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_36_1_1485",
          "con_socio": 0,
          "fid": 1485,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.371136,19.661416,1696]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '36').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_36_1_1486",
          "con_socio": 0,
          "fid": 1486,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.314919,19.63082,1863]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '36').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_36_1_1487",
          "con_socio": 0,
          "fid": 1487,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.287793,19.596729,1894]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '36').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_36_1_1488",
          "con_socio": 0,
          "fid": 1488,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.259671,19.597284,2140]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '36').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_36_1_1490",
          "con_socio": 0,
          "fid": 1490,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-104.247594,19.569718,2061]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '36').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_81_0_1501",
          "con_socio": 0,
          "fid": 1501,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.361928,19.431974,2861]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '81').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_81_0_1502",
          "con_socio": 0,
          "fid": 1502,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.314026,19.427339,3483]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '81').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_81_0_1503",
          "con_socio": 0,
          "fid": 1503,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.419988,19.405298,2194]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '81').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_81_0_1504",
          "con_socio": 0,
          "fid": 1504,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.288465,19.357024,2520]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '81').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_81_1_1497",
          "con_socio": 0,
          "fid": 1497,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.195405,19.567466,3027]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '81').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_81_1_1498",
          "con_socio": 0,
          "fid": 1498,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.158344,19.539224,2558]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '81').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_81_1_1499",
          "con_socio": 0,
          "fid": 1499,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.187005,19.476212,2652]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '81').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "1_81_1_1500",
          "con_socio": 0,
          "fid": 1500,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-102.230445,19.454996,2629]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '81').id,
          "ecosystem_id": 1
        },
        {
          "nomenclatura": "3_13_0_1393",
          "con_socio": 0,
          "fid": 1393,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.720736,18.301429,4]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '13').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_1_1449",
          "con_socio": 0,
          "fid": 1449,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.120097,16.899643,452]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_1_1466",
          "con_socio": 0,
          "fid": 1466,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.367724,16.736566,1349]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_97_1_1469",
          "con_socio": 0,
          "fid": 1469,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-91.180971,16.723083,471]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '97').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_98_0_1478",
          "con_socio": 0,
          "fid": 1478,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.209908,19.656276,25]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '98').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_98_0_1479",
          "con_socio": 0,
          "fid": 1479,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.067097,19.643158,14]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '98').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_98_0_1481",
          "con_socio": 0,
          "fid": 1481,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-88.119319,19.602448,18]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '98').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_98_1_1474",
          "con_socio": 0,
          "fid": 1474,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-87.914935,19.720094,11]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '98').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_98_1_1475",
          "con_socio": 0,
          "fid": 1475,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-87.867315,19.715644,9]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '98').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_98_1_1476",
          "con_socio": 0,
          "fid": 1476,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-87.819699,19.711178,6]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '98').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_98_1_1477",
          "con_socio": 0,
          "fid": 1477,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-87.919625,19.674999,9]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '98').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_98_1_1480",
          "con_socio": 0,
          "fid": 1480,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-87.924313,19.629906,6]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '98').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_98_1_1482",
          "con_socio": 0,
          "fid": 1482,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-87.976573,19.589245,4]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '98').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_98_1_1483",
          "con_socio": 0,
          "fid": 1483,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-87.928997,19.584815,3]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '98').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "4_93_0_1419",
          "con_socio": 0,
          "fid": 1419,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-93.794657,16.167578,500]}"),
          "cat_integr": "Degradado",
          
          "cumulus_id": cumulus.find(c => c.name == '93').id,
          "ecosystem_id": 4
        },
        {
          "nomenclatura": "3_6_1_1512",
          "con_socio": 0,
          "fid": 1512,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.591186,18.75628,98]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '6').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_6_1_1513",
          "con_socio": 0,
          "fid": 1513,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.545033,18.741916,106]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '6').id,
          "ecosystem_id": 3
        },
        {
          "nomenclatura": "3_6_1_1514",
          "con_socio": 0,
          "fid": 1514,
          "location": Sequelize.fn('ST_GeomFromGeoJSON', "{\"type\":\"Point\",\"coordinates\":[-90.633172,18.713112,127]}"),
          "cat_integr": "Integro",
          
          "cumulus_id": cumulus.find(c => c.name == '6').id,
          "ecosystem_id": 3
        }
      ]).then(function(x) {
        return queryInterface.sequelize.query(
            'INSERT INTO db_was_seeded (seeded) VALUES (3)')
      })
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('nodes', null, {}).then(function() {
      return queryInterface.sequelize.query(
        'DELETE FROM db_was_seeded WHERE seeded = 3')
    })
  }
};
