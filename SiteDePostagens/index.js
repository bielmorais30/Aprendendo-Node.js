const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const db= require('./models/db');
const Post = require('./models/Post');

//Config
    //Template Engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main', runtimeOptions:{allowProtoMethodsByDefault: true, allowProtoPropertiesByDefault: true}}));
        app.set('view engine', 'handlebars');

    // Body Parser 

    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())


// Rotas

        app.get('/', function(req, res){
            
            Post.findAll().then(function(result_post){
                res.render("home", {result_post_bars: result_post});
                //res.send(result_post)
            }).catch(function(error){
                res.send(error)
            })
        });

        app.get('/cad', function(req, res){
            res.render("formulario");
        });

        app.post('/add', function(req, res){
            // chamar valor do formulario imput pelo name: req.body.conteudo
             //res.send("FORMULÁRIO RECEBIDO!! <br><br> Titulo: "+req.body.titulo+"<br>Conteúdo: "+ req.body.conteudo)
            Post.create({
                titulo: req.body.titulo,
                conteudo: req.body.conteudo
            }).then(function(){
                res.redirect('/')
            }).catch(function(error){
                res.send("Falha na criação do post " + error)
            })           
        })


app.listen(8081, function(){
    console.log("Servidor rodando na url: http://localhost:8081");
});

