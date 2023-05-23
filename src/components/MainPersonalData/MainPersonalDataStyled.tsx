import styled from "styled-components";

const MainPersonalDataStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  margin-inline: auto;
  gap: 35px;
  min-width: 260px;
  max-width: 500px;
  max-height: 650px;
  background-color: #ffe32c;
  box-shadow: rgb(52, 16, 87) 20px 20px 5px;

  li {
    margin-bottom: 30px;
    font-size: 35px;
    color: #5b2196;
  }

  span {
    font-size: 35px;
    color: #8d57c3;
  }
`;
export default MainPersonalDataStyled;
