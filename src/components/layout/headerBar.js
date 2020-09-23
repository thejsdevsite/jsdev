import { Link } from "gatsby";
import React from "react"
import logo from "../../img/logo.svg";

const HeaderBar = ({ title }) => {
  return (
    <div className="top-bar">
      <div className="top-bar-container">
        <Link to={`/`} className={"top-bar-logo"} aria-label="JS.dev Home">
          <img alt="JS.dev" title="JS.dev" src={logo} />
        </Link>
      </div>
    </div>
  )
}

export default HeaderBar;
