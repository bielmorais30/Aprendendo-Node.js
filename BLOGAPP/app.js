// Carregando módulos
    const express = require('express');
    const handlebars = require('express-handlebars');
    const bodyparser = require('body-parser');
    const app = express();
    const admin = require('./routes/admin');
    //const mongoose = require('mongoose');

// Configurações
    // Body Parser
        app.use(express.urlencoded({extended: true}));
        app.use(express.json());
    // Handle Bars
        // ATENÇÃO:                COLOCAR .ENGINE 
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    // Mongoose
        // Em breve
// Rotas
    app.use('/admin', admin);
// Outros
    const PORT = 8081;
    app.listen(PORT, () => {
        console.log("Servidor Rodando! ")
    })