const {Router} = require('express');

const routes = Router();

routes.get('/teste', (req,res)=> res.json('Success! Hello World'));

module.exports = routes;