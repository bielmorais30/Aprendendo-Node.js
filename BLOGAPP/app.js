// Carregando módulos
    const express = require('express');
    const handlebars = require('express-handlebars');
    const bodyparser = require('body-parser');
    const app = express();
    //const mongoose = require('mongoose');

// Configurações
    // Body Parser
        app.use(bodyparser.urlencoded({extended: true}));
        app.use(bodyparser.json());
    // Handle Bars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    // Mongoose
        // Em breve
// Rotas

// Outros
    const PORT = 8081;
    app.linsten(PORT, () => {
        console.log("Servidor Rodando! ")
    })