import { push } from "connected-react-router"
import { apiLogin } from "../config/api"
import qs from 'querystring'
import toastr from 'toastr'

export const setUserLogin = (event) => {
    return {
        type: 'SET_USER_LOGIN',
        value: event.target.value
    }
}
export const setPassLogin = (event) => {
    return {
        type: 'SET_PASS_LOGIN',
        value: event.target.value
    }
}
export const login = () => {
    return (dispatch, getState) => {
        const { user, pass } = getState().login
        if (user === "") {
            toastr.warning("Ingresa un correo válido")
            return
        }
        if (pass === "") {
            toastr.warning("Ingresa tu contraseña")
            return
        }
        dispatch({ type: "SET_CONSULTA_LOGIN", value: true })
        apiLogin.post("login", qs.stringify({
            grant_type: "password",
            username: user,
            password: pass
        })).then(response => {
            localStorage.setItem("access_token", response.data.access_token)
            localStorage.setItem("user", response.data.user.username)
            localStorage.setItem("rol", response.data.user.roles[0].name)
            localStorage.setItem("rolId", response.data.user.roles[0].id)
            dispatch({ type: 'SET_USER_LOGIN', value: "" })
            dispatch({ type: "SET_PASS_LOGIN", value: "" })
            dispatch({ type: "SET_CONSULTA_LOGIN", value: false })
            toastr.success("Bienvenido.")
            dispatch(push("/clases"))
        }).catch(err => {
            toastr.error("Datos incorrectos, favor de verificarlos. (" + err.response.data.error_description + ")")
            dispatch({ type: "SET_CONSULTA_LOGIN", value: false })
        })
    }
}
