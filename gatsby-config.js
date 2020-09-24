module.exports = {
  siteMetadata: {
    title: `JS.dev`,
    author: {
      name: `Justin Mitchell`,
      summary: `Tinkering in all sort of JS shenanigans`,
    },
    description: `A community for JS driven information sharing`,
    siteUrl: `https://thejs.dev`,
    social: {
      twitter: `thejsdev`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve:"@weknow/gatsby-remark-codepen",
            options: {
              theme: "dark",
              height: 400
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: "@weknow/gatsby-remark-twitter",
            options: {
              align: "center",
              hideThread: true
            }
          },
          {
            resolve: `gatsby-remark-social-cards`,
            options: {
              title: {
                title: "title",
                font: "DejaVuSansCondensed",
                color: "black",
                size: 32,
                style: "bold"
              },
              meta: {
                parts: [
                  { field: "primaryAuthor" },
                  " » ",
                  { field: "publishedDate", format: "mmmm dS" },
                ],
                font: "DejaVuSansCondensed",
                color: "black",
                size: 16,
                style: "bold"
              },
              background: "#FFF",
              xMargin: 12,
              yMargin: 24
            }
          }
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-97049606-4`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JS.dev`,
        short_name: `JS.dev`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/jsdev-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `data`,
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          camelCase: false,
        }
      }
    },
    {
      resolve: `gatsby-plugin-apollo`,
      options: {
        uri: '/__graphql'
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
  ],
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorYaml`,
    "MarkdownRemark.frontmatter.tags": `TagsYaml`
  }
}
