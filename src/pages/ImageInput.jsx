import React, { useEffect, useState } from "react"
import FaceDetect from "../components/FaceDetect"
import styled from "styled-components"
import download from "../assets/images/download.webp"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`
const Label = styled.label`
  font-size: 2rem;
  margin: 2rem;
`
const Input = styled.input`
  font-size: 1.5rem;
  content: "Загрузи фото...";
  margin: 2rem;
  cursor: pointer;

  box-shadow: 6px 6px 3px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 6px 6px 3px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 6px 3px 0px rgba(0, 0, 0, 0.75);

  &:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
`

const ImageInput = () => {
  const [file, setFile] = useState()
  const [image, setImage] = useState()

  useEffect(() => {
    const getImage = () => {
      const img = new Image()
      img.src = URL.createObjectURL(file)
      img.onload = () => {
        setImage({
          url: img.src,
          width: img.width,
          height: img.height,
        })
      }
    }

    file && getImage()
  }, [file])

  const resetClick = () => {
    setFile(null)
    setImage(null)
  }

  return (
    <div>
      {image ? (
        <FaceDetect image={image} reset={resetClick} />
      ) : (
        <Container>
          <img src={download} alt="download" />

          <Label htmlFor="file">
            <Input
              onChange={(e) => setFile(e.target.files[0])}
              id="file"
              type="file"
            />
            Загрузи фото...
          </Label>
        </Container>
      )}
    </div>
  )
}

export default ImageInput
