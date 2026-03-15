class SMSNotification {

    send(message, recipients) {
        console.log("Sending SMS Notification");
        console.log("Message:", message);
        console.log("Recipients:", recipients);
    }

}

module.exports = SMSNotification;

// class SlackNotification {
//     send(message, recipients) {
//         console.log("Sending Slack Message:", message);
//     }
// }