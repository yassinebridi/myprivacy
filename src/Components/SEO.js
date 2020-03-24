import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

const SEO = ({
  title,
  description,
  titleTemplate,
  image,
  pathname,
  article
}) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultTemplate,
          defaultDescription,
          siteUrl,
          defaultImage
        }
      }
    }) => {
      const seo = {
        title: title || defaultTitle,
        titleTemplate: titleTemplate || defaultTemplate,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || "/"}`
      };
      return (
        <>
          <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
              <meta property="og:type" content="article" />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
          </Helmet>
        </>
      );
    }}
  />
);

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultTemplate: titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`;
