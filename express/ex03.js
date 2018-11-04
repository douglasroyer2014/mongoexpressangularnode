const express = require('express');
const server = express();

server.use(function(req, res, next){
  console.log('Inicio...');
  next();
  console.log('Fim...');
});

server.use(function(req, res){
  console.log('resposta...');
  res.send('<h1>Api!</h1>');
});

server.listen(3000, () => console.log('Executando...'))
