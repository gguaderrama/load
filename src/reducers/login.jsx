const initialState = {
    active: "/login",
    user: "",
    pass: "",
    registrate: false,
    consulta: false
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_LOGIN':
            return {
                ...state,
                user: action.value
            }
        case 'SET_PASS_LOGIN':
            return {
                ...state,
                pass: action.value
            }
        case 'SET_CONSULTA_LOGIN':
            return {
                ...state,
                consulta: action.value
            }
        case 'CHANGE_FORM_LOGIN':
            return {
                ...state,
                registrate: !state.registrate
            }
        default:
            return state
    }
}

export default login