const Sequelize = require("sequelize");
const sequelize = new Sequelize("sistemadecadastro", "root", "", {
    host: "localhost",  //host do banco de dados
    dialect: "mysql"    //tipo do banco de dados
});

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar "+erro)
});

//criando um model

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

//Postagem.sync({force: true})

Postagem.create({
    titulo: "TITULO",
    conteudo: "conteudo conteudoconteudo conteudo conteudo"
})

const Usuario = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

//Usuario.sync({force: true})

Usuario.create({
    nome: "Joaquim",
    sobrenome: "José Da Silva Xavier",
    idade: "277",
    email: "tiradentes@minas.com"
})