import React from 'react'
import { connect } from 'react-redux'
import Club from '../components/club'
import {
    setTabClubes,
    setSaveClub,
    setEditClub,
    setNameClub,
    setLocationClub,
    saveClub,
    getClubes,
    deleteClub,
    updateClub,
    showAlert
} from '../actions'

const mapState = state => {
    return {
        active: state.club.active,
        message_input_name: state.club.message_input_name,
        valid_input_name: state.club.valid_input_name,
        visible: state.navigation.visible,
        visible_alert: state.club.visible_alert,
        tabs: state.club.tabs,
        tab: state.club.tab,
        save: state.club.save,
        name: state.club.name,
        location: state.club.location,
        clubes: state.club.clubes,
        edit: state.club.edit,
        consulta: state.club.consulta
    }
}

const mapDispatch = dispatch => {
    dispatch(getClubes())
    return {
        setTabClubes: tab => dispatch(setTabClubes(tab)),
        setSaveClub: () => dispatch(setSaveClub()),
        setEditClub: id => dispatch(setEditClub(id)),
        setNameClub: event => dispatch(setNameClub(event)),
        setLocationClub: event => dispatch(setLocationClub(event)),
        saveClub: () => dispatch(saveClub()),
        deleteClub: () => dispatch(deleteClub()),
        updateClub: () => dispatch(updateClub()),
        showAlert: id => dispatch(showAlert(id))
    }
}

export default connect(
    mapState,
    mapDispatch
)(Club)
