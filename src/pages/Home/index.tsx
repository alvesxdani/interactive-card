import { ContainerForm, ContainerPage } from "./style";
import { Cards } from "../../components/Cards";
import { BoxForm } from "../../components/BoxForms";
import { StyledInput } from "../../components/Input";
import { StyledLabel } from "../../components/Label";
import { StyledButton } from "../../components/Button";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import MaskedInput from "react-text-mask";
import { StyledToast } from "../../components/Toast";

interface Inputs {
  fullName: string;
  numberCard: string;
  dateExp: string;
  cvc: number;
}

const schema = yup.object().shape({
  fullName: yup
    .string()
    .required('O campo "Nome" é obrigatório')
    .matches(
      /(?=^.{2,60}$)^[A-ZÀÁÂĖÈÉÊÌÍÒÓÔÕÙÚÛÇ][a-zàáâãèéêìíóôõùúç]+(?:[ ](?:das?|dos?|de|e|[A-Z][a-z]+))*$/,
      "Nome inválido."
    ),
  numberCard: yup
    .string()
    .min(16,"O campo de cartão de crédito deve ter 16 dígitos.")
    .required('O campo "Número do cartão" é obrigatório.'),
  dateExp: yup
    .string()
    .required('O campo "Data de expiração" é obrigatório.')
    .min(4),
  cvc: yup.number().required('O Campo "CVC" é obrigatório.').min(3,'O campo "CVC" deve conter apenas 3 dígitos.'),
});




export function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Inputs) => {
    console.log(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <ContainerPage>
      <Cards />

      <ContainerForm>
        <BoxForm>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <StyledLabel>Nome completo:</StyledLabel>
              <input
                {...register("fullName")}
                onChange={(e) =>
                  setValue("fullName", e.target.value, {
                    shouldValidate: true,
                  })
                }
              />
            </div>

            <div className="row">
              <StyledLabel>Número do cartão:</StyledLabel>
              <MaskedInput
                mask={[
                  /[1-9]/,
                  /[1-9]/,
                  /[1-9]/,
                  /[1-9]/,
                  " ",
                  /[1-9]/,
                  /[1-9]/,
                  /[1-9]/,
                  /[1-9]/,
                  " ",
                  /[1-9]/,
                  /[1-9]/,
                  /[1-9]/,
                  /[1-9]/,
                  " ",
                  /[1-9]/,
                  /[1-9]/,
                  /[1-9]/,
                  /[1-9]/,
                ]}
                {...register("numberCard")}
                onChange={(e: any) =>
                  setValue("numberCard", e.target.value, {
                    shouldValidate: true,
                  })
                }
                placeholder="0000 0000 0000 0000"
              />
            </div>

            <div className="row2">
              <div className="row col">
                <StyledLabel>Data de expiração:</StyledLabel>
                <MaskedInput 
            mask={[/[1-9]/, /[1-9]/, '/', /[1-9]/, /[1-9]/ ]} 
            {...register("dateExp")}
            onChange={(e) =>
              setValue("dateExp", e.target.value, { shouldValidate: true })
            }
            placeholder="00/00"
          />
              </div>

              <div className="row col cvc">
                <StyledLabel>CVC:</StyledLabel>
              <input
                {...register("cvc")}
                onChange={(e) =>
                  setValue("cvc", Number(e.target.value), {
                    shouldValidate: true,
                  })
                }

                maxLength={3}
              />
              </div>
            </div>

            <div className="row">
              <StyledButton>Enviar</StyledButton>
            </div>

            <div className="row">
              {errors.fullName?.message && (
                <StyledToast children={errors.fullName?.message} />
              )}
            </div>

            <div className="row">
              {errors.numberCard?.message && (
                <StyledToast children={errors.numberCard?.message} />
              )}
            </div>

            <div className="row">
              {errors.dateExp?.message && (
                <StyledToast children={errors.dateExp?.message} />
              )}
            </div>

            <div className="row">
              {errors.cvc?.message && (
                <StyledToast children={errors.cvc?.message} />
              )}
            </div>
          </form>
        </BoxForm>
      </ContainerForm>
    </ContainerPage>
  );
}
