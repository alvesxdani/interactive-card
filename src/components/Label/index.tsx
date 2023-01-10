import { Label } from "./style"


type Props = {
  children: string
}

export const StyledLabel = ({ children }: Props) => {
  return(
    <Label>
      {children}
    </Label>
  )
}