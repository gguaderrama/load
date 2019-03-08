import React from 'react'
import Form from './form'
import Logo from '../../assets/negro1.png'

const Login = (props) => {
    return (
        <div className={props.visible ? 'container-login menu' : 'container-login'}>
            <Form {...props}/>
            <img className={props.registrate ? "circle-logo registro" : "circle-logo"} src={Logo} alt=""/>
            <div className={props.registrate ? "circle registro" : "circle"} />
        </div>
    )
}

export default Login