module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-chakra-ui",
      options: {
        isResettingCSS: true, // optional, default to true
        isUsingColorMode: true // optional, default to true
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
    }`gatsby-plugin-styled-components`
  ]
};
