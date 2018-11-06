jQuery(document).ready(function(){

	jQuery("h3").click(function(){
		//next, busca al siguiente elemento del elemento seleccionado, siemrpe y cuando este
		//jQuery(this).next("p").slideToggle();

		//index, nos devuelve el indice del elemento clickeado de la lista de elementos seleccionados
		//alert(jQuery("h3").index(this));

		//nextAll, busca al siguiente elemento del elemento seleccionado, asi no este al lado
		jQuery("h3").nextAll("p").slideUp();
		//stop, detiene la animacion
		jQuery(this).nextAll("p").stop().slideToggle();

		//eq, selecciona al elemento segun el indice como parametro
		//jQuery("p").eq(2).slideToggle();
	});
	
	//jQuery(".acordeon").click(function(){
		//find, busca un elemento dentro del elemento ya seleccionado
		/*
		slideDown, despliega hacia abajo
		jQuery(this).find("p").slideDown();
		*/

		/*
		slideUp, despliega hacia arriba
		jQuery(this).find("p").slideUp();
		*/

		//slideToggle, despliega hacia arriba o abajo sea el caso
		//jQuery(this).find("p").slideToggle();
	//});
});

function abrircerrar()
{

	/*
	Version toggleClass
	jQuery(".trama").toggleClass("open");
	jQuery(".contenedor-imagen").toggleClass("open");
	*/
}