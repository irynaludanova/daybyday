import React, { useState, useEffect } from "react"
import { useInputState } from "../hooks/useInputState"
import axios from "axios"
import styled from "styled-components"
import ButtonLight from "./ButtonLight"
import { Todo } from "./TodoList"

const Form = styled.form`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Input = styled.input`
  font-size: 1.2rem;
  padding: 0.5rem;
  margin: 1rem;
`

const TodoForm = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("")
  const onSubmit = () => {
    if (title.length > 0) {
      axios
        .post(
          "/todo",
          { title: title },
          { headers: { token: localStorage.getItem("token") } }
        )
        .then((res) => {
          if (res.status === 200) {
            let todo = res.data.todo
            setTodos([...todos, todo])
            setTitle("")
          }
        })
    }
  }

  return (
    <Form onSubmit={onSubmit}>
      <Input
        placeholder="Напиши..."
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <ButtonLight type="primary" htmlType="submit" onClick={() => onSubmit()}>
        Сохранить
      </ButtonLight>
    </Form>
  )
}

export default TodoForm
