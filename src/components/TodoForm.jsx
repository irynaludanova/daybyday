import React, { useState, useEffect } from "react"
import { useInputState } from "../hooks/useInputState"
import styled from "styled-components"
import ButtonLight from "./ButtonLight"
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

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState("")

  const onSubmit = (e) => {
    e.preventDefault()
    saveTodo(value)
    reset()
  }

  return (
    <Form onSubmit={onSubmit}>
      <Input placeholder="Напиши..." value={value} onChange={onChange} />

      <ButtonLight type="primary" htmlType="submit">
        Сохранить
      </ButtonLight>
    </Form>
  )
}

export default TodoForm
