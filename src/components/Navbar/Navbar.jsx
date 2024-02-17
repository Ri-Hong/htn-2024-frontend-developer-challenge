import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider'
import { MdOutlineLogin, MdOutlineLogout, MdOutlineEventNote } from "react-icons/md";

import {
  Container,
  Title,
  ButtonContainer,
  EventsButton,
  LoginButton,
} from './Navbar.elements'


const Navbar = () => {
  const navigate = useNavigate();

  const { loggedIn, setLoggedIn } = useContext(AuthContext);

  const eventsHandleClick = () => {
    navigate('/events');
  }

  const loggedInHandleClick = () => {
    setLoggedIn(false);
    navigate('/login');
  }
  
  const loggedOutHandleClick = () => {
    navigate('/login');
  }

  return (
    <Container>
      <Title>Hack The North Hacker Dashboard</Title>

      <ButtonContainer>
        <EventsButton onClick={eventsHandleClick}>
          <MdOutlineEventNote style={{fontSize: '30px'}}></MdOutlineEventNote>
        </EventsButton>
        {loggedIn && 
          <LoginButton onClick={loggedInHandleClick}>
            <MdOutlineLogout style={{fontSize: '30px'}}></MdOutlineLogout>
          </LoginButton>
        }
        {!loggedIn && 
          <LoginButton onClick={loggedOutHandleClick}>
            <MdOutlineLogin style={{fontSize: '30px'}}></MdOutlineLogin>
          </LoginButton>
        }
      </ButtonContainer>

      

    </Container>
  )
}

export default Navbar