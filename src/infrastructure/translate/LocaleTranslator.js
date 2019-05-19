class LocaleTranslator {
  constructor({ providerTranslator }) {
    this.providerTranslator = providerTranslator;
  }
  getLocales() {
    return this.providerTranslator.getLocales();
  }
  setLocale(locale) {
    if (this.getLocales().indexOf(locale) !== -1) {
      this.providerTranslator.setLocale(locale);
    }
  }
  translate(string, args = undefined) {
    return this.providerTranslator.__(string, args);
  }
  translatePlurals(phrase, count) {
    return this.providerTranslator.__n(phrase, count);
  }
}
module.exports = LocaleTranslator;
