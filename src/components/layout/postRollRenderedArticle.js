import { Link } from "gatsby";
import React from "react";
import { className } from "../../utils/className";

const ArticleFeatured = ({ post }) => (
  <Link to={post.slug} className="jsd-story-cover" title={post.title} style={{ backgroundImage: `url("${post.hero}")` }}>
    <span hidden>{post.title}</span>
  </Link>
)

const ArticleMeta = ({ post, author }) => (
  <div className="jsd-story-meta">
    <div className="jsd-story-author-pic">
      <Link to={author.slug} className="jsd-avatar jsd-avatar-l">
        <img className="jsd-avatar-image" src={author.profilePicture.src} alt={author.name} title={author.name} loading="lazy" />
      </Link>
    </div>
    <div>
      <p className="m-0">
        <Link to={author.slug} className="jsd-story-secondary fw-med">{author.name}</Link>
      </p>
      <Link to={post.slug} className="jsd-story-tertiary fs-xxs">
        <time>{post.publishedDate}</time>
      </Link>
    </div>
  </div>
);

const ArticleTitle = ({ post }) => (
  <h2 className="jsd-story-title m-0 mb-1 l:fs-l">
    <Link to={post.slug} id={`article-link-${post.id}`}>
      <span>{post.title}</span>
    </Link>
  </h2>
)

const ArticleTags = ({ tags }) => (
  <div className="jsd-story-tags">
  { tags.map(tag => (
    <Link key={tag.id} to={tag.slug} className="jsd-tag">
      <span className="jsd-tag-prefix">#</span>
      {tag.tag}
    </Link>
  )) }
  </div>
)

const PostRollRenderedArticle = ({ post, author, tags, hero = false }) => {
  return (
    <article className={className({ "jsd-story cursor-pointer": true, "jsd-story-featured": hero })}>
      <div role="presentation">
        {hero ? <ArticleFeatured post={post} /> : null}
        <div className="jsd-story-body">
          <div className="jsd-story-top">
            <ArticleMeta post={post} author={author} />
          </div>
          <div className="jsd-story-indentation">
            <ArticleTitle post={post} />
            <ArticleTags tags={tags} />
            <div className="jsd-story-bottom">
            </div>
          </div>
        </div>
      </div>
    </article>
  )
};

export default PostRollRenderedArticle;