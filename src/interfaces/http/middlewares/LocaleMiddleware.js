class LocaleMiddleware {

  use() {
    return async function (req, res, next) {
      const { localeI18n } = req.container.cradle;
      const queryParameter = 'lang';
      if (req.query[queryParameter]) {
        const language = req.query[queryParameter].toLowerCase();
        localeI18n.setLocale(language);
      }
     return next();
    };
  }
}

module.exports = LocaleMiddleware;
