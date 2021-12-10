import React, { useEffect, useRef } from "react"
import * as faceapi from "face-api.js"
import Button from "../components/Button"
import { Row, Col } from "antd"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 10rem;
`

const FaceDetect = ({ image, reset }) => {
  const { url, width, height } = image
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

  const handleMaskClick = () => {
    console.log("Mask)))")
  }

  return (
    <Row justify="space-between" className="container">
      <Container>
        <Col xs={24} sm={24} md={16} lg={16} xl={16}>
          <Left style={{ width, height }}>
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
            <Button onClick={handleMaskClick}>Маска</Button>
          </Right>
        </Col>
      </Container>
    </Row>
  )
}

export default FaceDetect
