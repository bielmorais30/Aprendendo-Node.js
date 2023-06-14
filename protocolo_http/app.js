const http = require("http");

http.createServer(function(req, res){
    res.end("Ola");
}).listen(8081);

console.log("O servidor esta rodando");

//Fechar o e abrir o servidor para atualizar
//módulo nodemon resolve esse problema