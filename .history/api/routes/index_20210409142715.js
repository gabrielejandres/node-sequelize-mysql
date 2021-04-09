const express = require('express');
const pessoas = require('./pessoasRoute');
const niveis = require('./pessoasRoute');

module.exports = app => {

  app.use(express.json());
  app.use(pessoas);

}

