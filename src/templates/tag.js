import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostRollByTagName from "../components/postRollByTagName";
import useGetPostTagDetailsStatic from "../hooks/static/getPostTagDetailsStatic";

const TagTemplate = ({ pageContext, data, location }) => {
  const { tag } = pageContext;
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle} sidebarTag={tag}>
      <SEO title="All Posts" />
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