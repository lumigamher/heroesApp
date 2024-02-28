// Función para crear una carta de héroe
function crearCarta(nombre, descripcion, foto, fecha_lanzamiento) {
    let carta = document.createElement('div');
    carta.classList.add('card');

    let imagenDiv = document.createElement('div');
    imagenDiv.classList.add('imagen');
    let imagen = document.createElement('img');
    imagen.src = foto;
    imagen.alt = nombre;
    imagenDiv.appendChild(imagen);
    carta.appendChild(imagenDiv);

    let infoDiv = document.createElement('div');
    infoDiv.classList.add('info');
    let nombreElemento = document.createElement('h3');
    nombreElemento.textContent = nombre;
    infoDiv.appendChild(nombreElemento);
    let boton = document.createElement('button');
    boton.classList.add;
    boton.textContent = 'Ver';
    boton.addEventListener("click", ()=>{
        abrirDialogo(nombre, descripcion, imagen, fecha_lanzamiento )
    })
    infoDiv.appendChild(boton);
    carta.appendChild(infoDiv);

    return carta;
}


// Función para agregar las cartas de héroes al contenedor
function agregarCartas(contenedor, heroes) {
    // Iterar sobre los héroes y crear las cartas
    heroes.forEach(function(heroe) {
        let carta = crearCarta(heroe.nombre, heroe.descripcion, heroe.foto);
        contenedor.appendChild(carta);
    });
}

// Cargar el JSON de los héroes
fetch('heroes.json')
    .then(response => response.json())
    .then(data => {
        // Obtener el contenedor de las cartas
        let contenedorHeroes = document.querySelector('.cards');
        // Agregar las cartas de héroes de Marvel
        let logoMarvel = document.querySelector(".logoMarvel");
        logoMarvel.addEventListener("click", ()=>{
            contenedorHeroes.innerHTML="";
            agregarCartas(contenedorHeroes, data.heroes_marvel);
        })

        // Agregar las cartas de héroes de DC
        let logoDC = document.querySelector(".logoDC");
        logoDC.addEventListener("click",()=>{
            contenedorHeroes.innerHTML="";
            agregarCartas(contenedorHeroes, data.heroes_dc);
        })
        logoMarvel.click();
    })
    .catch(error => console.error('Error al cargar el JSON:', error));

// agregar modal
let miDialogo = document.getElementById("miDialogo");
let cerrar= document.getElementById("cerrarDialogo");

function abrirDialogo(nombre, descripcion, imagen, fecha_lanzamiento) {
    document.getElementById("nombreHeroe").textContent = nombre;
    document.getElementById("descripcionHeroe").textContent = descripcion;
    document.getElementById("imagenHeroe").src = imagen.src;
    document.getElementById("fecha_lanzamiento").textContent = fecha_lanzamiento;
    miDialogo.showModal();
}
function cerrarDialogo() {
    miDialogo.close();
}
miDialogo.addEventListener('click', cerrarDialogo);
   
    // Funcion barra de busqueda 
function buscadorPagina(input){
    let busqueda = input.value.trim().toLowerCase(); // Obtener el valor del campo de búsqueda y convertirlo a minúsculas
    
    let contenedorHeroes = document.querySelector('.cards');
    let todasLasCartas = contenedorHeroes.querySelectorAll('.card');

    todasLasCartas.forEach(carta => {
        let nombreHeroe = carta.querySelector('h3').textContent.toLowerCase(); // Obtener el nombre del héroe y convertirlo a minúsculas
        
        // Mostrar u ocultar la carta según si el nombre del héroe coincide con la búsqueda
        if (nombreHeroe.includes(busqueda)) {
            carta.style.display = 'block'; // Mostrar la carta
        } else {
            carta.style.display = 'none'; // Ocultar la carta
        }
    });
}

// Event listener para el campo de búsqueda
document.getElementById('buscador').addEventListener('input', function() {
    buscadorPagina(this);
});
