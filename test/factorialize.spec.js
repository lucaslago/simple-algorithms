const expect = require('chai').expect;
const factorialize = require('../src/factorialize');

describe('factorialize', () => {

  it('should return a number', () => {
    expect(factorialize(5)).to.be.a.number;
  });

  it('should return "120" for input "5"', () => {
    expect(factorialize(5)).to.be.equal(120);
  });

  it('should return "3628800" for input "10"', () => {
    expect(factorialize(10)).to.be.equal(3628800);
  });
});
