import React from "react"
import HeaderBar from "./layout/headerBar"
import SidebarRecent from "./layout/sidebarRecent"
import SidebarTags from "./layout/sidebarTags"
import SiteFooter from "./siteFooter";

const Layout = ({ sidebarTag, children }) => {

  return (
    <div className="site-container">
      <header>
        <HeaderBar />
      </header>
      <div id="page-content" className="universal-page-content-wrapper">
        <div id="page-content-inner">
          <div className="jsd-layout jsd-layout-3-cols jsd-layout-3-cols-drop-right-left" id="index-container">
            <div id="sidebar-wrapper-left" className="sidebar-wrapper sidebar-wrapper-left jsd-layout-sidebar-left">
              <SidebarTags sidebarTag={sidebarTag} />
            </div>
            <main className="jsd-list-main">
              {children}
            </main>
            <div id="sidebar-wrapper-right" className="sidebar-wrapper sidebar-wrapper-right jsd-layout-sidebar-right">
              <SidebarRecent />
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  )
}

export default Layout
