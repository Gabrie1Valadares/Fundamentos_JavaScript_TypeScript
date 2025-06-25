// Fundamentos sobre Const e let

//const primeiroNumero = '5' //STRING
const primeiroNumero = 5; //NUMBER
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
// Constantes (const) não podem ter seu valor reatribuído após a declaração.
// Além disso, toda constante precisa ser inicializada com um valor no momento em que é declarada.
console.log(primeiroNumero, segundoNumero, resultadoTriplicado);

// LET é uma variável que pode ser altera durante, mas que ela pode ser altera no escopo em que ela foi declara
// EX: uma variável declarada com let no escopo global é diferente de outra com o mesmo nome declarada dentro de uma função ou bloco ({ }).

let n0me; // Declarou a variável
n0me = "Ana"; // Inicializando a variável
console.log(n0me);
// Alteração do valor da variável
n0me = "Fernanda";
// IMPORTANTE AMBOS OS VALORES SERÃO EXIBIDOS NA TELA,
// POREM O VALOR DA VARIÁVEL PASSARA SER O SEGUNDO "FERNANDA"
console.log(n0me);

// Não podemos criar variáveis com palavras reservadas e constante
// Variáveis e constantes precisam ter nomes significativos

//Exercícios - Const e Let

//Gabriel Cordeiro Valadares tem 24 anos, pesa 70 kg tem 1.70 de altura e seu IMC é de 55.1231

const nome = "Gabriel Cordeiro";
const sobreNome = "Valadares";
const idade = 24;
const peso = 70;
const altura = 1.7;
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2025 - idade;
console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento} `);
