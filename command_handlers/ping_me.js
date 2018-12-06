const request = require("request")
const SlackBot = require("slackbots")
const {slackTokens} = require("../secrets")

function pingMe(req, res) {

    const bot = new SlackBot({
        token: slackTokens.botToken,
        name: "ngrok"
    })

    bot.on("start", () => {
        const params = {
            icon_emoji: ":monkey:"
        }

        bot.postMessageToChannel("DDNB034SY", "Hello Y'all", params)
    })

    bot.on("error", (err) => console.log(err))

    bot.on("message", (data) => {
        if(data.type !== "message") {
            return
        }
        console.log(data)
        console.log("suuuuupkid")
        handleMessage(data.text)
    })

    //respond to data
    function handleMessage(message) {
        if (message.includes("yo")) {
            console.log("handleMsg")
            produceMessage()
        }
    }

    function produceMessage() {
        const params = {
            icon_emoji: ":monkey:",
            attachments: [
                {
                    "text": "How do you feel about today?",
                    "actions": [
                        {
                            "name": "rating",
                            "text": "Good",
                            "type": "button",
                            "value": "good",
                            "confirm": {
                                "title": "Are you sure?",
                                "text": "Really, this is development?",
                                "ok_text": "Yes",
                                "dismiss_text": "No"
                            }
                        },
                        {
                            "name": "rating",
                            "text": "Bad",
                            "type": "button",
                            "value": "bad",
                            "confirm": {
                                "title": "Are you sure?",
                                "text": "Why bad?",
                                "ok_text": "Yes",
                                "dismiss_text": "No"
                            }
                        },
                        {
                            "name": "rating",
                            "text": "Ugly",
                            "type": "button",
                            "value": "ugly",
                            "confirm": {
                                "title": "Are you sure?",
                                "text": "What are you unsure?",
                                "ok_text": "Yes",
                                "dismiss_text": "No"
                            }
                        }
                    ]
                }
            ]
        }

        console.log("chheeeee")

        const func = () => (
            bot.postMessageToChannel("lab", "Good morning", params)
        )

        const timer = setTimeout(func, 4000)
    }

    res.json({
        text: "Ping after time",
        attachments: [
            {
                text: `How are you feeling today`,
            },
        ],
    })
}

module.exports = pingMe





