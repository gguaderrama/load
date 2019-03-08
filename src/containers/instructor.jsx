import React from 'react'
import { connect } from 'react-redux'
import Instructor from '../components/instructor'
import { setTabInstructores } from "../actions"

const mapState = state => {
    return {
        active: state.instructor.active,
        visible: state.navigation.visible,
        tabs: state.instructor.tabs,
        tab: state.instructor.tab 
    }
}

const mapDispatch = (dispatch) => {
    return {
        setTabInstructores: (tab) => dispatch(setTabInstructores(tab))
    }
}

export default connect(mapState, mapDispatch)(Instructor)