const tabs = ["listado"]
const initialState = {
    active: "/instructores",
    tabs: tabs,
    tab: tabs[0]
}

const instructor = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TAB_INSTRUCTORES":
            return {
                ...state,
                tab: action.value
            }
        default:
            return state
    }
}

export default instructor