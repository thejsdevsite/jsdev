import { Link } from "gatsby";
import React from "react";
import { className } from "../../utils/className";

const PostRollFooter = ({ nextPost, prevPost }) => {
  return (
    <nav className={className({"jsd-layout-postroll-rooter": true, "item-prev": !!prevPost, "item-next": !!nextPost})}>
      <ul>
        {prevPost && (
          <li className="jsd-postroll-footer-link jsd-postroll-previous jsd-card">
            <Link className="jsd-link" to={prevPost.fields.slug} rel="prev">
              <span className="mr-2">←</span>
              <span className="jsd-postroll-footer-details">
                <span>{prevPost.frontmatter.title}</span>
                <span>{prevPost.frontmatter.publishedDate}</span>
              </span>
            </Link>
          </li>
        )}
        {nextPost && (
          <li className="jsd-postroll-footer-link jsd-postroll-next jsd-card">
            <Link className="jsd-link" to={nextPost.fields.slug} rel="next">
              <span className="mr-2 jsd-postroll-footer-details">
                <span>{nextPost.frontmatter.title}</span>
                <span>{nextPost.frontmatter.publishedDate}</span>
              </span>
              <span>→</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default PostRollFooter;