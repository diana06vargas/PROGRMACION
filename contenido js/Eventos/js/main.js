'Use strict';

//Generar eventos

const capturaClick = () =>{
    alert('Evento click');
}

const capturaMouseOver = () =>{
    console.log('Mouse Over');
}

function teclaDown(){
    console.log('Tecla presionada');
}

//Generar eventos por propiedad
const foot = document.querySelector('#footer');
foot.onclick = function(){
    console.log('On click en el footer');
}


//Generar eventos por el método .addEventListener
const parrafo = document.getElementById('parrafo_1');
parrafo.addEventListener('click',()=>{
    console.log('On click en el parrafo');
});