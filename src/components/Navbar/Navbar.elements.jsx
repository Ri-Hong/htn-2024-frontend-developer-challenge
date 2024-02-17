import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 2px solid #FFFFFF;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  text-align: left;
  padding: 0 80px;
  font-size: 30px;
  // border: 3px solid blue;
  @media (max-width: 768px) {
    padding: 20px;
  }
`

export const ButtonContainer = styled.div`
  // border: 3px solid red;
  margin-right: 80px;
  display: flex;
  @media (max-width: 768px) {
    margin-right: 20px;
  }
`

export const EventsButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 17px 10px 10px 10px;
  // border: 3px solid blue;
`

export const LoginButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 17px 10px 10px 10px;
  // border: 3px solid blue;
`