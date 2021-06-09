const arrayToString = (array: number[]): string => {
  const string = array.map((number) => {
    return `${number}`.padStart(2, '0');
  }).join(', ');

  return string;
};

export default arrayToString;