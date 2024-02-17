import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const FlexContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  // border: 3px solid red;
  min-height: 90vh;

  @media (max-width: 954px) {
    flex-direction: column;
  }
`

export const LeftContainer = styled.div`
  text-align: left;
  padding: 40px 80px;
  border-right: 3px solid white;
  flex-basis: 70%;
  @media (max-width: 500px) {
    padding: 20px;
  }
`

export const RightContainer = styled.div`
  flex-basis: 30%;
  text-align: left;
  padding: 40px;
  @media (max-width: 954px) {
    padding: 0 80px 20px 80px;
  }
  @media (max-width: 500px) {
    padding: 20px;
  }
`

export const Header = styled.h1`
  font-size: 64px;
  text-align: left;
  margin: 20px 0;
  @media (max-width: 500px) {
    font-size: 40px;
  }
`

export const Name = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #000000;
`

export const Time = styled.p`
  font-size: 30px;
  font-weight: 400;
  color: #000000;
  margin: 0;
`

export const DateField = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #717171;
  margin: 0;
`

export const Type = styled.p`
  font-size: 24px;
  color: #717171;
  margin: 0;
`

export const Description = styled.p`
  font-size: 24px;
  color: #717171;
  margin: 20px 0;

`

export const SectionHeader = styled.h1`
  font-size: 24px;
  margin: 0;
`

export const SpeakersContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
`

export const Speaker = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`

export const SpeakerName = styled.p`
  font-size: 25px;
  margin-left: 20px;
`

export const SpeakerPicture = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin: auto;
`

export const URLSection = styled.div`
  margin-bottom: 60px;
`

export const URLContainer = styled.div`
  // border: 3px solid red;
  display: flex;
  align-items: center;
  margin: 10px 0;
`

export const URL = styled.a`
  font-size: 20px;
  color: #000000;
`

export const RelatedEventsSection = styled.div`
  margin: 0 auto;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  width: fit-content;
  border-radius: 25px;
  margin: 20px 0;
  // border: 3px solid red;
  width: 100%;

`

export const RelCard = styled.div`
  width: 100%;
  height: 75px;
  text-align: left;
  box-sizing: border-box;
  border-radius: 25px;
  background-color: #F3F3F3;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: radial-gradient(circle at 100% 100%, #ffffff 0, #ffffff 20px, transparent 20px) 0% 0%/25px 25px no-repeat,
    radial-gradient(circle at 0 100%, #ffffff 0, #ffffff 20px, transparent 20px) 100% 0%/25px 25px no-repeat,
    radial-gradient(circle at 100% 0, #ffffff 0, #ffffff 20px, transparent 20px) 0% 100%/25px 25px no-repeat,
    radial-gradient(circle at 0 0, #ffffff 0, #ffffff 20px, transparent 20px) 100% 100%/25px 25px no-repeat,
    linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 10px) calc(100% - 50px) no-repeat,
    linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 50px) calc(100% - 10px) no-repeat,
    linear-gradient(90deg, ${props => props.bgColor} 0%, #F3F3F3 60%);

    transition: background 0.25s ease-in-out;
  }
`

export const RelName = styled.h1`
  font-size: 20px;
  align-items: center;
  margin: 20px;
  color: #000000;
  // border: 3px solid blue;
  flex-basis: 60%;
`

export const RelDateTimeContainer = styled.div`
  // flex-basis: 25%;
  width: 75px;
  height: 75px;
  border-radius: 25px;
  background-color: ${props => props.bgColor};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 12px 0;
  box-sizing: border-box;
  // border: 3px solid red;
`

export const RelDateTime = styled.p`
  margin: auto;
  color: #FFFFFF;
  font-size: 12px;
`
