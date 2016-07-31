var Path = require('path');

function Globals() {
}
;
//DB configurations
Globals.prototype.MongoPort = 27017;
Globals.prototype.MongoHost = '127.0.0.1';
Globals.prototype.MongoDB = 'test1';

//RabbitMQ configuration
Globals.prototype.RabbitMQConfig = {
    host: '127.0.0.1',
    port: 5672,
    auth: {
        user: 'admin',
        pass: 'bz@123'
    }
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
Globals.prototype.MySqlDB = "BDB";
Globals.prototype.MySqlUser = "root";
Globals.prototype.MySqlHost = '127.0.0.1';
Globals.prototype.MySqlPass = "password";

//Redis DB configurations
Globals.prototype.RedisPort = 6379;
Globals.prototype.RedisHost = '127.0.0.1';

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
Globals.prototype.adminMail = "xxxx@gmail.com";

module.exports = new Globals();
