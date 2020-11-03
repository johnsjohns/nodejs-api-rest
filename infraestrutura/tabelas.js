class Tabelas{
    init(conexao){
        this.conexao = conexao;
        this.criarAtendimento();
    }

    criarAtendimento(){
        const sql = 'CREATE TABLE IF NOT EXISTS atendimento (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) not null, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))';

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro);
            }
            else {
                console.log('Tabela atendimento criada com sucesso');
            }
        });
    }
}

module.exports = new Tabelas;