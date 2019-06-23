class ApplicationException extends Error {
  constructor(error, statusCode, errorCode, isOperational = false) {
    super(error);
    Error.captureStackTrace(this, this.constructor);
    this.message = error.message || 'Internal Server Error';
    this.details = error.errors || [];
    this.statusCode = statusCode || 500;
    this.errorCode = errorCode || 0;
    this.isOperational = isOperational;
    this.stack = this.stack;
  }
}

module.exports = ApplicationException;
