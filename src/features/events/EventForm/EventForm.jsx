import React, { useState } from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';
import cuid from 'cuid';

export const EventForm = ({ setFormOpen, setEvents, createEvent, selectedEvent }) => {

  const initialValues = selectedEvent ?? {//null conditional operator
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  }

  const [values, setValues] = useState(initialValues);

  const handleFromSubmit = e => {
    createEvent({
      ...values,
      id: cuid(),
      hostedBy: 'Bob',
      attendees: [],
      hostPhotoURL: '/assets/user.png',
    })
    setFormOpen(false); // close the form
  }

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value })
  }
  return (
    <Segment clearing>
      <Header content='Create new event' />
      <Form onSubmit={handleFromSubmit}>
        <Form.Field>
          <input
            type='text'
            placeholder='Event title'
            name='title'
            value={values.title}
            onChange={e => handleInputChange(e)} />
        </Form.Field>
        <Form.Field>
          <input type='text'
            placeholder='Category'
            name='category'
            value={values.category}
            onChange={e => handleInputChange(e)} />
        </Form.Field>
        <Form.Field>
          <input type='text'
            placeholder='Description'
            name='description'
            value={values.description}
            onChange={e => handleInputChange(e)} />
        </Form.Field>
        <Form.Field>
          <input type='text'
            placeholder='City'
            name='city'
            value={values.city}
            onChange={e => handleInputChange(e)} />
        </Form.Field>
        <Form.Field>
          <input type='text'
            placeholder='Venue'
            name='venue'
            value={values.venue}
            onChange={e => handleInputChange(e)} />
        </Form.Field>
        <Form.Field>
          <input type='date'
            placeholder='Date'
            name='date'
            value={values.date}
            onChange={e => handleInputChange(e)} />
        </Form.Field>
        <Button type='submit' floated='right' positive content='Submit' />
        <Button onClick={() => setFormOpen(false)} type='submit' floated='right' content='Cancel' />
      </Form>
    </Segment>
  );
};
