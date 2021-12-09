import React from "react"
import { TiArrowLeftThick } from "react-icons/ti"
import { Link } from "react-router-dom"
import styled from "styled-components"
const Container = styled.div`
  display: flex;

  Container h2 {
    color: yellow;
  }
`

const Back = () => {
  return (
    <Container>
      <TiArrowLeftThick />
      <h2>
        <Link to="/menu">меню</Link>
      </h2>
    </Container>
  )
}

export default Back
