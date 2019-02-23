function isPerfectSquare(number) {
  return number % Math.sqrt(number) === 0;
}

function isFibonacci(number) {
  return (
    isPerfectSquare(5 * number * number + 4) ||
    isPerfectSquare(5 * number * number - 4)
  );
}

export default isFibonacci;
