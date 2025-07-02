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
                <h2>{event.title}</h2>
                </div>
            )
            })}
        </>
    )
}