// Alert, confirm e prompt (Navegador)

//Exercício com variáveis
let num1 = prompt("Digite um número: ");
let num2 = prompt("Digite outro número: ");
let resultado;

num1 = Number(num1);
num2 = Number(num2);

resultado = num1 + num2;

alert(`O resultado é ${resultado}`);

//Exercício com variáveis sobre esculpa de variáveis

let varA = "A";
let varB = "B";
let varC = "C";

/*
//Essa seria umas das formas re resolver esse exercício
const varD = varA;
varA = varB;
varB = varC;
varC = varD;
*/

//Essa seria um forma mais moderna para resolver o exercício
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
