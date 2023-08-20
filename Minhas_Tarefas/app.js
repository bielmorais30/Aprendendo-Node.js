// Carregando módulos
    const express = require('express');
    const app = express();
    const handlebars = require('express-handlebars');
    const bodyparser = require('body-parser');
    const path = require('path');
    const session = require('express-session');
    const flash = require('connect-flash');
    const mongoose = require('mongoose');

// Configurações
    // Sessão
        app.use(session({
            secret: "session_minhastarefas_app",
            resave: true,
            saveUninitialized: true
        }));
        app.use(flash());
    // Middleware
        app.use((req, res, next) =>{
            res.locals.success_msg = req.flash('success_msg');
            res.locals.error_msg = req.flash('error_msg');
            next();
        })
    // Body Parser
        app.use(express.urlencoded({extended: true}));
        app.use(express.json());
    // Handlebars 
        app.engine('handlebars', handlebars.engine({defaultLayout: main}));
        app.set('view engine', 'handlebars');