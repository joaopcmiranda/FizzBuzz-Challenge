module.exports = function (input) {
    if (input == null || isNaN(input) || input < 0) {
        return null
    }

    let output = ""

    if (input % 3 === 0) {
        output += "Fizz"
    }

    if (input % 5 === 0) {
        output += "Buzz"
    }

    if (output.length > 0) {
        return output
    } else {
        return input.toString()
    }
}
