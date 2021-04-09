const { Router } = require('express');
const routes = require('.');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas')