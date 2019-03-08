import api from '../config/api'

export const setTabClases = tab => {
    return {
        type: 'SET_TAB_CLASES',
        value: tab,
        clases: []
    }
}

/* Combos para horarios */
export const setClaseCoach = event => {
    return dispatch => {
        dispatch({
            type: 'SET_CLASS_COACH',
            value: event.target.value
        })
    }
}

export const setClaseShortDescription = event => {
    return {
        type: 'SET_NAME_DESCRIPTION',
        value: event.target.value
    }
}

export const setClaseClub = event => {
    return dispatch => {
        dispatch({
            type: 'SET_CLASS_ClUB',
            value: event.target.value
        })
    }
}

export const setClaseTime = time => {
    return dispatch => {
        dispatch({
            type: 'SET_CLASS_TIME',
            value: time
        })
    }
}

export const setClaseDatetime = date => {
    return dispatch => {
        dispatch({
            type: 'SET_CLASS_DATETIME',
            value: date
        })
    }
}

export const setEditClass = id => {
    return dispatch => {
        if (id === 0) {
            dispatch({
                type: 'SET_EDIT_CLASS'
            })
        } else {
            api.get('discipline/' + id).then(response => {
                dispatch({
                    type: 'SET_NAME_CLASES',
                    value: response.data.data.name
                })
                dispatch({
                    type: 'SET_DESCRIPTION_CLASS',
                    value: response.data.data.description
                })
                dispatch({
                    type: 'SET_ID_CLASS',
                    value: id
                })
                dispatch({
                    type: 'SET_EDIT_CLASS'
                })
            })
        }
    }
}

export const getDisciplines = () => {
    return (dispatch, getState) => {
        api.get('discipline')
            .then(response => {
                console.log(response.data)
            })
            .catch(err => {
                console.log(err.response.data.error_description)
            })
    }
}

export const getClases = () => {
    return dispatch => {
        api.get('discipline')
            .then(response => {
                console.log(response.data.data)
                dispatch({
                    type: 'SET_CLASES',
                    value: response.data.data
                })
            })
            .catch(err => {
                console.log(err.response.data.message)
            })
    }
}

export const getHorarios = () => {
    return dispatch => {
        api.get('schedule')
            .then(response => {
                // console.log(response.data.data)
                dispatch({
                    type: 'SET_HORARIOS',
                    value: response.data.data
                })
            })
            .catch(err => {
                console.log(err.response.data.message)
            })
    }
}

export const setSaveClass = () => {
    return dispatch => {
        dispatch({
            type: 'CLEAR_VALUES_CLASES'
        })
        dispatch({
            type: 'SET_SAVE_CLASS'
        })
    }
}

export const setSaveHorario = () => {
    return (dispatch, getState) => {
        const { save_horario } = getState().clases
        dispatch({
            type: 'SET_SAVE_HORARIO'
        })
        console.log(save_horario)
        if (save_horario === false) {
            api.get('club')
                .then(response => {
                    console.log(response.data.data)
                    dispatch({
                        type: 'GET_CLUBES',
                        value: response.data.data
                    })
                })
                .catch(err => {
                    console.log(err.response.data.message)
                })
            api.get('coach')
                .then(response => {
                    console.log(response.data.data)
                    dispatch({
                        type: 'GET_COACHES',
                        value: response.data.data
                    })
                })
                .catch(err => {
                    console.log(err.response.data.message)
                })
        }
    }
}

export const setNameClass = event => {
    return {
        type: 'SET_NAME_CLASES',
        value: event.target.value
    }
}

export const setDescriptionClass = value => {
    return {
        type: 'SET_DESCRIPTION_CLASS',
        value: value
    }
}

export const showAlertClass = id => {
    return dispatch => {
        dispatch({
            type: 'SET_VISIBLE_ALERT_CLASS'
        })
        dispatch({
            type: 'SET_ID_CLASS',
            value: id
        })
    }
}

export const saveHorario = () => {
    return (dispatch, getState) => {
        const {
            atDay,
            atTime,
            clubId,
            coachId,
            shortDescription
        } = getState().clases

        if (name == '') {
            dispatch({
                type: 'SET_MESSAGE_CLASS_NAME',
                value: 'Por favor ingrese el nombre de la clase'
            })
            dispatch({
                type: 'SET_VALID_CLASS_NAME',
                value: true
            })
        }

        if (name != '' && description != '') {
            dispatch({
                type: 'SET_CONSULTA_CLASS',
                value: true
            })
            api.post('discipline', {
                name: name,
                description: description
            })
                .then(response => {
                    dispatch({
                        type: 'SET_CONSULTA_CLASS',
                        value: false
                    })
                    dispatch({
                        type: 'SET_CLASES',
                        value: response.data.data
                    })
                    dispatch({
                        type: 'SET_SAVE_CLASS'
                    })
                    dispatch({
                        type: 'SET_NAME_CLASES',
                        value: ''
                    })
                    dispatch({
                        type: 'SET_DESCRIPTION_CLASS',
                        value: ''
                    })
                })
                .catch(err => {
                    console.log(err.response.data.message)
                })
        }
    }
}

export const saveClass = () => {
    return (dispatch, getState) => {
        const { name, description } = getState().clases

        if (name == '') {
            dispatch({
                type: 'SET_MESSAGE_CLASS_NAME',
                value: 'Por favor ingrese el nombre de la clase'
            })
            dispatch({
                type: 'SET_VALID_CLASS_NAME',
                value: true
            })
        }

        if (name != '' && description != '') {
            dispatch({
                type: 'SET_CONSULTA_CLASS',
                value: true
            })
            api.post('discipline', {
                name: name,
                description: description
            })
                .then(response => {
                    dispatch({
                        type: 'SET_CONSULTA_CLASS',
                        value: false
                    })
                    dispatch({
                        type: 'SET_CLASES',
                        value: response.data.data
                    })
                    dispatch({
                        type: 'SET_SAVE_CLASS'
                    })
                    dispatch({
                        type: 'SET_NAME_CLASES',
                        value: ''
                    })
                    dispatch({
                        type: 'SET_DESCRIPTION_CLASS',
                        value: ''
                    })
                })
                .catch(err => {
                    console.log(err.response.data.message)
                })
        }
    }
}
