import React, { useEffect, useRef } from "react"
import * as faceapi from "face-api.js"
import "./FaceDetect.css"
import Button from "../components/Button"
import { Row, Col } from "antd"

const FaceDetect = ({ image }) => {
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

  return (
    <Row justify="space-between" className="container">
      <Col xs={24} sm={24} md={16} lg={16} xl={16}>
        <div className="left" style={{ width, height }}>
          <img
            ref={imgRef}
            crossOrigin="anonymous"
            src={url}
            alt=""
            style={{ width, height }}
          />
          <canvas
            // onMouseEnter={enter}
            ref={canvasRef}
            width={width}
            height={height}
          />
        </div>
      </Col>
      <Col xs={24} sm={24} md={6} lg={6} xl={6}>
        <div className="right">
          <Button onClick={handleClick}>Detect</Button>
          <Button>Сброс</Button>
          <Button>Маска</Button>
        </div>
      </Col>
    </Row>
  )
}

export default FaceDetect
