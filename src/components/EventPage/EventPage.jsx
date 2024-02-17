import React from 'react'
import { useParams } from 'react-router-dom'

import { AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

import {
  FlexContainer,
  LeftContainer,
  RightContainer,
  Header,
  Type,
  Time,
  DateField,
  Description,
  SectionHeader,
  SpeakersContainer,
  Speaker,
  SpeakerName,
  SpeakerPicture,
  URLSection,
  URLContainer,
  URL,
  RelatedEventsSection,
  StyledLink,
  RelCard,
  RelName,
  RelDateTimeContainer,
  RelDateTime
} from './EventPage.elements'

import DefaultPFP from '../../images/Default_pfp.png'

const EventPage = ({ events }) => {
  const { id } = useParams();
  var event, startTime, endTime, date;

  window.scrollTo(0, 0);
  if (events.length) {
    event = events.find(event => (event.id).toString() === id);

    // Format Date
    const startDateTime = new Date(event.start_time);
    const endDateTime = new Date(event.end_time);
    date = startDateTime.toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    startTime = startDateTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    endTime = endDateTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    // Format Activity Type
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
        
    }
  }

  const showRelatedEvent = (event) => {
    console.log(event);
 // Format Date
    const startDateTime = new Date(event.start_time);
    const endDateTime = new Date(event.end_time);
    const date = startDateTime.toLocaleString('en-US', { month: 'short', day: 'numeric' });
    startTime = startDateTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    endTime = endDateTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    var bgColor;

    if (event.event_type === "activity") {
      bgColor = '#7E99DF';
    } else if (event.event_type === "workshop") {
      bgColor = '#7EDFA5';
    } else if (event.event_type === "tech_talk") {
      bgColor = '#997EDF';
    }

    var eventNameTrimmed = event.name;
    const maxLength = 30;
    if (eventNameTrimmed.length > maxLength) {
      const lastSpaceIndex = eventNameTrimmed.lastIndexOf(" ", maxLength);
      eventNameTrimmed = eventNameTrimmed.substring(0, lastSpaceIndex) + "...";
    }

    return (
      <RelCard bgColor={bgColor}>
        <RelName>{eventNameTrimmed}</RelName>
        <RelDateTimeContainer bgColor={bgColor}>
          <RelDateTime>{date}</RelDateTime>
          <RelDateTime>{startTime}</RelDateTime>
          <RelDateTime>{endTime}</RelDateTime>
        </RelDateTimeContainer>
      </RelCard>
    )
  }
  
  return (

    <div>
      {event && 
        <>
          <FlexContainer>
            <LeftContainer>
              <Type>{eventTypePretty}</Type>
              <Header>{event.name}</Header>
              <DateField>{date}</DateField>
              <Time>{startTime} - {endTime}</Time>
              <Description>{event.description}</Description>
            </LeftContainer>
            <RightContainer>
            <SectionHeader>Join</SectionHeader>
              <URLSection>
                {event.public_url !== "" &&
                  <>
                  <URLContainer>
                    <AiOutlineEye style={{fontSize: '2em', marginRight: '10px' }}></AiOutlineEye>
                    <URL href={event.public_url}>{event.public_url}</URL>
                  </URLContainer>
                  </>
                }
                <URLContainer>
                  <AiOutlineEyeInvisible style={{fontSize: '2em', marginRight: '10px'}}></AiOutlineEyeInvisible>
                  <URL href={event.private_url}>{event.private_url}</URL>
                </URLContainer>
              </URLSection>

              {event.speakers.length !== 0 && 
              <>
                <SectionHeader>Speakers</SectionHeader>
                <SpeakersContainer>
                  {event.speakers.length && event.speakers.map(speaker => (
                    <Speaker key={speaker.name}>
                    {/* {speaker.profile_pic && <SpeakerPicture src={speaker.profile_pic} alt="PFP"></SpeakerPicture>}
                    {!speaker.profile_pic && <SpeakerPicture src={DefaultPFP}></SpeakerPicture>} */}
                      <SpeakerPicture src={DefaultPFP}></SpeakerPicture>
                      <SpeakerName>{speaker.name}</SpeakerName>
                    </Speaker>
                ))}
                </SpeakersContainer>
              </>
              }

              <SectionHeader>Related Events</SectionHeader>
              <RelatedEventsSection>
              {event.related_events.length && event.related_events.map(relEvent => (
                  
                  <StyledLink to={`/events/${relEvent}`} key={relEvent}>
                    {showRelatedEvent(event=events.find(event => (event.id) === relEvent))}
                  </StyledLink>

              ))}
            </RelatedEventsSection>
            </RightContainer>
            

          </FlexContainer>
        </>
      }
    </div>
  )
}

export default EventPage