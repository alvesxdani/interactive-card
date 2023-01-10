import styled from "styled-components";

export const SubmitButton = styled.button`
  background: ${props => props.theme.colors.primaryColor};
  color: #fff;
  font-family: '${props => props.theme.fonts.mainFont}', serif;
  text-transform: uppercase;
  margin-top: 1rem;
  ${props => props.theme.title === 'dark' ? 'border: 1px solid #1d1d1d;' : 'border: 1px solid #eee;'}
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: .2s ease-in;

  &:hover {
    filter: brightness(150%);
    font-weight: normal;
  }
`