import React from "react"
import Helmet from "react-helmet"

const FacebookCard = ({url, type, title, description, image}) => (
  <Helmet>
    {url && <meta property="og:url" content={url} />}
    {type && <meta property="og:type" content={type} />}
    {title && <meta property="og:title" content={title} />}
    {description && <meta property="og:description" content={description} />}
    {image && <meta property="og:image" content={image} />}
  </Helmet>
)

const TwitterCard = ({username, type, title, description, image}) => (
  <Helmet>
    <meta name="twitter:card" content={type} />
    {username && <meta name="twitter:creator" content={username} />}
    {title && <meta name="twitter:title" content={title} />}
    {description && <meta name="twitter:description" content={description} />}
    {image && <meta name="twitter:image" content={image} />}
  </Helmet>
)

const SEOMetaData = ({username, url, type, title, description, image}) => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
    </Helmet>
    <FacebookCard
      url = {url}
      type = {type}
      title = {title}
      description = {description}
      image = {image}
    />
    <TwitterCard
      username = {username}
      type = {type}
      title = {title}
      description = {description}
      image = {image}
    />
  </>
)

export default SEOMetaData
