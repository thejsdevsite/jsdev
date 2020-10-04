import { gql, useQuery } from '@apollo/client';

const query = gql`
query Posts($tagName: String!, $offset: Int!, $limit: Int!) {
  allMarkdownRemark(filter: {frontmatter: {posttags: {in: [$tagName]}, published: {eq: true}}}, sort: {fields: [frontmatter___date], order: DESC}, limit: $limit, skip: $offset) {
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

export const useGetPostsByTagName = (tagName, offset = 0, limit = 25) => {
  return useQuery(query, {
    variables: {
      tagName,
      offset,
      limit
    }
  });
}
