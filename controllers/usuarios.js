const { response, request } =  require('express');

const usuariosGet = (req = request, res = response) => {

    const query = req.query;

    res.json({
      msg: "get Api - contoller",
      query
    });
};

const usuariosPost = (req, res) => {
    //forma de destructuracion
    //o colocamos una variables que contenga el contenido entero de json
    const {nombre, edad } = req.body;
    res.json({
        msg: "POST Api - contoller",
        nombre,
        edad
    });
}

const usuariosPut = (req, res = response) =>{

    const {id} = req.params;

    res.json({
        msg: "PUT Api - contoller",
        id
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: "Delete Api - controller"
    });
}



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}