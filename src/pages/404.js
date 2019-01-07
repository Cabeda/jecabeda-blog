import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div>
    <h1>NOT FOUND</h1>
    <p>You just found a void... Please turn back or go to the &nbsp;
      <Link to="/">
      beginning of times
      </Link>...</p>
  </div>
)

export default NotFoundPage
