import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Space Grotesk',serif;
  }
`

//Responsivity
export const l_device = '1300px';
export const m_device = '760px';
export const s_device = '480px';