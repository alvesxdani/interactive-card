import { Children, useState } from "react";
import { DefaultTheme } from "styled-components";
import { combineTheme, dark, light } from "../../theme";
import Switch from 'react-switch';
import { SwitchContent } from "./style";

type Props = {
  children: JSX.Element;
}

export const SwitchBox = ({ children }: Props) => {

  return (
    <SwitchContent>
      {children}
    </SwitchContent>
  )

}