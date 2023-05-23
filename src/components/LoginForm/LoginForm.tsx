import PersonalDataFormStyled from "../PersonalDataForm/PersonalDataFormStyled";

const LoginForm = (): React.ReactElement => {
  return (
    <PersonalDataFormStyled>
      <h2 className="data-title">JOIN US.</h2>
      <span>REGISTER NOW!</span>
      <input type="text" placeholder="USERNAME" />
      <input type="password" placeholder="PASSWORD" />
      <input type="password" placeholder="REPEAT PASSWORD" />
      <div className="button-container">
        <button className="next-buttton">SUBMIT</button>
      </div>
    </PersonalDataFormStyled>
  );
};

export default LoginForm;
