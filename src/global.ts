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
    background: ${props => props.theme.colors.colorBG};
    color: ${props => props.theme.colors.colorText};
    font-family: '${props => props.theme.fonts.mainFont}', serif;
  }

  html, body  {
    min-height: 100%;
  }
`

//Responsivity
export const l_device = '1250px';
export const m_device = '760px';
export const s_device = '200px';