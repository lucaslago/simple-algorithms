const palindrome = (word) => {
  console.log(normalize(word))
  return normalize(word) === normalize(reversedWord(word));
};


const normalize = (word) => word.toLowerCase(word).replace(/[^\w\s]|(_| )/gi, '').trim();
const reversedWord = (word) => word.split('').reverse().join('');

module.exports = {
  palindrome,
  normalize
};
