import { gql, useQuery } from '@apollo/client';

export const useGetPosts = (offset = 0, limit = 25) => {
  const query = gql`
    query Posts($offset: Int!, $limit: Int!) {
      allMarkdownRemark(filter: {frontmatter: {published: {eq: true}}}, sort: {fields: [frontmatter___date], order: DESC}, limit: $limit, skip: $offset) {
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
                fluid(jpegQuality: 80, maxWidth: 1280) {
                  src
                }
              }
            }
          }
        }
      }
    }
  `;

  return useQuery(query, {
    variables: {
      offset,
      limit
    }
  });
}
