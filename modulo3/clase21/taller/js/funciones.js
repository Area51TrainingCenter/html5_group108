jQuery(document).ready(function(){
	jQuery("a.boton-hamb").click(function(xixa){
		//PreventDefaukt, deshabilita el comportamiento del click
		xixa.preventDefault();
		jQuery("a.boton-hamb i").toggleClass("fa-times");
		jQuery("header nav").toggleClass("open");
	});
});

//resize se ejecuta con cualquier cambio de ancho del epxlorador
jQuery(window).resize(function(){
	//width / height dan las dimensiones del explorador
	if(jQuery(window).width() < 768)
	{
		//alert("estas abriendo un iphone. Tu ancho es de "+jQuery(window).width());
	}
	//alert(jQuery(window).width() +" "+jQuery(window).height());
})

jQuery(window).on("load",function(){
	//precarga simple
	//jQuery("body").removeClass("precarga");

	//precarga con css3 y jquery
	jQuery(".trama").fadeOut("slow",function(){
		jQuery(this).remove();
		jQuery("body").removeClass("precarga");
	})
	
});