
class ApplicationException extends Error {
    constructor(error, statusCode = 0, isOperational = false) {
        super(error);
        Error.captureStackTrace(this, this.constructor);
        this.message = error.message || (error || "InternalServerError");
        this.statusCode = statusCode || 500;
        this.isOperational = isOperational;
    }
}
module.exports = ApplicationException;