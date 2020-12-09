
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.linkedin.com/in/diego-ferreira-34b6348b/");
   // window.location.href = "https://www.linkedin.com/in/diego-ferreira-34b6348b/";
}


function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaochange(elemento){
    console.log(elemento.value);
}



/*
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}


var idade = prompt ("Qual sua idade");
console.log(validaIdade(idade));
*/


/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(soma(5, 10));
alert (setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
var d = new Date;
alert(d);
alert("Hoje é dia " + d.getDay() + " / " + d.getMonth() + " / " + d.getFullYear());
alert("São " + d.getHours() + " horas");
alert("e " + d.getMinutes() + " minutos");
*/

/*
var count;
for(count=0; count <= 10; count++){
alert(count);
console.log(count);
}
*/


/*
var count = 0;
while (count <= 10){
    console.log(count);
    alert(count);
    count++
};
*/


/*
var idade = prompt("Qual sua idade?");
//var idade = 18;
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/


/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/


/*
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/


/*
var lista = ["maça", "pêra", "laranja"];
lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());
//alert(lista[1]);
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(" - "));
*/

/*
var nome = "Diego Henrique Ferreira";
var idade = 13;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"
//alert(nome +" tem "+ idade + " anos ");
//alert(idade + idade2);
console.log(nome)
console.log(idade+idade2)
console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
*/

