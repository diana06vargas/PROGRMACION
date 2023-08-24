//seleccion de elemento por id
const seccion1 = document.getElementById('sec1');
console.log(seccion1);

//seleccion de elementos por class

const main = document.getElementsByClassName('container_main');
console.log(main);

//seleccion pro elementos por name

const articulos = document.getElementsByName('articulo');

//seleccion de elementos por id con queryselector

const seccion2 = document.querySelector('#sec2');
console.log(seccion2);

//seleccion de elementos por etiqueta

const titulo = document.querySelector('h1');
console.log(titulo);

//seleccion de elementos por class

const seccion2Class = document.querySelector('seccion2')

const reciboDato = () =>{
    const texto = document.querySelector('#nombre').value;
    console.log(texto);
};