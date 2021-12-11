import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Auth = styled.div`
  display: flex;
`
const Avatar = styled.img`
  width: 5rem;
  border-radius: 50%;
  margin: 1rem;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  text-decoration: none;
  list-style: none;
  margin: 1rem;
`
const Button = styled.button`
  font-size: 1.2rem;
  margin: 1rem;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  box-shadow: 6px 6px 3px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 6px 6px 3px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 6px 3px 0px rgba(0, 0, 0, 0.75);
`
const Authorization = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self")
  }
  return (
    <>
      {user ? (
        <Auth>
          <Item>
            <Avatar src={user.photos[0].value} alt="avatar" />
            {user.displayName}
            <Button onClick={logout}>Выход</Button>
          </Item>
        </Auth>
      ) : (
        <Button>
          <Link to="login">Вход</Link>
        </Button>
      )}
    </>
  )
}

export default Authorization
