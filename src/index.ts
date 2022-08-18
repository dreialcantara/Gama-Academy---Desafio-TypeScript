const primeiroNome: string = 'seu nome';
const diaDoMes: number = 12;
const hojeFezSol: boolean = true;

type Cachorro = {
  nome: string;
  idade: number;
  raça: string;
  grandePorte: boolean;
  donos?: string;
};

let dog1: Cachorro = {
  nome: 'Rex',
  idade: 1,
  raça: 'Pitbull',
  grandePorte: true,
};

console.log(`${dog1.nome} é um: ${dog1.raça}`);
console.log('Sua ficha é:', dog1);

//PARTIAL TORNA TODOS TIPOS OPCIONAIS - a função é para desestruturar e adicionar parametros ao objt parametro tem q constar no tipo
function adicionarDono(params: Partial<Cachorro>): Cachorro {
  dog1 = { ...dog1, ...params };

  return dog1;
}

console.log(
  `Eba, ${dog1.nome} tem novos donos, sua nova ficha é:`,
  adicionarDono({
    donos: 'Drei e Bia',
  })
);

//omit, para retirar propriedade e chave do tipo, criando typo cachorro mas sem o dono
type CachorroSemDono = Omit<Cachorro, 'donos'>;

let dog2: CachorroSemDono = {
  nome: 'belinha',
  idade: 1,
  raça: 'pitbull',
  grandePorte: true,
};
console.log(`A ficha de ${dog2.nome} é:`);

console.log(dog2);

interface Animais {
  tipo: string;
  bipede: boolean;
  asas: number | null;
  região: string;
}
