// FACUNDO GONZALEZ
function mostrar()
{
	var marca, precio, tipo, promedioCompra, unidades, inicio, jabones, minAlcohol, maxUnidades, menorPrecioAlcohol, fabricanteMinAlcohol, tipoMaxUnidades, contador, fabricante;

	inicio = "y";
	jabones = 0;
	contador = 0;
	flagMax = 0;

	while (inicio = "y"){
		tipo = prompt ("Ingrese el tipo de producto (barbijo, jabon o alcohol)");
		while (isNaN(tipo) == false || (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol")){
			tipo = prompt ("Reingrese alguno de los productos validos (barbijo, jabon o alcohol) ");
		}
		precio = prompt("Ingrese el precio del producto (debe ser entre $100 y $300)");
		precio = parseInt (precio);
		while (isNaN(precio) || precio < 100 || precio > 300){
			precio = prompt ("Ingrese un precio valido entre $100 y $300");
			precio = parseInt(precio);
		}
		unidades= prompt ("Ingrese la cantidad de unidades (entre 1 y 1000)");
		unidades = parseInt(unidades);
		while (isNaN(unidades) || unidades < 1|| unidades > 1000){
			unidades = prompt ("Ingrese un valor valido entre 1 y 1000");
			unidades = parseInt(unidades);
		}
		marca = prompt ("Ingrese marca del producto");
		while (isNaN(marca) == false){
			marca = prompt ("Ingrese Marca valida");
		}
		fabricante = prompt ("Ingrese Fabricante");
		while (isNaN(fabricante) == false){
			fabricante = prompt ("Ingrese Fabricante Valido");
		}
		if (tipo == "alcohol" || (tipo == "alcohol"  && precio < menorPrecioAlcohol)){
			menorPrecioAlcohol = precio;
			minAlcohol = unidades;
			fabricanteMinAlcohol = fabricante;
		}
		if (flagMax = 0 || unidades > maxUnidades ){
			maxUnidades = unidades;
			promedioCompra = precio / maxUnidades;
			tipoMaxUnidades = tipo;
		}
		if (tipo == "jabon"){
			jabones= jabones + 1;
		}
		if (contador < 5){
			contador = contador + 1;
		}
		else {
			inicio = "n";
		}
	}
	if (menorPrecioAlcohol != 0){
		document.write("<h3>El acohol mas barato tiene un costo de "+ menorPrecioAlcohol + ", el fabricante es "+fabricanteMinAlcohol+" y compro "+minAlcohol + " unidades</h3></br>");
	}
	else{
		document.write("<h3>No se ha agregado Alcohol al pedido</h3></br>");
	}
	document.write("<h3>El tipo de producto con mas unidades es "+tipoMaxUnidades+" por un costo promedio de "+promedioCompra + "</h3></br>");
	document.write("<h3>En su pedido hay un total de "+jabones+" de unidades de Jabon</h3></br>");
}