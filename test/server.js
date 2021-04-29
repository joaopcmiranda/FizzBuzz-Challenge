// test/server.js

const expect = require("chai").expect;
const request = require("request");

suite("Server test", () => {

    const baseURL = 'http://localhost:8080/fizzbuzz'

    suite("Single Value", () => {

        function urlGeneratorSingle(single) {
            return `${baseURL}/single?input=${single}`
        }

        const url = urlGeneratorSingle(15)

        test("returns status 200", (done) => {
            request(url, (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        test("returns the correct value 15 -> FizzBuzz", (done) => {
            request(url, (error, response, body) => {
                expect(body).to.equal("<p>FizzBuzz</p>");
                done();
            });
        });
    })

    suite("Range", () => {

        function urlGeneratorRange(min, max) {
            return `${baseURL}/range?min=${min}&max=${max}`
        }

        const url = urlGeneratorRange(5, 15)

        test("returns status 200", (done) => {
            request(url, (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        test("returns the correct range", (done) => {
            request(url, (error, response, body) => {
                expect(body).to.equal("<ul>" +
                    "<li>Buzz</li>" +
                    "<li>Fizz</li>" +
                    "<li>7</li>" +
                    "<li>8</li>" +
                    "<li>Fizz</li>" +
                    "<li>Buzz</li>" +
                    "<li>11</li>" +
                    "<li>Fizz</li>" +
                    "<li>13</li>" +
                    "<li>14</li>" +
                    "<li>FizzBuzz</li>" +
                    "</ul>");
                done();
            });
        });
    })
});
