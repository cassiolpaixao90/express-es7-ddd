const i18n = require('i18n');
const path = require('path');

i18n.configure({
  locales: ['en', 'el'],
  defaultLocale: 'en',
  queryParameter: 'lang',
  directory: path.join('./', 'locales'),
  logDebugFn: msg => {
    console.log('debug', msg);
  },

  logWarnFn: msg => {
    console.log('warn', msg);
  },

  logErrorFn: msg => {
    console.log('error', msg);
  }
});

module.exports = i18n;
