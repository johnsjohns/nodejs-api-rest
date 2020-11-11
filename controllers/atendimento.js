const Atendimento = require('../models/atendimento')
module.exports = app => {
    app.get('/atendimento', (req, res) => {
       Atendimento.lista(res);
    });

    app.post('/atendimento', (req, res) => {
        const atendimento = req.body;
        Atendimento.adiciona(atendimento, res);
        

    });
}