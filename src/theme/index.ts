import { CustomTheme, DefaultTheme } from "styled-components";
import dark from './dark';
import light from './light';

function combineTheme(theme: CustomTheme): DefaultTheme {
  return {...theme };
}

export { combineTheme, dark, light };