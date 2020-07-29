import React from 'react';
import { EventDashboard } from '../../features/events/EventDashboard/EventDashboard';
import { NavBar } from '../../features/nav/NavBar/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <container className='main'>
        <EventDashboard />
      </container>
    </>
  );
};

export default App;
