import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Private from './private'
import Home from '../containers/home'
import Login from '../containers/login'
import Clases from '../containers/clases'
import Cliente from '../containers/cliente'
import Club from '../containers/club'
import Comida from '../containers/comida'
import Compras from '../containers/compras'
import Horario from '../containers/horario'
import Instructor from '../containers/instructor'
import Membresia from '../containers/membresia'
import Paquete from '../containers/paquete'
import Producto from '../containers/producto'
import Tienda from '../containers/tienda'
import Usuario from '../containers/usuario'

const Routes = () => (
    <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/clases" component={Clases} />
        <Route path="/clientes" component={Cliente} />
        <Route path="/clubes" component={Club} />
        <Route path="/comida" component={Comida} />
        <Route path="/compras" component={Compras} />
        <Route path="/horarios" component={Horario} />
        <Route path="/instructores" component={Instructor} />
        <Route path="/membresias" component={Membresia} />
        <Route path="/paquetes" component={Paquete} />
        <Route path="/productos" component={Producto} />
        <Route path="/tienda" component={Tienda} />
        <Route path="/usuarios" component={Usuario} />
    </Switch>
)

export default Routes
