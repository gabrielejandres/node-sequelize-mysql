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

  // encontra uma pessoa por id
  static async show(request, response) {
    const { id } = request.params;
    try {
      const pessoa = await database.Pessoas.findOne({ where: {id: Number(id) }});
      return response.status(200).json(pessoa);
    } catch(error) {
      return response.status(500).json(error.message);
    }
  }

  // cria um registro de pessoa
  static async create(request, response) {
    const novaPessoa  = request.body;
    try {
      const pessoa = await database.Pessoas.create(novaPessoa);
      return response.status(200).json(pessoa);
    } catch(error) {
      return response.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;