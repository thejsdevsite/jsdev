import React from "react";
import { useFetchImageEffect } from "../../hooks/fetchImage";
import useGetAuthorDetailsStatic from "../../hooks/static/getAuthorDetailsStatic";
import useGetPostTagDetailsStatic from "../../hooks/static/getPostTagDetailsStatic";
import PostRollArticleShimmer from "./postRollArticleShimmer";
import PostRollRenderedArticle from "./postRollRenderedArticle";

const PostRollArticleHero = ({ post }) => {
  const authorDetails = useGetAuthorDetailsStatic(post.authors).first();
  const tagDetails = useGetPostTagDetailsStatic(post.tags);
  const { loaded: imgLoaded, error: imgError } = useFetchImageEffect(post.hero);
  const { loaded: authorImgLoaded, error: authorImgError } = useFetchImageEffect(authorDetails.profilePicture.src);

  if (authorImgError) {
    console.error(`Could not load author image (#${authorDetails.id})`);
  }

  if (imgError) {
    console.error(`Could not load hero image (#${post.id})`);
  }

  if ((imgLoaded || imgError) && (authorImgLoaded || authorImgError) && authorDetails && tagDetails) {
    return <PostRollRenderedArticle hero={true} post={post} author={authorDetails} tags={tagDetails.all()} />
  }

  return <PostRollArticleShimmer hero={true} />
}

export default PostRollArticleHero;
