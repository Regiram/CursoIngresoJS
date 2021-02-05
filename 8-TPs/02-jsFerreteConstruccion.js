/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.

FACUNDO GONZALEZ

*/

function Rectangulo () 
{
    var largo, ancho, alambre;
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    alambre = ((parseFloat(largo) * 2) + (parseFloat(ancho) * 2)) * 3;
    alert ("Debe comprar " + alambre + "MTRS  de alambre para cubrir 3 veces el terreno.");
}
function Circulo () 
{
    var radio, alambre;
    radio = document.getElementById("txtIdRadio").value;

    alambre = (2 * Math.PI  * parseFloat(radio)) * 3;
    alert ("Debe comprar " + alambre + " MTRS de alambre para cubrir 3 veces el terreno.");
	
}
function Materiales () 
{
	var largo, ancho, cal, cemento;
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    cemento = (parseFloat(largo) * parseFloat(ancho))*2;
    cal = (parseFloat(largo) * parseFloat(ancho))*3;
    alert ("Debe comprar " + cemento + " bolsas de Cemento y " + cal + " bolsas de Cal acorde al area del terreno ingresado.");
}