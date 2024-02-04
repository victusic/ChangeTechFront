const Cookies = require('js-cookie');

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: Cookies.get('change-tech language') || 'en',
    locales: ['en', 'ru', 'kz'],
  },
};
