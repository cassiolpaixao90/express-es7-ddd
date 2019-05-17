class LocaleMiddleware {
  constructor({ locale }) {
    this.locale = locale;
  }

  use(req, res, next) {
    const queryParameter = 'lang';

    const { query } = (req.url && decodeURI(req.url)) || '';
    if (query[queryParameter]) {
      const language = query[queryParameter].toLowerCase();
      this.locale.setLocale(language);
    }
    next();
  }
}

module.exports = LocaleMiddleware;
