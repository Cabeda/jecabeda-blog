import React from 'react'
import styled from 'styled-components'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

export class DarkModeToggler extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div className="wrap">
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            <div className="totoro">
              <div className="ears">
                <div className="ear" />
                <div className="ear" />
              </div>
              <div className="arm" />
              <div className="arm" />
              <div className="foot" />
              <div className="foot two" />
              <div className="body">
                <div className="spots" />
                <div className="inner">
                  <div className="mouth" />
                  <div className="eye" />
                  <div className="eye" />
                </div>
              </div>
            </div>
          </div>
        )}
      </ThemeToggler>
    )
  }
}
