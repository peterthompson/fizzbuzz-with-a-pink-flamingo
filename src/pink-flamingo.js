import fizzbuzz from "./fizzbuzz";
import isFibonacci from "./fibonacci";

function pinkFlamingo(number) {
  let result = fizzbuzz(number);

  if (isFibonacci(number)) {
    result = result === "FizzBuzz" ? "Pink Flamingo" : "Flamingo";
  }

  return result;
}

export default pinkFlamingo;
