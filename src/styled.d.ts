import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primaryColor: string;
      white: string;
      darkVioletGrey: string;
      lightGrey: string;
      colorBG: string;
      colorText: string;
    },

    fonts: {
      mainFont: string;
    };
  }

  export interface CustomTheme {
    title: string;
    colors: {
      primaryColor: string;
      white: string;
      darkVioletGrey: string;
      lightGrey: string;
      colorBG: string;
      colorText: string;
    },

    fonts: {
      mainFont: string;
    };
  }
}


