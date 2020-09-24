import React from "react"
import { graphql } from "gatsby"
import LayoutAuthor from "../components/layoutAuthor"
import PostRollByAuthorId from "../components/postRollByAuthorId"
import SEO from "../components/seo"

const AuthorTemplate = ({ pageContext, data, location }) => {
  const { author } = pageContext;
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <LayoutAuthor location={location} title={siteTitle} authorId={author}>
      <SEO title="All Posts by author" />
      <header className="mb-2">
        <h2 className="fs-m fw-heavy m-0 ff-monospace">Posts</h2>
      </header>
      <div id="homepage-feed">
        <PostRollByAuthorId authorId={author} />
      </div>
    </LayoutAuthor>
  )
}

export default AuthorTemplate;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`