import React from "react";
import useGetPostTagDetailsStatic from "../../hooks/static/getPostTagDetailsStatic";
import useGetFormattedTags from "../../hooks/static/getFormattedTags";
import SidebarTagDetails from "../sidebar/sidebarTagDetails"
import SidebarAllTags from "../sidebar/sidebarAllTags"

const SidebarTags = ({ sidebarTag = null }) => {
  const tags = useGetFormattedTags();
  let tagDetails = useGetPostTagDetailsStatic(sidebarTag)
  tagDetails = tagDetails ? tagDetails.first() : null;

  return (
    <aside className="side-bar" aria-label="Primary sidebar">
      <nav className="sidebar-tags-browser scrolling-touch" aria-label="Primary sidebar nav">
        <SidebarTagDetails tagDetails={tagDetails} />
        <SidebarAllTags tags={tags} />
      </nav>
    </aside>
  )
}

export default SidebarTags;