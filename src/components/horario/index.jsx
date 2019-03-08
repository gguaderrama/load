import React from 'react'
import Navigation from '../../containers/navigation'
import Logo from '../../assets/negro1.png'

export default (props) => {
    return (
        <div className={props.visible ? 'container menu' : 'container'}>
            <img src={Logo} alt="LOAD" className="home-logo"/>
            <Navigation {...props}/>
        </div>
    )
}