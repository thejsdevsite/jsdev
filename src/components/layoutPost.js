import React from "react"
import HeaderBar from "./layout/headerBar"
import SidebarAuthor from "./layout/sidebarAuthor"

const LayoutPost = ({ post, children }) => {
  return (
    <div className="site-container">
      <header>
        <HeaderBar />
      </header>
      <div id="page-content" className="universal-page-content-wrapper">
        <div id="page-content-inner">
          <div className="jsd-layout jsd-layout-2-cols jsd-layout-article" id="article-container">
            {children}
            <div id="sidebar-wrapper-right" className="sidebar-wrapper sidebar-wrapper-right jsd-layout-sidebar-right">
              <SidebarAuthor post={post} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutPost