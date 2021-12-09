import { Row, Col } from "antd"
import React, { useState } from "react"
import Button from "../components/Button"
import { factsStore } from "../store/factsStore"
import styled from "styled-components"
import fact from "../assets/images/fact.webp"
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 70vh;
  width: 100%;
`
const Quote = styled.div`
  margin: 3rem;
`

const Facts = () => {
  const [item, setItem] = useState(factsStore[1])
  const random = (min, max) => {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNum
  }
  const randomItem = factsStore[random(1, 19)]

  const handleClick = () => {
    setItem(randomItem)
  }

  return (
    <Row>
      <Col>
        <Container>
          <Quote>
            <img
              src={fact}
              alt="Smile"
              style={{ width: "6rem", margin: "3rem" }}
            />
            <h2>{item.text}</h2>
          </Quote>

          <Button onClick={handleClick}>ещё</Button>
        </Container>
      </Col>
    </Row>
  )
}

export default Facts
