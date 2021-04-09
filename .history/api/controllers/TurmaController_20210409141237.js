const database = require('../models');

class TurmaController {

  // lista todas as turmas
  static async index(request, response) {
    try {
      const turmas = await database.Turmas.findAll();
      return response.status(200).json(turmas);
    } catch(error) {
      return response.status(500).json(error.message);
    }
  }

  // encontra uma turma por id
  static async show(request, response) {
    const { id } = request.params;
    try {
      const pessoa = await database.Turmas.findOne({ where: {id: Number(id) }});
      return response.status(200).json(turma);
    } catch(error) {
      return response.status(500).json(error.message);
    }
  }

  // cria um registro de turma
  static async create(request, response) {
    const novaTurma  = request.body;
    try {
      const turma = await database.Turmas.create(novaTurma);
      return response.status(200).json(turma);
    } catch(error) {
      return response.status(500).json(error.message);
    }
  }

  // atualiza um registro de turma
  static async update(request, response) {
    const novasInfos  = request.body;
    const { id } = request.params;
    try {
      await database.Pessoas.update(novasInfos, { where: {id: Number(id) }});
      const pessoaAtualizada = await database.Pessoas.findOne({ where: {id: Number(id) }});
      return response.status(200).json(pessoaAtualizada);
    } catch(error) {
      return response.status(500).json(error.message);
    }
  }

  // deleta um registro de pessoa
  static async delete(request, response) {
    const { id } = request.params;
    try {
      await database.Pessoas.destroy({ where: {id: Number(id) }});
      return response.status(200).json({ mensagem: `Pessoa ${id} deletada!`});
    } catch(error) {
      return response.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;