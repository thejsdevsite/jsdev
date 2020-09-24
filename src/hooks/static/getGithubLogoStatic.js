import { graphql, useStaticQuery } from "gatsby"

const useGetGithubLogoStatic = () => {
  const result = useStaticQuery(graphql`
    query useGetGithubLogoStatic {
      allFile(filter: {publicURL: {regex: "/.*\\/github-logo.png$/"}}) {
        nodes {
          publicURL
        }
      }
    }
  `);

  return (result.allFile.nodes[0].publicURL);
}

export default useGetGithubLogoStatic;