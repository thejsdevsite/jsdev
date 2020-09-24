import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostRollByTagName from "../components/postRollByTagName";
import useGetPostTagDetailsStatic from "../hooks/static/getPostTagDetailsStatic";
import SidebarTagDetails from "../components/sidebar/sidebarTagDetails";

const TagTemplate = ({ pageContext, data, location }) => {
  const { tag } = pageContext;
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const tagDetails = useGetPostTagDetailsStatic(tag);

  return (
    <Layout location={location} title={siteTitle} sidebarTag={tag}>
      <SEO title={`${tagDetails.first().title} - All Posts`} location={location} twitterCreator="thejsdev" />
      <div className="hide show-tablet jsd-header-widget">
        <SidebarTagDetails tagDetails={tagDetails.first()} />
      </div>

      <header className="mb-2">
        <h2 className="fs-m fw-heavy m-0 ff-monospace">Posts</h2>
      </header>
      <div id="homepage-feed">
        <PostRollByTagName tagName={tag} />
      </div>
    </Layout>
  )
}

export default TagTemplate;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`