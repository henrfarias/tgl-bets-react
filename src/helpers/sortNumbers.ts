const sortNumbers = (arrayNumbers: number[]): number[] => {
  const sortNumbers = arrayNumbers.sort((num1, num2) => num1 - num2);
  return sortNumbers;
};

export default sortNumbers;