import React from 'react'
import { connect } from 'react-redux'
import Home from '../components/home'
import { toggle } from '../actions'

const mapState = state => {
    return {
        active: state.home.active,
        visible: state.navigation.visible,
    }
}

const mapDispatch = (dispatch) => {
    return {
       
    }
}

export default connect(mapState, mapDispatch)(Home)