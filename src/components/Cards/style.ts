import styled from "styled-components";
import CardFront from "../../assets/bg-card-front.png";
import CardBack from "../../assets/bg-card-back.png";
import contentBG from "../../assets/bg-main-desktop.png";
import { l_device, s_device } from "../../global";

const cardSizeL = "330px";
const cardSizeS = "270px";

export const ContainerCards = styled.div`
  background: url("${contentBG}") no-repeat;
  background-size: auto 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 100vh;

  @media screen and (min-width: ${s_device}) and (max-width: ${l_device}) {
    width: 100vw;
    height: 150px;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    background-size: 100% auto;
    margin-bottom: 10rem;
  }
`;

export const Card1 = styled.div`
  background: url("${CardFront}") no-repeat;
  background-size: ${cardSizeL};
  width: ${cardSizeL};
  height: 180px;
  margin: 2rem;
  transform: translateX(50%);
  @media screen and (min-width: ${s_device}) and (max-width: ${l_device}) {
    background-size: ${cardSizeS};
    width: ${cardSizeS};
    height: 150px;
    margin: 0;
    transform: translateX(0);
    transform: translateY(20%);
  }
`;

export const Card2 = styled(Card1)`
  background: url("${CardBack}") no-repeat;
  background-size: ${cardSizeL};
  transform: translateX(70%);
  @media screen and (min-width: ${s_device}) and (max-width: ${l_device}) {
    background-size: ${cardSizeS};
    width: ${cardSizeS};
    height: 150px;
    margin: 0;
    transform: translateX(0);
    transform: translateY(50%);
  }
`;
