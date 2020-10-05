// babel.config.js
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
        targets: {
          node: "current",
        },
      },
    ],
  ],
  env: {
    test: {
      presets: [["@babel/preset-env"]],
    },
  },
};
