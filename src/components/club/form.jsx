import React from 'react'
import Text from '../text'

export default props => {
    return (
        <div>
            <Text
                oscuro={true}
                valid={props.valid_input_name}
                message={props.message_input_name}
                onChange={props.setNameClub}
                value={props.name}
                max={15}
                name="name"
            />
            <Text
                oscuro={true}
                valid={props.valid_input_location}
                message={props.message_input_location}
                onChange={props.setLocationClub}
                value={props.location}
                max={15}
                name="ubicacion"
            />
        </div>
    )
}
