var numero1 = 1;
var resultado;

//parsear un texto a numero
//var numer1 = parseInt("1");

var numero2 = 10;

var total = numero1 + numero2;
console.log(total);

total = total * numero2;

var numero3 = 0;
console.log(total);

//indefinido
//total = total / numero3;
console.log(total);

//residuo
total = total % numero2;
console.log(total);

//alert(total);

//confirmar
//var eleccion=confirm("dime tu elecciòn");
//console.log(eleccion);

/*var n1=prompt("ingresa un numero1");  // = "10"
var n2=prompt("ingresa un numero2");  // = "30"

total = parseInt(n1) + parseInt(n2);
alert(total)*/

/*
var edad = 33;
var dni = prompt("ingresa tu dni");
var nombre = prompt("ingresa tu nombre");

var mensaje = "Hola "+nombre+" tu dni es "+dni+" y tu edad es "+edad;

console.log(mensaje);*/


//arrays
var lista = ["alonso perez","adolf nolte","sergio castellares",2,3,4,true,true,[0,1,1]];
console.log(lista[8][0]);

//var valor = prompt("Ingrese su monto");

//alert(igv(valor));

function igv(monto)
{
	resultado = monto * 1.18;
	return resultado;
}

//console.log(resultado);


//estructuras de control: condicionales
/*var numero = parseInt(prompt("ingresa un numero"));

if(numero % 2 == 0)
{
	alert("este numero es par");
}else 
	alert("este numero es impar");
}*/

var dia1 = "Lunes";
var dias = [dia1,"martes","miercoles","jueves","viernes","sabado","domingo"];


//estructuras de control repetitivas

for (var i = 0; i < dias.length; i++) 
{
	console.log(dias[i]);
}

for (var i = dias.length - 1; i >= 0 ; i--) 
{
	console.log(dias[i]);
}

//factorial de un numero

var factorial = parseInt(prompt("ingresa un numero"));

var rpta = 1;
for (var i = factorial; i > 1; i--) 
{
	rpta = rpta * i;
}

console.log(rpta);





