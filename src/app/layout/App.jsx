import React, { useState } from 'react';
import { EventDashboard } from '../../features/events/EventDashboard/EventDashboard';
import { NavBar } from '../../features/nav/NavBar';
import { Container } from 'semantic-ui-react';

const App = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = event => {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true)
  }

  return (
    <>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className='main'>
        <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectEvent={handleSelectEvent}
          selectedEvent={selectedEvent} />
      </Container>
    </>
  );
};

export default App;
