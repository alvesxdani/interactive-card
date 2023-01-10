import { SubmitButton } from "./style"

type Props = {
  children: string;
}

export const StyledButton = ({ children }: Props) => {
  return(
    <SubmitButton type="submit"> {children} </SubmitButton>
  )
}