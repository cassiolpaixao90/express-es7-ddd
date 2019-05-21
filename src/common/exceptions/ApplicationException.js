class ApplicationException extends Error {
  constructor(error, statusCode, isOperational = false) {
    super(error);
    Error.captureStackTrace(this, this.constructor);
    this.message = error.message || 'InternalServerError';
    this.details = error.errors;
    this.statusCode = statusCode || 500;
    this.isOperational = isOperational;
  }
}

module.exports = ApplicationException;
