import React from "react";
import useGetPostsByTagNameStatic from "../hooks/static/getPostsByTagNameStatic";
import useGetSiteLogoSrcStatic from "../hooks/static/getSiteLogoSrcStatic";
import PostRollArticle from "./layout/postRollArticle";
import PostRollArticleHero from "./layout/postRollArticleHero";

const PostRollByTagName = ({ tagName }) => {
  const posts = useGetPostsByTagNameStatic(tagName);
  const logo = useGetSiteLogoSrcStatic();
  const postList = posts
  .map((node, index) => {
    const { hero, ...data } = node;
    data.hero = null;
    if (index === 0) {
      data.hero = hero ? hero : (logo ? logo : null);
      return <PostRollArticleHero key={`${data.id}`} post={data} title={data.title} />;
    }
    return <PostRollArticle key={`${data.id}`} post={data} title={data.title} />;
  })

  return (
    <div id="rendered-article-feed">
      {postList}
    </div>
  )
};

export default PostRollByTagName;