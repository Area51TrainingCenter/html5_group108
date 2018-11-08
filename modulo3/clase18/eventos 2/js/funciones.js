var boton = document.getElementById("boton");
//var texto = document.getElementById("texto");
var txtnombre = document.getElementById("nombre");
console.log(txtnombre);
var numero = 0;

//boton.addEventListener("click",agregar);

/*
texto.addEventListener("click",function(){
	numero = 0;
	this.innerHTML = "";
})*/

function agregar(){
	numero++;
	txtnombre.value = numero;
	txtnombre.name = "nombre"+numero;
	txtnombre.className = "nombre"+numero;
}