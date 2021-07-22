'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seeds = await queryInterface.sequelize.query(
      'SELECT seeded FROM db_was_seeded')
    try {
      let seeded = seeds[0][3].seeded;
      console.log("Database was already seeded for device catalog")
      return queryInterface.sequelize.query(
        'SELECT 1 FROM db_was_seeded')
    } catch {

      return queryInterface.bulkInsert('device_catalogs', [
        {
            "type": "camara",
            "brand": "Camara RECONYX"
        },
        {
            "type": "audiomoth",
            "brand": "AUDIOMOTH V1.1.0"
        },
        {
            "type": "memoria",
            "brand": "KINGSTON MICRO SD"
        },
        {
            "type": "memoria",
            "brand": "SUPERIOR PRO MICRO SD"
        },
        {
            "type": "trampa",
            "brand": "Trampa SHERMAN"
        }
    ]).then(function(x) {
        return queryInterface.sequelize.query(
            'INSERT INTO db_was_seeded (seeded) VALUES (4)')
      })
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('device_catalogs', null, {}).then(function() {
      return queryInterface.sequelize.query(
        'DELETE FROM db_was_seeded WHERE seeded = 4')
    })
  }
};
