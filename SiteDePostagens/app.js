const express = require("express");
const app = express();
const Sequelize = require('sequelize');
const handlebars = require('express-handlebars');

//Config
    //Template Engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

    // Conexão com o banco de dados MySql    
        const sequelize = new Sequelize("SistemaDeCadastro", "root", "",{
            host: "localhost",
            dialect: "mysql"
        });

// Rotas

        app.get('/cad', function(req, res){
            res.render("formulario")
        })


app.listen(8081, function(){
    console.log("Servidor rodando na url: http://localhost:8081");
});

