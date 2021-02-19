function mostrar()
{
	var estacionIngresada, destinoIngresado,costoBase,descuentoOincremento,precioNuevo;

	estacionIngresada = txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value
	costoBase = parseInt (15000)
	
	switch (estacionIngresada){
		case "Invierno":
			if (destinoIngresado == "Bariloche"){
				descuentoOincremento = 1.2;
			}
			else{
				if ((destinoIngresado == "Cataratas") || (destinoIngresado == "Cordoba")){
					descuentoOincremento = 0.9;
				}
				else{
					descuentoOincremento = 0.8;
				}
			}
			break;
		case "Verano":
			if (destinoIngresado == "Bariloche"){
				descuentoOincremento = 0.8;
			}
			else{
				if ((destinoIngresado == "Cataratas") || (destinoIngresado == "Cordoba")){
					descuentoOincremento = 1.1;
				}
				else{
					descuentoOincremento = 1.2;
				}
			}
			break;
		default:
			if (destinoIngresado == "Cordoba"){
				descuentoOincremento = 1;
			}
			else{
				descuentoOincremento = 1.1
				}
				break;
			}
	precioNuevo = parseInt (costoBase * descuentoOincremento);
	alert ("El costo de la tarifa de viaje es de $" + precioNuevo);
}//FIN DE LA FUNCIÓN