import styled from "styled-components";

export const FormsContent = styled.div`
  width: 500px;

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

.cvc {
  justify-content: left;
    input {
      max-width: 100%;
      flex: 1;
    }
  }
`