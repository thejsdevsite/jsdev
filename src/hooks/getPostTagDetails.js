import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';

const query = gql`
  query GetPostTags {
    allTagsYaml {
      nodes {
        id
        tag
        fields {
          slug
        }
      }
    }
  }
`;

export const useGetPostTagDetails = (tags) => {
  const [ details, setDetails ] = useState([]);
  const predicateTags = Array.isArray(tags) ? [...tags] : [tags];
  const { loading, data, error } = useQuery(query);

  if (data && !error && details.length === 0) {
    setDetails(data.allTagsYaml.nodes
      .filter(node => predicateTags.includes(node.id))
      .map(node => ({
        id: node.id,
        tag: node.tag,
        slug: node.fields.slug
      }))
    );
  }

  return { details, loading, error };
}

