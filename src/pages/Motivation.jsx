import { Row, Col } from "antd"
import React, { useState } from "react"
import Button from "../components/Button"
import { motivateStore } from "../store/motivateStore"
import styled from "styled-components"
import motivate from "../assets/images/motivate.webp"
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
  align-items: center;
  margin: 3rem;
`

const Motivation = () => {
  const [item, setItem] = useState(motivateStore[1])
  const random = (min, max) => {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNum
  }
  const randomItem = motivateStore[random(0, motivateStore.length - 1)]

  const handleClick = () => {
    setItem(randomItem)
  }

  return (
    <Row>
      <Col>
        <Container>
          <Quote>
            <img
              src={motivate}
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

export default Motivation
