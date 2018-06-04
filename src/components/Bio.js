import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(3),
            height: rhythm(3),
            borderRadius: '50%'
          }}
        />
        <p>
         Hi there! I'm <strong>José Cabeda</strong>, a software developer writing a line of code at a time (when not travelling or reading some science fiction book)  {' '}
          <a href="https://m.me/jecabeda">
            Text me on Messenger
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
