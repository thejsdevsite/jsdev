import React from "react";
const { Link } = require("gatsby");

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
            <div key={`tag-sidebar-list-${node.id}`} className="sidebar-nav-element">
              <Link to={node.slug} className="fs-xs ff-monospace jsd-link jsd-link-block" title={node.title} aria-label={node.title}>#{node.tag}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SidebarAllTags;