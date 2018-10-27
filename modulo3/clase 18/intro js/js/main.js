// sintaxis
// palabras reservadas

// variables 

// escribir
var dato1;
var dato2;
var dato3;
var saldo;
var promedio;

dato1="La xixa";
dato2="25";
dato3="999888777";
saldo=10.35;
promedio=50;

/*
console.log(dato1);
console.log(dato2);
console.log(dato3);
console.log(saldo);
console.log(promedio);
console.log(saldo+promedio);
console.log(url_base);*/

// Variables

var num1;
var num2;
num1="10";
num2="30";
/*
var n1=parseInt(num1);
var n2=parseInt(num2);
var suma=n1+n2;
*/
var suma = parseInt(num1)+parseInt(num2);
/*
var suma;
suma=num1+num2;
*/
//console.log("resultado de la primera suma: "+suma);

/*var resultado = confirm("dime tu elecciòn");
alert(resultado);*/

/*var n1=prompt("ingresa un numero1");  // = "10"
var n2=prompt("ingresa un numero2");  // = "30"

suma = parseInt(n1)+parseInt(n2);

console.log("resultado suma 2: "+suma);*/
var totalito = 0 ;
function sumar() {
	totalito = 1+2;
	resetear();
	restar();
	return totalito;
}

function restar()
{
	totalito = totalito - 5;
}

function resetear()
{
	totalito = 0;
}
//console.log(sumar());

var nombre1="JC";
var nombre2="Diego";
var nombre3="Carlos";
var nombre4="Luis";
var notas=[10,20,15];
var nombres=[nombre1,nombre2,nombre3,notas];
var totales=["html",nombres];
var posicion = 2;
console.log(totales[1]);
/*console.log(nombres[0]);
console.log(nombres[1]);
console.log(nombres[2]);
console.log(nombres[3][0]);*/

