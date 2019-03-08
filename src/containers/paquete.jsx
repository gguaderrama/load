import React from 'react'
import { connect } from 'react-redux'
import Paquete from '../components/paquete'
import { setTabPaquetes } from '../actions'

const mapState = state => {
    return { active: state.paquete.active,
        visible: state.navigation.visible,
        tabs: state.paquete.tabs,
        tab: state.paquete.tab 
    }
}

const mapDispatch = (dispatch) => {
    return {
        setTabPaquetes: (tab) => dispatch(setTabPaquetes(tab))
    }
}

export default connect(mapState, mapDispatch)(Paquete)