import contentBG from '../../assets/bg-main-desktop.png';
import styled from "styled-components";

export const ContainerPage = styled.div`
display: flex;
width: 100%;
height: 100vh;
`

export const ContainerCards = styled.div`
background: url('${contentBG}') no-repeat;
background-size: auto 100vh;
display: flex;
align-items: center;
width: 480px;
height: 100vh;
`

export const ContainerForm = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`