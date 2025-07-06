import {React, useState, useEffect}  from 'react';
import {useParams}  from 'react-router'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import './events.css'

export default function Detail() {

    const {id} = useParams()

    const [event, setEvent] = useState()
    const [tickets, setTickets] = useState(1)

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/events/${id}/`)
        .then(response => response.json())
        .then(data => setEvent(data))
    },[id])

    function purchaseTicket(e) {
        e.preventDefault()
        console.log(tickets)
    }

    return (
        <div id="event-detail">
            {event ? (
                <>
                    <h1>{event.title}</h1>
                    <p>Hosted by <i>{event.host}</i></p>
                    <img src={`${event.image}`} alt={event.title} id="detail-image"/>
                    <h3>Description</h3>
                    <p>{event.description}</p>
                    <form onSubmit={purchaseTicket}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <TextField label='Number of Tickets' type='number' required min='1' onChange={e => setTickets(e.target.value)} defaultValue={1}/>
                            <p style={{fontSize: '1.5rem'}}>${tickets * event.price}</p>
                        </div>
                        <Button variant='contained' type='submit' id="purchase-button">Purchase Ticket</Button>
                    </form>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}