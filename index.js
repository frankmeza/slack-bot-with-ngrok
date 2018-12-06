const request = require("request")
const qs = require("querystring")
const app = require("./middleware")
const PORT = 4390
const firebase = require("firebase")
const config = require("./secrets").config
firebase.initializeApp(config)

const h = require("./command_handlers") // handlers

app.listen(PORT, function() {
    console.log("Example app listening on port " + PORT)
})

app.get("/", function(req, res) {
    res.send("Ngrok is working! Path Hit! " + req.url)
})

app.post("/command/til", h.handleTodayILearned)

app.post("/command/pingMe", h.pingMe)

app.post("/command/dev", h.handleDev)

app.post("/command/report", h.handleReport)

app.post("/command", (_, res) => {
    request(
        {
            url: "https://jsonplaceholder.typicode.com/todos/3",
            method: "GET",
        },
        (err, _, body) => {
            err ? console.log(err) : res.send(body)
        }
    )
})
