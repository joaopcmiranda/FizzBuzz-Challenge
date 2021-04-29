const app = require("express")()
const fb = require("./fizzbuzz")

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.get("/fizzbuzz/single", (req, res) => {
    res.send(`<p>${fb(req.query.input)}</p>`)
})

app.get("/fizzbuzz/range", (req, res) => {
    const {min, max} = req.query

    const range = Array.from(
        {length: (max - min) + 1},
        (x, i) => {
            return i + Number(min)
        }
    )

    console.log(range)

    let output = "<ul>"

    output += range.map((input) => {
        return `<li>${fb(input)}</li>`
    }).join("")

    output += "</ul>"

    res.send(output)
})

app.listen(8080)
