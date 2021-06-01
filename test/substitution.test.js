// Write your tests here!
const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitutionModule()", () => {
  it("should return false if there is no alphabet", () => {
    const actual = substitution("oops");
    expect(actual).to.equal(false);
  });
  it("should return false if alphabet is != 26", () => {
    const alphabet = "slekxjalscjeklso";
    const actual = substitution("nothing", alphabet);
    expect(actual).to.equal(false);
  });
  it("should return false if alphabet has duplicate characters", () => {
    const alphabet = "aldichensldkeorbfjahdkeifu";
    const actual = substitution("blah blah", alphabet);
    expect(actual).to.equal(false);
  });
  it("should return correctly encrypted string when encoding = true", () => {
    const alphabet = "mnopqrstuvwxyzabcdefghijkl";
    const actual = substitution("abcd", alphabet, true);
    const expected = "mnop";
    expect(actual).to.equal(expected);
  });
  it("should return correctly decrypted string when encoding = false", () => {
    const alphabet = "mnopqrstuvwxyzabcdefghijkl";
    const actual = substitution("mnop", alphabet, false);
    const expected = "abcd";
    expect(actual).to.equal(expected);
  });
  it("should return correctly encrypted string including spaces", () => {
    const alphabet = "mnopqrstuvwxyzabcdefghijkl";
    const actual = substitution("ab c d", alphabet, true);
    const expected = "mn o p";
    expect(actual).to.equal(expected);
  });
});
