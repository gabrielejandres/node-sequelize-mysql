module.export = app => {
  
  app.use(express.json());

  app.get('/teste', (request, response) => {
    response.status(200).send({mensagem: 'welcome'})
  });
}

