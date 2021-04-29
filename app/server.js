const app = require("express")()
const fb = require("./fizzbuzz")

app.get("fizzbuzz/single", ({query}, {send}) => {
    send(`<p>${fb(query.input)}</p>`)
})

app.get("fizzbuzz/range", ({query}, {send}) => {
    const range = Array.from({length: (query.max - query.min) + 1}, (x, i) => i)

    let output = "<ul>"

    output += range.map((input) => {
        return `<li>${fb(input)}</li>`
    }).join()

    output += "</ul>"

    send(output)
})
