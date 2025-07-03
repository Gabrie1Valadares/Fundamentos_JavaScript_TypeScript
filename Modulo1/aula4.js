//               01 234567
let umaString = "um texto sobre alguma coisa";

//Eu verifica  quantos elementos uma string possui
console.log(umaString.indexOf("texto"));

console.log(umaString[4]);

console.log(umaString[-1]);

console.log(umaString.charAt(3));

//localiza o índice  dio objeto declaro em ()
console.log(umaString.indexOf("e", 2));

//Eu verifica  quantos elementos uma string possui de trás pra frente.
console.log(umaString.lastIndexOf("x", 4));

//Expressões Regulares são padrões usados para buscar, validar e manipular textos.

console.log("Expressões Regulares");
console.log(umaString.match(/[a-z]/g));

console.log(umaString.search(/t/));

console.log(umaString.replace("um", "um"));

//fatiamento de valores
console.log(umaString.length);

console.log(umaString.slice(2, 6));

console.log(umaString.split("m"));
