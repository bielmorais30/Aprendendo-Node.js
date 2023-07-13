// Carregando módulos
    const express = require('express');
    const handlebars = require('express-handlebars');
    const bodyparser = require('body-parser');
    const app = express();
    const admin = require('./routes/admin');
    const path = require('path');
    const mongoose = require('mongoose');
    const session = require('express-session');
    const flash = require('connect-flash');

// Configurações
    // Sessão 
        app.use(session({
            secret: "session_blogapp",
            resave: true,
            saveUninitialized: true
        }))
        app.use(flash());
    // Middleware
        app.use((req, res, next) => {
            res.locals.success_msg = req.flash("sucess_msg"); // var global
            res.locals.error_msg = req.flash("error_msg");
            next();
        })
    // Body Parser
        app.use(express.urlencoded({extended: true}));
        app.use(express.json());
    // Handle Bars
        // ATENÇÃO:                COLOCAR .ENGINE 
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    // Mongoose
        mongoose.Promise = global.Promise;
        mongoose.connect("mongodb://localhost:27017/blogapp").then(() => { 
            console.log("Conectado ao mongo!");
        }).catch((error) => {
            console.log(error);
        });
    // Public
        app.use(express.static(path.join(__dirname,"public"))); // Informa ao diretório onde ficarão os arquivos estáticos

        app.use((req, res, next) => {
            console.log("OI EU SOU UM MIDDLEWARE");
            next();
        });

// Rotas
    app.use('/admin', admin);
// Outros
    const PORT = 8081;
    app.listen(PORT, () => {
        console.log("Servidor Rodando! ")
    })