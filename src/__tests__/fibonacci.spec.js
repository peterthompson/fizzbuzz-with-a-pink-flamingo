import isFibonacci from "../fibonacci";

describe("fibonacci", () => {
  describe("isFibonacci", () => {
    it("should return true when the number is a Fibonacci number", () => {
      const numbers = [0, 1, 1, 2, 3, 5, 8, 13, 89];

      numbers.forEach(number => expect(isFibonacci(number)).toEqual(true));
    });

    it("should return false when the number is not a Fibonacci number", () => {
      const numbers = [4, 6, 7, 9, 10, 11, 12, 100];

      numbers.forEach(number => expect(isFibonacci(number)).toEqual(false));
    });
  });
});
