import React from "react";

const PostRollArticleBasicShimmer = ({ hero = false }) => {
  let heroRender = null;
  if (hero) {
    heroRender = (
      <div className="jsd-story-cover">
        <div className="jsd-scaffold" loading="lazy"></div>
      </div>
    );
  }

  return (
    <div className="jsd-story" title="Loading post...">
      { heroRender }
      <div className="jsd-story-body">
        <div className="jsd-story-top mb-3">
          <div className="jsd-story-meta w-100">
            <div className="jsd-scaffold-loading shimmer mr-2 w-0 h-0 p-4 radius-full"></div>
            <div className="jsd-scaffold-loading shimmer w-25 h-0 py-2"></div>
          </div>
        </div>
        <div className="jsd-story-indentation">
          <div className="jsd-scaffold-loading shimmer w-75 h-0 py-3 mb-2"></div>
          <div className="jsd-scaffold-loading shimmer w-50 h-0 py-2 mb-8"></div>
        </div>
      </div>
    </div>
  )
}

export default PostRollArticleBasicShimmer;