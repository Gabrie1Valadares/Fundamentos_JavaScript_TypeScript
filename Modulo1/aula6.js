// Um pouco mais sobre os numbers em JavaScript
let num1 = 10;
let num2 = 2.5;

let num3 = 0.7;
let num4 = 0.1;

//No caso o numero se torna um string temporário
//console.log(num1.toString() + num2);

//Se precisamos transforma Nambe em String, poderíamos utilizar o comando.
//Num1 = num1.toString();

//Em caso de números quebrados podemos arredondar para Cima ou para baixo
//console.log(num1.toFixed(2));

//Retorna se o número é inteiro ou quebrando
//console.log(Number.isInteger(num1));

//Para verificar quando uma conta é valida ou não utilizamos o comando:
//let temp = num1 * 'ola';
//let temp = num1 * '5';
//console.log(Number.isNaN(temp));

//No Js existe uma certa imprecisão sobre o valor
//A imprecisão e devida o modelo que o js interpreta os números: IEEE 754-2008
/*num1 = num3 += num4; // 0.8
num1 = num3 += num4; //0.9
num1 = num3 += num4; //1.0
num1 = num3 += num4; //1.1
num1 = num3 += num4; //1.2
num1 = num3 += num4; //1.3
num1 = num3 += num4; //1.4
num1 = num3 += num4; //1.5
num1 = num3 += num4; //1.6
num1 = num3 += num4; //1.7
num1 = num3 += num4; //1.8
num1 = num3 += num4; //1.9
num1 = num3 += num4; //2.0
*/

//Se retiramos o código abaixo o valor voltara á ser impreciso
//num1 = parseFloat(num1.toFixed(2));
//num1 = Number(num1.toFixed(2));

//Podemos resolver essa falhas fazendo contas
num3 = (num3 * 100 + num4 * 100) / 100; //0.8
num3 = (num3 * 100 + num4 * 100) / 100; //0.9
num3 = (num3 * 100 + num4 * 100) / 100; //1.0

console.log(num3);
console.log(Number.isInteger(num3));

//JavaScript usa o tipo Number (baseado no padrão IEEE 754 de 64 bits)
// para representar todos os números.
// Esse padrão tem limites de precisão, especialmente ao lidar com números decimais ou muito pequenos (ou grandes).
