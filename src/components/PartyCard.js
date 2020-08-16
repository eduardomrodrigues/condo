import React from 'react'
import evts from '../events'
import { Calendar, momentLocalizer } from '@eduardomrodrigues/react-big-calendar-pt-br'
import moment from 'moment';

import '../styles/react-big-calendar.css'

moment.locale('pt-BR');
function PartyCard() {

    const [events, setEvents] = React.useState([])

    React.useEffect(() => {
        setEvents(evts)
    }, [])


    return (
        <React.Fragment>
            <input type="button" className="button button--principal row-1-1 col-11-13" value="Agendar minha Festa!"></input>
            <div className="col-1-13 row-3-13">
                <Calendar
                    localizer={momentLocalizer(moment)}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                />
            </div>
        </React.Fragment>
    )
}

export default PartyCard