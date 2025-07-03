import { useState, useEffect } from 'react';

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
                    <h2>{event.title}</h2>
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