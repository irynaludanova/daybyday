import { RiFacebookBoxLine } from "react-icons/ri"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { Row, Col } from "antd"
import styled from "styled-components"
import Button from "../components/Button"
const LoginBtn = styled.div`
  width: 12rem;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  color: white;
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 1rem;
  cursor: pointer;
  font-size: 2rem;
  margin: 1rem;
  box-shadow: 6px 6px 3px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 6px 6px 3px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 6px 3px 0px rgba(0, 0, 0, 0.75);
`
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
  padding: 3rem;
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
    padding: 0;
  }
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
const Input = styled.input`
  width: 15rem;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`

const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self")
  }

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self")
  }

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self")
  }

  return (
    <Row>
      <Container>
        <Col>
          <Title>Выбери способ входа</Title>
          <Wrapper>
            <Left>
              <LoginBtn style={{ backgroundColor: "#df4930" }} onClick={google}>
                <FcGoogle />
                <h3> Google</h3>
              </LoginBtn>
              <LoginBtn
                style={{ backgroundColor: "#507cc0" }}
                onClick={facebook}
              >
                <RiFacebookBoxLine />
                <h3> Facebook</h3>
              </LoginBtn>
              <LoginBtn style={{ backgroundColor: "black" }} onClick={github}>
                <FaGithub />
                <h3>Github</h3>
              </LoginBtn>
            </Left>
            <Center>
              <Line />
              <Or>или</Or>
            </Center>
            <Right>
              <Input type="text" placeholder="Имя пользователя" />
              <Input type="password" placeholder="Пароль" />
              <Button style={{ width: "10rem" }} type="submit">
                Вход
              </Button>
            </Right>
          </Wrapper>
        </Col>
      </Container>
    </Row>
  )
}

export default Login
