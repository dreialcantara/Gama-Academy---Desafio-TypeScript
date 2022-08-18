// MÉDIA ARITMETICA DE ARRAY

export function findAverage(array: number[]): any {
  var soma = 0;
  let i: number;
  var vazio: string = "O array está vazio!";

  if (array.length === 0) {
    return vazio;
  } else
    for (i = 0; i < array.length; i++) {
      soma += array[i];
    }
  return soma / array.length;
}

// Verificando se número é fatorável
export function checkForFactor(base: number, factor: number): boolean {
  if (factor % base === 0) {
    return true;
  } else {
    return false;
  }
}

// Retirar primeiro e ultimo caractere da string
export function removeChar(str: string): string {
  str = str.slice(1);
  str = str.slice(-1);
  return str;
}

export function square(a: number): number {
  return a * a;
}

//  qual trimestre do ano é o mes
export function quarterOf(month: number): number {
  if (month >= 1 && month <= 3) {
    return 1;
  } else if (month >= 4 && month <= 6) {
    return 2;
  } else if (month >= 7 && month <= 9) {
    return 3;
  } else if (month >= 10 && month <= 12) {
    return 4;
  } else return 0;
}
