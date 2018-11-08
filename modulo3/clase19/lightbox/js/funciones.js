jQuery(document).ready(function(){

	jQuery("a.thumb").click(function(){
		jQuery(".trama").addClass("open");
		jQuery(".contenedor-imagen").addClass("open");
	});

	jQuery("a.cerrar").click(function(){
		jQuery(".trama").removeClass("open");
		jQuery(".contenedor-imagen").removeClass("open");
	});
	
});