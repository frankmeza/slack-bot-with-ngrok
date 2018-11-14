# Slack bot

https://api.slack.com/apps/AE2A4GFNV/incoming-webhooks?success=1

Web hook url : https://hooks.slack.com/services/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

Sample curl request
curl -X POST -H 'Content-type: application/json' --data '{"text":"Hello, World!"}' https://hooks.slack.com/services/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

## an introduction to messages

https://api.slack.com/docs/messages

## message formatting

https://api.slack.com/docs/message-formatting

## message buttons

- A quick way to get a read on your mood (ex, at a certain time of day, for instance)
- Maybe like 3 or 4 buttons for this

https://api.slack.com/docs/message-buttons

## interactive messages

- Bingo!

https://api.slack.com/interactive-messages

Download grok to develop locally

Auth token
./ngrok authtoken 5NB5vS1DLt5NJH2dXm7tk_4minZ736XDtwFgGFnytMJ

More info how here: https://api.slack.com/tutorials/tunneling-with-ngrok

When creating a new slack app, go to oath and permissions, and add ngrok url like http://9ecbed19.ngrok.io, to redirect urls
