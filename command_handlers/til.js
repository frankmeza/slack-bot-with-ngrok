const firebase = require("firebase")
const config = require("../secrets").config
firebase.initializeApp(config)

const handleTodayILearned = (req, res) => {
    const { body } = req

    const database = firebase.database()
    const now = new Date()
    const date = `${now.getMonth() + 1}_${now.getDate()}_${now.getFullYear()}`

    database
        .ref("users/" + body.user_id + "/til/" + date)
        .push()
        .update({ text: body.text, ts: Date.now() })

    res.json({
        text: "Awesome! Your TIL has been recorded :white_check_mark:",
        attachments: [
            {
                text: body.text,
            },
        ],
    })
}

module.exports = handleTodayILearned
