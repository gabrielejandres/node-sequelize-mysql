'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Pessoas', [{
        nome: 'Jane Doe',
        ativo: true,
        email: 'janedoe@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
