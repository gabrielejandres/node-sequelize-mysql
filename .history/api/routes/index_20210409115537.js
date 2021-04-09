const express = require('express');
const pessoas = require('./pessoasRoute');

module.exports = app => {

  app.use(express.json());

  app.get('/show', (request, response) => {
    response.status(200).send({mensagem: 'welcome'})
  });
}
