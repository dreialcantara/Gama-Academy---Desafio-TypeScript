const primeiroNome: string = "seu nome";
const diaDoMes: number = 12;
const hojeFezSol: boolean = true;

type Cachorro = {
  nome: string;
  idade: number;
  raça: string;
  grandePorte: boolean;
  donos?: string;
};

let rex: Cachorro = {
  nome: "Rex",
  idade: 1,
  raça: "Pitbull",
  grandePorte: true,
};

console.log(`${rex.nome} é um: ${rex.raça}`);

//função para desestruturar e adicionar parametros ao objt parametro tem q constar no tipo
function adicionarDono(params: Partial<Cachorro>): Cachorro {
  rex = { ...rex, ...params };

  return rex;
}

console.log("Eba Rex tem novos donos, a nova ficha de rex é:",
  adicionarDono({
    donos: "Drei e Bia",
  })
);

//omit, para retirar propriedade e chave do tipo
type CachorroSemDono = Omit<Cachorro, "donos">;

let belinha: CachorroSemDono = {
  nome: "nome",
  idade: 1,
  raça: "pitbull",
  grandePorte: true,
};




interface Animais {
  tipo: string;
  bipede: boolean;
  asas: number | null;
  região: string;
}
