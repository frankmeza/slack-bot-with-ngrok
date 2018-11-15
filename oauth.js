// This route handles get request to a /oauth endpoint. We"ll use this endpoint for handling the logic of the Slack oAuth process behind our app.
// app.get("/oauth", function(req, res) {
//     // When a user authorizes an app, a code query parameter is passed on the oAuth endpoint. If that code is not there, we respond with an error message
//     if (!req.query.code) {
//         res.status(500)
//         res.send({ Error: "Looks like we're not getting code." })
//         console.log("Looks like we're not getting code.")
//     } else {
//         // If it's there...

//         // We"ll do a GET call to Slack"s `oauth.access` endpoint, passing our app"s client ID, client secret, and the code we just got as query parameters.
//         request(
//             {
//                 url: "https://slack.com/api/oauth.access", //URL to hit
//                 qs: {
//                     code: req.query.code,
//                     client_id: clientId,
//                     client_secret: clientSecret,
//                 }, //Query string data
//                 method: "GET", //Specify the method
//             },
//             function(error, response, body) {
//                 if (error) {
//                     console.log(error)
//                 } else {
//                     res.json(body)
//                 }
//             },
//         )
//     }
// })
