import React from 'react'
import { connect } from 'react-redux'
import Login from '../components/login'
import { setPassLogin, setUserLogin, login } from '../actions'

const mapState = state => {
    return {
        active: state.login.active,
        visible: state.navigation.visible,
        user: state.login.user,
        pass: state.login.pass,
        registrate: state.login.registrate,
        consulta: state.login.consulta
    }
}

const mapDispatch = (dispatch) => {
    localStorage.clear()
    return {
        login: () => dispatch(login()),
        setPassLogin: (event) => dispatch(setPassLogin(event)),
        setUserLogin: (event) => dispatch(setUserLogin(event))
    }
}

export default connect(mapState, mapDispatch)(Login)