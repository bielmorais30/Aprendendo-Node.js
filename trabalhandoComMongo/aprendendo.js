const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/aprendendo").then(() => {
    console.log("Conectado com sucesso no banco");
}).catch((error) => {
    console.log(error)
})

// Model - Usuários
    // Definindo o model

        const UserSchema = mongoose.Schema({
            nome: {
                type: String,
                require: true //obrigatório
            },
            sobrenome: {
                type: String,
                require: true
            },
            email: {
                type: String,
                require: true
            },
            idade: {
                type: Number,
                require: true
            },
            pais: {
                type: String
            }
        })

// Collection

    mongoose.model('users', UserSchema)


const Gabriel = mongoose.model('users')

new Gabriel({
    nome: "Gabriel",
    sobrenome: "Morais",
    email: "gabrielmorais@gmail.com",
    idade: 18,
    pais: "brasil"
}).save().then(() => {
    console.log("Usuario criado com sucesso")
}).catch((error) => {
    console.log(error)
})