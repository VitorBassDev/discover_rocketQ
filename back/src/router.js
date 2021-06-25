const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
// route.get('/create-pass', (req,res) => res.render("index", {page: 'create-pass'}))
// route.get('/room', (req,res) => res.render("index", {page: 'room'}))

route.get('/create-pass', (req,res) => res.render("create-pass"))
route.get('/room', (req,res) => res.render("room"))
route.get('/room2', (req,res) => res.render("room2"))

module.exports = route
