const request = require("request")
const qs = require("querystring")

const credentials = require("./secrets")
const clientId = credentials.clientId
const clientSecret = credentials.clientSecret

const app = require("./middleware")
const PORT = 4390

const handleTodayILearned = require("./command_handlers/til")

app.listen(PORT, function() {
    console.log("Example app listening on port " + PORT)
})

app.get("/", function(req, res) {
    res.send("Ngrok is working! Path Hit! " + req.url)
})

app.post("/command/til", handleTodayILearned)

app.post("/command", (_, res) => {
    request(
        {
            url: "https://jsonplaceholder.typicode.com/todos/3",
            method: "GET",
        },
        (err, _, body) => {
            err ? console.log(err) : res.send(body)
        },
    )
})
