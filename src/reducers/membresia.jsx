const tabs = ["listado", "precios", "descuentos"]
const initialState = {
    active: "/membresias",
    tabs: tabs,
    tab: tabs[0]
}

const membresia = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TAB_MEMBRESIAS":
            return {
                ...state,
                tab: action.value
            }
        default:
            return state
    }
}

export default membresia