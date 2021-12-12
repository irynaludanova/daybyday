import { Row, Col } from "antd"
import styled from "styled-components"
import PasswordLogin from "../components/PasswordLogin"
import SocialLogin from "../components/SocialLogin"

const Title = styled.h1`
  text-align: center;
`
const Container = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: auto;
    margin: 1rem;
  }
`
const Wrapper = styled.div`
  margin: 1rem;
  background: #85a5ff;
  box-shadow: 6px 6px 3px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 6px 6px 3px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 6px 3px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  border-radius: 1rem;
  @media (max-width: 768px) {
    background: transparent;
    box-shadow: none;
    flex-direction: column;
    margin: 0;

`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`

const Center = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    position: relative;
  }
`
const Line = styled.div`
  width: 0.5px;
  height: 20rem;
  background-color: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: -1;
  @media (max-width: 768px) {
    height: 0.5px;
    width: 15rem;
  }
`
const Or = styled.div`
  border: 2px solid lightgray;
  border-radius: 50%;
  padding: 1rem;
  color: gray;
  background-color: white;
  font-weight: bold;
`

const Login = () => {
  return (
    <Row>
      <Container>
        <Col>
          <Title>Выбери способ входа</Title>
          <Wrapper>
            <Left>
              <SocialLogin />
            </Left>
            <Center>
              <Line />
              <Or>или</Or>
            </Center>
            <Right>
              <PasswordLogin />
            </Right>
          </Wrapper>
        </Col>
      </Container>
    </Row>
  )
}

export default Login
