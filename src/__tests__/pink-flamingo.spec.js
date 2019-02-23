import pinkFlamingo from "../pink-flamingo";

describe("pink-flamingo", () => {
  describe("Fibonacci number", () => {
    it("should return Flamingo when the number is not a multiple of three and five", () => {
      const numbers = [0, 1, 1, 2, 8, 13, 21, 34, 55, 89];

      numbers.forEach(number =>
        expect(pinkFlamingo(number)).toEqual("Flamingo")
      );
    });

    it("should return Pink Flamingo when the number is a multiple of three and five", () => {
      const numbers = [3, 5];

      numbers.forEach(number =>
        expect(pinkFlamingo(number)).toEqual("Pink Flamingo")
      );
    });
  });

  describe("not a Fibonacci number", () => {
    it("should return the number when the number is not a multiple of three or five", () => {
      const numbers = [4, 7, 98];

      numbers.forEach(number => expect(pinkFlamingo(number)).toEqual(number));
    });

    it("should return Fizz when the number is a multiple of three and not five", () => {
      const numbers = [6, 9, 12, 18, 99];

      numbers.forEach(number => expect(pinkFlamingo(number)).toEqual("Fizz"));
    });

    it("should return Buzz when the number is a multiple of five and not three", () => {
      const numbers = [10, 20, 25, 35, 100];

      numbers.forEach(number => expect(pinkFlamingo(number)).toEqual("Buzz"));
    });

    it("should return FizzBuzz when the number is a multiple of three and five", () => {
      const numbers = [15, 30, 45, 60, 75, 90];

      numbers.forEach(number =>
        expect(pinkFlamingo(number)).toEqual("FizzBuzz")
      );
    });
  });
});
