import PersonalDataForm from "../PersonalDataForm/PersonalDataForm";
import AppStyled from "./AppStyled";

const App = (): JSX.Element => {
  return (
    <AppStyled>
      <h1 className="main-title">GIVE US YOUR IDENTITY FOR FREE</h1>
      <span className="main-info">
        THE PERFECT APP TO SATISFY THE INHERENT NEED TO SHARE OUR DATA FOR
        NOTHING
      </span>
      <PersonalDataForm />
    </AppStyled>
  );
};

export default App;
