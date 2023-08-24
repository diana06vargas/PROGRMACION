//Comentarios en linea

/*Comentarios en bloque
juasjuas
:D
Que pro ("__")
*/

//Nunca poner la explicacion del cogido en los comentarios


//directiva para trabajar en modo estricto
'Use strict'; 


//Declaracion de variables
var number1 = 10; //contenedor de caracter global
let number2 = 5; //contenedor de caracter local
const IVA_19 = 19; //contenedor para constantes


number1 = 1; //NO USAR VAR

console.log(number1);


//operadores aritmeticos (+, -, *, /, %)

let suma = number1 + number2;
let resta = number1 - number2;
let multiplicacion = number1*number2;
let division = number1/number2;
let modulo = number1%number2;

console.log("suma:"+suma, "resta:"+resta, "multiplicacion:"+multiplicacion, "division: "+division,"Modulo:"+modulo);


//operadores lógicos

let resultado = number1 > number2; //mayor que
let menor = number1 <= number2; //menor o igual
let number3 = '4';
let number4 = 4;
let comparacion1 = number3 == number4; //no estricto
let comparacion2 = number3 === number4; // estricto


console.log(resultado);
console.log("Comparazao1:"+comparacion1, "comparazao2:"+comparacion2); 

