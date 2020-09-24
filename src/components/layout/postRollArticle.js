import React from "react";
import { useFetchImageEffect } from "../../hooks/fetchImage";
import { useGetAuthorDetails } from "../../hooks/getAuthorDetails";
import { useGetPostTagDetails } from "../../hooks/getPostTagDetails";
import useGetAuthorDetailsStatic from "../../hooks/static/getAuthorDetailsStatic";
import PostRollArticleShimmer from "./postRollArticleShimmer";
import PostRollRenderedArticle from "./postRollRenderedArticle";

const PostRollArticle = ({ post }) => {
  const authorDetails = useGetAuthorDetailsStatic(post.authors).first();
  const { details: author, error: authorError } = useGetAuthorDetails(post.authors);
  const { loaded: authorImgLoaded, error: authorImgError } = useFetchImageEffect(author.profilePicture.src);
  const { details: tags, error: tagsError } = useGetPostTagDetails(post.tags);

  if (authorError) {
    // given that there was some sort of error while fetching graphql, just don't render this node _at all_
    console.error(`Could not render Post Feed (#${post.id})`);
    return <></>;
  }
  
  if (authorImgLoaded && author && tags) {
    return <PostRollRenderedArticle post={post} author={author} tags={tags} />
  }

  return <PostRollArticleShimmer/>;
}

export default PostRollArticle;
