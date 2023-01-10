import styled from "styled-components";
import { l_device, s_device } from "../../global";

export const ContainerPage = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  @media screen and (min-width: ${s_device}) and (max-width: ${l_device}) {
    flex-direction: column;
    width: 100vw;
    min-width: 300px;
  }
`

export const ContainerForm = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${s_device}) and (max-width: ${l_device}) {
    margin: 0;
  }
`