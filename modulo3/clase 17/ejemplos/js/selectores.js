/*
Factorial

var factorial = parseInt(prompt("ingresa un numero"));

var rpta = 1;
for (var i = factorial; i > 1; i--) 
{
	rpta = rpta * i;
}*/

var bloque = document.getElementById("respuesta");

var divs = document.getElementsByTagName("div");
var fecha = new Date();
//bloque.innerHTML = "<p>"+rpta+"</p>";

//bloque.innerHTML = fecha;
console.log(bloque);
console.log(divs);
//alert(bloque.className);
/*
setTimeout(function(){ 
	alert("Hello"); }, 
1000);

setInterval(function(){ 
	var fecha = new Date();
	bloque.innerHTML = fecha;
},1000);*/

bloque.addEventListener("click",function(){
	factorial();
});


function factorial(){
	var factorial = parseInt(prompt("ingresa un numero"));
	var rpta = 1;
	for (var i = factorial; i > 1; i--) 
	{
		rpta = rpta * i;
	}

	bloque.innerHTML = "<p>"+rpta+"</p>";
}
