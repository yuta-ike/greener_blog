import { AppProps } from 'next/app'
import React from 'react'
import BlogHeader from '~/view/components/organizms/BlogHeader/BlogHeader'
import '../styles/globals.css'
import { ThemeProvider } from 'emotion-theming'
import Head from 'next/head'
import { themeBuilder } from '~/view/theme/theme'
import { Global } from '@emotion/core'
import globalStyle from '~/styles/globalStyle'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={{ ...themeBuilder('light') }}>
      <Head>
        <title>frourio-todo-app</title>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Global styles={globalStyle} />
      <BlogHeader />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
