import React from "react"
import styled from "styled-components"
import { RiFacebookBoxLine } from "react-icons/ri"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

const LoginBtn = styled.div`
  width: 12rem;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  color: white;
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 1rem;
  cursor: pointer;
  font-size: 2rem;
  margin: 1rem;
  box-shadow: 6px 6px 3px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 6px 6px 3px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 6px 3px 0px rgba(0, 0, 0, 0.75);
`
const SocialLogin = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self")
  }

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self")
  }

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self")
  }
  return (
    <div>
      <LoginBtn style={{ backgroundColor: "#df4930" }} onClick={google}>
        <FcGoogle />
        <h3> Google</h3>
      </LoginBtn>
      <LoginBtn style={{ backgroundColor: "#507cc0" }} onClick={facebook}>
        <RiFacebookBoxLine />
        <h3> Facebook</h3>
      </LoginBtn>
      <LoginBtn style={{ backgroundColor: "black" }} onClick={github}>
        <FaGithub />
        <h3>Github</h3>
      </LoginBtn>
    </div>
  )
}

export default SocialLogin
