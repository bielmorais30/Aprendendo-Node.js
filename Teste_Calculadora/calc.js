const readLine = require("readline")
const somaFunc = require("./funcoes/somar")
const subFunc = require("./funcoes/subtrair")
const multFunc = require("./funcoes/multiplicar")
const divFunc = require("./funcoes/dividir")

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("1-Somar  2-Subtrair  3-Multiplicar  4-Dividir ", op =>{
    rl.question("N1: ", n1 =>{
        rl.question("N2: ", n2 => {
            if(op == 1){
                console.log(somaFunc(n1,n2));
            };
            if(op == 2){
                console.log(subFunc(n1,n2));
            };
            if(op == 3){
                console.log(multFunc(n1,n2));
            };
            if(op == 4){
                console.log(divFunc(n1,n2));
            };
        })
    })
})
// var op = window.prompt("1-Somar  2-Subtrair  3-Multiplicar  4-Dividir");

// var n1 = window.prompt("N1: ");
// var n2 = window.prompt("N2: ");

