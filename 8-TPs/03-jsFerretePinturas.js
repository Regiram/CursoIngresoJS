/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").

FACUNDO GONZALEZ

*/
function FahrenheitCentigrados () 
{  
    var temperatura, fahrAcent;
    temperatura = document.getElementById("txtIdTemperatura").value;

    fahrAcent= parseFloat(temperatura - 32) * (5/9);
    alert (temperatura + "° Fahrenheit son " + fahrAcent + "° Centígrados");
	
}

function CentigradosFahrenheit () 
{
	var temperatura, centAfahr;
    temperatura = document.getElementById("txtIdTemperatura").value;

    centAfahr= parseFloat(temperatura * (9/5)) + 32;
    alert (temperatura + "° Centígrados son " + centAfahr + "° Fahrenheit");
}
