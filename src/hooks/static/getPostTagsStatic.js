import { graphql, useStaticQuery } from "gatsby"

export const useGetPostTagsStatic = (tags) => {
  const result = useStaticQuery(graphql`
    query useGetPostTagsStatic {
      allTagsYaml(sort: {fields: [tag], order: ASC}) {
        nodes {
          id
          tag
          fields {
            slug
          }
        }
      }
    }
  `)

  const predicateTags = Array.isArray(tags) ? [...tags] : [tags];
  const { nodes } = result.allTagsYaml;
  
  return nodes
    .filter(node => predicateTags.includes(node.tag))
    .map(node => ({
      ...node,
      slug: node.fields.slug
    }));
}

