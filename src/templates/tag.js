import React from "react"
import { graphql } from "gatsby"

//import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostBrief from "../components/postBrief";
import { rhythm, scale } from "../utils/typography"

const TagTemplate = ({ /*pageContext,*/ data, location }) => {
  const tag = data.allTagsYaml.edges[0].node;
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.edges

  let postList = null;
  if (posts.length > 0) {
    postList = posts.map((postData) => {
      const { node: post } = postData;
      const title = post.frontmatter.title || post.fields.slug
      return <PostBrief key={post.id} post={post} title={title} />
    });
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={tag.title}
        description={tag.description}
      />
      <article itemScope itemType="http://schema.org/Article">
        <header>
          <h1
            itemProp="headline"
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            Tag: {tag.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {tag.description}
          </p>
        </header>

        <section itemProp="articleBody">
          { posts.length === 0 ? <p>No blog posts found for this tag.</p> : postList }
        </section>
      </article>
    </Layout>
  )
}

export default TagTemplate;

export const pageQuery = graphql`
  query BlogPostsByTag($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {
        frontmatter: {
          posttags: {in: [$tag]}
          published: { eq: true }
        }
      }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 50)
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            authors
            posttags
          }
        }
      }
    }
    allTagsYaml(limit: 1, filter: {tag: {eq: $tag}}) {
      edges {
        node {
          tech
          title
          description
          colour
          icon
        }
      }
    }
  }
`