const { titleCase } = require('../src/title_case');
const expect = require('chai').expect;

describe('titleCase', () => {

  it('returns a given string with the first letter of each word capitalized', () => {
    expect(titleCase("I'm a little tea pot")).to.eql("I'm A Little Tea Pot");
    expect(titleCase("sHoRt AnD sToUt")).to.eql('Short And Stout');
    expect(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")).to.eql('Here Is My Handle Here Is My Spout');
  });
});
