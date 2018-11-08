var texto = "Hola mundo";
var texto2 = " hola Lupe hola hola hola";
var div = document.getElementById("area");
var div2 = document.getElementById("area2");
var tamano = document.getElementById("tamano");
div.innerHTML = texto.toUpperCase();
div2.innerHTML = texto.toLowerCase();
tamano.innerHTML = texto.length;

for (var i = 0; i < texto.length; i++) {
	console.log(texto.charAt(i));
}

//console.log(texto.concat(texto2));
var texto3 = texto.concat(texto2);
//console.log(texto3.replace("hola","chau"));

//console.log(texto3.replace(/hola/g,"chau"));
console.log(texto3.search("Lupe"));
console.log(texto3.split(" "));

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" "));

console.log(texto3.slice(0, texto3.length ));
console.log(texto3.substr(1, 4));
console.log(texto3.substring(0,10));
texto3 = "          "+texto3+"          ";
console.log(texto3);
console.log(texto3.trim());
