import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import LayoutPost from "../components/layoutPost"
import PostRollFooter from "../components/layout/postRollFooter"
import PostTitleHeader from "../components/article/postTitleHeader"
import RenderArticleMain from "../components/article/renderMainArticle"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.allMarkdownRemark.nodes[0];
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = pageContext
  
  return (
    <LayoutPost location={location} title={siteTitle} post={post}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <main className="jsd-layout-content grid gap-4">
        <div className="jsd-article-wrapper">
          <article className="jsd-card jsd-article mb-4" id="article-show-container" data-author={post.frontmatter.authors.join(",")} data-path={post.slug} data-published="true">
            <PostTitleHeader post={post} />
            <RenderArticleMain post={post} />
          </article>
        </div>
        <PostRollFooter nextPost={next} prevPost={previous} />
      </main>
    </LayoutPost>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {frontmatter: {published: {eq: true}}, fields: {slug: {eq: $slug}}}, sort: {fields: [frontmatter___date], order: ASC}, limit: 1) {
      nodes {
        id
        timeToRead
        fields {
          slug
        }
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          authors
          posttags
          hero {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`
