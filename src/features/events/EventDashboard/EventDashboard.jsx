import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { EventList } from './EventList';
import { EventForm } from '../EventForm/EventForm';
import { sampleData } from '../../../app/api/sampleData';

export const EventDashboard = ({ formOpen, setFormOpen, selectEvent, selectedEvent }) => {
  const [events, setEvents] = useState(sampleData);


  const handleCreateEvent = event => {
    setEvents([...events, event])
  }



  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} selectEvent={selectEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        {
          formOpen &&
          <EventForm
            setFormOpen={setFormOpen}
            setEvents={setEvents}
            createEvent={handleCreateEvent}
            selectedEvent={selectedEvent} />
        }
      </Grid.Column>
    </Grid>
  );
};
