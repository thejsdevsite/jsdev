import React from "react";
const { Link } = require("gatsby")

const HeaderTags = ({ tags }) => {
  return (
    <div className="mb-4 jsd-spec-tags">
      {tags.map(tag => (
        <Link key={tag.id} to={tag.slug} className="jsd-tag mr-1" style={{ color: tag.foreground, background: tag.background }}>
          <span className="tag-prefix">#</span>{tag.tag}
        </Link>
      ))}
    </div>
  )
}

export default HeaderTags;