import { useState, useEffect } from 'react';
import {Link} from 'react-router'

export default function Events() {

    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/events/',)
        .then(response => response.json())
        .then(data => setEvents(data))
    }, [])

    return (
        <>
            {events.map(event => {
            return (
                <div key={event.id}>
                    <img src={event.image} alt={event.title} />
                    <h2><Link to={`/${event.id}/`}>{event.title}</Link></h2>
                    <p>{event.description}</p>
                    <p>{new Date(event.start_time).toLocaleDateString()}</p>
                    <p>{new Date(event.start_time).toLocaleTimeString()} to {new Date(event.end_time).toLocaleTimeString()}</p>
                    <p>hosted by {event.host}</p>
                    <p>{event.participants.length} people have booked.</p>
                    <p>location {event.location}</p>
                </div>
            )
            })}
        </>
    )
}