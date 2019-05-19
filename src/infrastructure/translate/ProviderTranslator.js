const i18n = require('i18n');
const path = require('path');

i18n.configure({
  locales: ['en', 'el'],
  defaultLocale: 'en',
  queryParameter: 'lang',
  directory: path.join(__dirname, '..', 'translate', 'locales')
});

module.exports = i18n;
