const tabs = ['listado']
const initialState = {
    active: '/clubes',
    tabs: tabs,
    tab: tabs[0],
    save: false,
    edit: false,
    name: '',
    valid_input_name: false,
    message_input_name: '',
    valid_input_location: false,
    message_input_location: '',
    consulta: false,
    location: '',
    visible_alert: false,
    clubes: [],
    id: 0
}

const club = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_VALID_INPUT_NAME':
            return {
                ...state,
                valid_input_name: action.value
            }
        case 'SET_VISIBLE_ALERT':
            return {
                ...state,
                visible_alert: !state.visible_alert
            }
        case 'SET_MESSAGE_INPUT_NAME':
            return {
                ...state,
                message_input_name: action.value
            }
        case 'SET_VALID_INPUT_LOCATION':
            return {
                ...state,
                valid_input_location: action.value
            }
        case 'SET_MESSAGE_INPUT_LOCATION':
            return {
                ...state,
                message_input_location: action.value
            }
        case 'SET_TAB_CLUBES':
            return {
                ...state,
                tab: action.value
            }
        case 'SET_SAVE_CLUB':
            return {
                ...state,
                save: !state.save
            }
        case 'SET_EDIT_CLUB':
            return {
                ...state,
                edit: !state.edit
            }
        case 'SET_NAME_CLUB':
            return {
                ...state,
                name: action.value
            }
        case 'SET_LOCATION_CLUB':
            return {
                ...state,
                location: action.value
            }
        case 'SET_CLUBES':
            return {
                ...state,
                clubes: action.value
            }
        case 'SET_ID_CLUB':
            return {
                ...state,
                id: action.value
            }
        case 'SET_CONSULTA_CLUB':
            return {
                ...state,
                consulta: action.value
            }

        default:
            return state
    }
}

export default club
