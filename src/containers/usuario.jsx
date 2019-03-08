import React from 'react'
import { connect } from 'react-redux'
import Usuario from '../components/usuario'
import { toggle } from '../actions'

const mapState = state => {
    return {
        active: state.usuario.active,
        visible: state.navigation.visible,
    }
}

const mapDispatch = (dispatch) => {
    return {
       
    }
}

export default connect(mapState, mapDispatch)(Usuario)