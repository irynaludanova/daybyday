import React, { useState, useEffect } from "react"
import { useLocation } from "react-router"
import TodoForm from "../components/TodoForm"
import TodoList from "../components/TodoList"
import { useTodoState } from "../hooks/useTodoState"
import styled from "styled-components"

const Todo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  height: fit-content;
  min-height: 20vh;
  margin-top: 1rem;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const UserPage = ({ saveTodo }) => {
  const location = useLocation()
  const path = location.pathname.split("/")[2]

  const { todos, addTodo, deleteTodo } = useTodoState([])

  return (
    <Todo>
      <h1>Это важно сегодня:</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <TodoForm
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim()

          if (trimmedText.length > 0) {
            addTodo(trimmedText)
          }
        }}
      />
    </Todo>
  )
}
export default UserPage
