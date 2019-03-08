import React from 'react'
import Form from './form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props => {
    return (
        <div className="form">
            <h1 style={{ color: 'black' }}> Crear Nueva Clase </h1>
            <FontAwesomeIcon
                icon={['fas', 'arrow-circle-left']}
                onClick={() => props.setSaveClass()}
                title="Atrás"
                className="btn-back"
            />
            <Form {...props} />
            <button
                className="btn"
                disabled={props.consulta_class}
                onClick={() => props.saveClass()}
            >
                {props.consulta_class ? 'Enviando' : 'Enviar'}
            </button>
        </div>
    )
}
