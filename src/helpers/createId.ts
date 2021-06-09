const createId = (): number => {
  const id = Math.floor(Math.sqrt((Math.random() * Date.now()) * Math.pow(10, 10)));
  return id;
};

export default createId;
