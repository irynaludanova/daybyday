import { Row, Col } from "antd"
import React, { useState } from "react"
import Button from "../components/Button"
import { jokesStore } from "../store/jokesStore"
import styled from "styled-components"
import joke from "../assets/images/joke.webp"
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 70vh;
  width: 100%;
`
const Quote = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem;
`

const Jokes = () => {
  const [item, setItem] = useState(jokesStore[1])
  const random = (min, max) => {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNum
  }
  const randomItem = jokesStore[random(0, jokesStore.length - 1)]

  const handleClick = () => {
    setItem(randomItem)
  }
  return (
    <Row>
      <Col>
        <Container>
          <Quote>
            <img
              src={joke}
              alt="Smile"
              style={{ width: "6rem", margin: "3rem" }}
            />
            <div>
              <h2>
                <q>{item.text}</q>
              </h2>
              <p>{item.author}</p>
            </div>
          </Quote>

          <Button onClick={handleClick}>ещё</Button>
        </Container>
      </Col>
    </Row>
  )
}

export default Jokes
