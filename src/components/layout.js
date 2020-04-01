import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'
import "./layout.css"
import styled from 'styled-components';
import { DarkModeToggler } from '../components/DarkModeToggler/darkmodetoggler.component'

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'var(--textNormal)',
            }}
            to={'/'}
          >
            José Cabeda's Blog
          </Link>
        </h3>
      )

    
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Row>
        {header}
        <DarkModeToggler />
        </Row>
        {children}
      </div>
    )
  }
}

export default Template