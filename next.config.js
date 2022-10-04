const withTM = require("next-transpile-modules")([
  "@mui/material",
  "@mui/system",
]); // pass the modules you would like to see transpiled

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = withTM(nextConfig);
