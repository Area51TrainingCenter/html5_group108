<?php

$alumnos = array();
$alumnos[0]["id"] = 1;
$alumnos[0]["nombre"] = "Alonso";
$alumnos[0]["correo"] = "nuevocorreo17@gmail.com";

$alumnos[1]["id"] = 2;
$alumnos[1]["nombre"] = "Luigi";
$alumnos[1]["correo"] = "lugi@gmail.com";

$alumnos[2]["id"] = 3;
$alumnos[2]["nombre"] = "Jose";
$alumnos[2]["correo"] = "jose@gmail.com";

$alumnos[3]["id"] = 4;
$alumnos[3]["nombre"] = "genesis";
$alumnos[3]["correo"] = "genesis@gmail.com";

//$data = $_POST;
//$rpta = array();
//print_r($data);

/*
validacion del formulario contactenos
if(isset($_POST["nombre"]) and isset($_POST["email"]) and isset($_POST["telefono"]) and isset($_POST["mensaje"]))
{
	$rpta["id"] = 1;
	$rpta["mensaje"] = "<span class='verde'>Se registro sin problemas.</span>";
}else{
	$rpta["id"] = 2;
	$rpta["mensaje"] = "<span class='rojo'>Alguno de los campos esta vacìo.</span>";
}
*/

//echo json_encode($rpta);

echo json_encode($alumnos);

die();
?>