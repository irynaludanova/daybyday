import React from "react"
import { Link } from "react-router-dom"
import { pageRoutes } from "../store/routes"
import { Row, Col } from "antd"
import Button from "./Button"
import "./Menu.css"

const Menu = () => {
  return (
    <Row className="folder">
      {pageRoutes.map(({ index, component, path, image, desc, label }) => {
        return (
          <Col xs={24} sm={24} md={8} lg={6} xl={6} key={index}>
            <div className="maincontainer" key={index}>
              <div className="back" key={index}>
                <h2 key={index}>{desc}</h2>
                <Button className="btn" key={index}>
                  <Link
                    key={index}
                    className="link"
                    style={{ fontSize: "1.5rem", padding: "1rem" }}
                    to={path}
                  >
                    {label}
                  </Link>
                </Button>
              </div>
              <div className="front" key={index}>
                <div className="image" key={index}>
                  {image}
                  <h2 key={index}>{component}</h2>
                </div>
              </div>
            </div>
          </Col>
        )
      })}
    </Row>
  )
}

export default Menu
