import React, { useState, useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useMessage } from "../hooks/useMessage"
import Button from "./Button"
import styled from "styled-components"
import { useHttp } from "../hooks/useHttp"
import { useAuth } from "../hooks/useAuth"
const Input = styled.input`
  width: 15rem;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`

const PasswordLogin = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { loading, request } = useHttp()
  const [token, userId] = useAuth()
  const resetForm = () => {
    setEmail("")
    setPassword("")
  }

  const changeEmailHandler = (e) => {
    setEmail(e.target.value)
  }
  const changePasswordHandler = (e) => {
    setPassword(e.target.value)
  }

  const registerHandler = () => {
    try {
      const data = request("/api/auth/signup", "POST", {
        email,
        password,
      })
      message(data.message)
      console.log(message)
      resetForm()
    } catch (e) {}
  }
  const loginHandler = () => {
    try {
      const data = request("/api/auth/login", "POST", { email, password })

      auth.login(token, userId)
      console.log(data)
      resetForm()
    } catch (e) {}
  }

  return (
    <div>
      <Input
        placeholder="Email"
        id="email"
        type="text"
        name="email"
        value={email}
        onChange={changeEmailHandler}
      />
      <Input
        placeholder="Введи пароль"
        id="password"
        type="password"
        name="password"
        value={password}
        onChange={changePasswordHandler}
      />

      <Button
        onClick={loginHandler}
        disabled={loading}
        style={{ width: "10rem" }}
        type="submit"
      >
        Вход
      </Button>
      <p>Нет аккаунта?</p>
      <Button
        onClick={registerHandler}
        disabled={loading}
        style={{ width: "10rem" }}
        type="submit"
      >
        Новый
      </Button>
    </div>
  )
}

export default PasswordLogin
