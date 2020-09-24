import { graphql, useStaticQuery } from "gatsby"

const useGetSiteLogoSrcStatic = () => {
  const result = useStaticQuery(graphql`
    query useGetSiteLogoSrcStatic {
      allFile(filter: {publicURL: {regex: "/.*\\/logo.svg$/"}}) {
        nodes {
          publicURL
        }
      }
    }
  `);

  return (result.allFile.nodes[0].publicURL);
}

export default useGetSiteLogoSrcStatic;