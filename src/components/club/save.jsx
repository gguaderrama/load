import React from 'react'
import Form from './form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props => {
    return (
        <div className="club-form">
            <h1 style={{ color: 'black' }}> Crear Nuevo Club </h1>
            <FontAwesomeIcon icon={['fas', 'arrow-circle-left']}  onClick={() => props.setSaveClub()} title="Atrás" className='btn-back'/>
            <Form {...props}/>
            <button className="btn" disabled={ props.consulta } onClick={() => props.saveClub()}>
             {props.consulta ? "Enviando" : "Enviar"}
            </button>
        </div>
    )
}
