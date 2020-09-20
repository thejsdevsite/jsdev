import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import { useGetPostTags } from "../hooks/tags"
import { useGetPostAuthors } from "../hooks/author";
import TagList from "../components/tagList";
import AuthorList from "./authorList";

const PostBrief = ({ post, title }) => {
  const excerpt = post.frontmatter.description || post.excerpt ? (
    <section>
      <p
        dangerouslySetInnerHTML={{
          __html: post.frontmatter.description || post.excerpt,
        }}
        itemProp="description"
      />
    </section>
  ) : null;

  const tagList = useGetPostTags(post.frontmatter.posttags);
  const authorList = useGetPostAuthors(post.frontmatter.authors);

  return (
    <article
      key={post.fields.slug}
      itemScope
      itemType="http://schema.org/Article"
    >
      <header>
        <h3
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link
            style={{ boxShadow: `none` }}
            to={post.fields.slug}
            itemProp="url"
          >
            <span itemProp="headline">{title}</span>
          </Link>
        </h3>
        <small>{post.frontmatter.date}</small>
        <TagList tagList={tagList}/>
        <AuthorList authorList={authorList}/>
      </header>
      {excerpt}
    </article>
  )
}

export default PostBrief;