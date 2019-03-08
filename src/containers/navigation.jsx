import React from 'react'
import { connect } from 'react-redux'
import Navigation from '../components/navigation'
import { toggle, navigate } from '../actions'

const mapState = state => {
    return {
        visible: state.navigation.visible,
        menu: state.navigation.menu
    }
}

const mapDispatch = (dispatch) => {
    return {
        toggle: () => dispatch(toggle()),
        navigate: (opcion) => dispatch(navigate(opcion))
    }
}

export default connect(mapState, mapDispatch)(Navigation)

