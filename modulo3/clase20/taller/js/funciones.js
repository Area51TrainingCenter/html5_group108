jQuery(document).ready(function(){
	jQuery("a.boton-hamb").click(function(xixa){
		//PreventDefaukt, deshabilita el comportamiento del click
		xixa.preventDefault();
		jQuery("a.boton-hamb i").toggleClass("fa-times");
		jQuery("header nav").toggleClass("open");
	});
});