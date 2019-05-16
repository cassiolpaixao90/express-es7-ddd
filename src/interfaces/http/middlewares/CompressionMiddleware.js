const compression = require('compression');

class CompressionMiddleware {
    static use(req, res, next){
        return compression()(req, res, next);
    }
}

module.exports = CompressionMiddleware;
