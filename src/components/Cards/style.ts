import styled from "styled-components";
import CardFront from '../../assets/bg-card-front.png';
import CardBack from '../../assets/bg-card-back.png';

const cardSize = '350px';

export const Card1 = styled.div`
background: url('${CardFront}') no-repeat;
background-size: ${cardSize};
width: ${cardSize};
height: 245px;
transform: translateX(30%);
margin-bottom: 1rem;
`

export const Card2 = styled.div`
background: url('${CardBack}') no-repeat;
background-size: ${cardSize};
width: ${cardSize};
height: 245px;
transform: translateX(50%);
`