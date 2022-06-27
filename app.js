const Server = require('./models/server');
//npm i express dotenv esta es la instalacion comun con express creamos nuestro servidores
// y con dotenv creamos nuestras variables de entorno

require('dotenv').config();


const server = new Server();


server.listen();


