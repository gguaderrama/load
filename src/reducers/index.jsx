import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import navigation from './navigation'
import home from './home'
import login from './login'
import clases from './clases'
import cliente from './cliente'
import club from './club'
import comida from './comida'
import compras from './compras'
import horario from './horario'
import instructor from './instructor'
import membresia from './membresia'
import paquete from './paquete'
import producto from './producto'
import tienda from './tienda'
import usuario from './usuario'

export default (history) => combineReducers({
    router: connectRouter(history),
    navigation,
    home,
    login,
    clases,
    cliente,
    club,
    comida,
    compras,
    horario,
    instructor,
    membresia,
    paquete,
    producto,
    tienda,
    usuario
})
