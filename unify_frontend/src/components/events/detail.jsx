import {React, useState, useEffect}  from 'react';
import {useParams}  from 'react-router'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

export default function Detail() {

    const {id} = useParams()

    const [event, setEvent] = useState()
    const [tickets, setTickets] = useState(0)

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
        <div>
            {event ? (
                <>
                    <h1>{event.title}</h1>
                    <em>hosted by {event.host}</em>
                    <img src={event.image} alt={event.title} />
                    <h3>Description</h3>
                    <p>{event.description}</p>
                    <form onSubmit={purchaseTicket}>
                        <TextField
                            label='No. of tickets'
                            variant='outlined' 
                            type="number"
                            onChange={(e) => setTickets(e.target.value)}
                        />
                        <Button variant='contained' type='submit'>Attend</Button>
                    </form>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}