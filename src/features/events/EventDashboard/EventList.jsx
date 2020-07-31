import React from 'react'
import {EventListItem} from './EventListItem'

export const EventList = ({events}) => {
  return (
    <>
    {
      events.map(event=>(
        <EventListItem event={event} key={event.id} />
      ))
    }
    </>
  )
}
