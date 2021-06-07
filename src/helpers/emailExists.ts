import IUser from '../Interfaces/IUser';

const emailExists = (users: IUser[], email: string) => {
  let exists = false;

  users.forEach((user) => {
    if (user.email === email) {
      exists = true;
    }
  });

  return exists;
};

export default emailExists;
