<b>Este es mi proyecto final del módulo 04 del bootcamp de Adalab</b>

El proyecto consistía en <b>desarrollar una API REST</b> que permiera realizar operaciones <b>CRUD.</b> 

Para llevarlo acabo he creado una base de datos SQL de libros (título, autor, género, año) y varios endpoints:<br>

<b>/allbooks (GET)</b>: con el listado de todos los libros.<br>
<b>/allbooks/ (GET)</b>: id: para obtener información de un libro específico.<br>
<b>/allbooks (POST)</b>: para añadir un nuevo libro a la lista. <br>
<b>/allbooks/: id (PUT)</b>: para modificar un libro en concreto. <br>
<b>/allbooks(DELETE)</b> : para eliminar un libro de la base de datos.<br>
<b>/allbooks/genre/:genre (GET)</b> : para filtrar los libros por género. 

<b>///// sign-in & log-in /////</b>

Además de las rutas anteriores, he creado una nueva base de dato para almacenar usuarios y dos nuevos endpoints, utilizando <b>jwt</b> y <b>bcryp</b> para las contraseñas:<br>

<b>/registro(POST):</b> para añadir un nuevo usuario (
    nombre, usuario, email, password
)<br>
<b>/log-in (POST)</b>: para que un usuario ya registrado pueda acceder a su cuenta (email, password)

