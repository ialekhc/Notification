class RecipientValidator {

    validate(message, recipients) {

        if (!Array.isArray(recipients) || recipients.length === 0) {
            throw new Error("Recipients list is required");
        }

    }

}

module.exports = RecipientValidator;