const tabs = ['horario', 'listado']
const initialState = {
    active: '/clases',
    tabs: tabs,
    tab: tabs[0],
    clases: [],
    save_class: false,
    edit: false,
    name: '',
    description: '',
    valid_input_name: false,
    message_input_name: '',
    consulta_class: false,
    visible_alert_class: false,
    id: 0,
    // Se declaran las variables de horario
    horarios: [],
    get_clubes: [],
    get_coaches: [],
    save_horario: false,
    atDay: '',
    atTime: '',
    capacity: '',
    clubId: '',
    coachId: '',
    disciplineId: '',
    durationTime: '',
    shortDescription: ''
}

const clases = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CLASS_TIME':
            return {
                ...state,
                atTime: action.value
            }
        case 'SET_CLASS_DATETIME':
            return {
                ...state,
                atDay: action.value
            }
        case 'SET_CLASS_COACH':
            return {
                ...state,
                coachId: action.value
            }
        case 'SET_CLASS_CLUB':
            return {
                ...state,
                clubId: action.value
            }
        case 'SET_NAME_DESCRIPTION':
            return {
                ...state,
                name: action.value
            }
        case 'SET_SAVE_CLASS':
            return {
                ...state,
                save_class: !state.save_class
            }
        case 'SET_SAVE_HORARIO':
            return {
                ...state,
                save_horario: !state.save_horario
            }
        case 'GET_CLUBES':
            return {
                ...state,
                get_clubes: action.value
            }
        case 'GET_COACHES':
            return {
                ...state,
                get_coaches: action.value
            }
        case 'SET_MESSAGE_CLASS_NAME':
            return {
                ...state,
                message_input_name: action.value
            }
        case 'SET_VALID_CLASS_NAME':
            return {
                ...state,
                valid_input_name: action.value
            }
        case '  ':
            return {
                ...state,
                name: ''
            }
        case 'CLEAR_VALUES_CLASES':
            return {
                ...state,
                name: ''
            }
        case 'SET_NAME_CLASES':
            return {
                ...state,
                name: action.value
            }
        case 'SET_TAB_CLASES':
            return {
                ...state,
                tab: action.value
            }
        case 'SET_CLASES':
            return {
                ...state,
                clases: action.value
            }
        case 'SET_HORARIOS':
            return {
                ...state,
                horarios: action.value
            }
        case 'SET_EDIT_CLASS':
            return {
                ...state,
                edit: !state.edit
            }

        case 'SET_DESCRIPTION_CLASS':
            return {
                ...state,
                description: action.value
            }
        case 'SET_ID_CLASS':
            return {
                ...state,
                id: action.value
            }
        case 'SET_CONSULTA_CLASS':
            return {
                ...state,
                consulta_class: action.value
            }
        case 'SET_VISIBLE_ALERT_CLASS':
            return {
                ...state,
                visible_alert_class: !state.visible_alert_class
            }

        default:
            return state
    }
}

export default clases
