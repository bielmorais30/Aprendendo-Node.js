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