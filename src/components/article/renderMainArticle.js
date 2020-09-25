import React from "react";

const RenderArticleMain = ({ post }) => {
  return (
    <section className="jsd-article-main">
      <div className="jsd-article-body text-styles spec-body" dangerouslySetInnerHTML={ { __html: post.html } } itemProp="articleBody"/>
    </section>
  );
};

export default RenderArticleMain;
