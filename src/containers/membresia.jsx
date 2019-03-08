import React from 'react'
import { connect } from 'react-redux'
import Membresia from '../components/membresia'
import { setTabMembresia } from "../actions"

const mapState = state => {
    return {
        active: state.membresia.active,
        visible: state.navigation.visible,
        tabs: state.membresia.tabs,
        tab: state.membresia.tab
    }
}

const mapDispatch = (dispatch) => {
    return {
        setTabMembresia: (tab) => dispatch(setTabMembresia(tab))
    }
}

export default connect(mapState, mapDispatch)(Membresia)