/*Primitivos (Imutáveis) - String, Number, Boolean, undefined, null (bigint, symbol) */

//Quando você faz let b = a, o valor é copiado. Depois que b muda, a continua o mesmo.
let pessoa1 = "Gabriel";
let pessoa2 = pessoa1;

console.log(pessoa1, pessoa2);
let a = 10;
let b = a;
b = 20;

console.log(a); // 10
console.log(b); // 20

//Dados passados por referência são (mutável) - array, object, function

//Aqui, obj2 = obj1 faz com que ambas as variáveis apontem para o mesmo objeto na memória. Se você mudar algo em obj2, isso afeta obj1.

let c = [1, 2, 3];
let d = c;
console.log(c, d);

c.push(4);
console.log(c, d);

d.pop();
console.log(c, d);

let obj1 = { nome: "Gabriel" };
let obj2 = obj1;
obj2.nome = "Valadares";

console.log(obj1.nome); // "Valadares"
console.log(obj2.nome); // "Valadares"
