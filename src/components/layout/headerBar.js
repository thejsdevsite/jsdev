import { Link } from "gatsby";
import React from "react"
import logo from "../../img/logo.svg";
import { useGetSiteDetailsStatic } from "../../hooks/static/getSiteDetailsStatic";
import githubWhiteImage from "../../img/github-logo-white.svg";

const HeaderBar = () => {
  const siteDetails = useGetSiteDetailsStatic();
  return (
    <div className="top-bar">
      <div className="top-bar-container">
        <Link to={`/`} className={"top-bar-logo"} aria-label="JS.dev Home">
          <img alt="JS.dev" title="JS.dev" src={logo} />
        </Link>
        <a href={`https://github.com/${siteDetails.social.github}#-contributing`} target="_blank" rel="noreferrer" className={"top-bar-logo github mr-2"} aria-label="Submit an article on GitHub">
          <img alt="Submit an article on GitHub" title="Submit an article on GitHub" src={githubWhiteImage} className="mr-3" />
          <span>Submit an article</span>
        </a>
      </div>
    </div>
  )
}

export default HeaderBar;
