import React from 'react'
import { connect } from 'react-redux'
import Comida from '../components/comida'
import { toggle } from '../actions'

const mapState = state => {
    return {
        active: state.comida.active,
        visible: state.navigation.visible,
    }
}

const mapDispatch = (dispatch) => {
    return {
       
    }
}

export default connect(mapState, mapDispatch)(Comida)