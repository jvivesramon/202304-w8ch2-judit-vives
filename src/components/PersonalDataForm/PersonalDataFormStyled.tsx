import styled from "styled-components";

const PersonalDataFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-inline: auto;
  gap: 35px;
  min-width: 260px;
  max-width: 500px;
  max-height: 650px;
  background-color: #ffe32c;
  box-shadow: rgb(52, 16, 87) 20px 20px 5px;

  .data-title,
  span {
    font-size: 40px;
    color: #5b2196;
    text-align: center;
  }

  .checkbox {
    width: 32px;
    height: 32px;
    box-shadow: none;
    background-color: #5b2196;
    border: none;
  }

  input {
    background-color: #edc40d;
    box-shadow: rgb(209, 174, 18) 1em 1em 0em inset;
    color: rgb(130, 83, 177);
    padding: 15px;
    font-family: inherit;
    font-size: 25px;

    ::placeholder {
      color: rgb(130, 83, 177);
    }
  }

  .button-container {
    display: flex;
    justify-content: space-between;
  }

  button {
    width: 115px;
    padding: 20px;
    font-family: inherit;
    font-size: 25px;
    color: #ffe32c;
    box-shadow: rgb(209, 174, 18) 5px 5px 2px;
    background-color: #5b2196;
  }
`;
export default PersonalDataFormStyled;
