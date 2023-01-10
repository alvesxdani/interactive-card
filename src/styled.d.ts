import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primaryColor: string;
      white: tring;
      darkVioletGrey: string;
      colorBG: string;
      colorText: string;
    };
  }

  export interface CustomTheme {
    title: string;
    colors: {
      primaryColor: string;
      white: tring;
      darkVioletGrey: string;
      colorBG: string;
      colorText: string;
    };
  }
}


