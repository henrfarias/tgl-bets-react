import IBet from "./IBets";

interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  history: IBet[];
}

export default IUser;