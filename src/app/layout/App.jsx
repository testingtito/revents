import React, { useState } from 'react';
import { EventDashboard } from '../../features/events/EventDashboard/EventDashboard';
import { NavBar } from '../../features/nav/NavBar';
import { Container } from 'semantic-ui-react';

const App = () => {
  // Navbar와 Container 모두 formOpen을 사용하기 때문에 두 components의 parent인 App.js에
  // implement 해준다.
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <NavBar setFormOpen={setFormOpen} />
      <Container className='main'>
        {/* 아래 setFormOpen은 EventForm으로 pass 된다. */}
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  );
};

export default App;
