import React from "react"
import { graphql } from "gatsby"
import LayoutAuthor from "../components/layoutAuthor"
import PostRollByAuthorId from "../components/postRollByAuthorId"
import SEO from "../components/seo"
import useGetAuthorDetailsStatic from "../hooks/static/getAuthorDetailsStatic"
import RenderSidebarAuthorDetails from "../components/sidebar/renderSidebarAuthorDetails"

const AuthorTemplate = ({ pageContext, data, location }) => {
  const { author } = pageContext;
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const authorDetails = useGetAuthorDetailsStatic(author);

  return (
    <LayoutAuthor location={location} title={siteTitle} authorId={author}>
      <SEO title={authorDetails.first().name} location={location} twitterCreator={authorDetails.first().id} />

      <div className="hide show-tablet jsd-header-widget">
        <RenderSidebarAuthorDetails author={authorDetails.first()} />
      </div>

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
