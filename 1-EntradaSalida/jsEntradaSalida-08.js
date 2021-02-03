/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.

FACUNDO GONZALEZ 

ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo,divisor,resto;

	dividendo=document.getElementById("txtIdNumeroDividendo").value;
	divisor=document.getElementById("txtIdNumeroDivisor").value;
	resto = parseInt(dividendo) % parseInt(divisor);

	alert("El resto es: " + resto);
}
