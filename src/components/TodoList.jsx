import React from "react"
import { FiDelete } from "react-icons/fi"
import styled from "styled-components"

const Li = styled.li`
  font-size: 1.2rem;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Delete = styled.div`
  margin: 0.5rem;
`
const TodoList = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <Li key={index}>
          {todo}
          <Delete
            onClick={() => {
              deleteTodo(index)
            }}
          >
            <FiDelete />
          </Delete>
        </Li>
      ))}
    </ul>
  )
}

export default TodoList
