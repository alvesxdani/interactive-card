import { FormsContent } from "./style";

type Props = {
  children: JSX.Element
}

export const BoxForm = ({ children }: Props) => {
  return(
    <FormsContent>
      {children}
    </FormsContent>
  )
}