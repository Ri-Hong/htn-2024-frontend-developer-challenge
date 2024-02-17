import React from 'react'
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'

import Navbar from './components/Navbar/Navbar'
import Events from './components/Events/Events'
import Login from './components/Login/Login'
import EventPage from './components/EventPage/EventPage'
import api from './api/apiBase'

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async() => {
      try {
        const response = await api.get('/events');
        setEvents(response.data);
        // console.log(response.data);
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }

    fetchEvents();
  }, [])


  return (
    <div className="App">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/htn-2024-frontend-developer-challenge/" element={<Events events={events}/>}/>
            <Route path="/events" element={<Events events={events}/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/events/:id" element={<EventPage events={events} />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
