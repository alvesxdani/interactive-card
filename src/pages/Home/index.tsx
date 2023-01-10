import { ContainerCards, ContainerForm, ContainerPage } from "./style";
import { Cards } from "../../components/Cards";

export function Home() {
  return (
    <ContainerPage>
      <ContainerCards>
        <Cards />
      </ContainerCards>

      <ContainerForm>Teste</ContainerForm>
    </ContainerPage>
  );
}
