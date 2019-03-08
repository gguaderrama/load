import React from 'react'
import FormLogin from './form-login'

const Form = (props) => {
    return <div className="login-form">
            <FormLogin {...props} />
            <button disabled={props.consulta} onClick={() => props.login()} className="login-boton">
                {props.consulta ? "verificando" : "inicia sesión"}
            </button>
        </div>
}

export default Form