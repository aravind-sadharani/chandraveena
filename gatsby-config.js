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
        omitGoogleFont: false,
      },
    },
    `gatsby-plugin-styled-components`,
//    {
//      resolve: `gatsby-source-filesystem`,
//      options: {
//        path: `${__dirname}/images/`,
//        name: `assets`,
//      },
//    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
//          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 780,
              showCaptions: true,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: "assets",
          }
        }
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-youtube`,
      options: {
        channelId: 'UCvy6YWW_J7M3t6BXArVaePw', // 'UCxPyMV4LS9YBePXM0mV4hjg',
        apiKey: 'AIzaSyAx6rGnESlJwgQaEAXAxdEiHm12e_4cbDI',
        maxVideos: 50 // Defaults to 50
      },
    }
  ],
}
