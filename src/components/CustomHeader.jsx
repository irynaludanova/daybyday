import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"
import Logo from "./Logo"
import "./CustomHeader.css"
import Back from "./Back"
import Logout from "./Logout"
import Toggle from "./Toggler"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
const CustomHeader = ({ theme, themeToggler, user }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` })
  const [checked, setChecked] = useState(false)
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
              onClick={() => setChecked(!checked)}
            />

            <label
              htmlFor="hamburger"
              className="hamburgerLabel"
              role="button"
              aria-labelledby="menu"
            >
              {checked ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </label>

            <nav role="navigation" className="sidebar">
              <ul className="menu">
                <li>
                  <Logout user={user} />
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
            <Logout user={user} />
            <Toggle theme={theme} toggleTheme={themeToggler} />
          </div>
        </header>
      )}
    </>
  )
}

export default CustomHeader
