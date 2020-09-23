import React from "react";
import { useGetPostsByTagName } from "../hooks/getPostsByTagName";
import PostRollArticle from "./layout/postRollArticle";
import PostRollArticleHero from "./layout/postRollArticleHero";
import { useGetSiteLogoSrc } from "../hooks/getSiteLogoSrc";

const PostRollByTagName = ({ tagName, offset = 0, limit = 25 }) => {
  const { loading: logoLoading, error: logoError, src: logo } = useGetSiteLogoSrc();
  const { loading, data, error } = useGetPostsByTagName(tagName, offset, limit);

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!loading && !data) {
    return <div>No published articles found</div>
  }

  if (loading || logoLoading) {
    return <></>
  }

  if (logoError) {
    console.warn("There was an error fetching logo src from graphql");
  }
  
  const postList = data.allMarkdownRemark.nodes.map((node, index) => {
    const data = {
      id: node.id,
      ttr: node.timeToRead,
      slug: node.fields.slug,
      authors: node.frontmatter.authors,
      date: node.frontmatter.date,
      tags: node.frontmatter.posttags,
      title: node.frontmatter.title || "Post",
      hero: null
    };

    if (index === 0) {
      data.hero = node.frontmatter.hero
        ? node.frontmatter.hero.childImageSharp.fluid.src
        : logo ? logo : null;

        return <PostRollArticleHero key={`${data.id}`} post={data} title={data.title} />;
    }

    return <PostRollArticle key={`${data.id}`} post={data} title={data.title} />;
  });
  
  return (
    <div id="rendered-article-feed">
      { postList}
    </div>
  )
};

export default PostRollByTagName;