const NotificationService = require("./NotificationService");

const EmailNotification = require("./channels/EmailNotification");
const SMSNotification = require("./channels/SMSNotification");

const MessageValidator = require("./validators/MessageValidator");
const RecipientValidator = require("./validators/RecipientValidator");

const SimpleFormatter = require("./formatter/SimpleFormatter");

const ConsoleLogger = require("./logger/ConsoleLogger");

// Choose notification channel
const channel = new EmailNotification(); 
// const channel = new SMSNotification();  // switch easily

const validators = [
    new MessageValidator(),
    new RecipientValidator()
];

const formatter = new SimpleFormatter();

const logger = new ConsoleLogger();

const notificationService = new NotificationService(
    channel,
    validators,
    formatter,
    logger
);

notificationService.sendNotification(
    "Hello User! This is a notification message.",
    ["user@example.com"]
);