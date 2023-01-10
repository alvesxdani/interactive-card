import styled from "styled-components";

export const Input = styled.input`
  ${props => props.theme.title == 'dark' ? 'background: #eee1;' : 'background: #fff;'}
  ${props => props.theme.title == 'dark' ? 
  `border: 1px solid ${props.theme.colors.colorBG};` : `border: 1px solid ${props.theme.colors.lightGrey};`}
  padding: 0.8rem;
  border-radius: 5px;
  margin-bottom: 2rem;
  &:focus, &:hover {
    outline: none;
    border: 1px solid ${props => props.theme.colors.darkVioletGrey};
  }
`