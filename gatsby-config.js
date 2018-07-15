module.exports = {
  siteMetadata: {
    title: "Chandraveena",
    author: "S. Balachander",
    designer: {
      "name": "Aravind Iyer",
      "url": "https://www.aravindiyer.com"
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
