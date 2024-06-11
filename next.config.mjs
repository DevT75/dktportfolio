/** @type {import('next').NextConfig} */
import withTM from 'next-transpile-modules';

const transpileModules = withTM(['gsap', '@studio-freight/lenis']);

const nextConfig = transpileModules({
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.resolve.extensions.push('.ts', '.tsx');

    // Add ts-loader for TypeScript files
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      ],
      exclude: /node_modules/,
    });

    return config;
  },
});

export default nextConfig;