const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { getIsoFormatDate } = require("./src/utils/date")
const { generateCustomPostSlug } = require("./src/utils/customSlug")

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createPages(graphql, actions, reporter);
  await createTagNodes(graphql, actions, reporter);
  await createAuthorNodes(graphql, actions, reporter);
}

const createPages = async (graphql, actions, reporter) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `{
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: {
            frontmatter: {
              published: { eq: true }
            }
          }
        ) {
          nodes {
            id
            fields {
              slug
            }
            timeToRead
            frontmatter {
              date(formatString: "DD MMM, YYYY")
              publishedDate(formatString: "DD MMM, YYYY")
              updatedDate(formatString: "DD MMM, YYYY")
              title
              authors
              posttags
              uid
            }
          }
        }
      }
    `);

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading the blog posts`, result.errors)
    return
  }

  const posts = result.data.allMarkdownRemark.nodes
  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1]
      const next = index === 0 ? null : posts[index - 1]

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          authors: post.frontmatter.authors,
          slug: post.fields.slug,
          previous,
          next,
        },
      })
    })
  }
}

const createTagNodes = async (graphql, actions, reporter) => {
  const { createPage } = actions;
  const result = await graphql(`
    query GetTagDetails {
      allTagsYaml(
        sort: {fields: [tag], order: ASC}
        ) {
        nodes {
          id
          tag
          fields {
            slug
          }
        }
      }
    }`);

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading the tags for creating page nodes`, result.errors)
    return
  }

  const tagPageTemplate = path.resolve(`./src/templates/tag.js`)
  const tags = result.data.allTagsYaml.nodes;
  tags.forEach(tag => {
    createPage({
      path: tag.fields.slug,
      component: tagPageTemplate,
      context: {
        slug: tag.fields.slug,
        tag: tag.tag
      },
    });
  });
};

const createAuthorNodes = async (graphql, actions, reporter) => {
  const { createPage } = actions;
  const result = await graphql(`
    query GetAuthorDetails {
      allAuthorYaml(
        sort: {fields: [id], order: ASC}
        ) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }`);

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading the authors for creating page nodes`, result.errors)
    return
  }

  const authorPageTempate = path.resolve(`./src/templates/author.js`)
  const authors = result.data.allAuthorYaml.nodes
  authors.forEach(author => {
    createPage({
      path: author.fields.slug,
      component: authorPageTempate,
      context: {
        slug: author.fields.slug,
        author: author.id
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const path = generateCustomPostSlug({
      id: node.frontmatter.uid,
      frontmatter: node.frontmatter,
      fields: {
        slug: value
      }
    });

    createNodeField({
      name: `slug`,
      node,
      value: path
    })
  }

  if (node.internal.type === `AuthorYaml`) {
    createNodeField({
      name: `slug`,
      node,
      value: `/a/${node.id}`
    })
  }

  if (node.internal.type === `TagsYaml`) {
    createNodeField({
      name: `slug`,
      node,
      value: `/t/${node.tag}`
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String!
      description: String!
      date: Date! @dateformat
      primaryAuthor: String!
      publishedDate: Date @dateformat
      updatedDate: Date @dateformat
      uid: String!
      published: Boolean!
      authors: [String!]
      tags: [String!]
    }

    type Fields {
      slug: String
    }
  `)
}
