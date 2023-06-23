const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const db= require('./models/db') 

//Config
    //Template Engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

    // Body Parser 

    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())


// Rotas

        app.get('/cad', function(req, res){
            res.render("formulario")
        })

        app.post('/add', function(req, res){
            req.body.conteudo
            res.send("FORMULÁRIO RECEBIDO!! <br><br> Titulo: "+req.body.titulo+"<br>Conteúdo: "+ req.body.conteudo)
        })


app.listen(8081, function(){
    console.log("Servidor rodando na url: http://localhost:8081");
});

