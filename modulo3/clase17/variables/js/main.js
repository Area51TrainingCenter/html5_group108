// variables
var dato1;
var num1;
var estado;
var fecha;

dato1="Alonso";
num1=10;

// booleanas
estado=true;


// fecha
//fecha="28/04/2018";

fecha=new Date();

var diasemana=fecha.getDay();
console.log(diasemana)
var diames=fecha.getDate();
console.log(diames);
var mes=fecha.getMonth();
console.log(mes);
var anio=fecha.getFullYear();
console.log(anio);
var hora=fecha.getHours();
var minutes=fecha.getMinutes();
var seconds=fecha.getSeconds();

console.log(hora,minutes,seconds);


// variable de tipo arreglo
var nombre1="JC"
var nombre2="Diego"
var nombre3="Carlos"
var nombre4="Luis"

// sintaxis arreglo
//var listado=[valor1,valor2,valor3];
//var nombres=["JC",10,30,"Luis","Miguel"]
var notas=[10,20,10];
var nombres=[nombre1,nombre2,nombre3,notas];
var totales=["html",nombres];

console.log(nombres[0]);
console.log(nombres[1]);
console.log(nombres[2]);
console.log(nombres[3][0]);



// mostar en pantalla
//el nombre del dìa actual
//el nombre del mes actual
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

//fecha + arreglos
