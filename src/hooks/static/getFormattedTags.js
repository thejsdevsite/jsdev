import { useStaticQuery, graphql } from "gatsby"

const useGetFormattedTags = () => {
  const data = useStaticQuery(graphql`
    query useGetFormattedTags {
      allTagsYaml(
        sort: {fields: [tag], order: ASC}
        ) {
        nodes {
          id
          tag
          fields {
            slug
          }
        }
      }
    }
  `);

  return data.allTagsYaml &&
    data.allTagsYaml.nodes
      .map(node => {
        return {
          id: node.id,
          tag: node.tag,
          slug: node.fields.slug
        }
      });
}

export default useGetFormattedTags