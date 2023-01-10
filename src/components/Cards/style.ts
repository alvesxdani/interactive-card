import styled from "styled-components";
import CardFront from '../../assets/bg-card-front.png';
import CardBack from '../../assets/bg-card-back.png';
import contentBG from '../../assets/bg-main-desktop.png';

const cardSize = '330px';

export const ContainerCards = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: url('${contentBG}') no-repeat;
background-size: auto 100vh;
width: 400px;
height: 100vh;
border: 1px solid #000;
`

export const Card1 = styled.div`
background: url('${CardFront}') no-repeat;
background-size: ${cardSize};
width: ${cardSize};
height: 180px;
margin: 2rem;
transform: translateX(50%);
`

export const Card2 = styled.div`
background: url('${CardBack}') no-repeat;
background-size: ${cardSize};
width: ${cardSize};
height: 180px;
margin: 2rem;
transform: translateX(70%);
`