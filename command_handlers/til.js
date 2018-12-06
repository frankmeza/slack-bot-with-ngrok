const firebase = require("firebase")
const database = firebase.database()
const getLearnedItems = {}

const singularPluralItems = (numberOfItems) => numberOfItems > 1
    ? "things"
    : "thing"

const gotData = (data) => {
    const keys = Object.keys(data)
    const tilText = Object.keys(data).map(key => data[key].text).join(", ")

    getLearnedItems.text = tilText
    getLearnedItems.numberOfItems = keys.length
    return getLearnedItems
}

async function firebaseCall(bod, date) {
    const tilRef = database.ref(`users/${bod.user_id}/til/${date}`)
    const returnPromised = await tilRef.once("value")
    const dataValues = gotData(returnPromised.val())
    return dataValues
}

async function handleTodayILearned(req, res) {
    const { body } = req

    const now = new Date()
    const month = now.getMonth() + 1
    const dateMonth = now.getDate()
    const year = now.getFullYear()

    const date = `${month}_${dateMonth}_${year}`

    database
        .ref(`users/${body.user_id}/til/${date}`)
        .push()
        .update({ text: body.text, ts: Date.now() })

    await firebaseCall(body, date)

    res.json({
        text: "Awesome! Your TIL has been recorded",
        attachments: [
            {
                text: `Today you learned ${getLearnedItems.numberOfItems} ${singularPluralItems(getLearnedItems.numberOfItems)}. \n Here's what you learned: ${getLearnedItems.text}`
            },
        ],
    })
}


module.exports = handleTodayILearned





