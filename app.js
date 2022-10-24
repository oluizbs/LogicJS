// alert("Olá Mundo");
// var nome = prompt("Qual seu nome?");
// alert("Bem vindo! "+ nome);

// var num1 = parseInt(prompt("Digite um número: "));
// var num2 = parseInt(prompt("Digite outro número: "));
// var soma = num1 + num2;
// alert("Resultado: "+soma);

// prompt("Digite um número: ");

// var paraInt = prompt("Digite um valor: ");
// alert("Valor em inteiro: "+paraInt);

// var n1 = parseInt(prompt("Digite um número: "));
// var n2 = parseInt(prompt("Digite outro número: "));
// var sub = n1 - n2;
// alert("A subtração é: "+sub);

// var n1 = parseInt(prompt("Digite um número: "));
// var n2 = parseInt(prompt("Digite outro número: "));
// var soma = n1 + n2;
// alert("A soma é: "+soma);

// var n1 = parseInt(prompt("Digite um número: "));
// var n2 = parseInt(prompt("Digite outro número: "));
// var div = n1 / n2;
// alert("A divisão é: "+div);

// var nota1 = parseInt(prompt("Digite a primeira nota: "));
// var nota2 = parseInt(prompt("Digite a segunda nota: "));
// var media = (nota1 + nota2) / 2;
// alert("A media é "+media);

// var nota1 = parseInt(prompt("Digite a primeira nota: "));
// var nota2 = parseInt(prompt("Digite a segunda nota: "));
// var resto = nota1 % nota2;
// alert("O resto da divisão é "+resto);

//var nota1 = parseInt(prompt("Digite a primeira nota: "));
//var nota2 = parseInt(prompt("Digite a segunda nota: "));
//var elev = nota1 ** nota2;
//alert(""+nota1 ,"elevado à "+nota2 ,"é igual a: "+elev);

let nome = "Luiz";
let idade = 17;
let email = "luiz@gmail.com"

let pessoa = {
    nome: "Luiz",
    idade: 17,
    email: "luiz@gmail.com"
};
console.log(pessoa);

let arrayio = [17, 22, 13, "jão", null];

console.log(arrayio[3]);

let corSite = "azul";

function resetaCor(cor, tonalidade){
    corSite = cor + " " + tonalidade;
};

console.log(corSite);
resetaCor("verde", "claro");
console.log(corSite);

let nameIni = "Gabriel";

function alteraNome(nuevoName){
    nameIni = nuevoName;
};

console.log(nameIni);
alteraNome("Miguel");
console.log(nameIni);

//Function que no devolve nada
    function mostraNome(){
        console.log('Luci');
    }
        console.log(mostraNome);

//Function que return algo
function multiplicaN(valor){
    return valor*2;
};

//console.log(multiplicaN(2));

let result = multiplicaN(2);
console.log(result);

//Isso realmente está funcionando??????
