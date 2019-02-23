# FizzBuzz with a Pink Flamingo

Write a program that prints the numbers from 0 to 100. But for multiples of three print “Fizz” instead of the number and for multiples of five prints “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”. Then extend the program to say “Flamingo” when a number is a member of the Fibonacci sequence, and “Pink Flamingo” when it is a multiple of 3 and 5 and a member of the Fibonacci sequence. Hint: A number is Fibonacci if and only if one or both of (5*n2 + 4) or (5*n2 – 4) is a perfect square (i.e. A number made by squaring a whole number).

## Scripts

### Install dependencies
```
npm install
```

### Run tests
```
npm test
```

### Run program
```
npm start
```

### Run server

This will start the server on port 3000.

```
npm run server
```

## Server functionality

The server will return the program result on the route "/".

The server will return a specific number result on the route "/:number".

The server is a basic implementation and does not include error handling, reporting, monitoring or logging.
