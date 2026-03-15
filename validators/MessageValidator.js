class MessageValidator {

    validate(message) {

        if (message === null || message === undefined) {
            throw new Error("Message is required");
        }

        if (message.length > 500) {
            throw new Error("Message exceeds maximum length of 500 characters");
        }
    }

}

module.exports = MessageValidator;