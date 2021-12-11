import React from "react"
import gif from "../assets/images/snowman.gif"
import styled from "styled-components"
import Button from "../components/Button"
import { Row, Col } from "antd"

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 4rem;
  @media (max-width: 768px) {
    padding-top: 1rem;
    flex-direction: column;
  }
`
const Img = styled.img`
  margin: -2rem 5rem 0 2rem;
  width: 100%;
  @media (max-width: 768px) {
    padding-top: 2rem;
    width: 10rem;
  }
`

const Main = () => {
  return (
    <Row justify="center">
      <Container>
        <Col span={12}>
          <h1>Day By Day</h1>
          <h3>С нами не соскучишься &#128521;</h3>
          <h3>
            Выбирай, что тебя больше интересует.
            <br /> Шутки, викторина, мотиваторы, интересные факты <br />
            и многое-многое другое... <br />-
            <br /> каждый день узнавай что-то новое.
          </h3>
          <Button
            style={{
              padding: "0.2rem 2rem 1rem 2rem",
              fontWeigth: "700",
              marginTop: "2rem",
            }}
          >
            <a href="/menu">меню</a>
          </Button>
        </Col>
        <Col span={12}>
          <Img src={gif} alt="Snowman" />
        </Col>
      </Container>
    </Row>
  )
}

export default Main
