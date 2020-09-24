import { Link } from "gatsby";
import React from "react";
import useGetPostsStatic from "../../hooks/static/getPostsStatic";
import useGetPostTagDetailsStatic from "../../hooks/static/getPostTagDetailsStatic";
import { MapPostsToTags } from "../../utils/mapPostsToTags";
import { MapTagDetailstoPostsTagsMap } from "../../utils/mapTagDetailsToPostsTagsMap";
import RenderSidebarTags from "../sidebar/renderSidebarTags";

const SidebarRecent = () => {
  const posts = useGetPostsStatic(25);
  const postTagMap = MapPostsToTags(posts);
  const tagDetails = useGetPostTagDetailsStatic(postTagMap.keys());
  const tagsPosts = MapTagDetailstoPostsTagsMap(postTagMap, tagDetails);
  console.log(tagsPosts.toArray());

  const list = tagsPosts
    .toArray()
    .map(node => <RenderSidebarTags key={`sidebar-tag-group-${node.details.id}`} tagMap={node} />)

  return (
    <aside className="side-bar sidebar-additional grid gap-4" aria-label="Secondary sidebar">
      { list}
    </aside>
  )
}

export default SidebarRecent;