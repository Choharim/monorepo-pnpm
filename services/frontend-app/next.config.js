/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@monorepo/shared-components",
]);

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withTM(nextConfig);
