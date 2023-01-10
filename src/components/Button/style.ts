import styled from "styled-components";

export const SubmitButton = styled.button`
  ${props => props.theme.title === 'dark' ? 'border: 1px solid #1d1d1d;' : 'border: 1px solid #eee;'}
  ${props => props.theme.title === 'dark' ? `background: ${props.theme.colors.lightGrey};` : `background: ${props.theme.colors.primaryColor};`}
  ${props => props.theme.title === 'dark' ? `color: ${props.theme.colors.primaryColor};` : `color: #fff;`}
  /* color: ${props => props.theme.colors.primaryColor}; */
  font-family: '${props => props.theme.fonts.mainFont}', serif;
  text-transform: uppercase;
  font-weight: bolder;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: .2s ease-in;

  &:hover {
    box-shadow: 2px 2px 0 1px ${props => props.theme.colors.lightGrey};
  }
`