export interface PersonalData {
  name: string;
  lastName: string;
  birthday: string;
  email: string;
  username: string;
  password?: string;
}

export interface PersonalDataProps extends PersonalData {
  isShowed: boolean;
}

export interface pagesStructure {
  personalDataState: boolean;
  accesFormState: boolean;
  loginFormState: boolean;
  mainDataState: boolean;
}
