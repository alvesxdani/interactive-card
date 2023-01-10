import { ContainerCards, ContainerForm, ContainerPage } from "./style";
import { Cards } from "../../components/Cards";
import { BoxForm } from "../../components/BoxForms";
import { StyledInput } from "../../components/Input";
import { StyledLabel } from "../../components/Label";

export function Home() {
  return (
    <ContainerPage>
      <ContainerCards>
        <Cards />
      </ContainerCards>

      <ContainerForm>
        <BoxForm>
          <div className="row">
            <StyledLabel>Nome completo:</StyledLabel>
            <StyledInput />
          </div>

          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
        </BoxForm>

      </ContainerForm>
    </ContainerPage>
  );
}
