import styled from "styled-components";
import CardFront from '../../assets/bg-card-front.png';
import CardBack from '../../assets/bg-card-back.png';

export const Card1 = styled.div`
background: url('${CardFront}') no-repeat;
width: 447px;
height: 245px;
transform: translateX(30%);
margin-bottom: 2rem;
`

export const Card2 = styled.div`
background: url('${CardBack}') no-repeat;
width: 447px;
height: 245px;
transform: translateX(50%);
`