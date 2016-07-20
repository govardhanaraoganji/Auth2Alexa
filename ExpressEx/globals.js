var Path = require('path');

function Globals() {
}
;
Globals.prototype.MailerAuthenticationSubject = "Blaze B.One - Registration Successful";
Globals.prototype.MailerInviteGuestSubject = "Blaze B.One - Invitation to collaborate";
Globals.prototype.MailerForgotPasswordSubject = "Blaze B.One - Forgot password reset";
Globals.prototype.MailerReportSubject = "Blaze B.One - Registered Report";
//DB configurations
Globals.prototype.MongoPort = 27017;
//Current production server
//Globals.prototype.MongoHost = '172.31.13.247';
//Globals.prototype.MongoDB = 'blazedb';
//        Old production server
Globals.prototype.MongoHost = '172.31.12.148';
Globals.prototype.MongoDB = 'test1';

//RabbitMQ configuration
Globals.prototype.RabbitMQConfig = {
    host: '127.0.0.1',
    port: 5672,
    auth: {
//        Current production server
//        user: 'blaze',
//        pass: 'blaze@123'
//        Old production server
        user: 'admin',
        pass: 'bz@123'
    },
    ExchangeName: "TestMessageExchange",
    QueueName: "TestMessageQueue",
    PushNotificationExchangeName: "PushNotificationTestMessageExchange",
    PushNotificationQueueName: "PushNotificationQueue",
    EventExchangeName: "TestEventMessageExchange",
    EventQueueName: "TestEventQueue"
};

// Template configuration
// ==============================================
Globals.prototype.template = {
    forgotPassword: 'forgotPassword.jade',
    registration: 'registration.jade',
    invitation: 'invitation.jade',
    resolved: 'resolved.jade',
    created: 'created.jade'
};

//Mysql DB configurations
Globals.prototype.MySqlPort = 3306;
Globals.prototype.MySqlDB = "BlazeDB";
Globals.prototype.MySqlUser = "root";
//Current production server
//Globals.prototype.MySqlHost = '172.31.13.247';
//Globals.prototype.MySqlPass = "bl@z3";
//        Old production server
Globals.prototype.MySqlHost = '172.31.12.148';
Globals.prototype.MySqlPass = "bst@g3";

//Redis DB configurations
Globals.prototype.RedisPort = 6379;
//Current production server
//Globals.prototype.RedisHost = '172.31.13.247';
//        Old production server
Globals.prototype.RedisHost = '172.31.12.148';

// Mail images
Globals.prototype.MailLogo = "/images/mail_logo.png";
Globals.prototype.appRoot = Path.resolve(__dirname);
Globals.prototype.maxContacts = 8;
Globals.prototype.maxBOneIdChars = 4;

Globals.prototype.LoggerConfig = {
    appenders: [
        {type: 'console'},
        {
            "type": "file",
            "filename": Globals.prototype.appRoot + "/logs/log_file.log",
            "maxLogSize": 10485760,
            "backups": 100,
            "category": "relative-logger"
        }
    ]
};
// Globals.prototype.adminMail = "sridhar@blazeautomation.com";
Globals.prototype.adminMail = "vivek@blazeautomation.com";

module.exports = new Globals();
