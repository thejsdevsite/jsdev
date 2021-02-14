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
      content: site.siteMetadata.siteUrl + location.pathname,
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
    const twitterCard = site.siteMetadata.siteUrl + location.pathname + "/twitter-card.jpg";
    metaList.splice(metaList.findIndex(item => item.property === "og:image"), 1);
    metaList.push(
      {
        name: `twitter:creator`,
        content: `@${ authorDetails.social?.twitter }`,
      },
      {
        name: `author`,
        content: authorDetails.name,
      },
      {
        property: `og:image`,
        content: twitterCard
      },
      {
        name: `twitter:image`,
        content: twitterCard,
      }
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

  // Assign twitter card
  if (!metaList.find(item => item.name === "twitter:image")) {
    if (location.pathname.substr(0, 8) === "/author/") {
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
    } else if (["/a/", "/t/"].includes(location.pathname.substr(0, 3))) {
      metaList.push({
        name: `twitter:image`,
        content: `${ site.siteMetadata.siteUrl }${logo}`,
      });
    } else if (location.pathname.trim("/") === "tags" || location.pathname.trim("/") === "authors") {
      metaList.push({
        name: `twitter:image`,
        content: `${ site.siteMetadata.siteUrl }${logo}`,
      });
    } else {
      metaList.push({
        name: `twitter:image`,
        content: `${ site.siteMetadata.siteUrl }${heroImage || logo}`,
      });
    }
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
