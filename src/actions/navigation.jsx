import { push } from 'connected-react-router'

export const toggle = () => {
    return {
        type: 'TOGGLE'
    }
}
export const navigate = (opcion) => {
    return (dispatch) => {
        dispatch(push(opcion.seccion))
    }
}

