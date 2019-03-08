import React from 'react'
import { connect } from 'react-redux'
import Clases from '../components/clases'

import {
    setTabClases,
    getClases,
    setSaveClass,
    saveClass,
    setNameClass,
    setDescriptionClass,
    showAlertClass,
    setEditClass,
    getHorarios,
    setSaveHorario,
    setClaseClub,
    setClaseCoach,
    setClaseDatetime,
    setClaseTime,
    setClaseShortDescription
} from '../actions'

const mapState = state => {
    return {
        active: state.clases.active,
        visible: state.navigation.visible,
        tabs: state.clases.tabs,
        tab: state.clases.tab,
        clases: state.clases.clases,
        horarios: state.clases.horarios,
        save_class: state.clases.save_class,
        consulta_class: state.clases.consulta_class,
        name: state.clases.name,
        description: state.clases.description,
        visible_alert_class: state.clases.visible_alert_class,
        edit: state.clases.edit,
        valid_input_name: state.clases.valid_input_name,
        message_input_name: state.clases.message_input_name,
        // Se declaran variables para Horario
        save_horario: state.clases.save_horario,
        get_clubes: state.clases.get_clubes,
        get_coaches: state.clases.get_coaches,
        clubId: state.clases.clubId,
        coachId: state.clases.coachId,
        atDay: state.clases.atDay,
        shortDescription: state.clases.shortDescription
    }
}

const mapDispatch = dispatch => {
    dispatch(getClases())
    dispatch(getHorarios())
    return {
        setTabClases: tab => dispatch(setTabClases(tab)),
        setSaveClass: () => dispatch(setSaveClass()),
        saveClass: () => dispatch(saveClass()),
        setNameClass: event => dispatch(setNameClass(event)),
        setDescriptionClass: value => dispatch(setDescriptionClass(value)),
        showAlertClass: id => dispatch(showAlertClass(id)),
        setEditClass: id => dispatch(setEditClass(id)),
        // Se agrega funciones para horarios
        setSaveHorario: () => dispatch(setSaveHorario()),
        setClaseCoach: event => dispatch(setClaseCoach(event)),
        setClaseClub: event => dispatch(setClaseClub(event)),
        setClaseDatetime: date => dispatch(setClaseDatetime(date)),
        setClaseTime: time => dispatch(setClaseTime(time)),
        setClaseShortDescription: event =>
            dispatch(setClaseShortDescription(event))
    }
}

export default connect(
    mapState,
    mapDispatch
)(Clases)
