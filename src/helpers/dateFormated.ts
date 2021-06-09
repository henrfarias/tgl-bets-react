const dateFormated = (ISOSString: string) => {
  const date = new Date(ISOSString)
  const day = `${date.getDate()}`;
  const month = `${date.getMonth()}`;
  const year = `${date.getFullYear()}`;

  return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
};

export default dateFormated;