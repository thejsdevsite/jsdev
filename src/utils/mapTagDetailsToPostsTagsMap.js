export const MapTagDetailstoPostsTagsMap = (tagsMap, tagDetails) => {
  const map = tagsMap.map();
  const keys = tagsMap.keys();

  tagDetails
    .all()
    .forEach(tag => {
      if (keys.includes(tag.id)) {
        map[tag.id].details = tag;
      }
    })

  return {
    toArray: () => tagsMap.keys().map(key => map[key]),
    data: { ...tagsMap.map() }
  };
}