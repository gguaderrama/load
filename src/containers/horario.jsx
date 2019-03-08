import React from 'react'
import { connect } from 'react-redux'
import Horario from '../components/horario'
import { toggle } from '../actions'

const mapState = state => {
    return {
        active: state.horario.active,
        visible: state.navigation.visible,
    }
}

const mapDispatch = (dispatch) => {
    return {
       
    }
}

export default connect(mapState, mapDispatch)(Horario)