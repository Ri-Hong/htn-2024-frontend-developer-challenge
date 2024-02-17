import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const ParentCard = styled.div`
  // border: 3px solid red;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: fit-content;
`

export const Card = styled.div`
  width: 320px;
  height: 200px;
  text-align: left;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 25px;
  background-color: #F3F3F3;
  position: relative;
  margin: 3px 0;

  :before{
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    z-index: -1;
    background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(243, 243, 243, 1) 32%, rgba(243, 243, 243, 1));
    border-radius: 27px;
  }

  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    border-radius: 20px;
    box-shadow: 0px 8px 0px 3px #B6B9E3, 0px 40px 40px #8E8CD2;
  }

  &:hover {
    margin-top: 0;
    margin-bottom: 6px;
    transition: background 0.25s ease-in-out;
  }

  &:hover:before {
    background: linear-gradient(to right, ${props => props.bgColor}, rgba(243, 243, 243, 1) 32%, rgba(243, 243, 243, 1));
    transition: background 0.25s ease-in-out;
  }

`

export const Name = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #000000;
`

export const Time = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #000000;
  margin: 0;
`

export const DateField = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #717171;
  margin: 0;
`

export const Type = styled.p`
  font-size: 14px;
  color: #717171;
  margin: 0;
`

export const ColorBar = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -3px;
  width: 30px;
  height: 200px;
  // border: 1px solid green;
  display: flex;
  align-items: center;
  overflow: hidden;
`

export const ColorBarChild = styled.div`
  background-color: ${props => props.barColor};
  width: 30px;
  height: 125px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  position: relative;
`