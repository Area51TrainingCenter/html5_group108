//selector por ID
var titulo = document.getElementById("titulo");
titulo.innerHTML = "HOLA MUNDO 2";

//selector por el tipo de seleccion, devolviendo solo el primero
var titulo2 = document.querySelector("h1");
titulo2.innerHTML = "HOLA MUNDO 3";

//selector por el tipo de seleccion, devolviendo solo todos, como un arreglo o
var titulo3 = document.querySelectorAll(".ejemplo");

for (var i = 0; i < titulo3.length ; i++) {
	titulo3[i].innerHTML = "HOLA MUNDO 4";
}

var titulo4 = document.getElementsByTagName("h2");

titulo4[0].innerHTML = "HOLA MUNDO 5";

var titulo5 =  document.getElementsByClassName("ejemplo");

for (var j = 0; j < titulo5.length ; j++) {
	titulo5[j].innerHTML = "texto " + j;
}
