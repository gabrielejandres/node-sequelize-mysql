'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Pessoas', [{
        nome: 'Jane Doe',
        isBetaMember: false
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
