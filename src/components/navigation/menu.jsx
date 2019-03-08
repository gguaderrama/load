import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (props) => {
    return ( 
        <div className={props.visible ? "navigation abierto" : "navigation"}>
            <h3>menú</h3>
            <ul>
                {props.menu.map((elem, index) => {
                    return (
                        <li
                            onClick={() => props.navigate(elem)}
                            className={props.active == elem.seccion ? 'active' : ''}
                            key={index}>
                            <FontAwesomeIcon icon="bars" />
                            {elem.texto}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}