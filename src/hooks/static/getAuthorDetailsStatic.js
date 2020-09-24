import { graphql, useStaticQuery } from "gatsby"

const useGetAuthorDetailsStatic = (authors) => {
  const result = useStaticQuery(graphql`
    query useGetAuthorDetailsStatic {
      allAuthorYaml(sort: {fields: [id], order: ASC}) {
        nodes {
          id
          name
          bio
          fields {
            slug
          }
          location
          employment {
            position
            company
            url
          }
          social {
            twitter
            github
            facebook
            instagram
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
  `);

  const predicateAuthors = Array.isArray(authors) ? [...authors] : [authors];
  const { nodes } = result.allAuthorYaml;

  const list = nodes
    .filter(node => predicateAuthors.includes(node.id))
    .map(node => ({
      id: node.id,
      name: node.name,
      slug: node.fields.slug,
      profilePicture: {
        src: node.profilePicture?.childImageSharp?.fluid?.src
      },
      bio: node.bio || "",
      location: node.location || "",
      employment: {
        position: node.employment?.position,
        company: node.employment?.company,
        url: node.employment?.url
      },
      social: {
        twitter: node.social?.twitter,
        github: node.social?.github,
        facebook: node.social?.facebook,
        instagram: node.social?.instagram,
      }
    }));

  return {
    first: () => list[0],
    last: () => list[list.length - 1],
    all: () => list
  };
}

export default useGetAuthorDetailsStatic;