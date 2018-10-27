var contador=0;
var elemento = document.getElementById("texto");
var input = document.getElementById("nombre");

function sumar()
{
	contador = contador +1;
	elemento.innerHTML = contador;
	/*var numero1 = document.getElementById("numero1").innerHTML;
	var numero2 = document.getElementById("numero2").innerHTML;

	var elemento = document.getElementById("numero2");
	elemento.innerHTML = 4;*/
	//console.log(elemento);
	/*var n1 = 2;
	var n2 = 3;*/
	/*var total = parseInt(numero1) + parseInt(numero2);
	alert(total);*/
}

function restar()
{
	contador = contador - 1;
	elemento.innerHTML = contador;
}

function resetear()
{
	contador = 0;
	elemento.innerHTML = 0;
}