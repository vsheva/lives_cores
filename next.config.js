const withTM = require("next-transpile-modules")([
  "@mui/material",
  "@mui/system",
]); // pass the modules you would like to see transpiled

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@mui/styled-engine": "@mui/styled-engine-sc",
    };
    return config;
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = withTM(nextConfig);
