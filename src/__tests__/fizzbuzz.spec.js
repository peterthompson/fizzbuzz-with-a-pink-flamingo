import fizzbuzz from "../fizzbuzz";

describe("fizzbuzz", () => {
  it("should return the number when the number is not a multiple of three or five", () => {
    const numbers = [1, 2, 4, 7, 98];

    numbers.forEach(number => expect(fizzbuzz(number)).toEqual(number));
  });

  it("should return Fizz when the number is a multiple of three and not five", () => {
    const numbers = [3, 6, 9, 12, 18, 99];

    numbers.forEach(number => expect(fizzbuzz(number)).toEqual("Fizz"));
  });

  it("should return Buzz when the number is a multiple of five and not three", () => {
    const numbers = [5, 10, 20, 25, 35, 100];

    numbers.forEach(number => expect(fizzbuzz(number)).toEqual("Buzz"));
  });

  it("should return FizzBuzz when the number is a multiple of three and five", () => {
    const numbers = [0, 15, 30, 45, 60, 75, 90];

    numbers.forEach(number => expect(fizzbuzz(number)).toEqual("FizzBuzz"));
  });
});
