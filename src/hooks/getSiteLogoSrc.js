import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';

const query = gql`
  query GetSiteLogo {
    allFile(filter: {publicURL: {regex: "/.*\/logo\.svg$/"}}) {
      nodes {
        publicURL
      }
    }
  }
`;

export const useGetSiteLogoSrc = () => {
  const [ src, setSrc ] = useState(null);
  const { loading, data, error } = useQuery(query);

  if (data && !src && !loading) {
    setSrc(data.allFile.nodes[0].publicURL);
  }
  
  return { loading, error, src };
}