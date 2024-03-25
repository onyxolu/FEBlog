const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  unstable_flexsearch: true,
  unstable_staticImage: true,
});

module.exports = withNextra({
  // reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/frontend',
        permanent: true,
      },
    ]
  },
});
