class LocaleService {
  constructor({ i18nProvider }) {
    this.i18nProvider = i18nProvider;
  }
  getLocales() {
    return this.i18nProvider.getLocales();
  }
  setLocale(locale) {
    if (this.getLocales().indexOf(locale) !== -1) {
      this.i18nProvider.setLocale(locale);
    }
  }
  translate(string, args = undefined) {
    return this.i18nProvider.__(string, args);
  }
  translatePlurals(phrase, count) {
    return this.i18nProvider.__n(phrase, count);
  }
}
module.exports = LocaleService;
