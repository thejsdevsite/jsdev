/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import useGetAuthorDetailsStatic from "../hooks/static/getAuthorDetailsStatic"

const SEO = ({ description, lang, meta, title, twitterCreator, location }) => {
  const authorDetails = useGetAuthorDetailsStatic(twitterCreator).first();
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  const metaList = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    }
  ];

  if (twitterCreator) {
    metaList.push(
      {
        name: `twitter:card`,
        content: `summary_large_image"`,
      },
      {
        name: `twitter:creator`,
        content: authorDetails.name || ``,
      },
      {
        name: `twitter:site`,
        content: `@${authorDetails.social?.twitter}` || `@thejsdevsite`
      }
    )
  }

  if (location) {
    metaList.push({
      name: `twitter:image`,
      content: `${site.siteMetadata.siteUrl}${location.pathname}/twitter-card.jpg`
    })
  }

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={metaList.concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  twitterCreator: PropTypes.string
}

export default SEO
