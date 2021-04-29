const expect = require("chai").expect;
const fizzbuzz = require("../app/fizzbuzz");
const {suite} = require('mocha');

suite("Fizz Buzz", () => {
    suite("Fizz", () => {
        expect(fizzbuzz(3)).to.equal("Fizz")
        expect(fizzbuzz(0)).to.equal("0")
        expect(fizzbuzz(5)).to.not.equal("Fizz")
        expect(fizzbuzz(0)).to.not.equal("Fizz")
        expect(fizzbuzz(6)).to.equal("Fizz")
        expect(fizzbuzz(123)).to.equal("Fizz")
        expect(fizzbuzz(null)).to.equal(null)
        expect(fizzbuzz(undefined)).to.equal(undefined)
    })

    suite("Buzz", () => {
        expect(fizzbuzz(5)).to.equal("Buzz")
        expect(fizzbuzz(1)).to.equal("1")
        expect(fizzbuzz(3)).to.not.equal("Buzz")
        expect(fizzbuzz(0)).to.not.equal("Buzz")
        expect(fizzbuzz(10)).to.equal("Buzz")
        expect(fizzbuzz(205)).to.equal("Buzz")
        expect(fizzbuzz(null)).to.equal(null)
        expect(fizzbuzz(undefined)).to.equal(undefined)
    })

    suite("FizzBuzz", () => {
        expect(fizzbuzz(60)).to.equal("FizzBuzz")
        expect(fizzbuzz(0)).to.equal("0")
        expect(fizzbuzz(5)).to.not.equal("FizzBuzz")
        expect(fizzbuzz(0)).to.not.equal("FizzBuzz")
        expect(fizzbuzz(120)).to.equal("FizzBuzz")
        expect(fizzbuzz(null)).to.equal(null)
        expect(fizzbuzz(undefined)).to.equal(undefined)
    })
})
