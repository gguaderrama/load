const menu = [
    { texto: "clientes", seccion: "/clientes", fa: ""},
    { texto: "coaches", seccion: "/coaches", fa: ""},
    { texto: "usuarios", seccion: "/usuarios", fa: ""},
    { texto: "clubes", seccion: "/clubes", fa: ""},
    { texto: "compras", seccion: "/compras", fa: ""},
    { texto: "clases", seccion: "/clases", fa: ""},
    { texto: "paquetes", seccion: "/paquetes", fa: ""},
    { texto: "membresia", seccion: "/membresias", fa: ""},
    { texto: "instructores", seccion: "/instructores", fa: ""},
    { texto: "comida", seccion: "/comida", fa: ""},
    { texto: "tienda", seccion: "/tienda", fa: ""},
    { texto: "productos", seccion: "/productos", fa: ""}
]

const initialState = {
    visible: false,
    menu
}

const navigation = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return {
                ...state,
                visible: !state.visible
            }

        default:
            return state
    }
}

export default navigation
