function mostrar()
{
	var destinoIngresado;

	destinoIngresado = txtIdDestino.value;

	switch (destinoIngresado){
		case "Bariloche":
			alert ("En la localidad hace Frio");
			break;
		case "Ushuaia":
			alert ("En la localidad hace Frio");
			break;
		case "Cataratas":
			alert ("En la localidad hace Calor");
			break;
		default:
			alert ("En la localidad hace Calor");

	}
	

}//FIN DE LA FUNCIÓN