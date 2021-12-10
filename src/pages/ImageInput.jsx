import React, { useEffect, useState } from "react"
import FaceDetect from "../components/FaceDetect"
import styled from "styled-components"
import download from "../assets/images/download.webp"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
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
          <label htmlFor="file">
            Загрузи фото...
            <img
              className="addImg"
              src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84451/preview.svg"
              alt=""
            />
          </label>
          <input
            onChange={(e) => setFile(e.target.files[0])}
            id="file"
            style={{ display: "none" }}
            type="file"
          />
        </Container>
      )}
    </div>
  )
}

export default ImageInput
