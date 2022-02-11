require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const sendingPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Coding is such an interesting profession",
    from: sendingPhoneNumber,
    to: "+254740700076",
  })
  .then((message) => console.log(message.sid));
