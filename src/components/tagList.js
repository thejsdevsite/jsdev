import React from "react"
import { Link } from "gatsby"

const TagList = ({ tagList }) => {
  return (
    <div className="tag-list">
      {
        tagList.map((tag, index) => (
          <Link
            to={tag.slug}
            key={index}
          >
            <span className={"prefix"}>#</span>{tag.tag}
          </Link>
        ))
      }
    </div>
  )
}

export default TagList;
