import api from '../config/api'

export const setTabClubes = tab => {
    return {
        type: 'SET_TAB_CLUBES',
        value: tab
    }
}
export const setSaveClub = () => {
    return {
        type: 'SET_SAVE_CLUB'
    }
}

export const setEditClub = id => {
    return dispatch => {
        if (id === 0) {
            dispatch({
                type: 'SET_EDIT_CLUB'
            })
        } else {
            api.get('club/' + id)
                .then(response => {
                    dispatch({
                        type: 'SET_EDIT_CLUB'
                    })
                    dispatch({
                        type: 'SET_NAME_CLUB',
                        value: response.data.data.name
                    })
                    dispatch({
                        type: 'SET_LOCATION_CLUB',
                        value: response.data.data.ubication
                    })
                    dispatch({
                        type: 'SET_ID_CLUB',
                        value: id
                    })
                })
                .catch(err => {
                    console.log(err.response.data.message)
                })
        }
    }
}

export const setNameClub = event => {
    return {
        type: 'SET_NAME_CLUB',
        value: event.target.value
    }
}

export const setLocationClub = event => {
    return {
        type: 'SET_LOCATION_CLUB',
        value: event.target.value
    }
}

export const saveClub = () => {
    return (dispatch, getState) => {
        const { name, location } = getState().club
        if (name == '') {
            dispatch({
                type: 'SET_MESSAGE_INPUT_NAME',
                value: 'Ingresa el nombre de la clase'
            })
            dispatch({ type: 'SET_VALID_INPUT_NAME', value: true })
        }

        if (location == '') {
            dispatch({
                type: 'SET_MESSAGE_INPUT_LOCATION',
                value: 'Ingresa tu Ubicación'
            })
            dispatch({ type: 'SET_VALID_INPUT_LOCATION', value: true })
        }
        if (name != '') {
            dispatch({ type: 'SET_VALID_INPUT_NAME', value: false })
        }
        if (location != '') {
            dispatch({ type: 'SET_VALID_INPUT_LOCATION', value: false })
        }

        if (name != '' && location != '') {
            dispatch({
                type: 'SET_CONSULTA_CLUB',
                value: true
            })
            api.post('club', {
                name: name,
                ubication: location
            })
                .then(response => {
                    dispatch({
                        type: 'SET_CONSULTA_CLUB',
                        value: false
                    })

                    dispatch({
                        type: 'SET_CLUBES',
                        value: response.data.data
                    })
                    dispatch({
                        type: 'SET_SAVE_CLUB'
                    })
                    dispatch({
                        type: 'SET_NAME_CLUB',
                        value: ''
                    })
                    dispatch({
                        type: 'SET_LOCATION_CLUB',
                        value: ''
                    })
                })
                .catch(err => {
                    console.log(err.response.data.message)
                })
        }
    }
}

export const getClubes = () => {
    return dispatch => {
        api.get('club')
            .then(response => {
                console.log(response.data.data)
                dispatch({
                    type: 'SET_CLUBES',
                    value: response.data.data
                })
            })
            .catch(err => {
                console.log(err.response.data.message)
            })
    }
}

export const showAlert = id => {
    return dispatch => {
        dispatch({
            type: 'SET_VISIBLE_ALERT'
        })
        dispatch({
            type: 'SET_ID_CLUB',
            value: id
        })
    }
}

export const deleteClub = () => {
    return (dispatch, getState) => {
        const { id } = getState().club
        api.delete('club/' + id)
            .then(response => {
                dispatch({
                    type: 'SET_VISIBLE_ALERT'
                })

                dispatch({
                    type: 'SET_CLUBES',
                    value: response.data.data
                })

                dispatch({
                    type: 'SET_ID_CLUB',
                    value: 0
                })
            })
            .catch(err => {
                dispatch({
                    type: 'SET_VISIBLE_ALERT'
                })
                dispatch({
                    type: 'SET_ID_CLUB',
                    value: 0
                })

                console.log(err.response.data.message)
            })
    }
}

export const updateClub = () => {
    return (dispatch, getState) => {
        const { name, location, id } = getState().club

        dispatch({
            type: 'SET_CONSULTA_CLUB',
            value: true
        })
        api.put('club/' + id, {
            name: name,
            ubication: location
        })
            .then(response => {
                dispatch({
                    type: 'SET_CONSULTA_CLUB',
                    value: false
                })

                dispatch({
                    type: 'SET_CLUBES',
                    value: response.data.data
                })
                dispatch({
                    type: 'SET_EDIT_CLUB'
                })
            })
            .catch(err => {
                dispatch({
                    type: 'SET_CONSULTA_CLUB',
                    value: false
                })
                console.log(err.response.data.message)
            })
    }
}
