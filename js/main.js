// Función para crear una carta de héroe
function crearCarta(nombre, descripcion, foto) {
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
        agregarCartas(contenedorHeroes, data.heroes_marvel);
        // Agregar las cartas de héroes de DC
        agregarCartas(contenedorHeroes, data.heroes_dc);
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
