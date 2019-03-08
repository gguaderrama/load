import React from 'react'
import Text from '../../text'
import Combo from '../../combo'
import CalendarForm from '../../calendar'

export default props => {
    return (
        <div className="container-form">
            <div className="text-oscuro">
                <label className="text-label oscuro">Día</label>
            </div>
            <CalendarForm {...props} />
            <div className="filtros">
                <Combo
                    onChange={props.setClaseClub}
                    options={props.get_clubes}
                    value={props.clubId}
                />
                <Combo
                    onChange={props.setClaseCoach}
                    options={props.get_coaches}
                    value={props.coachId}
                />
            </div>
            <Text
                oscuro={true}
                valid={props.valid_input_name}
                message={props.message_input_name}
                onChange={props.setClaseShortDescription}
                value={props.name}
                max={20}
                name="Descripción"
            />
        </div>
    )
}
