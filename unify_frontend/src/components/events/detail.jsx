import {React, useState, useEffect}  from 'react';
import {useParams}  from 'react-router'

export default function Detail() {

    const {id} = useParams()

    const [event, setEvent] = useState()

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/events/${id}/`)
        .then(response => response.json())
        .then(data => setEvent(data))
    },[id])

    console.log(event)

    return (
        <div>
            {event ? (
                <>
                    <h1>{event.title}</h1>
                    <em>hosted by {event.host}</em>
                    <img src={event.image} alt={event.title} />
                    <h3>Description</h3>
                    <p>{event.description}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}