const database = require('../models');

class NivelController {

  // lista todos os niveis
  static async index(request, response) {
    try {
      const niveis = await database.Niveis.findAll();
      return response.status(200).json(niveis);
    } catch(error) {
      return response.status(500).json(error.message);
    }
  }

  // encontra um nivel por id
  static async show(request, response) {
    const { id } = request.params;
    try {
      const nivel = await database.Niveis.findOne({ where: {id: Number(id) }});
      return response.status(200).json(nivel);
    } catch(error) {
      return response.status(500).json(error.message);
    }
  }

  // cria um registro de nivel
  static async create(request, response) {
    const novoNivel  = request.body;
    try {
      const nivel = await database.Niveis.create(novoNivel);
      return response.status(200).json(nivel);
    } catch(error) {
      return response.status(500).json(error.message);
    }
  }

  // atualiza um registro de nivel
  static async update(request, response) {
    const novasInfos  = request.body;
    const { id } = request.params;
    try {
      await database.Niveis.update(novasInfos, { where: {id: Number(id) }});
      const nivelAtualizado = await database.Niveis.findOne({ where: {id: Number(id) }});
      return response.status(200).json(nivelAtualizado);
    } catch(error) {
      return response.status(500).json(error.message);
    }
  }

  // deleta um registro de nivel
  static async delete(request, response) {
    const { id } = request.params;
    try {
      await database.Niveis.destroy({ where: {id: Number(id) }});
      return response.status(200).json({ mensagem: `Nivel ${id} deletado!`});
    } catch(error) {
      return response.status(500).json(error.message);
    }
  }
}

module.exports = NivelController;