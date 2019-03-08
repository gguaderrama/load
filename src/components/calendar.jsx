import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: null,
            date2: moment(new Date('2015-06-17 14:24:36')).format(
                'YYYY-MM-DD HH:mm:ss'
            )
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(date) {
        this.setState({
            startDate: date
        })
        this.props.setClaseDatetime(moment(date).format('DD-MM-YYYY'))
        this.props.setClaseTime(moment(date).format('h:mm:ss'))
    }

    render() {
        return (
            <DatePicker
                // placeholderText="Seleccione Fecha"
                // locale="fr"
                className="text-calendar"
                showTimeSelect={true}
                // minTime={this.state.date2}
                // maxTime={setHours(setMinutes(new Date(), 30), 20)}
                timeFormat="HH:mm"
                timeIntervals={1}
                selected={this.state.startDate}
                onChange={this.handleChange}
                dateFormat="d/MM/YYYY h:mm aa"
                timeCaption="time"
            />
        )
    }
}

export default Calendar
