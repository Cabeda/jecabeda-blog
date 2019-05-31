import React from 'react'
import styled from 'styled-components'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

export class DarkModeToggler extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div class="wrap">
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            <div class="totoro">
              <div class="ears">
                <div class="ear" />
                <div class="ear" />
              </div>
              <div class="arm" />
              <div class="arm" />
              <div class="foot" />
              <div class="foot two" />
              <div class="body">
                <div class="spots" />
                <div class="inner">
                  <div class="mouth" />
                  <div class="eye" />
                  <div class="eye" />
                </div>
              </div>
            </div>
          </div>
        )}
      </ThemeToggler>
    )
  }
}
