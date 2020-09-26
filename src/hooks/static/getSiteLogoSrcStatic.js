import { graphql, useStaticQuery } from "gatsby"

const useGetSiteLogoSrcStatic = (svg = true) => {
  const result = useStaticQuery(graphql`
    query useGetSiteLogoSrcStatic {
      allFile(filter: {publicURL: {regex: "/.*\\/logo.(svg|png)$/"}}) {
        nodes {
          publicURL
        }
      }
    }
  `);

  return result.allFile.nodes
    .find(node => {
      const ext = node.publicURL.substr(node.publicURL.length - 4, 4);
      return svg ? ext === ".svg" : ext === ".png";
    })
    .publicURL;
}

export default useGetSiteLogoSrcStatic;
