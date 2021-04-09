const database = require('../models');

class PessoaController {

  static async show(request, response) {
    try {
      const pessoas = await database.Pessoas.findAll();
      return response.status(200).json(pessoas);
    } catch(error) {
      return response.status(500).json(error.message);
    }
  }
}