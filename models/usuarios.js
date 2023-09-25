const {Schema, model} = require('mongoose')

const UsuarioSchema = Schema({

    id_usuario: {
        type: Number,
        unique: true,
        required: [true, 'El id del usuario es obligatorio']
    },

    imagen_usuario: {
        type: String,
    },

    nombre_usuario: {
        type: String,
        required: [true, 'El nombre del usuario es obligatorio']
    },

    telefono_usuario: {
        type: String,
        required: [true, 'El telefono del usuario es obligatorio']
    },

    direccion_usuario: {
        type: String,
        required: [true, 'La dirección del usuario es obligatorio']
    },

    estado_usuario: {
        type: Boolean,
        default: true
    },

    correo_usuario: {
        type: String,
        require:[true,'Es necesario ingresar el correo']
    },
     contraseña_usuario:{
        type: String,
        requre:[true, 'La contraseña es necesaria']
     }

})

//Exportar la función UsuarioSchema
module.exports = model('usuariosNuevos',UsuarioSchema)