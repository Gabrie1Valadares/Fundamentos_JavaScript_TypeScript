// Tipos de dados primitivos

const nome = "Ana"; // String
const N1 = 100; //Number
const N2 = 11.55; //Number
let cliente; // Undefined, Não aponta para nenhum local na memória
const aprovado = false; // Boolean, False e True valores lógicos

//Operadores aritméticos, de atribuição e incremento

/*
 Aritméticos
  + Adição / Concatenação
  - Subtração 
  * multiplicação 
  ** Potenciação 
  / Divisão 
  % Resto da Divisão   
 */

const num1 = 10;
const num2 = 2;
const num3 = 5;

// Ordem de precedência dos operadores (), **, *, /, %, +, -.

console.log(num1 + num2 + " Adição");
console.log(num1 - num2 + " Subtração");
console.log((num1 + num2) * num3 + " Adição / Divisão");
console.log(num1 * num2 + " multiplicação");
console.log(num1 ** num2 + " Potenciação");
console.log(num1 / num2 + " Divisão");
console.log((num1 % num3) + " Resto da Divisão");

console.log(" ");

// Operado de incremento  ( ++ ) Decremento ( -- )
// Esse operado pode ser declarado pre ou pos

//Primeiro ele vai exibira o valor antigo é depois incrementara o valor
let contador1 = 1;
console.log(contador1++);
console.log(contador1);
//console.log(contador1--);
//console.log(contador1);

console.log("Operado de incremento  ( ++ ) Decremento ( -- )");

/*Operadores de atribuição 
  +=
  -=
  *=
  **=
*/

// Exibira o valor atualizado
let contador2 = 1;
console.log(++contador2);
//console.log(--contador2);

console.log(" ");

let contador = 0;
contador += 2; // Contador = contador + 2
contador += 2;
contador += 2;
console.log(contador);

// NaN Not a number

const numero1 = 10;
const numero2 = parseInt("5"); // Transforma um valor em um Número Inteiro
const numero3 = parseFloat("5.4"); // Transforma um valor em um Número Decimal
const numero4 = Number("54"); // O número pode ser Decimal ou Inteiro, o valor é adaptável

console.log(numero1 + numero2);
console.log(numero1 + numero3);
