import React from "react"
import HeaderBar from "./layout/headerBar"
import SidebarAuthor from "./layout/sidebarAuthor"
import SidebarTags from "./layout/sidebarTags"
import SiteFooter from "./siteFooter";

const LayoutAuthor = ({ authorId, children }) => {
  const post = {
    frontmatter: {
      authors: [authorId]
    }
  }

  return (
    <div className="site-container">
      <header>
        <HeaderBar />
      </header>
      <div id="page-content" className="universal-page-content-wrapper">
        <div id="page-content-inner">
          <div className="jsd-layout jsd-layout-3-cols jsd-layout-3-cols-drop-right-left" id="index-container">
            <div id="sidebar-wrapper-left" className="sidebar-wrapper sidebar-wrapper-left jsd-layout-sidebar-left">
              <SidebarTags />
            </div>
            <main>
              {children}
            </main>
            <div id="sidebar-wrapper-right" className="sidebar-wrapper sidebar-wrapper-right jsd-layout-sidebar-right">
              <SidebarAuthor post={post} />
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  )
}

export default LayoutAuthor
