import React from "react";
import useGetAuthorDetailsStatic from "../../hooks/static/getAuthorDetailsStatic";
import RenderSidebarAuthorDetails from "../sidebar/renderSidebarAuthorDetails";

const SidebarAuthor = ({ post }) => {
  const authors = useGetAuthorDetailsStatic(post.frontmatter.authors);
  const authorList = authors
    .all()
    .map(node => <RenderSidebarAuthorDetails key={`sidebar-author-${node.id}`} author={node} />)

  return (
    <aside className="side-bar sidebar-additional grid gap-4" aria-label="Secondary sidebar">
      {authorList}
    </aside>
  )
}

export default SidebarAuthor;