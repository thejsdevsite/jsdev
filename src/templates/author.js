import React from "react"
import { graphql } from "gatsby"

//import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostBrief from "../components/postBrief";

const AuthorTemplate = ({ pageContext, data, location }) => {
  const author = data.allAuthorYaml.edges[0].node;
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
        title={author.name}
        description={author.bio}
      />
      <article itemScope itemType="http://schema.org/Article">
        <header>
          <h1
            itemProp="headline"
            style={{
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            Author: {author.name}
          </h1>
          <p
            style={{
              display: `block`,
              marginBottom: 0,
            }}
          >
            {author.bio}
          </p>
        </header>

        <section itemProp="articleBody">
          { posts.length === 0 ? <p>No blog posts found for this author.</p> : postList }
        </section>
      </article>
    </Layout>
  )
}

export default AuthorTemplate;

export const pageQuery = graphql`
  query BlogPostsByAuthor($author: String) {
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
          authors: {in: [$author]}
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
    allAuthorYaml(limit: 1, filter: {id: {eq: $author}}) {
      edges {
        node {
          name
          bio
          profilePicture {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          social {
            twitter
            github
            facebook
            instagram
          }
          fields {
            slug
          }
        }
      }
    }
  }
`