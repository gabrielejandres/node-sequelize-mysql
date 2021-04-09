const database = require('../models');

class PessoaController {

  static async show(request, response) {
    const pessoas = await database.Pessoas.findAll()
  }
}