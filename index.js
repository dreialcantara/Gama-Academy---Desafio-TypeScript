"use strict";
const primeiroNome = "seu nome";
const diaDoMes = 12;
const hojeFezSol = true;
let dog1 = {
    nome: "Rex",
    idade: 1,
    raça: "Pitbull",
    grandePorte: true,
};
console.log(`${dog1.nome} é um: ${dog1.raça}`);
//PARTIAL TORNA TODOS TIPOS OPCIONAIS - a função é para desestruturar e adicionar parametros ao objt parametro tem q constar no tipo
function adicionarDono(params) {
    dog1 = Object.assign(Object.assign({}, dog1), params);
    return dog1;
}
console.log(`Eba, ${dog1.nome} tem novos donos, sua nova ficha é:`, adicionarDono({
    donos: "Drei e Bia",
}));
let dog2 = {
    nome: "belinha",
    idade: 1,
    raça: "pitbull",
    grandePorte: true,
};
console.log(dog2);
