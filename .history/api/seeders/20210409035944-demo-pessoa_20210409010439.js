'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Pessoas', [{
        nome: 'Jane Doe',
        ativo: true,
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
