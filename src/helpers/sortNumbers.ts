const sortNumbers = (arrayNumbers: number[]): string => {
  const sortNumbers = arrayNumbers.sort((num1, num2) => num1 - num2);
  return sortNumbers.join(', ');
};

export default sortNumbers;