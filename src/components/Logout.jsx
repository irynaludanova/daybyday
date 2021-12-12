import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import ButtonLight from "../components/ButtonLight"
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
  align-items: center;
  font-size: 1.2rem;
  text-decoration: none;
  list-style: none;
  margin: 1rem;
`
const Logout = ({ user }) => {
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
            <ButtonLight>
              <Link to="/userpage">Мой день</Link>
            </ButtonLight>
            <ButtonLight onClick={logout}>Выход</ButtonLight>
          </Item>
        </Auth>
      ) : (
        <ButtonLight>
          <Link to="login">Вход</Link>
        </ButtonLight>
      )}
    </>
  )
}

export default Logout
