import React from "react";
import { Link } from "gatsby";

const RenderSidebarTags = ({ tagMap }) => {
  const { posts, details: tag } = tagMap;
  return (
    <section className="jsd-card jsd-card-secondary">
      <header className="jsd-card-header">
        <h3 className="jsd-card-header-headline">
          <Link to={tag.slug} title={tag.title} aria-label={tag.title}>#{tag.id}</Link>
        </h3>
      </header>
      <div>
        {posts.map(post => {
          const ariaTitle = `${post.title} - by ${post.authors.join(" and ")} - published ${post.publishedDate}`;
          return <Link key={`sidebar-post-${post.id}`} to={post.slug} title={ariaTitle} aria-label={ariaTitle} className="jsd-link jsd-link-contentful fs-s">{post.title}</Link>
        })}
      </div>
    </section>
  )
}

export default RenderSidebarTags;