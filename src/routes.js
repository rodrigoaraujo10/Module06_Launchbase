const express = require('express')
const routes  = express.Router()
const ProductController = require('./app/controllers/ProductController')


// HTTP VERBS

// GET: Receber/Pegar RESOURCE
// POST: Criar ou Salvar - Criar um novo RESOURCE com dados enviados
// PUT: Atualizar RESOURCE
// DELETE: Deletar RESOURCE


routes.get('/', function(req, res) {
    return res.render('layout.njk')
}) 
routes.get('/products/create', ProductController.create)
routes.post('/products', ProductController.post)
//ALIAS
routes.get('/ads/create', function(req, res) {
    return res.redirect('/products/create')
})




 module.exports = routes