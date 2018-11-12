var contador = 0;
jQuery(document).on("scroll",function(){
	console.log(jQuery(document).scrollTop());
	var scroll = jQuery(document).scrollTop();

	if(scroll > 900)
	{
		jQuery(".subir").fadeIn("slow");
	}else{
		jQuery(".subir").fadeOut("slow");
	}

	if (contador > scroll) {
		jQuery("header").removeClass("bajando");
	}else{
		
		jQuery("header").addClass("bajando");
	}
	contador = scroll;
})


jQuery(document).ready(function(){
	var wow = new WOW();
	wow.init();
		
	jQuery("a.boton-hamb").click(function(xixa){
		//PreventDefaukt, deshabilita el comportamiento del click
		xixa.preventDefault();
		jQuery("a.boton-hamb i").toggleClass("fa-times");
		jQuery("header nav").toggleClass("open");
	});

	jQuery("nav > a").click(function(e){
		e.preventDefault();
		var enlace = jQuery(this).attr("href");
		//alert(jQuery(enlace).offset().top);
		jQuery("html,body").stop().animate({
			"scrollTop" :jQuery(enlace).offset().top
		},"slow","swing",function(){
			//alert("holaaa");
		});
	})

	jQuery(".subir").click(function(e){
		e.preventDefault();
		//alert(jQuery(enlace).offset().top);
		jQuery("html,body").stop().animate({
			"scrollTop" :0
		},"slow","swing",function(){
			//alert("holaaa");
		});
	})



	/*jQuery(".cuadrado").click(function(){
		var cuadrado = jQuery(this);
		movimiento(cuadrado);
	});*/

	jQuery("a.inicio").click(function(e){
		e.preventDefault();

		jQuery(".cuadrado").stop().animate({
			"width" : "200px",
			"left" : "+=10px",
			"backgroundColor" : "green"
		//	"opacity" : "0.2",
		},"fast","swing",function(){
			//alert("holaaa");
		});


	});

	jQuery("#enviar").click(function(){
		jQuery.ajax({
			method : "POST",
			url : URL+"registro.php",
			//en el caso que utilicemos json
			dataType : "json",
			beforeSend: function(){
				//aqui se puede ejecutar algun codigo antes de enviar la data al servidor
			},
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

function movimiento(cuadrado){
	var ancho = jQuery(window).width() - cuadrado.width();
	var alto = jQuery(window).height() - cuadrado.height();
	cuadrado.animate({
		"top":0,
		"left" : ancho,
		"backgroundColor" : "blue"
	},"slow",function(){
		cuadrado.animate({
			"top":alto,
			"left" : ancho,
			"backgroundColor" : "green"
		},"slow",function(){
			cuadrado.animate({
				"top":alto,
				"left" : 0,
				"backgroundColor" : "yellow"
			},"slow",function(){
				cuadrado.animate({
					"top":0,
					"left" : 0,
					"backgroundColor" : "red"
				},"slow",function(){
					movimiento(cuadrado);
				})
			})
		})
	})
}

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