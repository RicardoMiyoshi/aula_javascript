function clicou() {
  document.getElementById('agradecimento').innerHTML =
    '<b>Obrigado por clicar</b>';
  //console.log(document.getElementById('agradecimento'));
  //alert('Obrigado por clicar');
}

function redirecionar() {
  //window.open('https://web.digitalinnovation.one/home');
  window.location.href = 'https://web.digitalinnovation.one/home';
}

function trocar(elemento) {
  elemento.innerHTML = 'Obrigado por passar o mouse';
  //document.getElementById('mousemove').innerHTML =
  ('Obrigado por passar o mouse');
  //alert('Trocar texto');
}

function voltar(elemento) {
  elemento.innerHTML = 'Passe o mouse aqui';
  //document.getElementById('mousemove').innerHTML = 'Passe o mouse aqui';
  //alert('Trocar texto');
}

function load() {
  alert('Página Carregada');
}

function funcaoChange(elemento) {
  console.log(elemento.value);
}

/*
function soma(n1, n2) {
  return n1 + n2;
}

function validaIdade(idade) {
  var validar;
  if (idade >= 18) {
    validar = true;
  } else {
    validar = false;
  }
  return validar;
}

var idade = prompt('Qual sua idade');
console.log(validaIdade(idade));
*/
/*
function setReplace(frase, nome, novo_nome) {
  return frase.replace(nome, novo_nome);
}
*/
//alert(soma(5, 10));
//alert(setReplace('Vai Japão', 'Japão', 'Brasil'));

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/
/*
var count;
for (count = 0; count <= 5; count++) {
  alert(count);
}
*/
/*var count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
*/
/*
var idade = prompt('Qual a sua idade');
//var idade = 18;
if (idade >= 18) {
  alert('maior de idade');
} else {
  alert('menor de idade');
}
*/
/*
var frutas = [
  { nome: 'maça', cor: 'vermelha' },
  { nome: 'uva', cor: 'roxa' },
];
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta = { nome: 'maça', cor: 'vermelha' };
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ['maça', 'pêra', 'laranja'];
//lista.push('uva');
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(' - '));

/*
var nome = 'Ricardo Miyoshi';
var idade = 50;
var idade2 = 10;
var frase = 'Japão é o melhor time do mundo';

//alert(nome + ' tem ' + idade + ' anos');
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace('Japão', 'Brasil'));
alert(frase.replace('Japão', 'Brasil'));
console.log(frase);
*/
