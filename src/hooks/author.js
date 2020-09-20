import { graphql, useStaticQuery } from "gatsby"

export const useGetPostAuthors = (authors) => {
  const qlAuthors = useStaticQuery(graphql`
    query getAuthorDetails {
      allAuthorYaml(
        sort: {fields: [id], order: ASC}
        ) {
        nodes {
          id
          name
          fields {
            slug
          }
        }
      }
    }
  `);

  const predicateAuthors = Array.isArray(authors) ? [...authors] : [authors];
  const { nodes } = qlAuthors.allAuthorYaml;
  
  return nodes
    .filter(node => predicateAuthors.includes(node.id))
    .map(node => ({
      ...node,
      slug: node.fields.slug
    }));
}