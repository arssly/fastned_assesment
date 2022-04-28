module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:storybook/recommended"
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: './tsconfig.json'
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, {
      extensions: [".tsx", ".jsx", "ts", "js"]
    }],
    "import/no-extraneous-dependencies": 0
  },
  ignorePatterns: ["node_modules/"]
};