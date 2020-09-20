import React from "react"

import { rhythm } from "../utils/typography"
import Header from "./layout/header"
import HeaderBar from "./layout/headerBar"

const Layout = ({ location, title, children }) => {
  
  return (
    <div className="site-container">
      <header>
        <HeaderBar/>
        <Header location={location} title={title}/>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout
