function fizzbuzz(number) {
  let result;

  if (number === 0) {
    result = 0;
  } else if (number % 15 === 0) {
    result = "FizzBuzz";
  } else if (number % 5 === 0) {
    result = "Buzz";
  } else if (number % 3 === 0) {
    result = "Fizz";
  } else {
    result = number;
  }

  return result;
}

export default fizzbuzz;
