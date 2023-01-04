module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    "plugin:solid/typescript"
  ],
  plugins: ["solid"],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts'],
  rules: {
    "import/extensions": ["off"],
    "indent": ["error", 2]
  },
};
