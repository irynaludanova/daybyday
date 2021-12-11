import React from "react"
import { useMediaQuery } from "react-responsive"
import logo from "../assets/images/logo.webp"
import logo1 from "../assets/images/logo1.webp"

const Logo = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })

  return (
    <>
      {isMobile ? (
        <img src={logo1} alt="DayByDay" style={{ margin: "0.5rem" }} />
      ) : (
        <img src={logo} alt="DayByDay" style={{ margin: "1rem" }} />
      )}
    </>
  )
}

export default Logo
