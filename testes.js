"use strict";
// MÉDIA ARITMETICA DE ARRAY
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeChar = exports.checkForFactor = exports.findAverage = void 0;
function findAverage(array) {
    var soma = 0;
    let i;
    var vazio = "O array está vazio!";
    if (array.length === 0) {
        return vazio;
    }
    else
        for (i = 0; i < array.length; i++) {
            soma += array[i];
        }
    return soma / array.length;
}
exports.findAverage = findAverage;
// Verificando se número é fatorável
function checkForFactor(base, factor) {
    if (factor % base === 0) {
        return true;
    }
    else {
        return false;
    }
}
exports.checkForFactor = checkForFactor;
// Retirar primeiro e ultimo caractere da string
function removeChar(str) {
    str = str.slice(1);
    str = str.slice(-1);
    return str;
}
exports.removeChar = removeChar;
