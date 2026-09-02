import { calc } from './';

// 1. Given the user input is empty when calculating the sum then it should return zero.
describe('when calculating an empty string', () => {
  it('should return zero', () => {
    expect(calc('')).toEqual(0);
  });
});

// 2. Given the user input is one number when calculating the sum then it should return the same number. (example "3" should equal 3)
describe('when calculating the sum it should return the same number if input is one number', () => {
  it('should return the same number', () => {
    expect(calc('3')).toEqual(3);
  })
})

// 3. Given the user input is two numbers when calculating the sum then it should return the sum of those numbers. (example "1,2" should equal 3)
describe("when calculating 2 number", () => {
  it("should return the sum of both numbers", () => {
    expect(calc("1,3")).toEqual(4)
  })
})

// 4. Given the user input is an unknown amount of numbers when calculating the sum then it should return the sum of all the numbers. (example "1,2,3" should equal 6)
describe("an unknown amount of numbers sum should be the total sum of all numbers", () => {
  it("should return the total sum of all numbers", () => {
    expect(calc("1,2,3")).toEqual(6)
  })
})

// 5. Given the user input is multiple numbers with new line and comma delimiters when calculating the sum then it should return the sum of all the numbers. (example "1\n2,3" should equal 6)
describe("when summing with a new line delimiter", () => {
  it("should return the sum of the numbers", () => {
    expect(calc("1\n2,3")).toEqual(6);
  })
})

// 6. Given the user input is multiple numbers with a custom single-character delimiter when calculating the sum then it should return the sum of all the numbers. (example “//;\n1;2” should return 3)
// 7. Given the user input contains one negative number when calculating the sum then it should throw an exception "negatives not allowed: x" (where x is the negative number).
// 8. Given the user input contains multiple negative numbers mixed with positive numbers when calculating the sum then it should throw an exception "negatives not allowed: x, y, z" (where x, y, z are only the negative numbers).
// 9. Given the user input contains numbers larger than 1000 when calculating the sum it should only sum the numbers less than 1001. (example 2 + 1001 = 2)
// 10. Given the user input is multiple numbers with a custom multi-character delimiter when calculating the sum then it should return the sum of all the numbers. (example: “//[***]\n1**_2_**3” should return 6)
// 11. Given the user input is multiple numbers with multiple custom delimiters when calculating the sum then it should return the sum of all the numbers. (example “//[\*][%]\n1\*2%3” should return 6)
