const express = require("express")
// import express from "express";
const app = express();

app.get("/", function(req, res){
    res.send("Seja bem-vindo ao meu app!")
})

app.get("/sobre", function(req, res){
    res.send("Minha página sobre");
});

app.get("/blog", function(req, res){
    res.sendFile(__dirname+"/index.html") 
});

app.listen(8081, function(){
    console.log("Servidor rodando na url: http://localhost:8081")
}); //tem que ser a ultima linha do código