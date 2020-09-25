import { graphql, useStaticQuery } from "gatsby";

export const useGetSiteDetailsStatic = () => {
  const result = useStaticQuery(graphql`
    query useGetSiteDetailsStatic {
      site {
        siteMetadata {
          title
          started
          description
          siteUrl
          social {
            twitter
            github
            facebook
          }
        }
      }
    }
  `)

  return result.site.siteMetadata;
}
