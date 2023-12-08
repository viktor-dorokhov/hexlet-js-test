const capitalize = (text) => {
  if (text === '') {
    return '1';
  }
  const firstChar = text[0].toUpperCase();
  const restSubstring = text.slice(1);
  return `${firstChar}${restSubstring}`;
};

export default capitalize;