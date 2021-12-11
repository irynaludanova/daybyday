import React from "react"
import { useMediaQuery } from "react-responsive"
import Logo from "./Logo"
import "./CustomHeader.css"
import Back from "./Back"
import Authorization from "./Authorization"
import Toggle from "./Toggler"
import { GiHamburgerMenu } from "react-icons/gi"
const CustomHeader = ({ theme, themeToggler, user }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })
  return (
    <>
      {isMobile ? (
        <header className="mobile">
          <Logo />
          <div className="wrapper">
            <input
              id="hamburger"
              type="checkbox"
              className="hamburgerCheckbox"
            />
            <label
              htmlFor="hamburger"
              className="hamburgerLabel"
              role="button"
              aria-labelledby="menu"
            >
              <GiHamburgerMenu />
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
        </header>
      ) : (
        <header className="deskHeader">
          <div className="wrapper">
            <Logo />
            <Back />
          </div>
          <div className="wrapper">
            <Authorization user={user} />
            <Toggle theme={theme} toggleTheme={themeToggler} />
          </div>
        </header>
      )}
    </>
  )
}

export default CustomHeader
