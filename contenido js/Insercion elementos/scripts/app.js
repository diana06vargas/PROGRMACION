'Use stricty';

//creacion de elemento
const seccion = document.createElement('section');

//asignacion de atributos al elemento
seccion.textContent ="Hic enim maiores rem? Ipsum eos, voluptate odio praesentium perspiciatis debitis tenetur cumque animi rerum. Sunt, tenetur optio fugit, minus dolor excepturi quasi libero fugiat, facere consequatur provident accusamus dicta";
seccion.id ="seccion3";
seccion.setAttribute("name", "seccion3");
seccion.className ="seccion3";
seccion.style ="color: brown; font-size:26px";

//insertar el elemento en el DOM
document.body.appendChild(seccion);
let seccion1 = document.getElementById('sec1');
seccion1.appendChild(seccion);

seccion.innerHTML ="<p><strong>HOLA ME CAMBIARON</strong></p>"; //renderiza las etiquetas
