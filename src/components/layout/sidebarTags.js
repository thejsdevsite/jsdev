import React from "react";
import { Link } from "gatsby";
import useGetPostTagDetailsStatic from "../../hooks/static/getPostTagDetailsStatic";
import useGetFormattedTags from "../../hooks/static/getFormattedTags";

const SidebarTagDetails = ({ tagDetails }) => {
  if (!tagDetails) {
    return null;
  }

  return (
    <div className="jsd-sidebar-widget">
      <header>
        <h3 className="m-0 fs-m fw-heavy ff-monospace">#{tagDetails.id}</h3>
      </header>
      <div className="widget-body">
        <p className="fs-xs ff-monospace" dangerouslySetInnerHTML={{ __html: tagDetails.description.replace(/\\n/g, "<br/>") }} />
      </div>
    </div>
  )
}

const SidebarAllTags = ({ tags }) => {
  if (!tags) {
    return null;
  }

  return (
    <div className="jsd-sidebar-widget">
      <header>
        <h3 className="fs-s fw-heavy ff-monospace m-0 mb-2">Tags</h3>
      </header>
      <div className="widget-body">
        <div id="sidebar-tags">
          {tags.map(node => (
            <div key={node.id} className="sidebar-nav-element">
              <Link to={node.slug} className="fs-xs ff-monospace jsd-link jsd-link-block" title={node.title} aria-label={node.title}>#{node.tag}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

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