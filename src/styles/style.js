import { createGlobalStyle } from "styled-components"
import InterFont from '../fonts/Inter.var.woff2'

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter var';
    font-display: swap;
    src: url(${InterFont}) format('woff2');
    font-weight: 100 900;
    font-style: normal;
    font-named-instance: 'Regular';
  }
`

export default FontStyles