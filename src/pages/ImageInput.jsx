import React, { useEffect, useState } from "react"
import FaceDetect from "../components/FaceDetect"
import "./ImageInput.css"

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
  return (
    <div>
      {image ? (
        <FaceDetect image={image} />
      ) : (
        <div className="newPostCard">
          <div className="addPost">
            <div className="postForm">
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
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageInput
