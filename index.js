"use strict";
const primeiroNome = "seu nome";
const diaDoMes = 12;
const hojeFezSol = true;
let rex = {
    nome: "Rex",
    idade: 1,
    raça: "Pitbull",
    grandePorte: true,
};
console.log(`${rex.nome} é um: ${rex.raça}`);
//função para desestruturar e adicionar parametros ao objt parametro tem q constar no tipo
function adicionarDono(params) {
    rex = Object.assign(Object.assign({}, rex), params);
    return rex;
}
console.log("Eba Rex tem novos donos, a nova ficha de rex é:", adicionarDono({
    donos: "Drei e Bia",
}));
let belinha = {
    nome: "nome",
    idade: 1,
    raça: "pitbull",
    grandePorte: true,
};
