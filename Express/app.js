const express = require("express")
// import express from "express";
const app = express();

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/", function(req, res){
    res.sendFile(__dirname+"/html/index.html") 
});

app.get("/ola/:cargo/:nome", function(req, res){
    res.send("<h1>Ola "+ req.params.nome +"</h1><br><h2>Seu cargo: "+ req.params.cargo + "</h2>");
    // o .send só pode ser utilizado uma ves dentro de um parametro

})

app.listen(8081, function(){
    console.log("Servidor rodando na url: http://localhost:8081")
}); //tem que ser a ultima linha do código