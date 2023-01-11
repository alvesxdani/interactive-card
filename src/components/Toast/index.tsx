import { ToastContainer } from "./style";

type Props = {
  children: string;
}

export const StyledToast = ({ children }: Props) => {
  return (
    <ToastContainer>
      {children}
    </ToastContainer>
  )
}