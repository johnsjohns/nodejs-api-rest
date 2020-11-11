const atendimento = require('../models/atendimento');
const Atendimento = require('../models/atendimento')
module.exports = app => {
    app.get('/atendimento', (req, res) => {
       Atendimento.lista(res);
    });

    app.get('/atendimento/:id', (req, res) => {
       const id = parseInt(req.params.id);
        Atendimento.buscaPorId(id, res);
    })

    app.post('/atendimento', (req, res) => {
        const atendimento = req.body;
        Atendimento.adiciona(atendimento, res);
        

    });

    app.patch('/atendimento/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;
        Atendimento.altera(id, valores, res);
    })
}