// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesarModule()", () => {
  it("should return false if shift is 0, less than -25, or greater than 25", () => {
    const actual = caesar("abcd", 30, true);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("should return correctly encrypted letters when encoded = true", () => {
    const actual = caesar("abcd", 1, true);
    const expected = "bcde";
    expect(actual).to.equal(expected);
  });
  it("should return correctly encrypted letters when encoded = true AND shift is negative", () => {
    const actual = caesar("abcd", -2, true);
    const expected = "yzab";
    expect(actual).to.equal(expected);
  });
  it("should return correctly decrypted letters when encoded = false", () => {
    const actual = caesar("bcde", 1, false);
    const expected = "abcd";
    expect(actual).to.equal(expected);
  });
  it("should return correct encryption even when shift exceeds alphabet limit (z + 1 = a)", () => {
    const actual = caesar("zzzz", 1, true);
    const expected = "aaaa";
    expect(actual).to.equal(expected);
  });
  it("should return strings with symbols and spaces correctly", () => {
    const actual = caesar("a a a.", 1, true);
    const expected = "b b b.";
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters properly", () => {
    const actual = caesar("ABCD", 1, true);
    const expected = "bcde";
    expect(actual).to.equal(expected);
  });
});
