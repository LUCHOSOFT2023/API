const {Router} = require('express')

//Desestructuración. Extraer un atributo de un objeto

const route = Router() 

//Importar métodos del controlador
const {usuarioGet, usuarioPost, usuarioPut, usuarioDelete} = require('../controllers/usuarios')
const  {isAuthenticated}  = require('../controllers/auth')

route.get('/', isAuthenticated,usuarioGet) //Listar los datos

route.post('/', usuarioPost) //Insertar Datos

route.put('/', usuarioPut) //Modificar los datos

route.delete('/', usuarioDelete) //Eliminar los datos

module.exports = route