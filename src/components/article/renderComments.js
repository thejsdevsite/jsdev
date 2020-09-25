import React from "react";
import useAddUtteranceComments from "../../hooks/addUtteranceComments";

export const RenderComments = () => {
  return (
    <section className="mt-6">
      <div className="jsd-card jsd-card-article-comments">
        <CommentRenderer/>
      </div>
    </section>
  );
};

const CommentRenderer = () => {
  const commentBox = React.createRef();
  useAddUtteranceComments(commentBox);
  return (
    <div ref={ commentBox } className="jsd-comments" aria-live="polite"/>
  );
};
