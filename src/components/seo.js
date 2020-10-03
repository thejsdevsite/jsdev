/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import useGetAuthorDetailsStatic from "../hooks/static/getAuthorDetailsStatic";
import useGetSiteLogoSrcStatic from "../hooks/static/getSiteLogoSrcStatic";

const SEO = ({ description, lang, meta, title = undefined, twitterCreator, location, heroImage, twitterDescription, publishedDate = undefined }) => {
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
            author {
              name
            }
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const path = (site.siteMetadata.siteUrl + location.pathname).trim("/");
  const metaTitle = title ? `${ title } - ${ defaultTitle }` : defaultTitle;
  const logo = useGetSiteLogoSrcStatic(false);

  const metaList = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: metaTitle,
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
      property: `og:image`,
      content: `${ site.siteMetadata.siteUrl }${heroImage || logo}`,
    },
    {
      property: `og:url`,
      content: path,
    },
    {
      name: `twitter:title`,
      content: metaTitle,
    },
    {
      name: `twitter:description`,
      content: twitterDescription || metaDescription,
    },
    {
      name: `twitter:card`,
      content: `summary_large_image`,
    },
    {
      name: `twitter:site`,
      content: `@${ site.siteMetadata.social.twitter }`,
    },
  ];

  if (twitterCreator) {
    metaList.push(
      {
        name: `twitter:creator`,
        content: `@${ authorDetails.social?.twitter }`,
      },
      {
        name: `author`,
        content: authorDetails.name,
      },
    );
  } else {
    metaList.push(
      {
        name: `twitter:creator`,
        content: `@${ site.siteMetadata.social.twitter }`,
      },
      {
        name: `author`,
        content: site.siteMetadata.author.name,
      },
    );
  }

  if (publishedDate) {
    metaList.push({
      name: `article:published_time`,
      content: publishedDate
    });
  }

  // Article screen
  if (location.pathname.substr(0, 7) === "/author") {
    if (heroImage) {
      metaList.push({
        name: `twitter:image`,
        content: `${ site.siteMetadata.siteUrl }${ heroImage }`,
      });
    } else if (location) {
      metaList.push({
        name: `twitter:image`,
        content: `${ path }/twitter-card.jpg`,
      });
    }
  } else {
    metaList.push({
      name: `twitter:image`,
      content: `${ site.siteMetadata.siteUrl }${logo}`,
    });
  }

  return (
    <Helmet
      htmlAttributes={ { lang } }
      title={ metaTitle }
      titleTemplate={ null }
      meta={ metaList.concat(meta) }
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  twitterCreator: PropTypes.string,
};

export default SEO;
