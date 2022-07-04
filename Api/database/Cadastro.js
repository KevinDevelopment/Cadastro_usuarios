const Sequelize = require("sequelize");
const connection = require("./database");



const Cadastro = connection.define('sugestao_funcionarios', {

    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    complemento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sugestao: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

Cadastro.sync({force: false}).then(() => {
    console.log("Tabela criada com sucesso!")
}).catch((erro) => {
    console.log(`Poxa, houve um erro :( ${erro}`)
});

module.exports = Cadastro;