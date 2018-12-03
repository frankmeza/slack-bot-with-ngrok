const firebase = require("firebase")
const config = require("../secrets").config
firebase.initializeApp(config)

const handleTodayILearned = (req, res) => {
    const { body } = req

    const database = firebase.database()

    const now = new Date()
    const month = now.getMonth() + 1
    const dateMonth = now.getDate()
    const year = now.getFullYear()

    const date = `${month}_${dateMonth}_${year}`

    // database
    //     .ref(`users/${body.user_id}/til/${date}`)
    //     .push()
    //     .update({ text: body.text, ts: Date.now() })

    // // query then return number of things learned today
    // // const numberofTIL = tilRef.once("value", function(snapshot) {
    // //     // return Object.keys(snapshot).length
    // //     return snapshot
    // // })

    const hello = {
    }

    const tilRef = database.ref(`users/${body.user_id}/til/11_15_2018`)


    const gotData = (data) => {
        const entries = data.val()
        console.log(entries)
        const keys = Object.keys(entries)
        console.log(keys)

        hello.yo = keys

    }

    const errData = (err) => {
        console.log("Error!")
        console.log(err)
    }


    tilRef.on("value", gotData, errData)

    res.json({
        text: "Awesome! Your TIL has been recorded",
        attachments: [
            {
                text: `Today you learned ${hello.yo.length} things`,
            },
        ],
    })
}

module.exports = handleTodayILearned
