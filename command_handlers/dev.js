const firebase = require("firebase")
const database = firebase.database()
const SlackBot = require("slackbots")

function handleDev(req, res) {
    const { body } = req

    const now = new Date()
    const month = now.getMonth() + 1
    const dateMonth = now.getDate()
    const year = now.getFullYear()

    const date = `${month}_${dateMonth}_${year}`

    database
        .ref(`users/${body.user_id}/dev/${date}`)
        .push()
        .update({ text: body.text, ts: Date.now() })

    res.json({
        text: "Awesome! Your Dev Journal has been recorded",
        attachments: [
            {
                text: body.text
            }
        ],
    })
}


module.exports = handleDev





