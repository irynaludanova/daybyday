import React from "react"
import { useLocation } from "react-router"
const UserPage = () => {
  const location = useLocation()
  const path = location.pathname.split("/")[2]

  console.log(location)
  return (
    <div>
      <h1>UserPage</h1>
    </div>
  )
}

export default UserPage
