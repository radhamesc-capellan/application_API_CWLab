
# Proyecto Coworking Lab

Proyecto Elaborado por Dante Babilonia, Josue Tejada y Radhames Capellan

## Installation

Para iniciar este proyecto solo asegurate de

Tener ___Node 18___

Se asume que se usa ___Postgres___ como motor de base de datos

Tener las variables marcadas en el __.env.example__ seteadas en el  __.env__

Si tienes dudas para que sirven las que son de __DATABASE_URI_ENV__, en el __notion Backend__ del proyecto existen explicaciones detalladas.

Una vez hecho eso, corre

```bash
  npm install
```

Y seguido de 

```bash
  npm run start
```
o

```bash
  npm run dev
```
Dependiendo si el entorno es de desarrollo o no

- - - -
## Docker

Por default, ya seteamos el Dockerfile y funciona


Si correrás el proyecto con ___docker-compose___ solo encargate de setear las variables en el ___.env___ indicadas en el ___.env.example___

Si se necesitas la ___base de datos___ que te damos de manera preterminada usando docker compose:

Tienes que indicar las variables que esta necesita para setearte la DB que están en el ___.env.db.docker.example___ al ___.env.db.docker___

Hecho eso, con el siguiente commando estaría listo:
```bash
  docker-compose up
```

Existe una explicación en el notion del proyecto que explica el ___Dockerfile___ y ___docker-compose.yml___