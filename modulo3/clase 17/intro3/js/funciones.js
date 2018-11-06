var numero1 = 0;
var numero2 = 0;
var respuesta = 0;
var letra1 = "";
var letra2 = "";
var cadena = "";
var notas = [];
dias = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
meses = ["enero","marzo","mayo",dias];
notas = [1,2,3,4,5,6,7,8,9,10,letra1,letra2,meses];

//De lunes
for (var i = 0; i < dias.length ; i++) {
	console.log(dias[i]);
}

for (var j = dias.length -1 ; j >= 0  ; j--) {
	console.log(dias[j]);
}

//console.log(dias[dias.length - 1]);
//funcion para imprimir en la consola del explorador

/*console.log(numero1);

numero1 = 100;
console.log(numero1);

numero1 = 1000;
console.log(numero1);*/


//numeros y operaciones
numero1 = 5;
numero2 = 10;
numero3 = 100.5;

//console.log(numero3);
respuesta = numero1 + numero2;
//console.log(respuesta);

respuesta = numero1 - numero2;
//console.log(respuesta);

respuesta = numero1 * numero2;
//console.log(respuesta);

respuesta = numero1 / numero2; //division
//console.log(respuesta);

respuesta = numero1 % numero2; //residuo
//console.log(respuesta);

letra1 = 'A';
letra2 = "B";
cadena = letra1 + letra2;
//caso de conversion de numero a cadena
//cadena =  "" + respuesta;

//convertir texto a numero
//parseInt(cadena)
//console.log(cadena);

function sumar(n1,n2)
{
	var xixa = 0;
	xixa = n1 + n2;
	return xixa;
}

//console.log(sumar(10,20));

function restar(n1,n2)
{
	return n1 - n2;
}

function multiplicar(n1,n2)
{
	return n1 * n2;
}

function dividir(n1,n2)
{
	return n1 / n2;
}

function residuo(n1,n2)
{
	return n1 % n2;
}