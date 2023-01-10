import styled, { ThemeContext, ThemeProvider } from "styled-components";
import { combineTheme } from "../../theme";

export const Label = styled.label`
  color: ${props => props.theme.colors.colorText};
  font-weight: bold;
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-bottom: 10px;
`