const {
    Router
} = require('express');

const controller = require('./controllers/controller');

const routes = Router();

routes.get('/getContract', (req, res) => controller.getContract()
    .then(result => res.send(result))
    .catch(error => console.error(error))
);

routes.post('/createContract', (req,res) => controller.createContract(req.body)
    .then(result => res.send(result))
    .catch(error => console.error(error))
);

routes.put('/updateContract/id', (req, res) => controller.updateContract(req.params, req.body)
    .then(result => res.send(result))
    .catch(error => console.error(error))
);

routes.delete('/deleteContract/id', (req, res) => controller.deleteContract(req.params)
    .then(result => res.send(result))
    .catch(error => console.error(error))
);

module.exports = routes;