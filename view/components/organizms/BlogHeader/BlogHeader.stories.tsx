import { ThemeProvider } from 'emotion-theming'
import React from 'react'
import { themeBuilder } from '../../../theme/theme'
import BlogHeader from './BlogHeader'

export default {
  title: 'BlogHeader',
  component: BlogHeader
}

export const LightThemeBlogHeader = () => (
  <ThemeProvider theme={themeBuilder('light')}>
    <BlogHeader />
  </ThemeProvider>
)
