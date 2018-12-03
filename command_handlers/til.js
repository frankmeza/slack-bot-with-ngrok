const firebase = require("firebase")
const config = require("../secrets").config
firebase.initializeApp(config)

const database = firebase.database()
const getLearnedItems = {}


const gotData = (data) => {
    const entries = data.val()
    const keys = Object.keys(entries)
    const keysLength = keys.length
    const tilText = Object.keys(entries).map(key => entries[key].text).join(", ")

    getLearnedItems.text = tilText
    getLearnedItems.numberOfItems = keysLength
    return getLearnedItems
}

const errData = (err) => {
    console.log("Error!")
    console.log(err)
}

async function firebaseCall(bod) {
    const tilRef = database.ref(`users/${bod.user_id}/til/11_15_2018`)
    const returned = await tilRef.on("value", gotData, errData)
    return returned


}

async function handleTodayILearned(req, res) {
    const { body } = req

    const firebase = await firebaseCall(body)
    console.log(firebase)
    res.json({
        text: "Awesome! Your TIL has been recorded",
        attachments: [
            {
                text: `Today you learned ${getLearnedItems.numberOfItems} things.\n Here's what you learned: ${getLearnedItems.text}`
            },
        ],
    })
}


module.exports = handleTodayILearned




 // const now = new Date()
    // const month = now.getMonth() + 1
    // const dateMonth = now.getDate()
    // const year = now.getFullYear()

    // const date = `${month}_${dateMonth}_${year}`

    // database
    //     .ref(`users/${body.user_id}/til/${date}`)
    //     .push()
    //     .update({ text: body.text, ts: Date.now() })
