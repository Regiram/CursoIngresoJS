function mostrar()
{
	var destinoIngresado;

	destinoIngresado = txtIdDestino.value;

	switch (destinoIngresado){
		case "Bariloche":
			alert ("La localidad ingresada se encuentra ubicada en el Oeste de nuestro pais");
			break;
		case "Ushuaia":
			alert ("La localidad ingresada se encuentra ubicada en el Sur de nuestro pais");
			break;
		case "Cataratas":
			alert ("La localidad ingresada se encuentra ubicada en el Norte de nuestro pais");
			break;
		default:
			alert ("La localidad ingresada se encuentra ubicada en el Este de nuestro pais");

	}
	

}//FIN DE LA FUNCIÓN