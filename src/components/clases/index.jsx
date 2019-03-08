import React from 'react'
import Navigation from '../../containers/navigation'
import Listado from './listado'
import Horario from './horario'
import Form from './horario-form'
import Save from './clases/save'
import Edit from './clases/edit'
import SaveHorario from './horarios/save_horario'
import editHorario from './horarios/edit_horario'

const Index = props => {
    return (
        <div className={props.visible ? 'container menu' : 'container'}>
            <Navigation {...props} />
            <div className="tab-bar">
                {props.tabs.map((e, i) => {
                    return (
                        <a
                            className={props.tab == e ? 'active' : ''}
                            onClick={() => props.setTabClases(e)}
                            key={i}
                        >
                            {e}
                        </a>
                    )
                })}
            </div>
            console.log(props.save_horario)
            {props.tab == 'horario' && !props.save_horario ? (
                <Horario {...props} />
            ) : props.tab == 'horario' && props.save_horario ? (
                <SaveHorario {...props} />
            ) : props.tab == 'horario' && props.save_class ? (
                <Save {...props} />
            ) : props.tab == 'listado' && props.save_class ? (
                <Save {...props} />
            ) : props.tab == 'listado' && props.edit ? (
                <Edit {...props} />
            ) : (
                <Listado {...props} />
            )}
        </div>
    )
}

export default Index
