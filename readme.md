# Desafío de la 3era. Pre-entrega final
# Comisión 55565  de CoderHouse

## Autor : Omar D'Agostino

## Funcionalidades agregadas 
    * Se creo el proceso de compras , el cual toma el carrito y con los productos con suficiente stock genera un ticket con la compra que graba en la colección tickets1 . Descuenta el stock de los productos comprados. y en caso que haya productos con existencias insuficientes deja la cantidad remanente en el carrito del usuario avisandole por mensaje y mail de tal situacion al usuario. Tambien le envia un mail con el ticket generado y toda su información.

    * Se creo un sistema de middleware que controla que solo los usuarios puedan agregar productos al carrito , hacer la compra y utilizar el chat. Tambien se controla que solo el administrador pueda mantener el archivo de productos (altas, bajas, modificaciones y eliminaciones), como asi tambien las vistas correspondientes con handlebars

    * Se refactorizó el codigo para hacerlo por capas, se establecieron las capas de controller, de DAO, de Servicios , de rutas y de vistas (con handlebars) Diferenciandose los modulos de productos, carritos, usuarios y chat

    * Se implementaron las variables de entorno (development, staging y production) con los datos sensibles, como asi tambien el email del administrador y su contraseña, los datos de autenticación del servicio de gmail y de Mongo DB.

## Tecnologías utilizadas : 
- Node JS : v18.16.1
- Motor de plantillas : Handlebars
- Estrategias de autenticación : Passport local y Passport con Git Hub
- Hasheo de password : Bcrypt
- Websocket : socket.io
- Mongo DB Atlas usado con Mongoose
    -base de datos : ecommerce1
    -colecciones : products1 / carts1 / messages1 /sessions / users1
- Dependencias 
    "bcrypt": "^5.1.1",
    "commander": "^11.1.0",
    "connect-mongo": "^5.0.0",
    "crypto": "^1.0.1",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "express-handlebars": "^7.1.2",
    "express-session": "^1.17.3",
    "express-validator": "^7.0.1",
    "mongoose": "^7.5.1",
    "mongoose-paginate-v2": "^1.7.4",
    "nodemon": "^3.0.1",
    "passport": "^0.6.0",
    "passport-github2": "^0.1.12",
    "passport-local": "^1.0.0",
    "socket.io": "^4.7.2",
    "socket.io-client": "^4.7.2"


   Nota : Se desconecto el manejador de rutas de File System , pero no se eliminó (quedo en un manager separado y se comento en el código de app.js)
