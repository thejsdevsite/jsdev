import { graphql, useStaticQuery } from "gatsby"

export const useGetPostTags = (tags) => {
  const qlTags = useStaticQuery(graphql`
    query GetTagDetails {
      allTagsYaml(
        sort: {fields: [tag], order: ASC}
        ) {
        nodes {
          id
          tag
          icon
          colour
          size
          fields {
            slug
          }
        }
      }
    }
  `)

  const predicateTags = Array.isArray(tags) ? [...tags] : [tags];
  const { nodes } = qlTags.allTagsYaml;
  
  return nodes
    .filter(node => predicateTags.includes(node.tag))
    .map(node => ({
      ...node,
      slug: node.fields.slug
    }));
}
