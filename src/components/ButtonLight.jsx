import React from "react"
import styled from "styled-components"
const Btn = styled.button`
  font-size: 1.2rem;
  margin: 1rem;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  box-shadow: 6px 6px 3px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 6px 6px 3px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 6px 3px 0px rgba(0, 0, 0, 0.75);
`

const ButtonLight = ({ children, ...props }) => {
  return <Btn {...props}>{children}</Btn>
}

export default ButtonLight
