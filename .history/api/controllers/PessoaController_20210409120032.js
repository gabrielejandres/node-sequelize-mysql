const database = require('../models');

class PessoaController {

  // lista todas as pessoas
  static async index(request, response) {
    try {
      const pessoas = await database.Pessoas.findAll();
      return response.status(200).json(pessoas);
    } catch(error) {
      return response.status(500).json(error.message);
    }
  }

  // lista uma pessoa por id
  static async show(request, response) {
    const { id } = req.params;
    try {
      const pessoas = await database.Pessoas.findAll();
      return response.status(200).json(pessoas);
    } catch(error) {
      return response.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;