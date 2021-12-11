import React from "react"
import styled from "styled-components"
import Authorization from "./Authorization"
import "./ToggleMenu.css"
import Toggle from "./Toggler"
const ToggleMenu = ({ user, themeToggler, theme }) => {
  return (
    <div className="wrapper">
      <input id="hamburger" type="checkbox" className="hamburger-checkbox" />
      <label
        for="hamburger"
        className="hamburger-label"
        role="button"
        aria-labelledby="menu"
      >
        &#xf0c9;
      </label>

      <nav role="navigation" className="sidebar">
        <ul className="menu">
          <li>
            <Authorization user={user} />
          </li>
          <li>
            <Toggle theme={theme} toggleTheme={themeToggler} />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default ToggleMenu
