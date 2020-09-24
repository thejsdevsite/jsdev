export const MapPostsToTags = (posts) => {
  const tags = {};
  posts.forEach(post => {
    const tag = post.tags[0];
    if (!tags.hasOwnProperty(tag)) {
      tags[tag] = {
        posts: []
      }
    }

    tags[tag].posts.push(post);
  });

  return {
    map: () => tags,
    keys: () => Object.keys(tags)
  }
}