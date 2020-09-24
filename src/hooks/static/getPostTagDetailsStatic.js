import { graphql, useStaticQuery } from "gatsby"

const useGetPostTagDetailsStatic = (tags) => {
  const result = useStaticQuery(graphql`
    query useGetPostTagDetailsStatic {
      allTagsYaml(sort: {fields: [tag], order: ASC}) {
        nodes {
          id
          tag
          title
          description
          foreground
          background
          fields {
            slug
          }
        }
      }
    }
  `)

  const predicateTags = Array.isArray(tags) ? [...tags] : [tags];
  const list = result.allTagsYaml.nodes
    .filter(node => predicateTags.includes(node.id))
    .map(node => ({
      id: node.id,
      tag: node.tag,
      slug: node.fields.slug,
      title: node.title,
      description: node.description,
      foreground: node.foreground,
      background: node.background
    }));

  return {
    first: () => list[0],
    last: () => list[list.length - 1],
    all: () => list
  }
}

export default useGetPostTagDetailsStatic