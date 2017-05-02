const firstLetterToUpCase = (word) => {
  const capitalizedFirstLetter = word[0].toUpperCase();
  const remainingLetters = word.substr(1, word.length - 1).toLowerCase();
  return `${capitalizedFirstLetter}${remainingLetters}`;
};

const titleCase = (str, SEPARATOR = ' ') => {
  return str.split(SEPARATOR)
    .map(w => firstLetterToUpCase(w))
    .join(SEPARATOR)
};

module.exports = {titleCase}
