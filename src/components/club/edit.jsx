import React from 'react'
import Form from './form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props => {
    return (
        <div className="club-form">
            <h1 style={{ color: 'black' }}> Editar  Club </h1>
            <FontAwesomeIcon icon={['fas', 'arrow-circle-left']}  onClick={() => props.setEditClub(0)} title="Atrás" className='btn-back'/>
            <Form {...props}/>
            <button className="btn" disabled={ props.consulta } onClick={() => props.updateClub()}>
            {props.consulta ? "Editando" : "Editar"}
            </button>
        </div>
    )
}
