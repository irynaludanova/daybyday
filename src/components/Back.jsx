import React from "react"
import back_arrow from "../assets/images/back_arrow.webp"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

const Img = styled.img`
  width: 5rem;
`
const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`

const Back = () => {
  const navigate = useNavigate()
  return (
    <Button
      onClick={() => {
        navigate(-1)
      }}
    >
      <Img src={back_arrow} alt="Back" />
    </Button>
  )
}

export default Back
