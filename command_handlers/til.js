const handleTodayILearned = (req, res) => {
    const { body } = req
    console.log(body)

    res.json({
        text: "It's 40 degrees right now.",
        attachments: [
            {
                text: "Partly cloudy today and tomorrow",
            },
        ],
    })
}

module.exports = handleTodayILearned