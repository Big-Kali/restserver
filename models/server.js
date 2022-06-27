const express = require("express");
//const app = express();
//import cors
const cors = require('cors');



class Server {
  //creating a constructor
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    //we put the path from our website this is for showing to the customer
    this.usuariosPath = '/api/usuarios';



    this.middlewares();
    //middlewares
    //son funciones que siempre va ejecutarse cuando inisialisemos nuestro servidor

    //we calle the routes
    this.routes();
  }

  middlewares() {
    //directorio publico
    this.app.use(express.static("public"));
    this.app.use(cors());
    //posting data 
    this.app.use(express.json());
  }

  // we are gonna define the router that we want
  routes() {
    //we are gonna make a middleware optional
      this.app.use(this.usuariosPath, require('../routers/usuarios'));

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`listening in localhost://${this.port}`);
    });
  }
}

//we import the server here

module.exports = Server;
