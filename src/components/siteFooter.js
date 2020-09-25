import React from "react";
import useGetSiteLogoSrcStatic from "../hooks/static/getSiteLogoSrcStatic";
import { Link } from "gatsby";
import { useGetSiteDetailsStatic } from "../hooks/static/getSiteDetailsStatic";
import githubImage from "../img/github-logo.svg";
import githubWhiteImage from "../img/github-logo-white.svg";
import twitterImage from "../img/twitter-logo.svg";
import facebookImage from "../img/facebook-logo.svg";

const SiteFooter = () => {
  const siteLogo = useGetSiteLogoSrcStatic();
  const siteDetails = useGetSiteDetailsStatic();

  const icons = [];
  if (siteDetails.social) {
    const { github, twitter, facebook } = siteDetails.social;
    if (github) {
      icons.push({
        src: githubImage,
        href: `https://github.com/${ github }`,
        title: "Check us out on GitHub",
      });
    }
    if (twitter) {
      icons.push({
        src: twitterImage,
        href: `https://twitter.com/${ twitter }`,
        title: "Follow us on Twitter",
      });
    }
    if (facebook) {
      icons.push({
        src: facebookImage,
        href: `https://facebook.com/${ facebook }`,
        title: "Follow us on Facebook",
      });
    }
  }

  const date = new Date();

  return (
    <footer className={ "jsd-site-footer" }>
      <div className={ "jsd-site-footer-container" }>
        <div className={ "jsd-site-footer-info" }>
          <div>
            <Link to={ "/" } aria-label={ siteDetails.title } title={ siteDetails.title }>
              <img src={ siteLogo }/>
            </Link>
          </div>
          <p>{ siteDetails.description }</p>
          <ul className={ "jsd-site-footer-icons" }>
            { icons.map(icon => (
              <li>
                <a href={ icon.href } title={ icon.title } aria-label={ icon.title } target="_blank" rel="noreferrer">
                  <img src={ icon.src } alt={ icon.title }/>
                </a>
              </li>
            )) }
          </ul>
          <p>JS.dev copyright { siteDetails.started } - { date.getFullYear() }</p>
          <p>Built on <a className="jsd-link" href="http://gatsbyjs.com/" target="_blank" rel="noreferrer">GatsbyJS</a>, an open-source static site generator that powers some of the biggest websites.</p>
          <div>
            <a href={`https://github.com/${siteDetails.social.github}#-contributing`} target="_blank" rel="noreferrer" className={ "top-bar-logo github " } aria-label="Submit an article on GitHub">
              <img alt="Submit an article on GitHub" title="Submit an article on GitHub" src={ githubWhiteImage } className="mr-3"/>
              <span>Submit an article</span>
            </a>
          </div>
        </div>
        <nav className="jsd-site-footer-links">
          <div>
            <Link to={ "/" } title={ "Navigate to Home" } className="jsd-link">Home</Link>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default SiteFooter;
