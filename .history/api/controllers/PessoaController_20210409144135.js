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

  // atualiza um registro de pessoa
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

  static async showMatricula(request, response) {
    const { estudanteId, matriculaId } = request.params;
    try {
      const matricula = await database.Matriculas.findOne({ where: {
                                                                id: Number(matriculaId),
                                                                estudante_id: Number(estudanteId) 
                                                          }});
      return response.status(200).json(matricula);
    } catch(error) {
      return response.status(500).json(error.message);
    }
  }

  static async createMatricula(request, response) {
    const { estudanteId } = request.params;
    const novaMatricula  = { ...request.body, estudante_id: Number(estudanteId) };
    try {
      const matricula = await database.Matriculas.create(novaMatricula);
      return response.status(200).json(matricula);
    } catch(error) {
      return response.status(500).json(error.message);
    }
  }

  static async updateMatricula(request, response) {
    const novasInfos  = request.body;
    const { estudanteId, matriculaId } = request.params;
    try {
      await database.Matriculas.update(novasInfos, { where: { 
                                                      id: Number(matriculaId),
                                                      estudante_id: Number(estudanteId) 
                                                    }});
      const matriculaAtualizada = await database.Pessoas.findOne({ where: {id: Number(id) }});
      return response.status(200).json(pessoaAtualizada);
    } catch(error) {
      return response.status(500).json(error.message);
    }
  }

  static async deleteMatricula(request, response) {
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