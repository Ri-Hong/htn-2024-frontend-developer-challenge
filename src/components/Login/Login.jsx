import React, { useRef, useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider'

import { 
  LoginCard,
  HeaderText,
  Input,
  LoginButton,
  ErrorBanner,
  ErrorMessage
 } from './Login.elements'


const Login = () => {
  const navigate = useNavigate();

  const { setLoggedIn } = useContext(AuthContext);
  setLoggedIn(false);

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user === "htn" && pwd === "2024") {
      setLoggedIn(true);
      setUser('');
      setPwd('');
      navigate('/events');
    } else {
      setErrMsg('Login Failed');
    }
  }

  return (
    <div>
      <LoginCard onSubmit={handleSubmit}>
        <HeaderText>👋 Welcome Back!</HeaderText>

        <ErrorBanner err={errMsg}>
          <ErrorMessage ref={errRef} err={errMsg}>{errMsg}</ErrorMessage>
        </ErrorBanner>

        <Input
          placeholder="Username"
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required />
        <Input
          placeholder="Password"
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required />
        <LoginButton>Sign In</LoginButton>
      </LoginCard>


    </div>
  )
}

export default Login
