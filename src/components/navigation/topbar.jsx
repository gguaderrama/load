import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Avatar from '../../assets/avatar.jpg'

export default (props) => {
    console.log();
    
    return (
        <div className="topbar">
            <h3>{props.active.substring(1)}</h3>
            <ul>
                <li>
                    <FontAwesomeIcon icon={['far', 'file-excel']} title="Exportar a Excel"/>
                </li>
                <li>
                    <FontAwesomeIcon icon={['far', 'file-pdf']} title="Exportar a PDF"/>
                </li>
                <li>
                    <FontAwesomeIcon icon={['far', 'envelope']} title="Mensajes"/>
                </li>
                <li>
                    <FontAwesomeIcon icon={['far', 'bell']} title="Alertas"/>
                </li>
                <li>
                    <img src={Avatar} alt="avatar"/>
                </li>
            </ul>
        </div>
    )
}