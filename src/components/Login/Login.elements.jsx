import styled from 'styled-components';

export const LoginCard = styled.form`
  border: 3px solid wh;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 50px auto;
  padding: 60px;
  box-sizing: border-box;
  border-radius: 25px;
  background-color: #F3F3F3;

  @media (max-width: 768px) {
    padding: 20px;
    margin: 20px 20px;
  }

  // :before{
  //   content: "";
  //   position: absolute;
  //   top: -3px;
  //   left: -3px;
  //   right: -3px;
  //   bottom: -3px;
  //   z-index: -1;
  //   background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(243, 243, 243, 1) 32%, rgba(243, 243, 243, 1));
  //   border-radius: 27px;
  // }

  // :after {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   z-index: -2;
  //   border-radius: 20px;
  //   box-shadow: 0px 8px 0px 3px #B6B9E3, 0px 40px 40px #8E8CD2;
  // }
`

export const HeaderText = styled.h1`
  font-size: 36px;
  margin: 0 auto 0 auto;
`

export const Input = styled.input`
  height: 60px;
  background-color: #F3F3F3;
  border-radius: 10px;
  border: 1px solid #D5D6E2;
  margin: 20px 0;
  font-size: 14px;
  padding: 0 20px;
`

export const LoginButton = styled.button`
  cursor: pointer;
  height: 60px;
  border-radius: 10px;
  border: none;
  color: #FFFFFF;
  font-size: 20px;
  background-image: linear-gradient(90deg, rgba(147,132,223,1) 0%, rgba(126,153,223,1) 60%, rgba(126,188,194,1) 100%);
  margin: 20px 0;
  background-size: 200% 100%;
  transition: all .1s ease-in-out;

  &:hover {
    background-position: 100% 0;
  }
`

export const ErrorBanner = styled.div`
  height: 30px;
  margin: 10px 0 0 0;
  background-color: ${({ err }) => (err === '' ? '#F3F3F3' : '#DF7E7E')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`

export const ErrorMessage = styled.p`
  color: ${({ err }) => (err === '' ? 'black' : '#F3F3F3')};;
  margin: 0;
`