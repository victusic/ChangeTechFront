const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  i18n,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new CopyWebpackPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, 'src/assets/3d/models'),
              to: path.resolve(__dirname, 'public/models'),
            },
          ],
        }),
      );
    }

    return config;
  },
};
