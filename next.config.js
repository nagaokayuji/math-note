module.exports = {
  distDir: "build",
  assetPrefix: process.env.GITHUB_PAGES ? "/math-note" : "",
  publicRuntimeConfig: {
    basePath: process.env.GITHUB_PAGES ? "/math-note" : "",
  },
};
