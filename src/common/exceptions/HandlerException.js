class HandlerException {

    constructor({logger}){
        this.logger = logger;
    }

    async isTrustedError(error){
        await this.logger.error(error);
        return error && error.isOperational;
    };
}

module.exports = HandlerException;


