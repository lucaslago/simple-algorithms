const expect = require('chai').expect;
const longestWordLength = require('../src/longest_word').longestWordLength;

describe('longestWordLength', () => {
  it('returns the length of the longest word in a given string', () => {
    const firstInput = 'The quick brown fox jumped over the lazy dog';
    const secondInput = 'O rato roeu a roupa do rei de roma'; 
    expect(longestWordLength(firstInput)).to.eql(6);
    expect(longestWordLength(secondInput)).to.eql(5);
  });
});

