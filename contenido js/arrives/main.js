'use strict';
//Declarar un arreglo

const myArray1 = [2,4,6,7,8,9,'3', true];

let myArray2 = new Array('1', '8', 3, 4, 5, 6, 7, 15, 9);

//For clasico
for(let i=0; i<myArray1.length; i++){
    console.log(myArray1[i]);
}


//for in y for of

//toma la posición
for(let i in myArray2){
    console.log(myArray2[i]);
}


//toma la variable
for(let j of myArray2){
    console.log(j);
}


//ForEach

myArray1.forEach(e => {
    console.log(e)
});