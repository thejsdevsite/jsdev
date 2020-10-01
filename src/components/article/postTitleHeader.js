import React from "react";
import useGetAuthorDetailsStatic from "../../hooks/static/getAuthorDetailsStatic";
import useGetPostTagDetailsStatic from "../../hooks/static/getPostTagDetailsStatic";
import HeaderTags from "./headerTags";
import PostHero from "./postHero";
import HeaderMeta from "./headerMeta"

const PostTitleHeader = ({ post }) => {
  const { title, authors, posttags, published } = post.frontmatter;
  const tagsMap = useGetPostTagDetailsStatic(posttags);
  const authorsMap = useGetAuthorDetailsStatic(authors);

  const h1Title = !published ? `[Draft] ${title}` : title;

  return (
    <header className="jsd-article-header" id="main-title">
      <PostHero post={post}/>
      <div className="jsd-article-header-meta">
        <h1 className="ff-monospace fs-3xl s:fs-4xl l:fs-4xl s:fw-heavy fw-heavy lh-tighter mb-4 l:ls-n3 ls-n1">{h1Title}</h1>
        <HeaderTags tags={tagsMap.all()} />
        <HeaderMeta post={post} authors={authorsMap.all()} />
      </div>
    </header>
  )
}

export default PostTitleHeader;