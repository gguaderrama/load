import React from 'react'
import { connect } from 'react-redux'
import Producto from '../components/producto'
import { toggle } from '../actions'

const mapState = state => {
    return {
        active: state.producto.active,
        visible: state.navigation.visible,
    }
}

const mapDispatch = (dispatch) => {
    return {
       
    }
}

export default connect(mapState, mapDispatch)(Producto)