import React from 'react'
import Text from '../../text'
import Tags from '../../tag'

export default props => {
    return (
        <div>
            <Text
                oscuro={true}
                valid={props.valid_input_name}
                message={props.message_input_name}
                onChange={props.setNameClass}
                value={props.name}
                max={20}
                name="name"
            />
            <Tags {...props} />
        </div>
    )
}
