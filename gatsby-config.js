require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Chandraveena",
    siteUrl: `https://goofy-lewin-6d9bef.netlify.com`,
    author: "S. Balachander",
    description: "Chandraveena is a contemporary string instrument based on the Saraswati Veena, a traditional Indian string instrument. Balachander, an Indian classical musician and multi-instrumentalist, is the creator and performing artist of the Chandraveena. Balachander plays the Chandraveena in the Dhrupad style, a traditional style of Maarga Sangeet. Maarga Sangeet is an ancient yet timeless tradition of Indian Classical music. It is a way of life where music becomes the artist's medium of communication.",
    twitterUsername: "chandra_veena",
    designer: {
      "name": "Aravind Iyer",
      "url": "https://www.aravindiyer.com"
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chandraveena by S. Balachander`,
        short_name: `Chandraveena`,
        start_url: `/`,
        background_color: `#e1dbdd`,
        theme_color: `#542938`,
        display: `standalone`,
        icon: `images/Favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: false,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/images/`,
        name: `assets`,
      },
    },
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
          `gatsby-remark-relative-images`,
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
        channelId: ['UCvy6YWW_J7M3t6BXArVaePw', 'UCuS4qFPMqowcEiRv6cUy4sQ'], // 'UCxPyMV4LS9YBePXM0mV4hjg',
        apiKey: process.env.YOUTUBE_API_KEY,
        maxVideos: 50 // Defaults to 50
      },
    },
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-115949882-2",
      },
    },
  ],
}
