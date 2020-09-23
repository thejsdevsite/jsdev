import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby";

const SidebarTags = () => {
  const tags = useGetFormattedTags();

  return (
    <aside className="side-bar" aria-label="Primary sidebar">
      <nav className="sidebar-tags-browser scrolling-touch" aria-label="Primary sidebar nav">
        <header className="fs-s fw-heavy ff-monospace">TAGS</header>
        <div id="sidebar-tags">
          {tags.map(node => (
            <div key={node.id} className="sidebar-nav-element">
              <Link to={node.slug} className="fs-s ff-sans-serif jsd-link jsd-link-block" title={node.title} aria-label={node.title}>#{node.tag}</Link>
            </div>
          ))}
        </div>
      </nav>
    </aside>
  )
}

const useGetFormattedTags = () => {
  const data = useStaticQuery(graphql`
    query {
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

export default SidebarTags;