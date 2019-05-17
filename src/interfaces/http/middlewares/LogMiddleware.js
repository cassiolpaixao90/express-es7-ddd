const morgan  = require('morgan');

class LogMiddleware {

    constructor({logger, environment}){
        this.logger = logger;
        this.environment = environment;
    }

     use(req, res, next) {
        return morgan(this.environment.log.output, {
            stream: {
                write: message => {
                    this.logger.info(message);
                }
            }
        })(req, res, next);
    }
}

module.exports = LogMiddleware;
