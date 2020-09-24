import React from "react";
import { Link } from "gatsby";
import Avatar from "../avatar";

const HeaderMeta = ({ post, authors }) => {
  return (
    <>
      <div className="jsd-article-subheader mb-2">
        {authors.map(author => (
          <div key={`article-author-${author.id}`}>
            <Link to={author.slug} className="flex items-centre mb-2 s:mb-0 fw-med jsd-link">
              <Avatar name={author.name} src={author.profilePicture.src} className="mr-4" />
              {author.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="fs-base">
        <span className="mr-2">{post.frontmatter.publishedDate}</span>
        <span className="mr-2 fw-bold">🠂</span>
        <span>{post.timeToRead} min read</span>
      </div>
    </>
  )
}

export default HeaderMeta;