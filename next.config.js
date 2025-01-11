import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';

/** @type {import('next-i18next').UserConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new CopyWebpackPlugin({
          patterns: [
            {
              from: path.resolve(process.cwd(), 'src/assets/3d/models'),
              to: path.resolve(process.cwd(), 'public/models'),
            },
          ],
        }),
      );
    }

    return config;
  },
};

export default nextConfig;
