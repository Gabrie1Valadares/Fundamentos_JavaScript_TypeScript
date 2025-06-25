// Fundamentos sobre variável Const e let

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

let nome; // Declarou a variável
nome = "Ana"; // Inicializando a variável
console.log(nome);
// Alteração do valor da variável
nome = "Fernanda";
// IMPORTANTE AMBOS OS VALORES SERÃO EXIBIDOS NA TELA,
// POREM O VALOR DA VARIÁVEL PASSARA SER O SEGUNDO "FERNANDA"
console.log(nome);

// Não podemos criar variáveis com palavras reservadas e constante
// Variáveis e constantes precisam ter nomes significativos
