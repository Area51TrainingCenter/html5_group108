jQuery(document).ready(function(){
	/*jQuery("a.btnagregar").click(function(e){
		e.preventDefault();
		//append, agrega cualquier elemento (html) a algun elmento seleccionado.
		jQuery(".container").append("<a href='#' class='btnagregar' >Agregar</a><br>");
	});*/

	jQuery("a.btnobtener").click(function(e){
		e.preventDefault();
		//html, obtiene (sino le pasamos parametros) o modifica con codigo html, el elemento seleccionado.
		//alert(jQuery(".container").html());
		jQuery(".container").html("<h1>HTML agregado</h1>");
	});
});

jQuery(document).on("click","a",function(e){
	e.preventDefault();
	jQuery(".contenedorboton").html("<button id='btnguardar'>Guardar</button>");
	var texto = jQuery(this).text();
	var id = jQuery(this).attr("id");
	var nuevoid = id.substr(3);
	jQuery("#content"+id).html("<input type='text' id='"+nuevoid+"' value='"+texto+"' >");
});

jQuery(document).on("click","#btnguardar",function(e){
	var txtnombre = jQuery("#nombre").val();
	if(txtnombre)
	{
		jQuery("#contentbtnnombre").html('<a href="#" id="btnnombre">'+txtnombre+'</a>');
	}

	var txtapellido= jQuery("#apellido").val();
	if(txtapellido)
	{
		jQuery("#contentbtnapellido").html('<a href="#" id="btnapellido">'+txtapellido+'</a>');
	}

	var txtcorreo = jQuery("#correo").val();
	if(txtcorreo)
	{
		jQuery("#contentbtncorreo").html('<a href="#" id="btncorreo">'+txtcorreo+'</a>');
	}
	var txtdni= jQuery("#dni").val();
	if(txtdni)
	{
		jQuery("#contentbtndni").html('<a href="#" id="btndni">'+txtdni+'</a>');
	}

	//remove, elimina elemento seleccionado
	jQuery(this).remove();
});


var contador = 0;
jQuery(document).on("click","a.btnagregar",function(e){
	e.preventDefault();
	//append, agrega despues, cualquier elemento (html) a algun elmento seleccionado.
	//jQuery(".container").append("<a href='#' class='btnagregar' >Agregar</a><br>");ç

	//prepend, agrega antes, cualquier elemento (html) a algun elmento seleccionado.
	jQuery(".container").prepend("<a href='#'  class='btnagregar' >Agregar"+contador+"</a><br>");
	contador++;
});