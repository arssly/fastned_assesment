module.exports = {
  root: true,
  plugins: ["prettier"], // tell eslint to use prettier plugin
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "prettier",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },
  rules: {
    "prettier/prettier": "error",
    "import/extensions": 0,
    "import/prefer-default-export": 0,
  }, // our own set of customized rules
  ignorePatterns: ["node_modules/"],
};
