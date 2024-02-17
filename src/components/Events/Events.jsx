import React, { useState, useEffect, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Select from "react-select";

import Event from "../Event/Event";
import AuthContext from "../../context/AuthProvider";

import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import {
  Header,
  EventsContainer,
  SearchBar,
  Input,
  SearchButton,
  FilterButton,
  FilterContainer,
  FilterSortContainer,
  FilterButtonContainer,
  DropdownContainer,
  Label,
} from "./Events.elements";

const Events = ({ events }) => {
  const { loggedIn } = useContext(AuthContext);

  const [filteredEvents, setFilteredEvents] = useState(events);
  const [searchResults, setSearchResults] = useState(filteredEvents);

  const [showWorkshops, setShowWorkshops] = useState(true);
  const [showTechTalks, setShowTechTalks] = useState(true);
  const [showActivities, setShowActivities] = useState(true);

  const [sortBy, setSortBy] = useState("startTime");

  // updates filteredEvents. Filters in this order: Login Status -> Active Catetories -> Sort
  useEffect(() => {
    let filtered = events;
    if (!loggedIn) {
      filtered = filtered.filter((event) => event.permission === "public");
    }

    if (!showWorkshops) {
      filtered = filtered.filter((event) => event.event_type !== "workshop");
    }

    if (!showTechTalks) {
      filtered = filtered.filter((event) => event.event_type !== "tech_talk");
    }

    if (!showActivities) {
      filtered = filtered.filter((event) => event.event_type !== "activity");
    }

    if (sortBy.value === "startTime") {
      filtered.sort((a, b) => {
        if (a.start_time < b.start_time) {
          return -1;
        } else if (a.start_time > b.start_time) {
          return 1;
        } else {
          if (a.end_time < b.end_time) {
            return -1;
          } else if (a.end_time > b.end_time) {
            return 1;
          } else {
            return 0;
          }
        }
      });
      console.log(filtered);
    } else if (sortBy.value === "eventType") {
      // Group events by event_type
      const groupedEvents = filtered.reduce((groups, event) => {
        if (!groups[event.event_type]) {
          groups[event.event_type] = [];
        }
        groups[event.event_type].push(event);
        return groups;
      }, {});

      // Sort events within each group by start_time
      for (const group in groupedEvents) {
        groupedEvents[group].sort((a, b) => {
          if (a.start_time < b.start_time) {
            return -1;
          } else if (a.start_time > b.start_time) {
            return 1;
          } else {
            if (a.end_time < b.end_time) {
              return -1;
            } else if (a.end_time > b.end_time) {
              return 1;
            } else {
              return 0;
            }
          }
        });
      }

      // Merge groups back into a single array
      filtered = Object.values(groupedEvents).flat();
    }

    setFilteredEvents(filtered);
  }, [events, loggedIn, showActivities, showWorkshops, showTechTalks, sortBy]);

  useEffect(() => {
    setSearchResults(filteredEvents);
  }, [filteredEvents]);

  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) {
      setSearchResults(filteredEvents);
    } else {
      setSearchResults(
        filteredEvents.filter((event) =>
          event.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  const handleSelectChange = (selectedOption) => {
    setSortBy(selectedOption);
  };

  const dropdownOptions = [
    { value: "startTime", label: "Start Time" },
    { value: "eventType", label: "Event Type" },
  ];

  const dropdownStyles = {
    control: (provided, state) => ({
      ...provided,
    }),
    option: (provided, state) => ({
      ...provided,
    }),
    menu: (provided, state) => ({
      ...provided,
      // border: '3px solid red',
      // padding: '0',
    }),
  };

  return (
    <div>
      <Header>Events</Header>
      <SearchBar onSubmit={handleSubmit}>
        <Input type="text" onChange={handleSearchChange}></Input>
        <SearchButton>
          <HiOutlineMagnifyingGlass
            style={{ fontSize: "30px" }}
          ></HiOutlineMagnifyingGlass>
        </SearchButton>
      </SearchBar>

      <FilterSortContainer>
        <FilterContainer>
          <Label>Show</Label>

          <FilterButtonContainer>
            <FilterButton
              onClick={() => setShowWorkshops(!showWorkshops)}
              bgColor="#7EDFA5"
              active={showWorkshops}
            >
              Workshops
            </FilterButton>
            <FilterButton
              onClick={() => setShowTechTalks(!showTechTalks)}
              bgColor="#997EDF"
              active={showTechTalks}
            >
              Tech Talks
            </FilterButton>
            <FilterButton
              onClick={() => setShowActivities(!showActivities)}
              bgColor="#7E99DF"
              active={showActivities}
            >
              Activities
            </FilterButton>
          </FilterButtonContainer>
        </FilterContainer>
        <DropdownContainer>
          <Label>Sort By</Label>
          <Select
            className="basic-single"
            options={dropdownOptions}
            onChange={handleSelectChange}
            isSearchable={false}
            defaultValue={dropdownOptions[0]}
            styles={dropdownStyles}
          ></Select>
        </DropdownContainer>
      </FilterSortContainer>

      {searchResults.length ? (
        <AnimatePresence>
          <EventsContainer as={motion.div}>
            {searchResults.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
              >
                <Event key={event.id} event={event} />
              </motion.div>
            ))}
          </EventsContainer>
        </AnimatePresence>
      ) : (
        <div> No events to display </div>
      )}
    </div>
  );
};

export default Events;
