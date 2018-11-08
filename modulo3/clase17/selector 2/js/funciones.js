//selector por ID
var titulo = document.getElementById("titulo");
titulo.innerHTML = "HOLA MUNDO 2";

//selector por el tipo de seleccion, devolviendo solo el primero
var titulo2 = document.querySelector("h1");
titulo2.innerHTML = "HOLA MUNDO 3";

//selector por el tipo de seleccion, devolviendo solo todos, como un arreglo o
var titulo3 = document.querySelectorAll("h1");

for (var i = 0; i < titulo3.length ; i++) {
	titulo3[i].innerHTML = "HOLA MUNDO 4";
}
