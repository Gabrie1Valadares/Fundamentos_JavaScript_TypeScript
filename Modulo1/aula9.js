// Arrays(básico)
const alunos = ["Ana", "Gabriel", "Marcos"];

//console.log(alunos);
//console.log(alunos[0]);
//console.log(alunos[1]);

//Podemos editar nosso índices sem que for preciso, podemos adicionar novos índices.
//alunos[0] = "Eduarda";
//alunos[3] = "Felipe";

//alunos[alunos.length] = "Luana";
//alunos[alunos.length] = "Laura";

//Existe  uma forma mais fácil
//alunos.push("Luiza", "Fábio");

//Para adicionar no começo é um pouco mais complica, já que todos os elementos do meu array precisão andar uma casa.
//alunos.unshift("Luiza", "Matheus");

//Podemos remover objetos do meu arrays utilizamos:
//Obs: a tag (pop) remove o último objetos do meu array.
//alunos.pop();

//Obs: a tag (shift) remove o primeiro objeto do meu array.
//alunos.shift();

//Podemos apagar um Objeto mas manter os índices dos demais Objetos

//delete alunos[1];

//Sobre o fatiamento é exatamente igual aos exemplos realizados com string, a única diferença é que os indices dos arrays não são por letra é sim por elementos
//alunos.push("Luiza", "Fábio");

//console.log(alunos.slice(0, -2));

console.log(typeof alunos);
