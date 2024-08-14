import { useState, useEffect} from 'react'

//import './App.css'

import Map from "./Map.jsx"
import Loader from "./Loader.jsx"
import Header from './Header.jsx'


function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events') //https://eonet.gsfc.nasa.gov/api/v2.1/events
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
    }

    fetchEvents()
  }, [])

  return (
    <div>
      <Header />
      { !loading ? <Map eventData={eventData} /> : <Loader /> }
    </div>
  );
}

export default App;