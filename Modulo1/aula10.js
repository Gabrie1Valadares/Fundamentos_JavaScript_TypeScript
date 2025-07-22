//Funções em JS / Introdução
/**
 
//Função: Um bloco de código que executa uma tarefa específica.
//return: Palavra-chave usada para devolver um valor da função para quem a chamou

function saudacao(nome) {
  console.log(`Bom dia ${nome}! `);
  return 1234;
}

const variavel = saudacao(w"Ana");

console.log(variavel);
 

function somar(a, b) {
  return a + b;
}

let resultado = somar(5, 3);
console.log(resultado); // Saída: 8

//Podemos cria um funções anonima

const raiz = function (n) {
  return n ** 0.5;
};

console.log(raiz(9));
*/

// Existe tbm uma jeito mais atual de cria um função chamada arrow function

const raiz = (n) => n ** 0.5;

console.log(raiz(9));
