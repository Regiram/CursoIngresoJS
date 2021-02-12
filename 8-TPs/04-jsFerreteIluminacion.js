/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

    FACUNDO GONZALEZ

 */
function CalcularPrecio () 
{
 	var cantidadLamparas, marcaLampara, costoLampara, precio, precioFinal, descuento, operacionOFF, IIBB, IIBBmonto;

    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    marcaLampara = document.getElementById("Marca").value;
    cantidadLamparas = parseInt(cantidadLamparas);
    costoLampara = parseInt(35);
    
    precio = parseInt(cantidadLamparas * costoLampara);
    
    if (cantidadLamparas > 5){
        descuento = 0.5;
    }
    else{
        if (cantidadLamparas == 5) {
            if (marcaLampara == "ArgentinaLuz"){
               descuento = 0.6;
            }
            else {
                descuento = 0.7;
            }
        }
        else {
            if (cantidadLamparas == 4){
                if (marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas" ){
                    descuento = 0.75;
                }
                else{
                    descuento = 0.8;
                }
            }
            else {
                if (cantidadLamparas == 3){
                    if (marcaLampara == "ArgentinaLuz"){
                        descuento = 0.85;
                    }
                    else{
                        if (marcaLampara="FelipeLamparas"){
                            descuento = 0.9;
                        }
                        else{
                            descuento = 0.95;
                        }
                    }
                }
                else{
                    descuento = 1;
                }
            }

        }
    }
    operacionOFF = parseInt(precio * descuento);
    precioFinal = document.getElementById("txtIdprecioDescuento").value = operacionOFF;
    IIBB = precioFinal * 1.1;
    IIBBmonto = IIBB - precioFinal;
    IIBBmonto = parseInt(IIBBmonto);
    IIBB = parseInt (IIBB);
    if (precioFinal > 120){
        alert ("IIBB: Ustedp pago $" + IIBB + ", siendo $" + IIBBmonto +" el impuesto que pago.");
    }
}
