//Exercícios com numbers e Math
const numero = Number(prompt("Digite um número: "));

const numeroTitulo = document.getElementById("nTitulo");
const raizq = document.getElementById("raizq");
const nInteiro = document.getElementById("nInteiro");
const numeroNan = document.getElementById("numeroNan");
const arreBaixo = document.getElementById("arreBaixo");
const arreCima = document.getElementById("arreCima");
const decimais = document.getElementById("decimais");

numeroTitulo.innerHTML = numero;
raizq.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
nInteiro.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(
  numero
)}</p> `;
numeroNan.innerHTML += `<p>É NaN: ${Number.isNaN(numero)} </p>`;
arreBaixo.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p> `;
arreCima.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
decimais.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
