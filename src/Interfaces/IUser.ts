import IBet from "./IBets";

interface IUser {
  id: number;
  username: string;
  email: string;
  bets: IBet[];
}

export default IUser;