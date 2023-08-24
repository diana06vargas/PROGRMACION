'Use estrict';
/**
 * Dado dos números ingresados por el usuario realizar las 4 operaciones básicas, suma, resta, multiplicación, división e imprimir las operaciones. Validar la división entre 0(cero).
 * Integrantes
 * Diana Vargas
 * David Tenjo*/
let num1 =parseFloat(prompt('Dame el primer valor que desea ingresar:'));
let num2 =parseFloat(prompt('Dame el segundo valor que desea ingresar:'));

function sumar(num1,num2){
    return num1 + num2;
 }
 let suma = sumar (num1,num2);
 
 function restar(num1,num2){
    return num1 - num2;
 }
 let resta = restar (num1,num2);

 function multiplicacion(num1,num2){
    return num1 * num2;
 }
 let multiplicacion = multiplicacion (num1,num2);

 const divi =(num1,num2) =>{
    const response = (num1>0)||(num1<0) && (num2>0)||(num2<0) ? num1/num2 : "No se puede realizar la suma";
    console.log(response);
    return response;}
 let divition = division (num1,num2);
 

alert(suma,resta,multiplicacion,divition);