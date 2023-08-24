'use strict';
//Estructuras de control

let numero1 =3;
let numero2 =10;

if ((numero1>10) || (numero1>0)){
    console.log('es mayor que 10');

}else{
    if(numero1 % 2 == 0){

    }else{

    }
}

//Ternario

let repsuesta = (numero2 % 10 == 0) ? "Es Múltiplo de 10" : "No es Múltiplo de 10"; //?(si se cumple la condición) :(No se cumple la condición)

console.log(repsuesta);

//Switch

let opcion = 3;
switch(opcion){
    case 1:
        console.log('Es el número 1');
        break;
    case 2:
        console.log('Es el núemro 2');
        break;
    case 3:
        console.log('Es el número 3');
        break;
    default:
        console.log('Opción fuera de rango');

}

//Switch por rangos

let nota = 3.5;

switch(true){
    case nota >=0 && nota < 3.0:
    console.log('Esta aplazado');
    break;

    case nota >=3.0 && nota <=5.0:
        console.log('Aprobado');
        break;

    default:
        console.log('Nota erronea');

}