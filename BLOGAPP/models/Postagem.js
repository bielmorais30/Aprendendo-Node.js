const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Postagem = new Schema({
    titulo:{
        type: String,
        required: true
    },
    slug:{
        type: String,
        require: true
    },
    descricao:{
        type: String,
        required: true
    },
    conteudo: {
        type: String,
        require: true
    },
    categoria: {
        type: Schema.ObjectId,
        ref: "categorias",
        require: true
    },
    data: {
        type: Date,
        default: Date.now()
    }
})

mongoose.model("postagens", Postagem)