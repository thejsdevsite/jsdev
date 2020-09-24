import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby";

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Page Not Found" location={location} twitterCreator="thejsdev" />
      <div id="homepage-feed">
        <h3 className="ff-monospace fs-l m-0 mb-4">This page does not exist</h3>
        <p m-0 mb-4>
          <Link to={"/"} className="jsd-link fs-m ff-monospace" title="Return to home page">Return to home page</Link>
        </p>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
