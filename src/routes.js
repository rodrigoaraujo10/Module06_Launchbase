const express = require('express')
const routes  = express.Router()
const multer = require('./app/middlewares/multer')
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
routes.post('/products', multer.array("photos", 6), ProductController.post)
routes.put('/products', multer.array("photos", 6), ProductController.put)
routes.get('/products/:id/edit', ProductController.edit)
routes.delete('/products', ProductController.delete)

//ALIAS
routes.get('/ads/create', function(req, res) {
    return res.redirect('/products/create')
})




 module.exports = routes