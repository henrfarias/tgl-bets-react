import IUser from '../Interfaces/IUser';

const emailExists = (users: IUser[], email: string) => {
  let name = '';

  users.forEach((user) => {
    if (user.email === email) {
      name = user.name;
    }
  });

  return name;
};

export default emailExists;
