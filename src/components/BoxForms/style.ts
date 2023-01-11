import styled from "styled-components";
import { l_device, s_device } from "../../global";

export const FormsContent = styled.div`
  width: 500px;
  margin-left: 10rem;

  .row {
    display: flex;
    flex-direction: column;
  }

  .row2 {
    display: flex;
    flex-direction: row;
    gap: 0.6rem;
  }

  .col {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 50%;

    label {
      flex: 100%;
    }

    input {
      max-width: 46%;
      margin: 0.2rem;
    }
  }

  input {
    ${(props) =>
      props.theme.title == "dark" ? "background: #eee1;" : "background: #fff;"}
    ${(props) =>
      props.theme.title == "dark"
        ? `border: 1px solid ${props.theme.colors.colorBG};`
        : `border: 1px solid ${props.theme.colors.lightGrey};`}
    font-family: ${props => props.theme.fonts.mainFont};
    padding: 0.8rem;
    border-radius: 5px;
    margin-bottom: 2rem;
    &:focus,
    &:hover {
      outline: none;
      border: 1px solid ${(props) => props.theme.colors.darkVioletGrey};
    }
  }

  .cvc {
    justify-content: left;
    input {
      max-width: 100%;
      flex: 1;
    }
  }

  @media screen and (min-width: ${s_device}) and (max-width: ${l_device}) {
    margin: 0 0 6rem 0;
  }
`;
