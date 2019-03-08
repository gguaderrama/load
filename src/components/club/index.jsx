import React from "react"
import Navigation from "../../containers/navigation"
import Listado from "../club/listado"
import Save from "./save"
import Edit from "./edit"

const Index = props => {
console.log(props.form);
    return (
        <div
            className={
                props.visible ? "container menu" : "container"
            }
        >
            <div className="tab-bar">
                {props.tabs.map((e, i) => {
                    return (
                        <a
                            className={props.tab == e ? "active" : ""}
                            key={i}
                        >
                            {e}
                        </a>
                    )
                })}
            </div>
            {
             props.save ? <Save {...props} /> :  props.edit ? <Edit {...props} /> :  <Listado {...props} />
            }
            <Navigation {...props} />
        </div>
    )
}

export default Index
