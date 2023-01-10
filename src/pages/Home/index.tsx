import { ContainerForm, ContainerPage } from "./style";
import { Cards } from "../../components/Cards";
import { BoxForm } from "../../components/BoxForms";
import { StyledInput } from "../../components/Input";
import { StyledLabel } from "../../components/Label";
import { StyledButton } from "../../components/Button";

export function Home() {
  return (
    <ContainerPage>

        <Cards />

      <ContainerForm>
        <BoxForm>
          <form>
            <div className="row">
              <StyledLabel>Nome completo:</StyledLabel>
              <StyledInput />
            </div>

            <div className="row">
              <StyledLabel>Número do cartão:</StyledLabel>
              <StyledInput />
            </div>

            <div className="row2">
              <div className="row col">
                <StyledLabel>Data de expiração:</StyledLabel>
                <StyledInput />
                <StyledInput />
              </div>

              <div className="row col cvc">
                <StyledLabel>CVC:</StyledLabel>
                <StyledInput />
              </div>
            </div>

            <div className="row">
              <StyledButton>Enviar</StyledButton>
            </div>
          </form>
        </BoxForm>
      </ContainerForm>
    </ContainerPage>
  );
}
