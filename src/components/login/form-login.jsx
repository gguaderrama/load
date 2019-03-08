import React from 'react'
import PropTypes from "prop-types"
import Text from '../text'

const FormLogin = (props) => {
    return (
        <div>
            <h4>inicia sesión</h4>
            <div className="login-form-inputs">
                <Text
                    value={props.user}
                    name="Usuario"
                    onChange={props.setUserLogin} />
                <Text
                    type="password"
                    value={props.pass}
                    name="Contraseña"
                    onChange={props.setPassLogin} />
            </div>    
            <p className="login-form-olvidaste">¿Olvidaste tu contraseña?</p>
        </div>
    )
}

FormLogin.propTypes = {
    user: PropTypes.string,
    pass: PropTypes.string,
    setUserLogin: PropTypes.func,
    setPassLogin: PropTypes.func
}

export default FormLogin