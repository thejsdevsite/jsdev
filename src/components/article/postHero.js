import React from "react";

const PostHero = ({ post }) => {
  const { title, hero } = post.frontmatter;
  if (!hero) {
    return <></>
  }

  return (
    <div className="jsd-article-cover">
      <img src={hero.childImageSharp.fluid.src} title={title} alt={title} aria-label={title} width="1000" height="420" className="jsd-article-cover-image" style={{backgroundColor: "#ddd"}}/>
    </div>
  )
}

export default PostHero;