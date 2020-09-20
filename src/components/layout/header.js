import React from "react"
import { Link } from "gatsby"

const Header = ({ location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  if (location.pathname === rootPath) {
    return (
      <h1><Link to={`/`}>{title}</Link></h1>
    )
  } else {
    return (
      <h3><Link to={`/`}>{title}</Link></h3>
    )
  }
}

export default Header;