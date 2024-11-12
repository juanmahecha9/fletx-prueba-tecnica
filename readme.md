# Aplicativo frontend

Aplicativo frontend desarrollado en Angular CLI: 18.1.2, con paquede de Node: 22.0.0

Para el inicio del aplicativo usar el comando 
```bash
npm i -> para instalar los paquetes requeridos
npm run start:dev
```
Este levantara el servicio en el puerto 4200


# Aplicativo Backend

Aplicativo backend desarrolladon con nest.js.


antes de inicar, crear la base de datos para esto se debe de usar el comando
```bash
pnpm i -> para instalar los paquetes requeridos
pnpm run prisma:migrate
```
este creara la base de datos en una instancia MYSQL, para ello se debe de proveer el string de conexion en el archivo .env el cual debe de ser el siguiente
DATABASE_URL="mysql://user:password@host:port/technical_assesstment_db"
FRONTEND_URL="http:localhost:4200"

y la variable FRONTEND_URL es para activar los CORS del aplicativo

Para el inicio del aplicativo usar el comando 
```bash
pnpm run start:dev
```
Este levantara el servicio en el puerto 3000


las rutas a usar son dos una en tipo post que esta conectada al servicio frontend y la segunda es para verificar por postman donde se pueden ver los datos guardados en la base de datos

