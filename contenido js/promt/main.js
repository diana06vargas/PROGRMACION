'use strict';
//Ejercicio 1: Pedir 2 número positivos y realizar una suma, retornar el valor

//ds: suma
//de: 2 número positivos

const sumar = (num1, num2) =>{
    const repsuesta = (numero1>0 && numero2>0) ? numero1 + numero2 :"No se puede realizar la suma"
    return repsuesta;
}

let numero1 = parseFloat (prompt('Dame el primer valor:'));
let numero2 = parseFloat (prompt('Dame el segundo valor:'));
let suma = sumar(numero1, numero2);
alert(suma);

