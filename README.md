# AngularJS - Proyecto de mantenimiento de posts y visualización de usuarios (recuperado de 2016)
Proyecto enfocado al aprendizaje de conceptos de AngularJS, recuperado de 2016. Es una sencilla aplicación tipo CRUD.

## Enfoque
La idea es una aplicación que utilice distintos conceptos de AngularJS para crear un CRUD sobre un API de post. Se hace uso también del API para ver los usuarios del sistema.

## Elementos
- AngularJS: 1.8.2 -> Core
- AngularRoute: 1.6.9 -> Enrutado Angular
- Bootstrap: 3.3.7 -> Estilos
- Http-Server: 14.1.1 -> Ejecución local, instalado como devDependence (https://www.npmjs.com/package/http-server?activeTab=readme)
- API: https://jsonplaceholder.typicode.com/

## Aplicación
La aplicación consta de una página principal que muestra posts del API, tiene un panel para poder realizar cambios de visualización hacia usuarios. Los post y usuarios se pueden ver en detalle. Además los post son modificables y pueden ser creados. Se hace uso de localStorage para jugar con servicios de persistencia.
