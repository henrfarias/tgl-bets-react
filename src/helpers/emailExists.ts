import IUser from '../Interfaces/IUser';

const emailExists = (users: IUser[], email: string) => {
  let name = '';
  let id = 0;

  users.forEach((user) => {
    if (user.email === email) {
      name = user.name;
      id = user.id;
    }
  });

  return {name, id};
};

export default emailExists;
