const palindrome = require('../src/palindrome').palindrome;
const normalize = require('../src/palindrome').normalize;
const expect = require('chai').expect;

describe('palindrome', () => {

  it('ignores case during comparisons', () => {
    expect(palindrome('raCecar')).to.eql(true);
  });

  it('ignores ponctuation for comparisons', () => {
    expect(palindrome('1 eye for of 1 eye.')).to.eql(false);
  });

  it('ignores underscore for comparisons', () => {
    expect(palindrome('_eye')).to.eql(true);
  });

  it('ignores whitespace for comparisons', () => {
    expect(palindrome('race car')).to.eql(true);
  });

  describe('normalize', () => {

    it('removes special characters', () => {
      expect(normalize(',#@$%ˆ&*() arroz')).to.eql('arroz')
    });

    it('replaces all characters with lowerCase version', () => {
      expect(normalize('ARROZ')).to.eql('arroz')
    });

    it('trims whitespaces', () => {
      expect(normalize('  ARROZ ')).to.eql('arroz')
    });

    it('removes whitespace', () => {
      expect(normalize('_eye')).to.eql('eye')
      expect(normalize('race car')).to.eql('racecar')
    });

  });

});

