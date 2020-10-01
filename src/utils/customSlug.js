//const { getSlugDate } = require("./date");

exports.generateCustomPostSlug = ({ id, frontmatter, fields, published = true}) => {
  const { slug } = fields;
  const { authors } = frontmatter;
  const prefix = published ? "" : "draft-";

  return `/${authors[0]}/${prefix}${slug.replace(/\//g,"")}-${id.substr(id.length-3, 3)}`;
}
