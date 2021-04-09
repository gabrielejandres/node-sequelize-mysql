const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.index);
router.get('/pessoas/:id', PessoaController.show);
router.post('/pessoas', PessoaController.create);
router.put('/pessoas/:id', PessoaController.update);
router.delete('/pessoas/:id', PessoaController.delete);

// matricula
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.showMatricula);
router.post('/pessoas/:estudanteId/matricula', PessoaController.createMatricula);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.showMatricula);

module.exports = router;