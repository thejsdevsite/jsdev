import React from "react";
import { Link } from "gatsby";
import Avatar from "../avatar";

const HeaderMeta = ({ post, authors }) => {
  return (
    <>
      <div className="jsd-article-subheader mb-2">
        {authors.map(author => (
          <div key={`article-author-${author.id}`}>
            <Link to={author.slug} className="flex items-centre mb-2 s:mb-0 fw-med jsd-link l:fs-s fs-xs">
              <Avatar name={author.name} src={author.profilePicture.src} className="mr-4" />
              <span className="pt-1">{author.name}</span>
            </Link>
          </div>
        ))}
      </div>
      <div className="fs-base">
        <span className="mr-2 l:fs-base fs-xs">{post.frontmatter.publishedDate}</span>
        { post.frontmatter.updatedDate ? (
          <span style={{fontStyle: "italic"}} className="mr-2 l:fs-base fs-xs fw-med">(updated {post.frontmatter.updatedDate})</span>
        ) : null }
        <span className="mr-2 fw-bold">→</span>
        <span className="l:fs-s fs-xs">{post.timeToRead} min read</span>
      </div>
    </>
  )
}

export default HeaderMeta;
