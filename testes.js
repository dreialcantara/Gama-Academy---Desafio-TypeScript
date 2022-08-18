"use strict";
// MÉDIA ARITMETICA DE ARRAY
Object.defineProperty(exports, "__esModule", { value: true });
exports.quarterOf = exports.square = exports.removeChar = exports.checkForFactor = exports.findAverage = void 0;
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
function square(a) {
    return a * a;
}
exports.square = square;
//  qual trimestre do ano é o mes
function quarterOf(month) {
    if (month >= 1 && month <= 3) {
        return 1;
    }
    else if (month >= 4 && month <= 6) {
        return 2;
    }
    else if (month >= 7 && month <= 9) {
        return 3;
    }
    else if (month >= 10 && month <= 12) {
        return 4;
    }
    else
        return 0;
}
exports.quarterOf = quarterOf;
