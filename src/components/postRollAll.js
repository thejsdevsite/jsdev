import React from "react";
import PostRollArticle from "./layout/postRollArticle";
import PostRollArticleHero from "./layout/postRollArticleHero";
import useGetPostsStatic from "../hooks/static/getPostsStatic";
import useGetSiteLogoSrcStatic from "../hooks/static/getSiteLogoSrcStatic";

const PostRollAll = ({ offset = 0, limit = 25 }) => {
  const posts = useGetPostsStatic();
  const logo = useGetSiteLogoSrcStatic();
  const postList = posts.map((node, index) => {
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
      { postList}
    </div>
  )
};

export default PostRollAll;