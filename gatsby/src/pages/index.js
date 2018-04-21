import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <p>user@stanleyarmstrong.com:~$ls </p>
    <Link to="/page-2/">bio </Link>
    <Link to= "/smhacks/"> smhacks </Link>
    <Link to= "/project-descriptions/"> projects </Link>
  </div>
)

export default IndexPage
