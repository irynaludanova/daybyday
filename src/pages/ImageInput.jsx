import React, { useEffect, useState } from "react"
import FaceDetect from "../components/FaceDetect"
import styled from "styled-components"
import download from "../assets/images/download.webp"
import Button from "../components/Button"
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  margin: 1rem;
  @media (max-width: 768px) {
    margin: 0;
  }
`
const Label = styled.label`
  font-size: 2rem;
  font-weight: 700;
  margin: 2rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`
const Input = styled.input`
  display: none;
`
const Img = styled.img`
  width: 30%;
  margin: 2rem;
  @media (max-width: 768px) {
    width: 70%;
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
          <Img src={download} alt="download" />
          <Button>
            <Label htmlFor="file">
              <Input
                onChange={(e) => setFile(e.target.files[0])}
                id="file"
                type="file"
              />
              Загрузи фото...
            </Label>
          </Button>
        </Container>
      )}
    </div>
  )
}

export default ImageInput
