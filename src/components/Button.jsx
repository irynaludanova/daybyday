import React from "react"
import styled from "styled-components"

const Btn = styled.button`
  border-radius: 2rem;
  font-weigth: bold;
  cursor: pointer;
  font-size: 2rem;
  text-transform: uppercase;
  overflow: hidden;
  padding: 0.5rem 1rem 0 0.8rem;
  width: fit-content;
  height: 3rem;
  outline: none;
  text-align: center;
  box-shadow: 6px 6px 3px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 6px 6px 3px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 6px 3px 0px rgba(0, 0, 0, 0.75);
  background: rgb(249, 241, 69);
  background: linear-gradient(
    180deg,
    rgba(249, 241, 69, 1) 0%,
    rgba(250, 66, 4, 1) 100%
  );

  &:hover {
    background: rgb(123, 219, 252);
    background: linear-gradient(
      180deg,
      rgba(123, 219, 252, 1) 0%,
      rgba(2, 59, 180, 1) 100%
    );
  }
`
const Button = ({ children, ...props }) => {
  return <Btn {...props}>{children}</Btn>
}

export default Button
