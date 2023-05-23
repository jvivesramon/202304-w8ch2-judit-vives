import PersonalDataFormStyled from "./PersonalDataFormStyled";

const PersonalDataForm = (): React.ReactElement => {
  return (
    <PersonalDataFormStyled autoComplete="off">
      <h2 className="data-title">LET US KNOW YOU!</h2>
      <input type="text" placeholder="NAME" />
      <input type="text" placeholder="LAST NAME" />
      <input type="date" placeholder="BIRTHDAY" />
      <input type="email" placeholder="EMAIL" />
      <div className="button-container">
        <button className="previous-button">PREVIOUS</button>
        <button className="next-buttton">NEXT</button>
      </div>
    </PersonalDataFormStyled>
  );
};

export default PersonalDataForm;
