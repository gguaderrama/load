import React from "react"
import Navigation from "../../containers/navigation"
import Listado from "../instructor/listado"

const Index = props => {
    return <div className={props.visible ? "container menu" : "container"}>
            <div className="tab-bar">
                {props.tabs.map((e, i) => {
                    return <a className={props.tab == e ? "active" : ""} key={i}>
                            {e}
                        </a>
                })}
            </div>
            <Listado {...props} />
            <Navigation {...props} />
        </div>
}

export default Index
