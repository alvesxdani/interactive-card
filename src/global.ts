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
`

//Responsivity
// l_device = '1300px';
// m_device = '760px';
// s_device = '480px';