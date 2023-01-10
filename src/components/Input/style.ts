import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid ${props => props.theme.colors.lightGrey};
  padding: 0.8rem;
  &:focus, &:hover {
    outline: none;
    border: 1px solid ${props => props.theme.colors.lightGrey};
  }
`