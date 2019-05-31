import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => ({
  a: {
    color: 'var(--textLink)',
  },

  // gatsby-remark-autolink-headers - don't underline when hidden
  'a.anchor': {
    boxShadow: 'none',
  },
  // gatsby-remark-autolink-headers - use theme colours for the link icon
  'a.anchor svg[aria-hidden="true"]': {
    stroke: 'var(--textLink)',
  },

  h1: {
    color: 'var(--textTitle)',
  },
  h2: {
    color: 'var(--textTitle)',
  },
  h3: {
    color: 'var(--textTitle)',
  },
  code: {
    color: 'var(--textTitle)'
  },
  li: {
    color: 'var(--textNormal)',
  },
  p: {
    color: 'var(--textNormal)',
  },
  small: {
    color: 'var(--textNormal)',
  },
  hr: {
    background: 'var(--hr)',
  },
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
})

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016);
const { rhythm, scale } = typography;

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export { rhythm, scale, typography as default };

