import React from "react";
import Avatar from "../avatar";
import { Link } from "gatsby";
import githubImage from "../../img/github-logo.svg";
import twitterImage from "../../img/twitter-logo.svg";
import facebookImage from "../../img/facebook-logo.svg";

export const RenderAuthorDetails = ({ post, authors }) => {
  return (
    <>
      { authors.map((author, i) => <AuthorsCard key={ `author-${ author.id }-${i}` } post={ post } author={ author }/>) }
    </>
  );
};

const AuthorsCard = ({ post, author }) => {
  const icons = [];
  if (author.social) {
    const { github, twitter, facebook } = author.social;
    if (github) {
      icons.push({
        id: "github",
        src: githubImage,
        href: `https://github.com/${github}`,
        title: `Follow ${author.name} on GitHub`,
      });
    }
    if (facebook) {
      icons.push({
        id: "facebook",
        src: facebookImage,
        href: `https://facebook.com/${facebook}`,
        title: `Follow ${author.name} on GitHub`,
      });
    }
    if (twitter) {
      icons.push({
        id: "twitter",
        src: twitterImage,
        href: `https://twitter.com/${twitter}`,
        title: `Follow ${author.name} on Twitter`,
      });
    }
  }

  return (
    <section className="mt-6">
      <div className="jsd-card jsd-card-article-authors">
        <div className="fs-xs mb-2 ">Posted on {post.frontmatter.updatedDate || post.frontmatter.publishedDate }</div>
        <div className="jsd-card-article-authors-details">
          <Link to={author.slug} className="shrink-0 mr-4" title={author.name}>
            <Avatar name={author.name} src={author.profilePicture.src} className="jsd-avatar-2xl"/>
          </Link>
          <div>
            <h3 className="fs-l s:fs-xl m:fs-2xl l:fs-3xl fw-medium m-0">
              <Link className="jsd-link" to={author.slug} title={author.name}>{author.name}</Link>
            </h3>
            <div className="mb-2">
              <Link className="jsd-link fs-s l:fs-base fw-medium" to={author.slug} title={author.name}>@{author.id}</Link>
            </div>
            <div className="mb-2 fs-base">
              {author.bio}
            </div>
            <ul>
              { icons.map((icon, i) => (
                <li className={`mr-4 ${icon.id}`} key={`icon-${i}`}>
                  <a href={icon.href} target="_blank" rel="noreferrer" title={icon.title}>
                    <img src={icon.src} alt={icon.title} loading={"lazy"} className="jsd-article-cover-image" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
