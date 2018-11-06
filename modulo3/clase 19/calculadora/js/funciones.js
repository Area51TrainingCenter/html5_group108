var numero1 = 0;
var numero2 = 0;
var aux = "";
var signo = "";
var cambio = false;
var elemento = document.getElementById("resultado");

var btnigual=document.getElementById("igual");
btnigual.addEventListener("click",total);

function signosimbolo(parametro)
{
	signo = parametro;

	if(cambio == false)
	{
		numero1 = parseInt(aux);
		cambio = true;
	}

	aux = "";
	elemento.innerHTML = "0";
}

function total() {
	var subtotal = 0;
	numero2 = parseInt(aux);
	if (signo == "sumar") {
		subtotal = numero1 + numero2;
	}

	if (signo == "restar") {
		subtotal = numero1 - numero2;
	}

	if (signo == "multiplicar") {
		subtotal = numero1 * numero2;
	}

	if (signo == "dividir") {
		subtotal = numero1 / numero2;
	}

	elemento.innerHTML =  subtotal;
}

function resetear() {
	numero1 = 0;
	numero2 = 0;
	signo = "";
	aux = "";
	elemento.innerHTML =  0;
}

function formarnumero(numero) {
	aux = aux + numero;
	elemento.innerHTML =  aux;
}