'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Turmas', [{
        data_inicio: '2021-04-09',
        nivel_id: 1,
        docente_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Turmas', null, {});
  }
};
