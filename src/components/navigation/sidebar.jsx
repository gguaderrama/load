import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (props) => {
    return (
        <div className="side-bar">
            <div onClick={() => props.toggle()} className="topbar-menu-icon">
                <FontAwesomeIcon icon="bars" />
            </div>
        </div>
    )
}