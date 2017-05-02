const findLongestWord = (words) => {
  return words.reduce((longestWord, currentWord) => {
    return longestWord.length < currentWord.length ? currentWord : longestWord;
  }, words[0]);
};

const longestWordLength = (string) => {
  const words = string.split(' ');
  const longestWord = findLongestWord(words);
  return longestWord.length
};

module.exports = { longestWordLength };
