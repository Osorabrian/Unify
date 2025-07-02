import { useState, useEffect} from 'react'
import './App.css'
import Navbar from './components/navigation/navbar'

function App() {

  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/events/',)
    .then(response => response.json())
    .then(data => setEvents(data))
  }, [])

  const events_list = () => {
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

  return (
    <>
      <Navbar />
      <h1>Unify</h1>
      <p>Unify is a simple, yet powerful, tool for managing your React applications.</p>
      {events_list()}
    </>
  )
}

export default App
