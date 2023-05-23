import PersonalDataFormStyled from "../PersonalDataForm/PersonalDataFormStyled";

const LoginForm = (): React.ReactElement => {
  return (
    <PersonalDataFormStyled>
      <h2 className="data-title">HEY!</h2>
      <span>LOGIN?</span>
      <input type="text" placeholder="USERNAME" />
      <input type="password" placeholder="PASSWORD" />
      <input type="password" placeholder="REMEMBER PASSWORD" />
      <input type="checkbox" id="password" className="checkbox" />
      <div className="button-container">
        <button className="next-buttton">LOGIN</button>
      </div>
    </PersonalDataFormStyled>
  );
};

export default LoginForm;
