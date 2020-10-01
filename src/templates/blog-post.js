import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import LayoutPost from "../components/layoutPost"
import PostRollFooter from "../components/layout/postRollFooter"
import PostTitleHeader from "../components/article/postTitleHeader"
import RenderArticleMain from "../components/article/renderMainArticle"
import { RenderComments } from "../components/article/renderComments";
import { RenderAuthorDetails } from "../components/article/renderAuthorDetails";
import useGetAuthorDetailsStatic from "../hooks/static/getAuthorDetailsStatic";

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.allMarkdownRemark.nodes[0];
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = pageContext

  const seoProps = {
    title: post.frontmatter.title,
    description: post.frontmatter.description || post.excerpt,
    twitterCreator: pageContext?.authors[0] || undefined,
    location,
    heroImage: post.frontmatter?.hero?.childImageSharp?.fluid?.src,
    twitterDescription: post.excerpt
  };

  const authorDetails = useGetAuthorDetailsStatic(post.frontmatter.authors);

  return (
    <LayoutPost location={location} title={siteTitle} post={post}>
      <SEO {...seoProps} />
      <main className="jsd-layout-content grid gap-4">
        <div className="jsd-article-wrapper">
          <article className="jsd-card jsd-article mb-4" id="article-show-container" data-author={post.frontmatter.authors.join(",")} data-path={post.slug} data-published="true">
            <PostTitleHeader post={post} />
            <RenderArticleMain post={post} />
          </article>
          <RenderAuthorDetails post={post} authors={authorDetails.all()}/>
          <RenderComments/>
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
    allMarkdownRemark(filter: {fields: {slug: {eq: $slug}}}, limit: 1) {
      nodes {
        id
        timeToRead
        fields {
          slug
        }
        html
        excerpt(pruneLength: 125, format: PLAIN)
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          publishedDate(formatString: "MMMM DD, YYYY")
          updatedDate(formatString: "MMMM DD, YYYY")
          published
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
