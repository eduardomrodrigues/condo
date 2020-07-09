import React from 'react'
import events from '../events'
import { Calendar, momentLocalizer } from 'react-big-calendar-pt-br'
import moment from 'moment';

import '../styles/react-big-calendar.css'

moment.locale('pt-BR');
class PartyCard extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            events: events
        }

    }

    render() {
        const localizer = momentLocalizer(moment)

        return (
            <React.Fragment>
                <input type="button" className="button button--principal row-1-1 col-11-13" value="Agendar minha Festa!"></input>
                <div className="col-1-13 row-3-13">
                    <Calendar
                        localizer={localizer}
                        events={this.state.events}
                        startAccessor="start"
                        endAccessor="end"
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default PartyCard