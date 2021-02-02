/*

Facundo Gonzalez

Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado, edad;
	nombreIngresado=document.getElementById("txtIdNombre").value;
	edad = prompt ("Ingrese su edad");
	alert(" Su nombre es " + nombreIngresado + " y tiene " + edad + " años");
	console.log (" Su nombre es " + nombreIngresado + " y tiene " + edad + " años");
}


