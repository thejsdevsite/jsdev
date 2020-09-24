import React from "react";
import { useFetchImageEffect } from "../../hooks/fetchImage";
import useGetAuthorDetailsStatic from "../../hooks/static/getAuthorDetailsStatic";
import useGetPostTagDetailsStatic from "../../hooks/static/getPostTagDetailsStatic";
import PostRollArticleShimmer from "./postRollArticleShimmer";
import PostRollRenderedArticle from "./postRollRenderedArticle";

const PostRollArticle = ({ post }) => {
  const authorDetails = useGetAuthorDetailsStatic(post.authors).first();
  const tagDetails = useGetPostTagDetailsStatic(post.tags);
  const { loaded: authorImgLoaded, error: authorImgError } = useFetchImageEffect(authorDetails.profilePicture.src);

  if (authorImgError) {
    console.error(`Could not load author image (#${authorDetails.id})`);
  }
  
  if ((authorImgLoaded || authorImgError) && authorDetails && tagDetails) {
    return <PostRollRenderedArticle post={post} author={authorDetails} tags={tagDetails.all()} />
  }

  return <PostRollArticleShimmer/>;
}

export default PostRollArticle;
