// funcion sin parametros
function suma1(){
	var suma=10+5;
	console.log(suma);

	//limpiar los imput
}

// funcion con parametros
function suma2(n1,n2){
	var suma=n1+n2;
	console.log(suma);

}


//funcion con retorno

function igv(monto){
	var igv=monto*0.18;
	return igv;
}

var total_igv=igv(19238);

var total_igv2=igv(12312312);


igv(100);
//funcion sin retorno
function imprimir(valor){
	console.log(valor);
	//codigo para limpiar imput
}


console.log("hola");

imprimir("hola");



suma1();
suma2(30,46);
suma2(10,5);
suma2(2,23);