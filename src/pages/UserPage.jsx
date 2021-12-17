import React, { useState, useEffect } from "react"
import { useLocation } from "react-router"
import TodoForm from "../components/TodoForm"
import TodoList from "../components/TodoList"
import styled from "styled-components"
import axios from "axios"

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

const UserPage = () => {
  const [todoList, setTodoList] = useState([])
  useEffect(() => {
    axios
      .get("/todos", { headers: { token: localStorage.getItem("token") } })
      .then((res) => {
        if (res.status === 200) {
          setTodoList(res.data.todos)
        }
      })
  }, [])

  return (
    <Todo>
      <h1>Это важно сегодня:</h1>
      <TodoList todos={todoList} setTodos={setTodoList} />
      <TodoForm todos={todoList} setTodos={setTodoList} />
    </Todo>
  )
}
export default UserPage
