module.exports = app => {
    app.get('/atendimento', (req, res) => {
        res.send('Você esta na rota de atendimento')
    });


    app.post('/atendimento', (req, res) => {
        res.send('Você está na rota de atendimanros e está realizando um post')

    });
}