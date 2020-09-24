import { Link } from "gatsby";
import React from "react"
import useGetGithubLogoStatic from "../../hooks/static/getGithubLogoStatic";
import logo from "../../img/logo.svg";

const HeaderBar = ({ title }) => {
  const github = useGetGithubLogoStatic();
  return (
    <div className="top-bar">
      <div className="top-bar-container">
        <Link to={`/`} className={"top-bar-logo"} aria-label="JS.dev Home">
          <img alt="JS.dev" title="JS.dev" src={logo} />
        </Link>
        <a href="https://github.com/thejsdevsite/jsdev" target="_blank" rel="noreferrer" className={"top-bar-logo github mr-2"} aria-label="Submit an article on GitHub">
          <img alt="Submit an article on GitHub" title="Submit an article on GitHub" src={github} className="mr-3" />
          <span>Submit an article</span>
        </a>
      </div>
    </div>
  )
}

export default HeaderBar;
