import React from "react"
import styled from "styled-components"
import axios from "axios"
const Li = styled.li`
  font-size: 1.2rem;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TodoList = ({ todos, setTodos }) => {
  const markCompleted = (todo) => {
    axios
      .put(
        `/todo/${todo._id}`,
        {},
        { headers: { token: localStorage.getItem("token") } }
      )
      .then((res) => {
        if (res.status === 200) {
          let _todos = todos
          setTodos(_todos.filter((todo) => res.data.todo._id !== todo._id))
        }
      })
  }
  return (
    <ul>
      {todos
        .filter((todo) => !todo.isCompleted)
        .map((todo, index) => (
          <Li key={index}>
            {todo.title}
            <input
              type="button"
              value="DONE"
              onClick={() => markCompleted(todo)}
            />
          </Li>
        ))}
    </ul>
  )
}

export default TodoList
