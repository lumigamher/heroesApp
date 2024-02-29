# Proyecto de Creación de Cartas de Héroes

## Introducción

Este proyecto consiste en una aplicación web que muestra cartas de héroes de cómics, tanto de Marvel como de DC. Los usuarios pueden buscar héroes específicos, ver detalles de cada héroe y explorar diferentes categorías de héroes.

## Funciones

### crearCarta(nombre, descripcion, foto, fecha_lanzamiento)

Esta función crea una carta de héroe con la información proporcionada y devuelve un elemento HTML que representa la carta.

Parámetros:

- `nombre`: El nombre del héroe.
- `descripcion`: Una breve descripción del héroe.
- `foto`: La ruta de la imagen del héroe.
- `fecha_lanzamiento`: La fecha de lanzamiento del héroe.

### agregarCartas(contenedor, heroes)

Esta función agrega las cartas de héroes al contenedor especificado.

Parámetros:

- `contenedor`: El contenedor HTML donde se agregarán las cartas de héroes.
- `heroes`: Un array de objetos que contiene la información de los héroes a mostrar.

### abrirDialogo(nombre, descripcion, imagen, fecha_lanzamiento)

Esta función muestra un diálogo modal con detalles específicos del héroe seleccionado.

Parámetros:

- `nombre`: El nombre del héroe.
- `descripcion`: Una descripción detallada del héroe.
- `imagen`: La imagen del héroe.
- `fecha_lanzamiento`: La fecha de lanzamiento del héroe.

### cerrarDialogo()

Esta función cierra el diálogo modal.

## Estilos CSS

Aquí se describen los estilos CSS utilizados en el proyecto para dar formato y diseño a las cartas de héroes, el campo de búsqueda y otros elementos de la interfaz de usuario.

## Datos de Héroes

Se detallan los héroes incluidos en el proyecto, tanto de Marvel como de DC, con su nombre, descripción, fecha de lanzamiento y la ruta de la imagen utilizada para representarlos.

## Capturas de Pantalla