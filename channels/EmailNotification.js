class EmailNotification {

    send(message, recipients) {
        console.log("Sending Email Notification");
        console.log("Message:", message);
        console.log("Recipients:", recipients);
    }

}

module.exports = EmailNotification;