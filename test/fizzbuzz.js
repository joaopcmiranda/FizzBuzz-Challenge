const expect = require("chai").expect;
const fizzbuzz = require("../app/fizzbuzz");

suite("Fizz Buzz", () => {
    test("return should contain Fizz when multiple of 3", () => {
        expect(fizzbuzz(0)).to.contain("Fizz")
        expect(fizzbuzz(3)).to.contain("Fizz")
        expect(fizzbuzz(6)).to.contain("Fizz")
        expect(fizzbuzz(60)).to.contain("Fizz")
        expect(fizzbuzz(123)).to.contain("Fizz")
    })

    test("return should not contain Fizz when not multiple of 3", () => {
        expect(fizzbuzz(5)).to.not.contain("Fizz")
        expect(fizzbuzz(50)).to.not.contain("Fizz")
        expect(fizzbuzz(133)).to.not.contain("Fizz")
    })

    test("return should contain Buzz when multiple of 5", () => {
        expect(fizzbuzz(0)).to.contain("Buzz")
        expect(fizzbuzz(5)).to.contain("Buzz")
        expect(fizzbuzz(10)).to.contain("Buzz")
        expect(fizzbuzz(100)).to.contain("Buzz")
        expect(fizzbuzz(1555)).to.contain("Buzz")
    })

    test("return should not contain Buzz when not multiple of 5", () => {
        expect(fizzbuzz(3)).to.not.contain("Buzz")
        expect(fizzbuzz(32)).to.not.contain("Buzz")
        expect(fizzbuzz(133)).to.not.contain("Buzz")
    })

    test("return should contain FizzBuzz only when multiple of 3 and 5", () => {
        expect(fizzbuzz(0)).to.equal("FizzBuzz")
        expect(fizzbuzz(3)).to.equal("Fizz")
        expect(fizzbuzz(5)).to.equal("Buzz")
        expect(fizzbuzz(15)).to.equal("FizzBuzz")
        expect(fizzbuzz(3315)).to.equal("FizzBuzz")
        expect(fizzbuzz(133)).to.not.equal("FizzBuzz")
    })

    test("if not a positive number should return null", () => {
        expect(fizzbuzz(null)).to.equal(null)
        expect(fizzbuzz(undefined)).to.equal(null)
        expect(fizzbuzz("ame")).to.equal(null)
        expect(fizzbuzz({rep: "pe"})).to.equal(null)
        expect(fizzbuzz({value: 2})).to.equal(null)
        expect(fizzbuzz(-3)).to.equal(null)
    })

})
