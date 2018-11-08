//funcion que genera un mensaje de alerta
alert("Hola\ncomo estas?");

//funcion que genera un mensaje con dos opciones: verdadero o falso;
var eleccion = confirm("dime tu elecciòn");

if (eleccion == true)
{
	alert("Apretaste el boton OK");
}else 
{
	alert("apretaste el boton CANCEL");
}

/*
switch(eleccion) {
    case true:
        alert("Apretaste el boton OK");
        break;
    default:
        alert("Apretaste el boton CANCEL");
}*/


//funcion que genera un mensaje con posibilidad de ingresar contenido
var n1 = prompt("ingresa un numero");  // = "10"
var n2 = prompt("ingresa un numero");  // = "30"

//parseInt convierte un texto en numero
var suma = parseInt(n1) + parseInt(n2);

console.log(suma);
console.log(eleccion);