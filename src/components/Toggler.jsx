import React from "react"
import styled from "styled-components"
import { BsEmojiSunglasses } from "react-icons/bs"
import { BsFillMoonStarsFill } from "react-icons/bs"
import Button from "./Button"

const ToggleIcon = styled.svg`
  transition: all 0.7s linear;
  width: 3.5rem;
`

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Button onClick={toggleTheme}>
      {theme === "light" ? (
        <ToggleIcon>
          <BsFillMoonStarsFill />
        </ToggleIcon>
      ) : (
        <ToggleIcon>
          <BsEmojiSunglasses />
        </ToggleIcon>
      )}
    </Button>
  )
}

export default Toggle
