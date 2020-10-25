import React from 'react'
import Layout from '../components/layout'
import Link from 'gatsby-link'

export default function NotFoundPage ({location}) {
  return (

    <Layout location={location}>
    <h1>NOT FOUND</h1>
    <p>You just found a void... Please turn back or go to the &nbsp;
    <Link to="/">
    beginning of times
    </Link>...</p>
    </Layout>
    
    )
}

