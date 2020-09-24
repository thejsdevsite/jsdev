import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostRollAll from "../components/postRollAll";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All Posts" location={location} twitterCreator="thejsdev" />
      <header className="mb-2">
        <h2 className="fs-m fw-heavy m-0 ff-monospace">Posts</h2>
      </header>
      <div id="homepage-feed">
        <PostRollAll />
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
