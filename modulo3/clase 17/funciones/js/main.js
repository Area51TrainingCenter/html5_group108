// funciones 

function nombrefuncion(){
	// ambito de la funciòn
}

function imprimir_fecha(){

var fecha=new Date();
var ind_mes=fecha.getMonth();
var ind_dia=fecha.getDay();
var dias_semana=["Domingo",
				 "Lunes",
				 "Martes",
				 "Miercoles",
				 "Jueves",
				 "Viernes",
				 "Sàbado"
				 ]

var meses=["Enero",
			"Febrero",
			"Marzo",
			"Abril",
			"Mayo",
			"Junio",
			"Julio",
			"Agosto",
			"Septimebre",
			"Octubre",
			"Noviembre",
			"Diciembre"]

			var texto_mes=meses[ind_mes];
			var texto_anio=fecha.getFullYear();
			var texto_dia=dias_semana[ind_dia];
			var texto_dia_mes=fecha.getDate();
			// sàbado 28 de Abril 2018

			var fecha_final=texto_dia+" "+texto_dia_mes+" "+texto_mes+" del "+texto_anio;
			console.log(fecha_final);


}


imprimir_fecha();

imprimir_fecha();

imprimir_fecha();

imprimir_fecha();