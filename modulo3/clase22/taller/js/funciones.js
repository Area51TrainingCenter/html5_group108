jQuery(document).ready(function(){
	jQuery("a.boton-hamb").click(function(xixa){
		//PreventDefaukt, deshabilita el comportamiento del click
		xixa.preventDefault();
		jQuery("a.boton-hamb i").toggleClass("fa-times");
		jQuery("header nav").toggleClass("open");
	});

	jQuery("#enviar").click(function(){
		jQuery.ajax({
			method : "POST",
			url : URL+"registro.php",
			//en el caso que utilicemos json
			dataType : "json",
		/*	data : {
				nombre : jQuery("#nombre").val(),
				email : jQuery("#email").val(),
				telefono : jQuery("#telefono").val(),
				mensaje : jQuery("#mensaje").val()
			}*/
			data : jQuery("#frmcontactenos").serialize()
		}).done(function(data){
			/*
			Validacion de una sola respuesta, sin json
			if(data == 1)
			{
				jQuery(".respuesta").html("Se registro sin problemas.");
			}else{
				jQuery(".respuesta").html("Alguno de los campos esta vacìo.");
			}*/

			//validacion con json
			/*
			if(data.id == 1)
			{
				jQuery(".respuesta").html(data.mensaje);
			}else{
				jQuery(".respuesta").html(data.mensaje);
			}*/
			var html = "";
			jQuery.each(data,function(indice,value){
				html+= "<div>ID : "+value.id+"</div>";
				html+= "<div>NOMBRE : "+value.nombre+"</div>";
				html+= "<div>ID : "+value.correo+"</div>";
			})

			jQuery("#lista").html(html);
		}).fail(function(e){
			alert(e);
		});
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