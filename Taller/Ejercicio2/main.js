//2. Calcular el sueldo a pagar de un trabajador dado que se debe ingresar la cantidad de horas trabajadas y el valor de la hora en pesos.
//Diana Vargas y David Tenjo 14A

'use strict';

function sueldo(horas, valor){
    return horas * valor;
}

let horas = parseFloat (prompt('Digite las horas que realizó:'));
let valor = parseFloat (prompt('Digite el valor que tiene la hora'));

let sueldofinal = sueldo(horas, valor);
alert(sueldofinal);