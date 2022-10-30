module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parserOptions: {
    project: 'tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js', 'tsconfig.json'],
};
