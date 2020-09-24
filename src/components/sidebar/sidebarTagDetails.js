import React from "react";

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

export default SidebarTagDetails;