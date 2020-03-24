const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: "MyPrivacy",
    titleTemplate: "%s | MyPrivacy, smarter, more secure safe lock",
    description:
      "MyPrivacy, the one and the only solution you need, to maximize the security of your locks.",
    url: "https://my-privacy.tech",
    image: "/images/imageSEO.png"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-chakra-ui",
      options: {
        isResettingCSS: true, // optional, default to true
        isUsingColorMode: false // optional, default to true
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Libre Baskerville`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: "swap"
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://gmail.us4.list-manage.com/subscribe/post?u=7bdb87b3e14d7c000ee3da176&amp;id=7cefd01f03"
      }
    },
    `gatsby-plugin-styled-components`
  ]
};
