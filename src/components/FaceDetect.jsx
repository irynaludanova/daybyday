import React, { useEffect, useRef } from "react"
import * as faceapi from "face-api.js"
import Button from "../components/Button"
import { Row, Col } from "antd"
import styled from "styled-components"

const Container = styled.div`
  margin: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
   flex-direction:column;

`
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: {width};
  heigth: {heigth};
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 10rem;
`

const FaceDetect = ({ image, reset }) => {
  let { url, width, height } = image
  const scale = window.innerWidth / width
  const nwidth = +Math.round(width * scale * 0.7)
  width = nwidth
  const nheight = +Math.round(height * scale * 0.7)
  height = nheight
  console.log(
    typeof nheight == typeof height,
    "nheight:",
    nheight,
    "heigth:",
    height,
    "type height:",
    typeof height,
    "type nheight:",
    typeof nheight
  )
  const imgRef = useRef()
  const canvasRef = useRef()

  const handleImage = async () => {
    const detections = await faceapi
      .detectAllFaces(imgRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withAgeAndGender()
      .withFaceExpressions()
      .withFaceDescriptors()

    canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(imgRef.current)
    faceapi.matchDimensions(canvasRef.current, {
      width,
      height,
    })
    const resized = faceapi.resizeResults(detections, {
      width,
      height,
    })
    faceapi.draw.drawDetections(canvasRef.current, resized)
    faceapi.draw.drawFaceExpressions(canvasRef.current, resized)

    resized.map((item, index) => {
      const box = resized[index].detection.box
      if (item.gender === "male") {
        const drawOptions = {
          label: `🧔( ${
            item.genderProbability.toFixed(2) * 100
          }%) \n ${item.age.toFixed(0)} лет`,

          lineWidth: 2,
        }

        const drawBox = new faceapi.draw.DrawBox(box, drawOptions)

        drawBox.draw(canvasRef.current)
      } else if (item.gender === "female") {
        const drawOptions = {
          label: `👩(${
            item.genderProbability.toFixed(2) * 100
          }%) \n ${item.age.toFixed(0)} лет`,
        }

        const drawBox = new faceapi.draw.DrawBox(box, drawOptions)

        drawBox.draw(canvasRef.current)
      }
    })
  }

  useEffect(() => {
    const loadModels = () => {
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
        faceapi.nets.faceExpressionNet.loadFromUri("/models"),
        faceapi.nets.ageGenderNet.loadFromUri("/models"),
      ])
        .then(handleImage)
        .catch((e) => console.log(e))
    }

    imgRef.current && loadModels()
  }, [])

  const handleClick = () => {
    handleImage()
    console.log("Click")
  }

  return (
    <Row justify="space-between" className="container">
      <Container>
        <Col xs={24} sm={24} md={16} lg={16} xl={16}>
          <Left>
            <img
              ref={imgRef}
              crossOrigin="anonymous"
              src={url}
              alt=""
              style={{ width, height }}
            />
            <canvas
              ref={canvasRef}
              width={width}
              height={height}
              style={{ position: "absolute" }}
            />
          </Left>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <Right>
            <Button onClick={handleClick}>Detect</Button>
            <Button onClick={reset}> Сброс</Button>
          </Right>
        </Col>
      </Container>
    </Row>
  )
}

export default FaceDetect
