jQuery(document).ready(function(){

var texto = jQuery("#texto");
var bloque = jQuery(".bloque");
var div = jQuery("div");
var link = jQuery("a");
var input = jQuery("input[type=text]");

//ingresar texto en JS puro --> innerHTML

//Metodo text: insertando texto
texto.text("Hola mundo");
//alert(texto.text());

//Metodo val: insertando valor
input.val("Alonso el papi");
//alert(input.val());

//Metodo atr: insertar/obtener el atributo de un elemento seleccionado
//alert(link.attr("href"));

link.attr("href","http://chiquititas.com");

//Metodo addClass: agrega las clases al elemento seleccionado
//link.addClass("laxixa laxixa2 laxixa3");

//Metodo removeClass: quita la clase del elemento seleccionado
//link.removeClass("prueba");

//Metodo hasClass: pregunta si el elemento seleccionado tiene una clase
/*if(link.hasClass("prueba") == true)
{
	link.removeClass("prueba");
}else{
	alert("no tiene la clase prueba");
}*/

	texto.click(function(){
		jQuery(this).text("");
	})

});