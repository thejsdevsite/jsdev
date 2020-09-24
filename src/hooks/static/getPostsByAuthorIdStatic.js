import { graphql, useStaticQuery } from "gatsby" 

const useGetPostsByAuthorIdStatic = (authorId) => {
  const result = useStaticQuery(graphql`
    query useGetPostsByAuthorIdStatic {
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 1000) {
        nodes {
          id
          timeToRead
          fields {
            slug
          }
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
  `);

  return result.allMarkdownRemark.nodes
    .filter(node => node.frontmatter.authors.includes(authorId))
    .map(node => ({
      id: node.id,
      ttr: node.timeToRead,
      slug: node.fields.slug,
      authors: node.frontmatter.authors,
      date: node.frontmatter.date,
      hero: node.frontmatter.hero ? node.frontmatter.hero.childImageSharp.fluid.src : null,
      tags: node.frontmatter.posttags,
      title: node.frontmatter.title
    }));
}

export default useGetPostsByAuthorIdStatic;