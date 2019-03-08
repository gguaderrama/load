import React from 'react'
import Menu from './menu'
import Topbar from './topbar'
import Sidebar from './sidebar'

export default (props) => {
    return (
        <div>
            <Topbar {...props} />
            <Sidebar {...props} />
            <Menu {...props} />
        </div>
    )
}
