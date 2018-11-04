const express = require('express');
const server = express();

server.route('/cliente')
.get((req, res) => res.send('lista de Clientes'))
.post((req,res) => res.send('Novo cliente'))
.put((req, res) => res.send('Alterar cliente'))
.delete((req, res) => res.send('Remove cliente'));

server.listen(3000, () => console.log('Executando...'))
