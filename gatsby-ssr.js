import React from 'react'
import InterFont from './src/fonts/Inter.var.woff2'

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="interFont"
      rel="preload"
      href={InterFont}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />
  ])
}