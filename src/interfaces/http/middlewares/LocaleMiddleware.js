class LocaleMiddleware {


  use() {
    return async function (req, res, next) {
      const { localeCase } = req.container.cradle;
      const queryParameter = 'lang';
      if (req.query[queryParameter]) {
        const language = req.query[queryParameter].toLowerCase();
        localeCase.setLocale(language);
      }
     return next();
    };
  }
}

module.exports = LocaleMiddleware;
