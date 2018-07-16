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
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              // ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              // height: 600, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              // noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
            },
          },
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
  ],
}
