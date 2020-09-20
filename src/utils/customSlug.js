//const { getSlugDate } = require("./date");

exports.generateCustomPostSlug = ({ id, frontmatter, fields}) => {
  const { slug } = fields;
  const { authors } = frontmatter;

  return `/${authors[0]}/${slug.replace(/\//g,"")}-${id.substr(id.length-3, 3)}`;
}
