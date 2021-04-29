FizzBuzz Challenge

The following is a common programming test called FizzBuzz:
"Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz”
instead of the number and for the multiples of five print “Buzz”. For numbers which are
multiples of both three and five print “FizzBuzz”."

INSTRUCTIONS
1. Write a solution to FizzBuzz using Test Driven Development (TDD)
2. Watch this video https://vimeo.com/43734265 to understand the concepts of TDD
3. Develop your FizzBuzz solution - however document and demonstrate your TDD
   approach to writing the code
4. Submit your code in the appropriate language of choice in a file (or zip if need be)

# Development

## Running

### Run the server 

```shell
npm start
```

### Access the app

#### Single number on the FizzBuzz program

i.e. 
- 3 -> Fizz 
- 15 -> FizzBuzz
- 2 -> 2

http://localhost:8080/fizzbuzz/range?input=NUMBER

parameter input -> number to be transformed

#### Print all numbers in a range on the FizzBuzz program

http://localhost:8080/fizzbuzz/range?min=12&max=30

parameters:
- min -> minimum value (inclusive) - default: 0
- max -> maximum value (inclusive) - default: 100

## Structure

```
/app
 |- server.js
 |- fizzbuzz.js
/test
 |- server.js
 |- fizzbuzz.js
```

## Repository

https://github.com/joaopcmiranda/FizzBuzz-Challenge

On the Git repository there is the trail of the development process:

Development started by creating tests for the function that transforms the number into the FizzBuzz;

Then, it was implemented;

Next, text cases for the server providing the UI;

Finally, implemented the Server and the UI.
