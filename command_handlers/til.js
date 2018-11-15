const firebase = require("firebase")
const config = require("../secrets").config
firebase.initializeApp(config)

const handleTodayILearned = (req, res) => {
    const { body } = req

    const database = firebase.database()
    database.ref("users/").set({
        body,
    })

    res.json({
        text: "Awesome! Your TIL has been recorded :white_check_mark:",
        attachments: [
            {
                text:
                    "Visit your dev journal at URL to see this and other reflections",
            },
        ],
    })
}

module.exports = handleTodayILearned
