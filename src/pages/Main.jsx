import React from "react"
import gif from "../assets/images/snowman.gif"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"
import Button from "../components/Button"
import { Row, Col } from "antd"

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
`

const Main = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })
  return (
    <>
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
            {isMobile ? (
              <></>
            ) : (
              <img
                src={gif}
                alt="Snowman"
                style={{ margin: "-2rem 5rem 0 2rem", width: "100%" }}
              />
            )}
          </Col>
        </Container>
      </Row>
    </>
  )
}

export default Main
