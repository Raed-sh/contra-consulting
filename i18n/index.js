const en = require('./translations.en.json')
const ar = require('./translations.ar.json')

const i18n = {
  translations: {
    en: en,
    ar: ar,
  },
  defaultLang: 'en',
  useBrowserDefault: true,
  // optional property, will default to "query" if not set
  languageDataStore: 'localStorage',
}

module.exports = i18n
