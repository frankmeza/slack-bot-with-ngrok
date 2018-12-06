const firebase = require("firebase")
const database = firebase.database()
const getLearnedItems = {}

const gotData = (data) => {
    const keys = Object.keys(data)
    const tilText = Object.keys(data).map(key => `- ${data[key].text}`).join("\n ")

    getLearnedItems.text = tilText
    getLearnedItems.numberOfItems = keys.length
    return getLearnedItems
}

async function firebaseCall(bod, date) {
    const tilRef = database.ref(`users/${bod.user_id}/dev/${date}`)
    const returnPromised = await tilRef.once("value")
    const dataValues = gotData(returnPromised.val())
    return dataValues
}

async function handleReport(req, res) {
    const { body } = req

    const now = new Date()
    const month = now.getMonth() + 1
    const dateMonth = now.getDate()
    const year = now.getFullYear()

    const date = `${month}_${dateMonth}_${year}`

    await firebaseCall(body, date)

    res.json({
        text: "Here's your daily journal",
        attachments: [
            {
                text: getLearnedItems.text
            }
        ],
    })
}


module.exports = handleReport