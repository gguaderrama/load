import React from 'react'
import { connect } from 'react-redux'
import Cliente from '../components/cliente'
import { toggle } from '../actions'

const mapState = state => {
    return {
        active: state.cliente.active,
        visible: state.navigation.visible,
    }
}

const mapDispatch = (dispatch) => {
    return {
       
    }
}

export default connect(mapState, mapDispatch)(Cliente)