import React from 'react'
import { motion } from 'framer-motion'

import { 
  ParentCard,
  Card,
  Name,
  Time, 
  DateField,
  Type,
  StyledLink,
  ColorBar,
  ColorBarChild
 } from './Event.elements'

const Event = ({ event }) => {
  const startDateTime = new Date(event.start_time);
  const endDateTime = new Date(event.end_time);

  const date = startDateTime.toLocaleString('en-US', { month: 'short', day: 'numeric' });

  const startTime = startDateTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  const endTime = endDateTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

  var eventTypePretty;

  switch (event.event_type) {
    case 'workshop':
      eventTypePretty = "Workshop";
      break;
    case 'tech_talk':
      eventTypePretty = "Tech Talk";
      break;
    case 'activity':
      eventTypePretty = "Activity";
      break;
    default:
      break;
  }

  var eventNameTrimmed = event.name;
  const maxLength = 30;
  if (eventNameTrimmed.length > maxLength) {
    const lastSpaceIndex = eventNameTrimmed.lastIndexOf(" ", maxLength);
    eventNameTrimmed = eventNameTrimmed.substring(0, lastSpaceIndex) + "...";
  }

  var barColor;
  if (event.event_type === "activity") {
    barColor = '#7E99DF';
  } else if (event.event_type === "workshop") {
    barColor = '#7EDFA5';
  } else if (event.event_type === "tech_talk") {
    barColor = '#997EDF';
  }

  return (
  <ParentCard 
    as={motion.div}
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}>
      <StyledLink to={`/events/${event.id}`}>
        <Card barColor={barColor}>
          <Type>{eventTypePretty}</Type>
          <Time>{startTime} - {endTime}</Time>
          <DateField>{date}</DateField>
          <Name>{eventNameTrimmed}</Name>
          <ColorBar>
            <ColorBarChild barColor={barColor}></ColorBarChild>
          </ColorBar>
        </Card>
      </StyledLink>
    </ParentCard>
  )
}

export default Event