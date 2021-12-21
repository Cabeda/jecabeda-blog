import React from 'react'
import Layout from '../components/layout'
import Link from 'gatsby-link'
import GIF from './resources/harry-potter-things.gif'

export default function NotFoundPage ({location}) {
  return (

    <Layout location={location}>
    <h1>NOT FOUND</h1>
    <img src={GIF} alt="Luna and Harry Potter things"></img>
    </Layout>
    
    )
}

