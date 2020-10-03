import React from "react";
import useGetSiteLogoSrcStatic from "../hooks/static/getSiteLogoSrcStatic";
import { Link } from "gatsby";
import { useGetSiteDetailsStatic } from "../hooks/static/getSiteDetailsStatic";
import githubImage from "../img/github-logo.svg";
import githubWhiteImage from "../img/github-logo-white.svg";
import twitterImage from "../img/twitter-logo.svg";
import facebookImage from "../img/facebook-logo.svg";
import instagramImage from "../img/instagram-logo.svg";
import linkedInImage from "../img/linkedin-logo.svg";
import discordImage from "../img/discord-logo.svg";

const SiteFooter = () => {
  const siteLogo = useGetSiteLogoSrcStatic();
  const siteDetails = useGetSiteDetailsStatic();

  const icons = [];
  if (siteDetails.social) {
    const { github, twitter, facebook, instagram, linkedIn, discord } = siteDetails.social;
    if (github) {
      icons.push({
        id: "github",
        src: githubImage,
        href: `https://github.com/${github}`,
        title: "Check us out on GitHub",
      });
    }
    if (twitter) {
      icons.push({
        id: "twitter",
        src: twitterImage,
        href: `https://twitter.com/${twitter}`,
        title: "Follow us on Twitter",
      });
    }
    if (facebook) {
      icons.push({
        id: "facebook",
        src: facebookImage,
        href: `https://facebook.com/${facebook}`,
        title: "Follow us on Facebook",
      });
    }
    if (instagram) {
      icons.push({
        id: "instagram",
        src: instagramImage,
        href: `https://instagram.com/${instagram}`,
        title: "Follow us on Instagram",
      });
    }
    if (linkedIn) {
      icons.push({
        id: "linkedIn",
        src: linkedInImage,
        href: `https://www.linkedin.com/${linkedIn}`,
        title: "Follow us on LinkedIn",
      });
    }
    if (discord) {
      icons.push({
        id: "discord",
        src: discordImage,
        href: `https://www.discord.com/channels/${discord}`,
        title: "Join our Discord community",
      });
    }
  }

  const date = new Date();

  return (
    <footer className={"jsd-site-footer"}>
      <div className={"jsd-site-footer-container"}>
        <div className={"jsd-site-footer-container-inner"}>
          <div className={"jsd-site-footer-info"}>
            <div>
              <Link to={"/"} aria-label={siteDetails.title} title={siteDetails.title}>
                <img src={siteLogo} alt={siteDetails.title} title={siteDetails.title} />
              </Link>
            </div>
            <p>{siteDetails.description}</p>
            <ul className={"jsd-site-footer-icons"}>
              {icons.map(icon => (
                <li key={`footer-social-icon-${icon.id}`}>
                  <a href={icon.href} title={icon.title} aria-label={icon.title} target="_blank" rel="noreferrer">
                    <img src={icon.src} alt={icon.title} />
                  </a>
                </li>
              ))}
            </ul>
            <p>JS.dev copyright {siteDetails.started} - {date.getFullYear()}</p>
            <p>Built on <a className="jsd-link" href="http://gatsbyjs.com/" target="_blank" rel="noreferrer">GatsbyJS</a>, an open-source static site generator that powers some of the biggest websites.</p>
            <div>
              <a href={`https://github.com/${siteDetails.social.github}#-contributing`} target="_blank" rel="noreferrer" className={"top-bar-logo github "} aria-label="Submit an article on GitHub">
                <img alt="Submit an article on GitHub" title="Submit an article on GitHub" src={githubWhiteImage} className="mr-3" />
                <span>Submit an article</span>
              </a>
            </div>
          </div>
          <nav className="jsd-site-footer-links">
            <div>
              <Link to={"/"} title={"Navigate to Home"} className="jsd-link">Home</Link>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
