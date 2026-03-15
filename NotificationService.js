class NotificationService {

    constructor(channel, validators, formatter, logger) {
        this.channel = channel;
        this.validators = validators;
        this.formatter = formatter;
        this.logger = logger;
    }

    sendNotification(message, recipients) {

        // Run validations
        this.validators.forEach(validator => {
            validator.validate(message, recipients);
        });

        // Format message
        const formattedMessage = this.formatter.format(message);

        // Send notification
        this.channel.send(formattedMessage, recipients);

        // Log result
        this.logger.log("Notification sent successfully");
    }
}

module.exports = NotificationService;