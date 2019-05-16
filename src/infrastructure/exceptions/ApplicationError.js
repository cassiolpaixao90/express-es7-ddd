import HttpStatus from "../../interfaces/http/errors";

class ApplicationError extends Error {
    constructor(error, statusCode = 0, isOperational = false) {
        super(error);
        Error.captureStackTrace(this, this.constructor);
        this.message = error.message || (error || HttpStatus.INTERNAL_SERVER_ERROR);
        this.statusCode = statusCode || HttpStatus[500];
        this.isOperational = isOperational;
    }
}
module.exports = ApplicationError;