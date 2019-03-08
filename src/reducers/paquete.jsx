const tabs = ["listado", "precios", "descuentos"]
const initialState = {
    active: "/paquetes",
    tabs: tabs,
    tab: tabs[0]
}

const paquete = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TAB_PAQUETES":
            return {
                ...state,
                tab: action.value
            }
        default:
            return state
    }
}

export default paquete