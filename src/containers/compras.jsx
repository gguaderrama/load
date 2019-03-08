import React from 'react'
import { connect } from 'react-redux'
import Compras from '../components/compras'
import { toggle } from '../actions'

const mapState = state => {
    return {
        active: state.compras.active,
        visible: state.navigation.visible,
    }
}

const mapDispatch = (dispatch) => {
    return {
       
    }
}

export default connect(mapState, mapDispatch)(Compras)