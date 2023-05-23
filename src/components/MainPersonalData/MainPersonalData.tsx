import MainPersonalDataStyled from "./MainPersonalDataStyled";

interface PersonalDataProps {
  name: string;
  lastName: string;
  birthday: string;
  email: string;
  username: string;
}

const MainPersonalData = ({
  name,
  birthday,
  email,
  lastName,
  username,
}: PersonalDataProps): React.ReactElement => {
  return (
    <MainPersonalDataStyled>
      <ul>
        <li>
          NAME: <span>{name}</span>
        </li>
        <li>
          LAST NAME: <span>{lastName}</span>
        </li>
        <li>
          USERNAME: <span>{username}</span>
        </li>
        <li>
          BIRTHDAY: <span>{birthday}</span>
        </li>
        <li>
          EMAIL: <span>{email}</span>
        </li>
      </ul>
    </MainPersonalDataStyled>
  );
};

export default MainPersonalData;
