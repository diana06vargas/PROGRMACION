"use strict";
let cadMeses ="ENERO-FEBRERO-MARZO-ABRIL-MAYO-JUNIO";
//split --> separa por indicadores
const myArray = cadMeses.split("-");
console.log(myArray);


//1. Buscar elementos en un arreglo sino lo encuentra devuelve undefined

const busqueda = myArray.find((e)=> e === "FEBRERO");
console.log(busqueda);

//2. Buscar indice, si no lo encuentra

const indice = myArray.findIndex((e)=> e === "MAYO");
console.log(indice);

//3. Crea un objeto iterable

const array = [3,4,5,6,8,9];

const arrayCuadrados = array.from((e)=> e*e);
console.log(typeof(arrayCuadrados));
console.log(arrayCuadrados);

//4. Filtrar datos

const result = array.filter((e)=> e % 3 ===0);
console.log(result);