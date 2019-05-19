class LocaleMiddleware {

  use() {
    return async function (req, res, next) {
      const { localeTranslator } = req.container.cradle;
      const queryParameter = 'lang';
      if (req.query[queryParameter]) {
        const language = req.query[queryParameter].toLowerCase();
        localeTranslator.setLocale(language);
      }
     return next();
    };
  }
}

module.exports = LocaleMiddleware;
