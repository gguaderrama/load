import React from "react"
import Navigation from "../../containers/navigation"
import Listado from "../membresia/listado"
import Categorias from "../membresia/categorias"
import Horario from "../membresia/horario"

const Index = props => {
    return (
        <div
            className={
                props.visible ? "container-login menu" : "container-login"
            }
        >
            <div className="tab-bar">
                {props.tabs.map((e, i) => {
                    return (
                        <a
                            className={props.tab == e ? "active" : ""}
                            onClick={() => props.setTab(e)}
                            key={i}
                        >
                            {e}
                        </a>
                    )
                })}
            </div>
            {props.tab == "horario" ? (
                <Horario {...props} />
            ) : props.tab == "listado" ? (
                <Listado {...props} />
            ) : props.tab == "categorias" ? (
                <Categorias {...props} />
            ) : (
                ""
            )}
            <Navigation {...props} />
        </div>
    )
}

export default Index
