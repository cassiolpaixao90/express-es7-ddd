const morgan  = require('morgan');

class LogMiddleware {

    constructor(logger, environments){
        this.logger = logger;
        this.environments = environments;
    }

    static use(req, res, next) {
        return morgan(this.environments.log.output, {
            stream: {
                write: message => {
                    this.logger.info(message);
                }
            }
        })(req, res, next);
    }
}

module.exports = LogMiddleware;
