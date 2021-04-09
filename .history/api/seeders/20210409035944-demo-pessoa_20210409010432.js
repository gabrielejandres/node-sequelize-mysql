'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Pessoas', [{
        nome: 'Jane Doe',
        ativo: true,
        email: janedoe@getMaxListeners.c
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
