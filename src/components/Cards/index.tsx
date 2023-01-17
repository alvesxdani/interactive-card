import { Card1, Card2, ContainerCards } from "./style";

type Props = {
  children: JSX.Element;
}

export const Cards = ({ children }: Props) => {
  return (
    <ContainerCards>
      <Card1 children={children}/>
      <Card2 />
    </ContainerCards>
  )
}