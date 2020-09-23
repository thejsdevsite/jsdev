import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';

const query = gql`
  query GetAuthorDetails($author: String!) {
    allAuthorYaml(filter: {id: {eq: $author}}, limit: 1) {
      edges {
        node {
          id
          name
          fields {
            slug
          }
          profilePicture {
            childImageSharp {
              fluid {
                src
                sizes
                srcSet
              }
            }
          }
        }
      }
    }
  }
  `;

export const useGetAuthorDetails = (author) => {
  const [ hasSet, setHasSet ] = useState(false);
  const [ details, setDetails ] = useState({
    profilePicture: {
      src: null
    }
  });

  const { loading, data, error } = useQuery(query, {
    variables: {
      author: Array.isArray(author) ? author[0] : "" + author
    }
  });

  if (!loading && data && !hasSet) {
    const node = data.allAuthorYaml.edges[0].node;
    setDetails({
      id: node.id,
      name: node.name,
      slug: node.fields.slug,
      profilePicture: { ...node.profilePicture.childImageSharp.fluid }
    });
    setHasSet(true);
  }

  return { loading, error, details };
}
