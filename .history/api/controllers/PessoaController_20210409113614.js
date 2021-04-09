const database = require('../models');

class PessoaController {

  static async show(request, response) {
    const pessoas = await database.Pessoas.findAll();
    return response.status(200).json(pessoas);
  }
}