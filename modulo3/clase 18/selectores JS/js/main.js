function cambiartitle(){
	var elemento = document.getElementById('title');
	// elemento==h1
	elemento.innerHTML = "Cambio luego de dar click <small>bold</small>";
}

var btn_cambiar=document.getElementById("cambiar");
btn_cambiar.addEventListener("click",cambiartitle);

var btn_regresar=document.getElementById("regresar");
btn_regresar.addEventListener("click",regresartitle);

function regresartitle(){
	var elemento=document.getElementById('title');
	// elemento==h1
	elemento.innerHTML="Title HTML";
}



